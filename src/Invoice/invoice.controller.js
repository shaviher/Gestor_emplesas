import Invoice from "../Invoice/invoice.model.js";
import Product from "../product/product.model.js";
import PDFDocument from "pdfkit";

// Crear factura
export const crearFactura = async (req, res) => {
  try {
    const { user } = req;  // El usuario debe estar autenticado
    const { items } = req.body;  // Lista de productos en el carrito

    // Verificar si el stock está disponible
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product || product.stock < item.quantity) {
        return res.status(400).json({ msg: "Stock insuficiente para uno o más productos." });
      }
    }

    // Crear la factura
    const invoice = new Invoice({
      user: user._id,
      items: items.map(item => ({
        product: item.product,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
      })),
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    });

    // Guardar la factura
    await invoice.save();

    // Actualizar el stock de los productos
    for (const item of items) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity },
      });
    }

    res.status(201).json({ msg: "Factura creada", invoice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al crear la factura" });
  }
};