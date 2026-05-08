
const products = [
    { name: "Mechanical Keyboard", price: "1000 Pesos", category: "Peripherals" },
    { name: "Gaming Mouse", price: "500 Pesos", category: "Peripherals" },
    { name: "Ultrawide Monitor", price: "20,000 Pesos", category: "Electronics" },
    { name: "Noise Cancelling Headphones", price: "200 Pesos", category: "Audio" },
    { name: "Ergonomic Office Chair", price: "1,500 Pesos", category: "Furniture" }
];


const tableBody = document.getElementById('productBody');
const methodSpan = document.getElementById('currentMethod');


document.getElementById('btnInnerHTML').addEventListener('click', () => {
    let htmlRows = '';
    
    products.forEach(item => {
        htmlRows += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.category}</td>
            </tr>`;
    });
    
    tableBody.innerHTML = htmlRows;
    methodSpan.innerText = "innerHTML";
    console.log("UI updated using innerHTML.");
});

document.getElementById('btnDirectDOM').addEventListener('click', () => {

    tableBody.innerHTML = '';

    products.forEach(item => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;

        const priceCell = document.createElement('td');
        priceCell.textContent = item.price;

        const catCell = document.createElement('td');
        catCell.textContent = item.category;

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(catCell);

        tableBody.appendChild(row);
    });
    
    methodSpan.innerText = "Direct DOM Methods";
    console.log("UI updated using Direct DOM methods.");
});