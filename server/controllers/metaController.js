let currentQuestion = "Algne küsimus"; // Default
let isActive = true; // Default

const getStatus = (req, res) => {
  res.json({ isActive });
};

const getQuestion = (req, res) => {
  res.json({ question: currentQuestion });
};

// Optional: update endpoints for admin
const setQuestion = (req, res) => {
  const { question } = req.body;
  currentQuestion = question;
  res.json({ success: true, question: currentQuestion });
};

const setStatus = (req, res) => {
  const { active } = req.body;
  isActive = !!active;
  res.json({ success: true, isActive });
};

module.exports = { getStatus, getQuestion, setQuestion, setStatus };