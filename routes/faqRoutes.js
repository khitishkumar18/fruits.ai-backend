// app/routes/faqRoutes.js
const express = require('express');
const {
  getAllFAQs,
  getFAQById,
  createFAQ,
  updateFAQ,
  deleteFAQ
} = require('../controllers/faqController');
const { protect } = require('../middleware/authMiddleware'); // Protect routes for authentication

const router = express.Router();

// Public Routes
router.get('/', getAllFAQs); // GET /faqs - Fetch all FAQs
router.get('/:id', getFAQById); // GET /faqs/:id - Fetch a specific FAQ by ID

// Protected Routes (You need to be logged in to access these)
router.post('/',  createFAQ); // POST /faqs - Create a new FAQ
router.put('/:id', updateFAQ); // PUT /faqs/:id - Update an FAQ by ID
router.delete('/:id',  deleteFAQ); // DELETE /faqs/:id - Delete an FAQ by ID

module.exports = router;
