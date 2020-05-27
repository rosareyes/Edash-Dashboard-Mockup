
$(document).ready(function() {

  $("#btnSubmit").click(function () {
      var password = $("#password1").val();
      var confirmPassword = $("#password2").val();
      if (password != confirmPassword) {
          $("#password2").removeClass("is-valid").addClass("is-invalid");
          return false;
      }
      $("#password2").removeClass("is-invalid").addClass("is-valid");
      return true;
  });

  $("#btnLogin").click(function () {
      $("#loginPassword").removeClass("is-valid").addClass("is-invalid");
      return false;
  });

});

//Global variable for starting page
var currentPageId = "page-revenues";
var currentSelectorId = "revenues";

//Function for getting the button ids
function getButtons(){
    //List of button ids
    var list = ["revenues", "webSales", "orders", "webSessions", "more"];
    return list;
}

//Make sure the window is loaded before we add listeners
window.onload = function(){
    var pageIdList = getButtons();
    //Add an event listener to each button
    pageIdList.forEach(function(page){
        document.getElementById(page).addEventListener("click", changePage, false);
    });
}

function changePage(){
    var currentSelector = document.getElementById(currentSelectorId);
    var currentPage = document.getElementById(currentPageId);
    var pageId = "page-"+this.id;
    var page = document.getElementById(pageId);
    var pageSelector = document.getElementById(this.id);

    if(page.classList.contains("active")){
        return;
    }
    currentSelector.classList.remove("button-active");
    currentSelector.classList.add("button-inactive");
    currentPage.classList.remove("active");
    currentPage.classList.add("inactive");

    pageSelector.classList.remove("button-inactive");
    pageSelector.classList.add("button-active");

    page.classList.remove("inactive");
    page.classList.add("active");

    //Need to reset the scroll
    window.scrollTo(0,0);

    currentSelectorId = this.id;
    currentPageId = pageId;
}
