// alert("Hello! I am an alert box!!");

// i wanna fetch the data and the data is located here
// then we get a responce, from that responce we are gonna return the jason
fetch("https://kea-alt-del.dk/t7/api/products")
  .then(function (responce) {
    return responce.json();
  })
  // the we have the data, when we have the data we are gonna call a function that we call
  // handleproductlist pass along the data
  .then(function (data) {
    handleProductList(data);
  });

//   the function is gonna receive data, that one is simply gonna loop through some and all the products one at a time and call a function
function handleProductList(data) {
  //   console.log(data);
  data.forEach(showProduct);
}
// this function is gonna receive one item aka product

function showProduct(product) {
  console.log(product);
  //grab the template and were gonna pull out the content
  const template = document.querySelector("#smallProductTemplate").content;
  //clone it, what eleement are we ccopying, make a clone, include all the child nodes
  const copy = template.cloneNode(true);
  //change the content, select the class with subtle, that is inside the copy and set its text content to be first the product article type,
  //then i want th pipe??? and then i want product
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  //select the h3 and set the textcontent to be equal to product display name
  copy.querySelector("h3").textContent = product.productdisplayname;
  //grab the parent
  const parent = document.querySelector("main");
  //   we gonna say parent, heres your new child and we are gonna call it copy
  parent.appendChild(copy);
  //append
}

/* <article class="smallProduct">
<h2>Nike</h2>
<img
  src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
  alt="Sahara Team India Fanwear Round Neck Jersey"
/>
<h3>Blue T20 Indian Cricket Jersey</h3>
<p class="subtle">Tshirts | Nike</p>
<p class="price"><span>Prev.</span> DKK 1595,-</p>
<div class="discounted">
  <p>Now DKK 1560,-</p>
  <p>-34%</p>
</div>
<a href="product.html">Read More</a>
</article> */
