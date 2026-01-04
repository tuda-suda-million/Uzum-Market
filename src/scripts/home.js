import axios from "axios";

export async function showMain(app) {
  
  app.innerHTML = `
    <h1>Товары</h1>
    <div id="products"></div>
  `;

  try {
    const response = await axios.get("http://localhost:3000/db");

    console.log(response.data);

    renderGoods(response.data.goods);
  } catch (e) {
    console.error("Ошибка загрузки товаров", e);
  }
}

function renderGoods(goods) {
  const products = document.getElementById("products");

  products.innerHTML = goods.map(item => `
    <div class="card">
      <img src="${item.media[0]}" alt="">
      <h3>${item.title}</h3>
      <p>⭐ ${item.rating}</p>
      <p>${item.price} ₽</p>
    </div>
  `).join("");
}