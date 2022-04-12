function submit() {
   if (!formValidation()){
      return false;
   }


}

function formValidation() {
    clearErrors();
    return validatePostCode();
 }
 
 function validatePostCode() {
      var errors = document.querySelector("#errors");
      var input = document.getElementsByName("code").trim();
      var regex = "^?[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$";
      length = value.trim(input);
      pc=pattern.compile(regex);
      matcher=pc.Matcher(PostCode);
      result=matcher.find();
    
    if (input.length != 6) {
       errors.innerHTML += "<p>*Please enter valid Post Code,only 6 characters.</p>";
       document.getElementsByName("code").focus();
       return false; 
    }
    if (!regex.test(input)) { 
      errors.innerHTML += "<p>*Please enter valid Post Code.</p>";
      document.getElementsByName("code").focus();
      return false; 
    }  
   
    return true; 
  }  

  function clearErrors(){
     document.querySelector("#errors").innerHTML ="";
  }
/*  const contact = document.getElementsByClassName("container");
  contact.addEventListener("click",function(){
     document.body.innerHTML("#container");
  })*/

function radioChange(){
   hiddenFieldset = document.getElementById("hiddenDiv");
   radioButtons = document.getElementsByName("other");
   

   if (radioButtons[2].checked ) {
      hiddenFieldset.style.display = "inline";
   } else{
      hiddenFieldset.style.display = "none";
   }

}