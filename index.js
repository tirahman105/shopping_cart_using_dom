// console.log('connected');

// for 1st card btn


let serial = 0
document.getElementById('first-card').addEventListener('click', function(){
    // console.log("1st btn clicked");


        serial += 1;

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
    disabledBtn('first-card');

   
});



// for 2nd card using event object 

document.getElementById('second-card').addEventListener('click', function(e){

    serial += 1;
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;


    const sumTotal = parseInt(productPrice) + parseInt(productQuantity);

    displayData(productName, productPrice, productQuantity, sumTotal);
    console.log(sumTotal);

});




// for 3rd card 


document.getElementById('third-card').addEventListener('click', function(){
    // console.log("1st btn clicked");


        serial += 1;

    // get the data 

    const productName = document.getElementById('third-name').innerText;
    const productPrice = document.getElementById('third-price').innerText; 
    const productQuantity = document.getElementById('third-quantity').innerText; 
    console.log(productName, productPrice, productQuantity);

    // calculating the price with quantity

    const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

    // console.log( typeof priceTotal);

    // show the data
    displayData(productName, productPrice, productQuantity, priceTotal);

   
});

// fir last card  

document.getElementById('last-card').addEventListener('click', function(){

    serial += 1;
    const productName = document.getElementById('last-title').innerText;
    const productPrice = document.getElementById('price-input').value;
    const productQuantity = document.getElementById('quantity-input').value;

    if( productPrice === "" || productQuantity === "" || productPrice <= 0 || productQuantity <= 0){
        alert('Please enter any valid number');
    } else{
        const total = parseInt(productPrice) / parseInt(productQuantity);
    // console.log(productName, total);
    displayData(productName, productPrice, productQuantity, total);
    document.getElementById('price-input').value = '';
    document.getElementById('quantity-input').value = '';
    }

    

})









// common function to display data 

function displayData(productName, productPrice, productQuantity, priceTotal){

    console.log('called');
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td> `;

    container.appendChild(tr);
};

// disable btn 
function disabledBtn(id){
    document.getElementById(id).setAttribute("disabled", true);
};