
(function() {

  var canvas = $('#canvas'); //my placement area --think of paper and drawing, it's the work area
  var updateGridButton = $('#update-grid-button');
  var numberOfColsInput = $('#number-of-cols');
  var numberOfRowsInput = $('#number-of-rows');
  var colorGrid;


  makeGrid (15, 15);
  $('#color tr td').on('click', selectColor);
  $('.cell').on('click', changeColor);
  updateGridButton.on('click', updateGridSize);
  //clearGrid();

  function clearGrid(){
      canvas.empty();
  }

  function updateGridSize () {
    clearGrid(); //remove the current grid
    //grab the number of columns from the user input and convert it to a number
    newColNumber = parseInt(numberOfColsInput.val());
    //limit the user input so it doesn't crash the browser
    if (newColNumber < 2 || newColNumber > 100) {
      alert('Your number of columns is not within the parameters!');
      clearGrid();
      makeGrid(15, 15);
      $('.cell').on('click', changeColor);
      numberOfColsInput.val(" ");
      numberOfRowsInput.val(" ");
      return;
    }

    //now grab the number of rows from the user input and convert to number
    newRowNumber = parseInt(numberOfRowsInput.val());
    //limit the user input number so it doesn't crash the browser
    if (newRowNumber < 2 || newRowNumber > 100) {
      alert('Your number of rows is not within the parameters!');
      clearGrid();
      makeGrid(15, 15);
      $('.cell').on('click', changeColor);
      numberOfColsInput.val(" ");
      numberOfRowsInput.val(" ");
      return;
    }

    //make then new grid based on the new rows and columns
    makeGrid(newRowNumber, newColNumber);
    $('.cell').on('click', changeColor);
    numberOfColsInput.val(" ");
    numberOfRowsInput.val(" ");
  }

  function selectColor(event){
    colorGrid = $(this).attr("class");
  }

  function changeColor(event){
  //just 'this' cell's background
  //  $(this).toggleClass('red');
  $(this).removeClass();
  $(this).addClass(function(){
    return "cell " + colorGrid;
  });
  }

  function makeGrid (numberOfRows, numberOfCols){
  //let's make some rows and columns and put them in the body
  for(var rowCount = 0; rowCount < numberOfRows; rowCount += 1) {
    var row = $('<tr></tr>');
    for(var colCount = 0; colCount < numberOfCols; colCount += 1){
      var column = $('<td></td>');
      column.addClass('cell');
      row.append(column);
    }
    canvas.append(row);
  }
}



}());
