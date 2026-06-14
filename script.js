const socks = [
  { name: "White Socks", price: 14, color: "#ffffff", text: "#111" },
  { name: "Black Socks", price: 14, color: "#050505", text: "#fff" },
  { name: "Green Socks", price: 14, color: "#168a32", text: "#fff" },
  { name: "Blue Socks", price: 14, color: "#2868d9", text: "#fff" },
  { name: "Yellow Socks", price: 14, color: "#ffd400", text: "#111" },
  { name: "Orange Socks", price: 14, color: "#ff8500", text: "#111" },
  { name: "Purple Socks", price: 14, color: "#a855c9", text: "#fff" },
  { name: "Pink Socks", price: 14, color: "#ff9fbc", text: "#111" }
];

const shirts = [
  { name: "White Shirt", price: 24, color: "#ffffff", text: "#111" },
  { name: "Pink Shirt", price: 24, color: "#ffb6c9", text: "#111" },
  { name: "Purple Shirt", price: 24, color: "#c9a3ee", text: "#111" }
];

let cart = [];

function sockImage(item) {
  return `
    <div class="sock-wrap">
      <div class="sock" style="background:${item.color}; color:${item.text};">
        <div class="sock-logo">
          <div class="hand">🌈✋</div>
          <div class="tiny-text">For You All</div>
        </div>
      </div>
    </div>
  `;
}

function shirtImage(item) {
  return `
    <div class="shirt-wrap">
      <div class="shirt" style="background:${item.color}; color:${item.text};">
        <div class="shirt-collar"></div>
        <div class="shirt-text">For You All</div>
        <div class="left-sleeve-logo">🌈✋</div>
      </div>
    </div>
  `;
}

function renderProducts(items, containerId, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <div class="product-img">
        ${type === "sock" ? sockImage(item) : shirtImage(item)}
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

renderProducts(socks, "products", "sock");
renderProducts(shirts, "shirts", "shirt");