fetch("https://kea-alt-del.dk/t7/api/products/2801")
  .then(function (responce) {
    return responce.json();
  })

  .then(function (data) {
    showProduct(data);
  });

function showProduct(product) {
  console.log(product);
  document.querySelectorAll(".brand").forEach((item) => {
    item.textContent = product.brandname;
  });
  document.querySelectorAll(".productname").forEach((item) => {
    item.textContent = product.productdisplayname;
  });
  document.querySelector(
    "img.productimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".brandbio").textContent = product.brandbio;
  document.querySelector(".category").textContent = product.category;
  document.querySelector(".subcategory").textContent = product.subcategory;
  document.querySelector(".idNo").textContent = product.id;
  document.querySelector("img.productimg").alt = product.productdisplayname;
  document.querySelector(".baseColour").textContent = product.basecolour;
  document.querySelector(".price").textContent = product.price;
}
