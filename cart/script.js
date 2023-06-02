

var localStorageCart = localStorage.getItem('Cart Items')
var cartProducts = JSON.parse(localStorageCart)



function signedAndLogin(parram){
       if(param == 'login'){
              alert('Your are already in login')
       }else
              alert('For signup new account you have to logout from this account')
}

var total = document.getElementById('total')

var totalCost = 0;

for (let i = 0; i < cartProducts.length; i++) {
  totalCost += cartProducts[i].price;
}

console.log(totalCost);

total.innerHTML = `Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${totalCost}`

localStorage.setItem('Total Bill',totalCost)

var checkBillStr = localStorage.getItem('Total Bill')
var checkBill = JSON.parse(checkBillStr)

if(checkBill == 0){
       document.getElementById('cart').style.display = "none"
       document.getElementById('emptyCart').setAttribute('id','revealEmpty')      
}
 

displayProducts(cartProducts)

function displayProducts(products){
    var title = document.getElementById('title')
    title.innerHTML = `My Cart`
    var productList = document.querySelector(".items");
  
  
  
    productList.innerHTML = "";
    products.forEach((product) => {
  
      var cartTop = document.getElementById('p');


      var itemName = document.createElement('div')
      itemName.classList.add('myItem')
 
      itemName.innerHTML = `Item &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${product.price}`
 
      cartTop.appendChild(itemName)

    


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
        
      <button id="addBtn" onclick='removeProduct("${product.image}")'>Remove From Cart</button>`
      productList.appendChild(productDiv);
     
    });
    
  }

  function removeProduct(image){
    var item = document.querySelectorAll('.item')
    var cartArr = localStorage.getItem('Cart Items')
    
    cartArr = JSON.parse(cartArr)
    
    var removedItem = cartArr.findIndex(item=>{return item.image === image})
  
    location.reload()
    console.log(removedItem)

    if(removedItem !== -1){
        cartArr.splice(removedItem,1)
    }
    cartArr = JSON.stringify(cartArr);

    localStorage.setItem('Cart Items', cartArr);
    item[index].style.display = 'none'

  }

 
