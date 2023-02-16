// console.log('connected');

// for 1st card btn
document.getElementById('first-card').addEventListener('click', function(){
    // console.log("1st btn clicked");


    // get the data 

    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText; 
    const productQuantity = document.getElementById('first-quantity').innerText; 
    console.log(productName, productPrice, productQuantity);

    // calculating the price with quantity

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    // console.log( typeof priceTotal);

    // show the data
    displayData(productName, productPrice, productQuantity, priceTotal);

   
});

function displayData(productName, productPrice, productQuantity, priceTotal){

    console.log('called');
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td> `;

    container.appendChild(tr);
}