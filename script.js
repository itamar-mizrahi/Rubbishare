// Define constants and variables
const apiUrl = 'http://localhost:3000/plasticMaterials';
const materialsList = document.getElementById('materialsList');
const addMaterialForm = document.getElementById('addMaterialForm');

// Define functions
function displayMaterials(materials) {
  materialsList.innerHTML = '';
  materials.forEach(material => {
    const li = document.createElement('li');
    li.innerText = `${material.type} - ${material.weight} kg - $${material.price} - Farmer ID: ${material.farmerId}`;
    materialsList.appendChild(li);
  });
}

function addMaterial(event) {
  event.preventDefault();
  const type = document.getElementById('type').value;
  const weight = parseFloat(document.getElementById('weight').value);
   const price = parseFloat(document.getElementById('price').value);
  const farmerId = parseInt(document.getElementById('farmerId').value);
  const newMaterial = { type, weight, price, farmerId };
  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newMaterial)
  })
  .then(response => response.json())
  .then(material => {
    addMaterialToList(material);
    addMaterialForm.reset();
  })
  .catch(error => console.error('Error adding material:', error));
}

function addMaterialToList(material) {
  const li = document.createElement('li');
  li.innerText = `${material.type} - ${material.weight} kg - $${material.price} - Farmer ID: ${material.farmerId}`;
  materialsList.appendChild(li);
}

// Fetch initial list of materials
fetch(apiUrl)
  .then(response => response.json())
  .then(materials => displayMaterials(materials))
  .catch(error => console.error('Error fetching materials:', error));

// Attach event listener to add material form
addMaterialForm.addEventListener('submit', addMaterial);

