var productNameInp=document.getElementById("ProductNameInput");
var productPriceInp=document.getElementById("ProductPriceInput");
var productCategoryInp=document.getElementById("ProductCategoryInput");
var productDescInp=document.getElementById("ProductDescInput");
var btn=document.getElementById("btn");

var productContainer;   


//  localStorage  ==> a small database in browser ,js know react with it  (10 Mega)

if(localStorage.getItem("myproducts")==null)
{
  productContainer=[];
}
else
{
productContainer=JSON.parse( localStorage.getItem("myproducts"));
displayProduct();
}

// add product to list
function addProduct(){
  var product={
    name:productNameInp.value,
    price:productPriceInp.value,
    category:productCategoryInp.value,
    desc:productDescInp.value
  }
  productContainer.push(product);

localStorage.setItem("myproducts",JSON.stringify(productContainer));
displayProduct();
}
btn.onclick=addProduct;

// display product in table
function displayProduct()
{
  var productList="";
  for(var i =0;i<productContainer.length;i++){
    productList+=`<tr>
    <td>`+i+ `</td>
    <td>`+productContainer[i].name+`</td>
    <td>`+productContainer[i].price+`</td>
    <td>`+productContainer[i].category+`</td>
    <td>`+productContainer[i].desc+`</td>
    <td> <button  class="btn btn-info" style="display:none">Update</button></td>
    <td> <button onclick="deleteItem(`+ i +`)" class="btn btn-danger">Delete</button></td>
    </tr>`}
  document.getElementById("tbody").innerHTML=productList;
} 

// searchProduct

function searchProduct(term){

  var cartonna='';
  var cartonna2='';
  for(var i=0;i<productContainer.length;i++){
    if(productContainer[i].name.includes(term.trim())==true){
      cartonna+=`<tr>
      <td>`+productContainer[i].name+`</td>
      <td>`+productContainer[i].price+`</td>
      <td>`+productContainer[i].category+`</td>
      <td>`+productContainer[i].desc+`</td>
      </tr>`

      cartonna2+=`<p>`+productContainer[i].name+`</p>`;
    }
  }
  document.getElementById("tbody").innerHTML=cartonna;
  document.getElementById("searchProd").innerHTML=cartonna2;
}

// delete element
function deleteItem(index){
  productContainer.splice(index,1);
localStorage.setItem("myproducts",JSON.stringify(productContainer));

displayProduct();
}
 