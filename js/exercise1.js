$(function() {
  /* Selectors */
  $("#add-classes").click(function() {
    // Add remaining selectors here
    $(".selector-examples li:first").addClass("first");
    $(".selector-examples li:even").addClass("even");
    $(".selector-examples li:odd").addClass("odd");
    $(".selector-examples li:nth-child(4)").addClass("highlighter");
    $(".selector-examples li:last").addClass("last");
  });

  /* Change Text */
  $("#change-language").click(function() {
    // Step 1: Create a new variable called inputValue and set it to the value of the #newLanguage id
    var inputValue = $("#newLanguage").val();
    // Step 2: Create a new variable called element and set it to the value of the .currentLanguage class
    var element = $(".currentLanguage");
    // Step 4: Using .html (http://api.jquery.com/html/), update element with inputValue

    $(element).html(inputValue.replace(element));
  });

  /* Toggles Part 1: Modifying CSS attributes with .css() */
  var boxColor = "rgb(153, 51, 51)";

  $("#button_toggle_colors").click(function() {
    /* Your code goes here */
    $(".box").each(function() {
      if ($(this).css("background-color") == boxColor) {
        $(this).css("background-color", "#FFFFFF");
      } else {
        $(this).css("background-color", boxColor);
      }
    });
  });

  /* Toggles Part 2: Adding/Removing classes to manipulate shapes */
  $("#button_toggle_roundedges").click(function() {
    $(".box").each(function() {
      $(this).toggleClass("round-edge");
    });
  });

  /* Toggles Part 3: Adding new elements */
  $("#button_add_box").click(function() {
    var new_box = document.createElement("div");
    var existing_boxes; // Optional: set this as a changing count of boxes to update IDs
    $("#boxes").append(new_box);
    $(new_box).attr("id", "box4");
    $(new_box).addClass("box outlined");

    console.log(new_box);
  });
});
