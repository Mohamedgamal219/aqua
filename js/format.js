// let fishlist = document.getElementById("fish-list");
let foodadd = document.getElementById("sum-of-food");
let totalbiomass = document.getElementById("total-biomass");
let Fcrbut = document.getElementById("FCRbut");
let fcrfinal = document.getElementById("fcrtotal");
// let Fcrtext = document.getElementById("Fcr-text"); 

Fcrbut.onclick = function (){
  fcrfinal.value =(foodadd.value / totalbiomass.value )
  // if(fcrfinal.value <= 1.5 & fishlist.value === "Tilapia"){
  //   Fcrtext.innerHTML = "FCR is Good"
  // }else if(fcrfinal.value <= 1.8 & fishlist.value === "Sea bass"){
  //   Fcrtext.innerHTML = "FCR is Good"
  // }else if(fcrfinal.value > 1.8 & fishlist.value === "Sea bass"){
  //   Fcrtext.innerHTML = "FCR is not Good"
  // }
  // fcrfinal.value >= 1.5 & fishlist.value === "Tilapia" ? Fcrtext.innerHTML = "FCR is Not Good you Must check the Fish ":Fcrtext.innerHTML = "FCR is Good";
  // fcrfinal.value >= 1.8 & fishlist.value === "Sea bass" || "Sea Bream" ? Fcrtext.innerHTML = "FCR is Not Good you Must check the Fish ":Fcrtext.innerHTML = "FCR is Good";
  // fcrfinal.value >= 1.8 & fishlist.value === "Sea Bream" ? Fcrtext.innerHTML = "FCR is Not Good you Must check the Fish ":Fcrtext.innerHTML = "FCR is Good";
  // fcrfinal.value >= 1.5 & fishlist.value === "Mullet" ? Fcrtext.innerHTML = "FCR is Not Good you Must check the Fish ":Fcrtext.innerHTML = "FCR is Good";
  // fcrfinal.value >= 1.5 & fishlist.value === "Shrimp" ? Fcrtext.innerHTML = "FCR is Not Good you Must check the Fish ":Fcrtext.innerHTML = "FCR is Good";

  // if( fishlist.value === "Tilapia" || "shrimp" & fcrfinal.value <= 1.5 ){
  //   Fcrtext.innerHTML = "FCR is Good"
  // }else{
  //       Fcrtext.innerHTML = "FCR is Not Good you Must check the Fish "
  // }
  };

  let SGRWIGHT = document.getElementById("startW");
  let SGRTIME = document.getElementById("Time");
  let SGRBTU =document.getElementById("SGRbtu");
  let SGRFINAL = document.getElementById("SGR");


  SGRBTU.onclick = function(){
    SGRFINAL.value = (SGRWIGHT.value / SGRTIME.value )
  }


  let SFRWIGHT = document.getElementById("startf");
  let SFRTIME = document.getElementById("Timef");
  let SFRBTU =document.getElementById("SFRbtu");
  let SFRFINAL = document.getElementById("SFR");


  SFRBTU.onclick = function(){
    SFRFINAL.value = (SFRWIGHT.value / SFRTIME.value )
  }

// let Clickbtu = document.getElementById("more");
// let txt = document.getElementById("show");

// Clickbtu.onclick = function(){
//   txt.classList.add("show")
//   Clickbtu.ondblclick = function(){
//     txt.classList.remove("show")
//   }
// }

$(function(){
  $("#more").click(function(){
    $("#show").toggle(5000)
  })
});
