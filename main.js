fetch("https://kea-alt-del.dk/t7/api/products/2801")
  .then(function (responce) {
    return responce.json();
  })
  .then(function (data) {
    showProduct(data);
  });

function showProduct(product) {
  console.log(product);
  document.querySelectorAll(".info").forEach((item) => {
    item.textContent = product.brandname;
  });
}
