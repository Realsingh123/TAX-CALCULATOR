

  const calculateTax = ()  => {
var txt1 =document.getElementById("income");
var txt2 =document.getElementById("extraincome");
var txt3 =document.getElementById("age");
var txt4 =document.getElementById("deduction");

let txt5 = parseInt(txt1.value) + parseInt(txt2.value)-parseInt(txt4.value)

var age1 = txt3.value;
var threshold=800000;
var totalInc=0;
var tax=0;
var divElement =document.getElementById("innerpopup")

var TaxableAmount= txt5-800000;

if (txt5<=threshold) {
    tax=0;
   totalInc=(txt5 - tax)
  divElement.innerText=totalInc
}

else { if ( age1  == "more than or equals to 60" && txt5>800000  ){
  tax=TaxableAmount*0.1;
  totalInc=(txt5 - tax)
  console.log(totalInc)
  divElement.innerText=totalInc


}
else if (age1  ==  "more than or equals to 40 and less than 60" && txt5>800000) {
  tax=TaxableAmount*0.4;
  totalInc=(txt5 - tax)
  console.log(totalInc)
  divElement.innerText=totalInc



}else if (age1  == "less than 40" && txt5 > 800000) {
  tax=TaxableAmount*0.3;
  totalInc=(txt5 - tax)
  divElement.innerText=totalInc
}
};

  }


function Anim() {
var tl =gsap.timeline({})
  

tl.to("#toppos",{
  top:"-50%",
  opacity:0
},'a')
tl.to("#bottom",{
  bottom:"-60%",
  opacity:0

},'a')
}



function toggle() {
  var x=document.getElementById("popup" );


  if(x.style.display  ===   "none"){
    x.style.display = "block";
  }

  else{
    x.style.display = "none ";
  }
  
}



function formSet() {
  document.getElementById("tax-form").reset();
  
}
function formSet2() {
  document.getElementById("popup").reset();
  
}
function toggleTwo(){
  var k=document.getElementById("popup" );
  if(k.style.display  ===   "block"){
    k.style.display = "none";
  }

}







