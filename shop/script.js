
function alreadtInLogin() {
  alert("Your are in login!!!")
}
function logoutAcnt() {
  alert("To creating new account you have to logout!!!")
}

var all_products = []
var mens_products = []
var womens_products = []
var jewelery_products = []
var elecronic_products = []

async function fetch_data(){
  await fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {    

    data.forEach((i)=>{
      all_products.push(i)
      if(i.category == "men's clothing"){
        mens_products.push(i);

      }else if(i.category == "women's clothing"){
        womens_products.push(i)
      }else if(i.category == "jewelery"){
        jewelery_products.push(i);
      }else{
        elecronic_products.push(i)
      }
    })
       
  })
  .catch(error => console.error(error));
}


var items = document.querySelectorAll('.item')
var title = document.querySelector('#title')
var price = document.querySelectorAll('.price')
var body = document.querySelector('main-content')
var checkBoxes = document.querySelectorAll('input[name="color"]')
var sizeCheckboxes = document.querySelectorAll('input[name="size"]')


function showAll() { 

  var products = all_products;
  var title = document.getElementById('title')
  title.innerHTML = `All`
  var productList = document.querySelector(".items");
  productList.innerHTML = "";
  products.forEach((product) => {

    var productDiv = document.createElement("div");

    productDiv.classList.add('item')

    productDiv.innerHTML +=`
    <img src="${product.image}" alt="${product.title}" />
    <div class="info">
      <div class="row">
        <div class="price">Price: $${product.price}</div>
        <div class="sized" >S</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color: #000"></div>
          <div class="circle" style="background-color: #4938af"></div>
          <div class="circle" style="background-color: #203d3e"></div>
        </div>
      </div>
      <div class="row">Rating: ${product.rating.rate}</div>
    
    <button id="addBtn" onclick='cart("${product.image}",${product.price},"${product.size}","${product.color}",${product.rating.rate})'>Add to Cart</button>`
    productList.appendChild(productDiv);
  });
 }



 

function showMens(){
  displayProducts(mens_products,"men's clothing");
}

function showWomens(){
  displayProducts(womens_products,"women's clothing");
}

function showJewelery(){
  displayProducts(jewelery_products,"jewelery");
}

function showElectronics(){
  displayProducts(elecronic_products,"electronics");
}



function displayProducts(products, category){
  var title = document.getElementById('title')
  title.innerHTML = `${category}`
  var productList = document.querySelector(".items");


  productList.innerHTML = "";
  products.filter((product) => {
    return product.category === category;
  }).forEach((product) => {

    var productDiv = document.createElement("div");

    productDiv.classList.add('item')

    productDiv.innerHTML +=`
    <img src="${product.image}" alt="${product.title}" />
    <div class="info">
      <div class="row">
        <div class="price">Price: $${product.price}</div>
        <div class="sized">S,M,L</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color: #000"></div>
          <div class="circle" style="background-color: #4938af"></div>
          <div class="circle" style="background-color: #203d3e"></div>
        </div>
      </div>
      <div class="row">Rating: ${product.rating.rate}</div>
      
    <button id="addBtn" onclick='cart("${product.image}",${product.price},"${product.size}","${product.color}",${product.rating.rate})'>Add to Cart</button>`
    productList.appendChild(productDiv);
   
  });
  
}

// localStorage.setItem('Cart Items',JSON.stringify([]))

function cart(image,price,size,color,rating) {


  
  alert("Product added to your cart!!!")
  
  var obj = {
    "image" : image,
    "size"  : size,
    "price" : price,
    "color" : color,
    "rating": rating
  }

  var CartStr = localStorage.getItem('Cart Items')
  var Cart = JSON.parse(CartStr)
  Cart.push(obj)
  // console.log(cartItems)
  localStorage.setItem('Cart Items',JSON.stringify(Cart))
}

const colors = ['blue','white','white','blue','silver','silver','silver','gold','black','black','black','black','black','black','pink','black','blue','white','pink','pink']


checkBoxes.forEach(checkbox => {
  checkbox.addEventListener('change', function(){
    const selectedColors = Array.from(checkBoxes).filter((checkbox) =>checkbox.checked).map(checkbox=>checkbox.id)
  
    var products = all_products.filter(product => { return selectedColors.includes(product.color)});
    console.log(selectedColors)

    var title = document.getElementById('title')

    title.innerHTML = `Filtered Products`
    var productList = document.querySelector(".items");
    productList.innerHTML = "";
    products.forEach((product) => {
  
      var productDiv = document.createElement("div");
  
      productDiv.classList.add('item')
  
      productDiv.innerHTML +=`
      <img src="${product.image}" alt="${product.title}" />
      <div class="info">
        <div class="row">
          <div class="price">Price: $${product.price}</div>
          <div class="sized">S,M,L</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row">
            <div class="circle" style="background-color: #000"></div>
            <div class="circle" style="background-color: #4938af"></div>
            <div class="circle" style="background-color: #203d3e"></div>
          </div>
        </div>
        <div class="row">Rating: ${product.rating.rate}</div>
      
      <button id="addBtn" onclick='cart("${product.image}",${product.price},"${product.size}","${product.color}",${product.rating.rate})'>Add to Cart</button>`
      productList.appendChild(productDiv);
    });
  });
  
});

var sizes = ['s','l','m','xl','s','l','m','xl','s','l','m','xl','s','l','m','xl','s','l','m','xl']

sizeCheckboxes.forEach(checkbox=>{
  checkbox.addEventListener('change',function(){
    selectedSizes = Array.from(sizeCheckboxes).filter(box=>box.checked).map(box => box.id)
    var products = all_products.filter(product => {return selectedSizes.includes(product.size)})
    console.log(products)
    
    var title = document.getElementById('title')

    title.innerHTML = `Filtered Products`
    var productList = document.querySelector(".items");
    productList.innerHTML = "";
    products.forEach((product) => {
  
      var productDiv = document.createElement("div");
  
      productDiv.classList.add('item')
  
      productDiv.innerHTML +=`
      <img src="${product.image}" alt="${product.title}" />
      <div class="info">
        <div class="row">
          <div class="price">Price: $${product.price}</div>
          <div class="sized">S,M,L</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row">
            <div class="circle" style="background-color: #000"></div>
            <div class="circle" style="background-color: #4938af"></div>
            <div class="circle" style="background-color: #203d3e"></div>
          </div>
        </div>
        <div class="row">Rating: ${product.rating.rate}</div>
      
      <button id="addBtn" onclick='cart("${product.image}",${product.price},"${product.size}","${product.color}",${product.rating.rate})'>Add to Cart</button>`
      productList.appendChild(productDiv);
    });
    
  })
})




fetch_data().then(()=>{
  showAll();
})
  
.then(()=>{
   for(let i = 0; i < all_products.length; i++){
    all_products[i].color = colors[i % colors.length]

  }
})
.then(()=>{
  for(let i = 0; i < all_products.length; i++){
    all_products[i].size = sizes[i % sizes.length]
  }
  console.log(all_products)
})
  
