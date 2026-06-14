const socks = [
  { name: "White Socks", price: 14, color: "white", text: "black" },
  { name: "Black Socks", price: 14, color: "black", text: "white" },
  { name: "Green Socks", price: 14, color: "green", text: "white" },
  { name: "Blue Socks", price: 14, color: "royalblue", text: "white" },
  { name: "Yellow Socks", price: 14, color: "gold", text: "black" },
  { name: "Orange Socks", price: 14, color: "orange", text: "black" },
  { name: "Purple Socks", price: 14, color: "mediumorchid", text: "white" },
  { name: "Pink Socks", price: 14, color: "pink", text: "black" }
];

const shirts = [
  { name: "White Shirt", price: 24, color: "white", text: "black" },
  { name: "Pink Shirt", price: 24, color: "pink", text: "black" },
  { name: "Purple Shirt", price: 24, color: "plum", text: "black" }
];

let cart = [];

function renderProducts(items, containerId) {
  const container = document.getElementById(containerId);

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <div class="product-img" style="background:${item.color}; color:${item.text};">
        <div>
          <div class="hand">🌈✋</div>
          <div class="logo">For You All</div>
        </div>
      </div>
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    sum += item.price;
    cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
  });

  total.textContent = sum;
}

renderProducts(socks, "products");
renderProducts(shirts, "shirts");