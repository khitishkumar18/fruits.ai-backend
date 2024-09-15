// app/controllers/faqController.js
const FAQ = require('../models/faqModel');

// Get all FAQs
exports.getAllFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Get a single FAQ by ID
exports.getFAQById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const faq = await FAQ.findById(id); // Find the FAQ by its ID
      if (!faq) {
        return res.status(404).json({ message: 'FAQ not found' });
      }
      res.json(faq); // Return the FAQ as JSON
    } catch (err) {
      res.status(500).json({ error: err.message }); // Handle errors
    }
  };
  
// Create a new FAQ
exports.createFAQ = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an FAQ
exports.updateFAQ = async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  try {
    const updatedFAQ = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true });
    res.json(updatedFAQ);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an FAQ
exports.deleteFAQ = async (req, res) => {
  const { id } = req.params;

  try {
    await FAQ.findByIdAndDelete(id);
    res.json({ message: 'FAQ deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
