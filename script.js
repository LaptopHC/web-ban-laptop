{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let products = [\
\
\{\
name:"Dell XPS 13",\
price:"15.900.000\uc0\u273 ",\
img:"https://picsum.photos/300?1"\
\},\
\
\{\
name:"MacBook Pro 2019",\
price:"21.500.000\uc0\u273 ",\
img:"https://picsum.photos/300?2"\
\},\
\
\{\
name:"Lenovo ThinkPad X1 Carbon",\
price:"11.500.000\uc0\u273 ",\
img:"https://picsum.photos/300?3"\
\},\
\
\{\
name:"HP EliteBook 840",\
price:"9.900.000\uc0\u273 ",\
img:"https://picsum.photos/300?4"\
\}\
\
]\
\
function loadProducts()\{\
\
let html=""\
\
products.forEach(p=>\{\
\
html+=`\
<div class="card">\
<img src="$\{p.img\}">\
<h3>$\{p.name\}</h3>\
<p class="price">$\{p.price\}</p>\
<button onclick="order()">Mua ngay</button>\
</div>\
`\
\
\})\
\
document.getElementById("products").innerHTML=html\
\
\}\
\
function order()\{\
\
alert("Li\'ean h\uc0\u7879  hotline 0988531820 \u273 \u7875  \u273 \u7863 t h\'e0ng")\
\
\}\
\
function searchProduct()\{\
\
let keyword=document.getElementById("search").value.toLowerCase()\
\
let filtered=products.filter(p=>p.name.toLowerCase().includes(keyword))\
\
let html=""\
\
filtered.forEach(p=>\{\
\
html+=`\
<div class="card">\
<img src="$\{p.img\}">\
<h3>$\{p.name\}</h3>\
<p class="price">$\{p.price\}</p>\
<button onclick="order()">Mua ngay</button>\
</div>\
`\
\
\})\
\
document.getElementById("products").innerHTML=html\
\
\}\
\
loadProducts()}