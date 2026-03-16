localStorage.setItem("products",JSON.stringify(products))
let products = [

{name:"MacBook Pro 2019",price:21500000,img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
{name:"MacBook Air M1",price:18900000,img:"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9"},
{name:"Dell XPS 13",price:15900000,img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"},
{name:"Dell Latitude 7420",price:12900000,img:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7"},
{name:"ThinkPad X1 Carbon",price:11500000,img:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed"},
{name:"ThinkPad T14",price:13500000,img:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f"},
{name:"HP EliteBook 840",price:9900000,img:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef"},
{name:"HP ZBook 15",price:14500000,img:"https://images.unsplash.com/photo-1593642634524-b40b5baae6bb"},
{name:"Asus ROG Gaming",price:17500000,img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302"},
{name:"Acer Nitro 5",price:14900000,img:"https://images.unsplash.com/photo-1611078489935-0cb964de46d6"}

]

let cart = JSON.parse(localStorage.getItem("cart")) || []

function loadProducts(){

let html=""

products.forEach((p,i)=>{

html+=`

<div class="card">

<img src="${p.img}">

<h3>${p.name}</h3>

<p class="price">${p.price.toLocaleString()}đ</p>

<button onclick="addCart(${i})">Thêm giỏ</button>

</div>
`

})

document.getElementById("products").innerHTML=html

}

function addCart(i){

cart.push(products[i])

localStorage.setItem("cart",JSON.stringify(cart))

document.getElementById("cart-count").innerText=cart.length

alert("Đã thêm vào giỏ")

}

function searchProduct(){

let keyword=document.getElementById("search").value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(keyword))

let html=""

filtered.forEach((p,i)=>{

html+=`
<div class="card">

<a href="product.html?id=${i}">
<img src="${p.img}">
</a>

<h3>${p.name}</h3>

<p class="price">${p.price.toLocaleString()}đ</p>

<button onclick="addCart(${i})">Thêm giỏ</button>

</div>
`

})

document.getElementById("products").innerHTML=html

}

document.getElementById("cart-count").innerText=cart.length

loadProducts()
