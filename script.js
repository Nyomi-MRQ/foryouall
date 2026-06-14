const socks = [
{
name:"White Socks",
price:14,
image:"images/white-socks.png"
},
{
name:"Black Socks",
price:14,
image:"images/black-socks.png"
},
{
name:"Green Socks",
price:14,
image:"images/green-socks.png"
},
{
name:"Blue Socks",
price:14,
image:"images/blue-socks.png"
},
{
name:"Yellow Socks",
price:14,
image:"images/yellow-socks.png"
},
{
name:"Orange Socks",
price:14,
image:"images/orange-socks.png"
},
{
name:"Purple Socks",
price:14,
image:"images/purple-socks.png"
},
{
name:"Pink Socks",
price:14,
image:"images/pink-socks.png"
}
];

const shirts = [
{
name:"White Shirt",
price:24,
image:"images/white-shirt.png"
},
{
name:"Pink Shirt",
price:24,
image:"images/pink-shirt.png"
},
{
name:"Purple Shirt",
price:24,
image:"images/purple-shirt.png"
}
];

let cart = [];

function displayProducts(){

const sockContainer =
document.getElementById("sock-products");

const shirtContainer =
document.getElementById("shirt-products");

socks.forEach(product => {

sockContainer.innerHTML += `
<div class="product-card">

<img src="${product.image}"
alt="${product.name}">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<button onclick="addToCart('${product.name}',${product.price})">
Add To Cart
</button>

</div>
`;

});

shirts.forEach(product => {

shirtContainer.innerHTML += `
<div class="product-card">

<img src="${product.image}"
alt="${product.name}">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<button onclick="addToCart('${product.name}',${product.price})">
Add To Cart
</button>

</div>
`;

});

}

function addToCart(name,price){

cart.push({
name,
price
});

updateCart();

}

function updateCart(){

const cartItems =
document.getElementById("cart-items");

const total =
document.getElementById("cart-total");

cartItems.innerHTML="";

let sum = 0;

cart.forEach(item => {

sum += item.price;

cartItems.innerHTML += `
<p>
${item.name} - $${item.price}
</p>
`;

});

total.textContent = sum;

}

displayProducts();