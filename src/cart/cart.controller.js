import Cart from '../cart/cart.model.js';
import Product from '../product/product.model.js';

// Agregar un producto al carrito
export const agregarAlCarrito = async (req, res) => {
  try {
    const { pid, quantity } = req.body;
    const userId = req.user._id;

    // Buscar si el carrito del usuario ya existe
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    // Buscar el producto
    const product = await Product.findById(pid);
    if (!product) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }

    // Verificar si el producto ya está en el carrito
    const itemInCart = cart.items.find(item => item.product.toString() === pid);
    if (itemInCart) {
      itemInCart.quantity += quantity;
    } else {
      cart.items.push({ product: pid, quantity });
    }

    // Recalcular el total del carrito
    cart.total = cart.items.reduce((acc, item) => acc + item.quantity * product.price, 0);

    await cart.save();
    res.status(200).json({ msg: 'Producto agregado al carrito', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

// Ver el carrito del usuario
export const verCarrito = async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
      if (!cart) {
        return res.status(404).json({ msg: 'Carrito vacío' });
      }
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error del servidor' });
    }
  };

  export const eliminarDelCarrito = async (req, res) => {
    try {
      const { user } = req;  // Asegúrate de tener el usuario en req.user (debe estar autenticado)
      const { productId } = req.body;  // Obtener el id del producto a eliminar desde el cuerpo de la solicitud
  
      // Encuentra el carrito del usuario
      const cart = await Cart.findOne({ user: user._id });
  
      if (!cart) {
        return res.status(404).json({ msg: "Carrito no encontrado" });
      }
  
      // Encuentra el índice del producto en el carrito
      const productIndex = cart.items.findIndex(item => item.product.toString() === productId);
  
      if (productIndex === -1) {
        return res.status(404).json({ msg: "Producto no encontrado en el carrito" });
      }
  
      // Eliminar el producto del carrito
      cart.items.splice(productIndex, 1);
  
      // Actualizar el total del carrito
      cart.total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
      // Guardar el carrito actualizado
      await cart.save();
  
      res.status(200).json({ msg: "Producto eliminado del carrito", cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error al eliminar el producto del carrito" });
    }
  };