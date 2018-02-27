$(function() {
  const theGrid = $("#pixel_canvas");
  var currentColor;

	function makeGrid() {

    const gridHeight = $("#input_height").val();
    const gridWidth = $("#input_width").val();
    theGrid.empty();

    for (x = 0; x <= gridHeight - 1; x++) {
      theGrid.append("<tr>");
      for (y = 0; y <= gridWidth - 1; y++) {
        $("tr:eq(" + x + ")").append("<td></td>");
      }
      theGrid.append("</tr>");
    }
  }

  $("#sizePicker").submit(function(e) {
    e.preventDefault();
    makeGrid();
  });

  $("#colorPicker").change(function() {
    currentColor = $(this).val();
  });

  theGrid.on("click", "td", function(e) {
    $(this).css("background-color", currentColor);
  });

});
