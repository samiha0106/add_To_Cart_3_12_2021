var addItemId = 0;


function addToCart (item) {
  let firstItem={

    "image":"red-heel.jpg",
    "title":"Red Heels",
    "label":"Size",
    "select":item.children[2].children[1].value
  };

  localStorage.setItem("firstItem",JSON.stringify(firstItem));
  
  let secondItem={

    "image":"white-heel.jpg",
    "title":"White Heels",
    "label":"Size",
    "select":item.children[2].children[1].value
  };

  localStorage.setItem("secondItem",JSON.stringify(secondItem));


  addItemId += 1;
  var selectedItem = document.createElement("div");
  selectedItem.classList.add("cartImg");
  selectedItem.setAttribute("id", addItemId);
  var img = document.createElement("img");
  img.setAttribute("src", item.children[0].currentSrc);
  localStorage.setItem("img",img);
  var title=  document.createElement("div");
  title.innerText = item.children[1].innerText;
  var label = document.createElement("div");
  label.innerText = item.children[2].children[0].innerText;
  var select = document.createElement("span");
  select.innerText = item.children[2].children[1].value;
  label.append(select);
  var delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.setAttribute("onClick", "del(" + addItemId + ")");
  

  var cartItems = document.getElementById("title");
  selectedItem.append(img);
  selectedItem.append(title);
  selectedItem.append(label);
  selectedItem.append(delBtn);
  cartItems.append(selectedItem);
  
 
// localStorage.setItem('image',JSON.stringify( item.children[0].currentSrc));
// const image = JSON.parse(localStorage.getItem('image'));

// localStorage.setItem('titles',JSON.stringify(title.innerText));
// const titles = JSON.parse(localStorage.getItem('titles'));

// localStorage.setItem('labels',JSON.stringify(label.innerText));
// const labels= JSON.parse(localStorage.getItem('labels'));

// localStorage.setItem('deletebtn',JSON.stringify(delBtn.innerText));
// const deletebtn =JSON.parse( localStorage.getItem('deletebtn'));


// if(localStorage.getItem('cartItems')===null){
//  localStorage.setItem('cartItems',cartItems.innerHTML);
// }
// let items=localStorage.getItem('cartItems');
 

 }


function del(item) {
  document.getElementById(item).remove();
}
