const Invoice = require('../models/Invoice');

// Create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const { customerName, items } = req.body;

    // Calculate total amount
    const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    const invoice = new Invoice({ customerName, items, totalAmount });
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create invoice' });
  }
};

// Get all invoices
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch invoices' });
  }
};

// Update invoice status
exports.updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const invoice = await Invoice.findByIdAndUpdate(id, { status }, { new: true });
    if (!invoice) return res.status(404).json({ error: 'Invoice not found' });

    res.status(200).json(invoice);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update invoice' });
  }
};

// Delete an invoice
exports.deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndDelete(id);
    if (!invoice) return res.status(404).json({ error: 'Invoice not found' });

    res.status(200).json({ message: 'Invoice deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete invoice' });
  }
};
