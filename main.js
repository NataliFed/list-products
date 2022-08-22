const createHtml = ({ brand, category, price, title, thumbnail }) => `
      <h2 class="tittle">${title}</h2>
      <img src=${thumbnail} class="thumbnail"/>
      <p class="price">${price} $</p>
      <p class="brand">${brand}</p>
      <p class="categoty">${category}</p>
    `;

const render = (products) => {
  const container = document.querySelector(".container");

  const elements = products.map((product) => {
    const element = document.createElement("div");

    element.className = "product-card";

    element.innerHTML = createHtml(product);

    return element;
  });

  container.append(...elements);
};

const products = fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    render(data.products);
  });
