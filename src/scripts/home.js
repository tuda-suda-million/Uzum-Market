import "../styles/home.css";

export function showHome(app) {
  app.innerHTML = `
    <div class="main">
      <h1>Uzum Market</h1>
      <div id="products" class="products"></div>
    </div>
  `;

  loadProducts();
}

async function loadProducts() {
  try {
    const res = await fetch("http://localhost:5173/goods");
    const data = await res.json();
    renderGoods(data.goods);
  } catch (err) {
    console.error("Ошибка загрузки товаров", err);
  }
}

function renderGoods(goods) {
  const container = document.getElementById("products");

  container.innerHTML = goods.map(item => {
    const img = item.media?.[0] || "";
    const finalPrice = item.isBlackFriday
      ? Math.round(item.price * (1 - item.salePercentage / 100))
      : item.price;

    return `
      <div class="card">
        <img src="${img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>⭐ ${item.rating}</p>

        ${
          item.isBlackFriday
            ? `<p class="old">${item.price} ₽</p>
               <p class="price">${finalPrice} ₽</p>`
            : `<p class="price">${item.price} ₽</p>`
        }

        <button>В корзину</button>
      </div>
    `;
  }).join("");
}