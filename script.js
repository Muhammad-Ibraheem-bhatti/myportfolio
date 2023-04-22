var title = document.getElementById("myProfession");
var titleText = "Web Designer and Five years Teaching Experience.";
index = 1;
const typeWriter = ()=>{
    let newTitle = titleText.slice(0,index);
    index > titleText.length ? index = 1 : index++;
    title.innerHTML = newTitle;
    setTimeout(typeWriter , 1000)

}

typeWriter();
// Admin name in about us section
var adminTitle = document.getElementById("adminName");
var adminTitleText = "MUHAMMAD IBRAHEEM";
indexes = 1;
const typeWriters = ()=>{
    let adminNewTitle = adminTitleText.slice(0,indexes);
    indexes > adminTitleText.length ? indexes = 1 : indexes++;
    adminTitle.innerHTML = adminNewTitle;
    setTimeout(typeWriters , 1000)

}
typeWriters();

// show images in gallery

// var images = [ img1, img2 , img3];
// var img1 = document.getElementById("img1");
// var img2 = document.getElementById("img2");
// var img3 = document.getElementById("img3");
// images = images.push(img1,img2,img3);
// images = images.filter(showAllImg)

const showAllImg = ()=>{
    var images = [ img1, img2 , img3];
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
images = images.push(img1,img2,img3);
images = images.filter(myimg);
function myimg(eg){
    document.getElementsById("img4").src = images[0];
    document.getElementsById("img6").src =  images[1];
    document.getElementsById("img7").src =  images[2];
}

}













filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}