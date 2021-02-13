// alert("Hello! I am an alert box!!");
const urlParams = new URLSearchParams(window.location.search);
const categoryname = urlParams.get("categoryname");
document.querySelector("#Accessories").textContent = categoryname;
// console.log(categoryname);
fetch("https://kea-alt-del.dk/t7/api//products?category=" + categoryname)
  .then(function (responce) {
    return responce.json();
  })
  // the we have the data, when we have the data we are gonna call a function that we call
  // handleproductlist pass along the data
  .then(function (data) {
    gotData(data);
  });

// function gotData(data) {
//   data.forEach(showCategory);
// }
function gotData(data) {
  console.log(data);
  data.forEach(showCategory);
}
function showCategory(category) {
  console.log(category);
  const template = document.querySelector("#type_template").content;
  const copy = template.cloneNode(true);

  // gi search for image and set its sourse to: PROBLEM HERE, WHAT DO I NEED IN HTML?
  // copy.querySelector(
  //   "img"
  // ).src = `https://kea-alt-del.dk/t7/images/webp/640/${category.id}.webp`;

  copy.querySelector("a.category_link").href =
    "productlist.html?category=" + category.category;
  copy.querySelector("li").textContent = category.category;
  copy.querySelector(
    "a.category_link"
  ).href = `product_list.html?categoryname=${category.category}`;

  const topParent = document.querySelector("#Category_list");
  const elemParent = topParent.querySelector("h2");
  elemParent.appendChild(copy);

  // grab the parent
  const daddy = document.querySelector("#Category_list");

  // append
  daddy.appendChild(myClone);
}
