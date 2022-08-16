/*alert*/
function display(){
    alert("This page is still under development");
}
function submit(){
    alert("Thank you for subscribing to our daily newsletter");
}
/*hope*/

var quotelist=[
    "Breast cancer changes you, and the change can be beautiful.– Jane Cook",
    "Once I overcame breast cancer, I wasn’t afraid of anything anymore.” – Melissa Etheridge",
    "There can be life after breast cancer. The prerequisite is early detection.” – Ann Jillian",
    "Cancer is a word, not a sentence.” – John Diamond",
    "Whether you’re a mother or father, or a husband or a son, or a niece or nephew or uncle, breast cancer doesn’t discriminate.” – Stephanie McMahon",
    "Fight each round and take it on the chin. And never never never ever give in.” – Olivia Newton-John",
    "It’s about focusing on the fight and not the fright.” – Robin Roberts",
    "Fight each round and take it on the chin. And never never never ever give in.” – Olivia Newton-John",
    "Joy shouldn’t go away because you have cancer.” – Mandi Hudson"
  ];
  
  
  
  
  var mybtn = document.getElementById("mybtn");
  mybtn.addEventListener("click",displayQuote);
  //HTMLElementObject.innerHTML = XYZ;
  
  
  var quote = document.getElementById("quote");
  
  
  var count =0;
  
  
  
  function displayQuote(){
    quote.innerHTML = quotelist[count];
    count = count + 1;
  
    if(count == quotelist.length ){
      count =0;
    }
  }

  /*support*/
  
