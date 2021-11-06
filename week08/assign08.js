function init() {
    document.getElementById("order_form").reset();
 }

 function resetForm() {
    hideErrors();
    document.getElementById("first_name").focus();
    return true;
 }

 function hideErrors(){
    let errorSpans = document.getElementsByClassName("error_msg");
    
    for(let i=0; i<errorSpans.length; i++) {
       errorSpans[i].style["visibility"] = "hidden";
    }
 }

 function validateFirstName() {
    let element = document.getElementById("first_name");
    let value = element.value;
    if(value === ""){
       document.getElementById("first_nameError").style.visibility = "visible";
       element.focus();
       return "error";
    }else{
       document.getElementById("first_nameError").style.visibility = "hidden";
       return "success";
    }
 }

 function validateLastName() {
    let element = document.getElementById("last_name");
    let value = element.value;
    if(value === ""){
       document.getElementById("last_nameError").style.visibility = "visible";
       element.focus();
       return "error";
    }else{
       document.getElementById("last_nameError").style.visibility = "hidden";
       return "success";
    }
 }

 function validateAddress() {
    let element = document.getElementById("address");
    let value = element.value;
    if(value === ""){
       document.getElementById("addressError").style.visibility = "visible";
       element.focus();
       return "error";
    }else{
       document.getElementById("addressError").style.visibility = "hidden";
       return "success";
    }
 }

 function validateTotal() {
    let element = document.getElementById("total");
    let value = element.value;
    if(value === ""){
       document.getElementById("totalError").style.visibility = "visible";
       element.focus();
       return "error";
    }else{
       document.getElementById("totalError").style.visibility = "hidden";
       return "success";
    }
 }

 function validatePhone(){
    let element = document.getElementById("phone");
    let value = element.value;
    if(/^\s*\d{3}-\d{3}-\d{4}\s*$/.test(value)){
       document.getElementById("phoneError").style.visibility = "hidden";
       return "success";
    } else {
       document.getElementById("phoneError").style.visibility = "visible";
       element.focus();
       return "error";
    }
 }

 function validateCreditCard(){
    let element = document.getElementById("credit_card");
    let value = element.value;
    if(/^\s*\d{4}\ \d{4}\ \d{4}\ \d{4}|\d{16}\s*$/.test(value)){
       document.getElementById("credit_cardError").style.visibility = "hidden";
       return "success";
    } else {
       document.getElementById("credit_cardError").style.visibility = "visible";
       element.focus();
       return "error";
    }
 }

 function validateExpDate(){
    let element = document.getElementById("exp_date");
    let value = element.value;
    if(/^\s*([0]{0,1}[1-9]|[1][0-2])\/((201[8-9])|(20[2-9]\d)|([3-9]\d{3})|\d{5,})\s*$/.test(value)){
       document.getElementById("exp_dateError").style.visibility = "hidden";
       return "success";
    } else {
       document.getElementById("exp_dateError").style.visibility = "visible";
       element.focus();
       return "error";
    }
 }

 function checkTotal(){
    let items = document.getElementsByClassName("item_checkbox");
    let total = 0;
    for(const item of items){
       let is_checked = item.checked;
       if(is_checked){
          total += parseInt(item.value);
       }
    }
    if(total === 0){
       total = "";
    }
    document.getElementById("total").value = total;
    document.getElementById("totalError").style.visibility = "hidden";
 }
 
 function validateForm() {
    let exp_date = validateExpDate();
    let credit_card = validateCreditCard();
    let total = validateTotal();
    let phone = validatePhone();
    let address = validateAddress();
    let last_name = validateLastName();
    let first_name = validateFirstName();

    if(exp_date === "error"
    || credit_card === "error"
    || total === "error"
    || phone === "error"
    || address === "error"
    || last_name=== "error"
    || first_name === "error") {
       event.preventDefault();
    }
 }