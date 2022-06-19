
var modal1 = document.getElementById("myModal_one");
var modal2 = document.getElementById("myModal_two");
var modal3 = document.getElementById("myModal_three");
var modal4 = document.getElementById("myModal_four");
var modal5 = document.getElementById("myModal_five");


    var count1=0;
    var count2=0;
    var count3=0;
    var count4=0;
    var count5=0;

var Platform = document.getElementById("Platform")
Platform.onclick = function() {
  modal1.style.display = "block";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
  modal5.style.display = "none";
  document.querySelector(".arrow_Platform").style.transform="rotate(225deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1++;
  if(count1==2){
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
  };
  
}


var Product = document.getElementById("Product")
Product.onclick = function (){
  modal2.style.display = "block";
  modal1.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
  modal5.style.display = "none";
  document.querySelector(".arrow_p").style.transform="rotate(225deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  count2++;
  if(count2==2){
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    document.querySelector(".arrow_p").style.transform="rotate(45deg)";
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
  };
}


var Resources = document.getElementById("Resources")
Resources.onclick = function(){
  modal3.style.display = "block";
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal4.style.display = "none";
  modal5.style.display = "none";
  document.querySelector(".arrow_r").style.transform="rotate(225deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  count3++;
  if(count3==2){
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    document.querySelector(".arrow_r").style.transform="rotate(45deg)";
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
  };

}


var sign_up = document.getElementById("sign_up")
sign_up.onclick = function(){
  modal4.style.display = "block";
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal5.style.display = "none";
  document.querySelector(".arrow_s").style.transform="rotate(225deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  count4++;
  if(count4==2){
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    document.querySelector(".arrow_s").style.transform="rotate(45deg)";
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
  };
}


var sign = document.getElementById("z1asCe")
sign.onclick = function(){
  modal5.style.display = "block";
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  count5++;
  if(count5==2){
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    document.querySelector(".arrow_s").style.transform="rotate(45deg)";
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
  };
}




var span1 = document.getElementsByClassName("close_one")[0];
var span2 = document.getElementsByClassName("close_two")[0];
var span3 = document.getElementsByClassName("close_three")[0];
var span4 = document.getElementsByClassName("close_four")[0];
var span5 = document.getElementsByClassName("close_five")[0];

span1.onclick = function() {
  modal1.style.display = "none";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1=0;
  count2=0;
  count3=0;
  count4=0;
  count5=0;
}
span2.onclick = function() {
  modal2.style.display = "none";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1=0;
  count2=0;
  count3=0;
  count4=0;
  count5=0;
}
span3.onclick = function() {
  modal3.style.display = "none";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1=0;
  count2=0;
  count3=0;
  count4=0;
  count5=0;
}
span4.onclick = function() {
  modal4.style.display = "none";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1=0;
  count2=0;
  count3=0;
  count4=0;
  count5=0;
}


span5.onclick = function() {
  modal5.style.display = "none";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1=0;
  count2=0;
  count3=0;
  count4=0;
  count5=0;
}



window.onclick = function(event) {
  if (event.target == modal1) {
  modal1.style.display = "none";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1=0;
  count2=0;
  count3=0;
  count4=0;
  count5=0;
  }
  if (event.target == modal2) {
  modal2.style.display = "none";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1=0;
  count2=0;
  count3=0;
  count4=0;
  count5=0;
  }
  if (event.target == modal3) {
  modal3.style.display = "none";
  document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1=0;
  count2=0;
  count3=0;
  count4=0;
  count5=0;
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
    document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
  document.querySelector(".arrow_r").style.transform="rotate(45deg)";
  document.querySelector(".arrow_p").style.transform="rotate(45deg)";
  document.querySelector(".arrow_s").style.transform="rotate(45deg)";
  count1=0;
  count2=0;
  count3=0;
  count4=0;
  count5=0;
    }
    if (event.target == modal5) {
      modal5.style.display = "none";
      document.querySelector(".arrow_Platform").style.transform="rotate(45deg)";
    document.querySelector(".arrow_r").style.transform="rotate(45deg)";
    document.querySelector(".arrow_p").style.transform="rotate(45deg)";
    document.querySelector(".arrow_s").style.transform="rotate(45deg)";
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
      }


}






