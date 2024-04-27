/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function lovli(){
    document.getElementById("lovli").scrollIntoView();
  }

  function maze(){
    document.getElementById("ambu").scrollIntoView();
  }

  function validateForm(){
    var returnval=true;
    var name=document.forms['myForm']['logi'].value;
    console.log(name);

    

    return returnval;
  }