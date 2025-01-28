const express = require('express');
const { createInvoice, getInvoices, updateInvoice, deleteInvoice } = require('../controllers/invoiceController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createInvoice); // Protected route
router.get('/', protect, getInvoices); // Protected route
router.patch('/:id', protect, updateInvoice); // Protected route
router.delete('/:id', protect, deleteInvoice); // Protected route

module.exports = router;
