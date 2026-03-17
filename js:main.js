{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sa240\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 let products=[\
\{\uc0\u8232 id:1,\u8232 name:"Dell Latitude 7410 2in1",\u8232 cpu:"i7-10610U",\u8232 ram:"16GB",\u8232 ssd:"512GB",\u8232 price:8900000,\u8232 img:"images/laptop1.jpg"\u8232 \},\
\{\uc0\u8232 id:2,\u8232 name:"Dell XPS 13 9305",\u8232 cpu:"i5-1135G7",\u8232 ram:"8GB",\u8232 ssd:"256GB",\u8232 price:9200000,\u8232 img:"images/laptop2.jpg"\u8232 \},\
\{\uc0\u8232 id:3,\u8232 name:"Dell Latitude 7400",\u8232 cpu:"i5-8265U",\u8232 ram:"8GB",\u8232 ssd:"256GB",\u8232 price:5900000,\u8232 img:"images/laptop3.jpg"\u8232 \},\
\{\uc0\u8232 id:4,\u8232 name:"HP EliteBook 840 G8",\u8232 cpu:"i5-1145G7",\u8232 ram:"16GB",\u8232 ssd:"256GB",\u8232 price:7900000,\u8232 img:"images/laptop4.jpg"\u8232 \}\
]\
let cart=JSON.parse(localStorage.getItem("cart"))||[]\
function loadProducts()\{\
let html=""\
products.forEach(p=>\{\
html+=`\
`\
\})\
document.getElementById("productList").innerHTML=html\
\}\
function addCart(id)\{\
let product=products.find(p=>p.id==id)\
cart.push(product)\
localStorage.setItem("cart",JSON.stringify(cart))\
alert("\uc0\u272 \'e3 th\'eam v\'e0o gi\u7887 ")\
\}\
function searchProduct()\{\
let key=document.getElementById("search").value.toLowerCase()\
let result=products.filter(p=>p.name.toLowerCase().includes(key))\
let html=""\
result.forEach(p=>\{\
html+=`\
`\
\})\
document.getElementById("productList").innerHTML=html\
\}\
loadProducts()\
}