function display(ln){
    document.getElementById("dropdownMenuButton1").innerHTML=ln;
}

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopButton").style.display = "block";
    } else {
      document.getElementById("scrollTopButton").style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.documentElement.scrollTop = 0; 
  }
  