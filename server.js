const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows requests from the frontend
app.use(bodyParser.json()); // Parses incoming JSON requests

// Dummy database (for demonstration purposes)
const memberships = [];

// Routes
app.post("/api/memberships", async (req, res) => {
    try {
      const newMembership = new Membership(req.body);
      //await newMembership.save();
      res.status(201).json({ message: "Membership form submitted successfully!" });
      console.log('success machcha');
    } catch (error) {
      console.error("Error saving membership:", error);
      res.status(500).json({ error: "Failed to submit the form" });
      console.log('fail machcha');
    }
  });
  

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).send({ message: "Endpoint not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
