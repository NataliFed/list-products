const products = fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".container");

    const createHtml = ({ brand, category, price, title, thumbnail }) => `
      <h2 class="tittle">${title}</h2>
      <img src=${thumbnail} class="thumbnail"/>
      <p class="price">${price} $</p>
      <p class="brand">${brand}</p>
      <p class="categoty">${category}</p>
    `;
    console.log({ data });

    const result = () => {
      const elements = data.products.map((product) => {
        const element = document.createElement("div");

        element.className = "product-card";

        element.innerHTML = createHtml(product);

        return element;
      });

      container.append(...elements);
    };
    result();
  });
