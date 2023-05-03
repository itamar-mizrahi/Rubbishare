// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://127.0.0.1:3002' }));


// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up database
const plasticMaterials = [];

// Define endpoints
app.get('/plasticMaterials', (req, res) => {
  // Return all plastic materials
  res.json(plasticMaterials);
});

app.post('/plasticMaterials', (req, res) => {
  // Create new plastic material and add to database
  const newMaterial = {
    id: plasticMaterials.length + 1,
    type: req.body.type,
    weight: req.body.weight,
    price: req.body.price,
    farmerId: req.body.farmerId
  };
  plasticMaterials.push(newMaterial);
  res.json(newMaterial);
});

app.put('/plasticMaterials/:id', (req, res) => {
  // Update plastic material by ID
  const id = parseInt(req.params.id);
  const materialIndex = plasticMaterials.findIndex(material => material.id === id);
  if (materialIndex === -1) {
    res.sendStatus(404);
  } else {
    plasticMaterials[materialIndex] = {
      id: id,
      type: req.body.type,
      weight: req.body.weight,
      price: req.body.price,
      farmerId: req.body.farmerId
    };
    res.json(plasticMaterials[materialIndex]);
  }
});

app.delete('/plasticMaterials/:id', (req, res) => {
  // Delete plastic material by ID
  const id = parseInt(req.params.id);
  const materialIndex = plasticMaterials.findIndex(material => material.id === id);
  if (materialIndex === -1) {
    res.sendStatus(404);
  } else {
    plasticMaterials.splice(materialIndex, 1);
    res.sendStatus(204);
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});