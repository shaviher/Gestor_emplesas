import Invoice from "../Invoice/invoice.model.js";
import Product from "../product/product.model.js";
import PDFDocument from "pdfkit";

export const crearFactura = async (req, res) => {
  try {
    const { user } = req
    const { items } = req.body

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product || product.stock < item.quantity) {
        return res.status(400).json({ msg: "Stock insuficiente para uno o más productos." });
      }
    }


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


    await invoice.save();

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