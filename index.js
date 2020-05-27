
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
