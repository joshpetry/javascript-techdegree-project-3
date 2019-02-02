// When page first loads, set first text field to focus by default
$('#name').focus();


// "Job Role" section
// Hide other title input field by default
$('#other-title').hide();
// when "other" is selected in "Job Role" drop down - show other title input
function showOtherInput() {
  const title = $('#title').val();
  if (title === 'other') {
    $('#other-title').show();
  };
}
// When job role changes, call function to check if title is set to other
$('#title').change( showOtherInput );


// "T-Shirt Info" section


function checkDesignInput() {

  // Check design value
  if ( $('#design').val() === 'js puns' ) {
    $('#color').val('cornflowerblue');
    $("#color option[value='cornflowerblue']").show();
    $("#color option[value='darkslategrey']").show();
    $("#color option[value='gold']").show();
    $("#color option[value='tomato']").hide();
    $("#color option[value='steelblue']").hide();
    $("#color option[value='dimgrey']").hide();

  } else if ( $('#design').val() === 'heart js' ) {
    $('#color').val('tomato');
    $("#color option[value='cornflowerblue']").hide();
    $("#color option[value='darkslategrey']").hide();
    $("#color option[value='gold']").hide();
    $("#color option[value='tomato']").show();
    $("#color option[value='steelblue']").show();
    $("#color option[value='dimgrey']").show();
  };
}


$('#design').change( checkDesignInput );


/*
<label for="color">Color:</label>
<select id="color">
  <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
  <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
  <option value="gold">Gold (JS Puns shirt only)</option>
  <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
  <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
  <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
</select>
*/
