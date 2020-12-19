// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    console.log("devour ", id);

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log("add ", $("#burgerName"));
    var newBurger = {
      name: $("#burgerName").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
