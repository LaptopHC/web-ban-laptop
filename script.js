let products = JSON.parse(localStorage.getItem("products")) || [

{name:"MacBook Pro 2019",price:21500000,img:"https://picsum.photos/300?1"},
{name:"Dell XPS 13",price:15900000,img:"https://picsum.photos/300?2"},
{name:"ThinkPad X1 Carbon",price:11500000,img:"https://picsum.photos/300?3"}

]

localStorage.setItem("products",JSON.stringify(products))

let cart = JSON.parse(localStorage.getItem("cart")) || []

function loadProducts(){

let html=""

products.forEach((p,i)=>{

html+=`

<div class="card">

<a href="product.html?id=${i}">
<img src="${p.img}">
</a>

<h3>${p.name}</h3>

<p>${p.price.toLocaleString()}đ</p>

<button onclick="addCart(${i})">Thêm giỏ</button>

</div>

`

})

if(document.getElementById("products"))
document.getElementById("products").innerHTML=html

}

function addCart(i){

cart.push(products[i])

localStorage.setItem("cart",JSON.stringify(cart))

document.getElementById("cart-count").innerText=cart.length

alert("Đã thêm vào giỏ")

}

function loadCart(){

let html=""

cart.forEach(p=>{

html+=`

<div>

<h3>${p.name}</h3>

<p>${p.price.toLocaleString()}đ</p>

</div>

`

})

if(document.getElementById("cart-items"))
document.getElementById("cart-items").innerHTML=html

}

function order(){

alert("Đơn hàng đã gửi! Shop sẽ liên hệ")

}

function addProduct(){

let name=document.getElementById("name").value
let price=document.getElementById("price").value
let img=document.getElementById("img").value

products.push({name,price,img})

localStorage.setItem("products",JSON.stringify(products))

alert("Đã thêm sản phẩm")

location.reload()

}

function searchProduct(){

let key=document.getElementById("search").value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(key))

let html=""

filtered.forEach((p,i)=>{

html+=`

<div class="card">

<a href="product.html?id=${i}">
<img src="${p.img}">
</a>

<h3>${p.name}</h3>

<p>${p.price.toLocaleString()}đ</p>

<button onclick="addCart(${i})">Thêm giỏ</button>

</div>

`

})

document.getElementById("products").innerHTML=html

}

function addReview(){

let review=document.getElementById("review").value

document.getElementById("reviews").innerHTML+=`<p>${review}</p>`

}

loadProducts()

loadCart()
