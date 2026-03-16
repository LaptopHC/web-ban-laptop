body{
font-family:Arial;
margin:0;
background:#f5f5f5;
}

header{
background:#000;
color:white;
padding:20px;
display:flex;
justify-content:space-between;
align-items:center;
}

header input{
padding:10px;
width:250px;
}

nav{
background:#ff6600;
padding:10px;
text-align:center;
}

nav a{
color:white;
margin:15px;
text-decoration:none;
font-weight:bold;
}

.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
padding:30px;
}

.card{
background:white;
padding:15px;
border-radius:10px;
box-shadow:0 5px 10px rgba(0,0,0,0.1);
text-align:center;
}

.card img{
width:100%;
border-radius:10px;
}

.price{
color:red;
font-size:20px;
font-weight:bold;
}

button{
background:#ff6600;
color:white;
border:none;
padding:10px;
border-radius:5px;
cursor:pointer;
}

footer{
background:#222;
color:white;
text-align:center;
padding:30px;
}

.call{
margin-top:10px;
font-size:18px;
}
