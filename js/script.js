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
// Change color options based on selected design
function changeColorOptions() {

  function showHide(optionValue, action) {
    $(`#color option[value='${optionValue}']`)[action]();
  };

  if ( $('#design').val() === 'js puns' ) {
    // Change default color value
    $('#color').val('cornflowerblue');
    // Show/Hide color options - using the showHide function
    showHide('cornflowerblue', 'show');
    showHide('darkslategrey', 'show');
    showHide('gold', 'show');
    showHide('tomato', 'hide');
    showHide('steelblue', 'hide');
    showHide('dimgrey', 'hide');
  } else if ( $('#design').val() === 'heart js' ) {
    // Change default color value
    $('#color').val('tomato');
    // Show/Hide color options
    $("#color option[value='cornflowerblue']").hide();
    $("#color option[value='darkslategrey']").hide();
    $("#color option[value='gold']").hide();
    $("#color option[value='tomato']").show();
    $("#color option[value='steelblue']").show();
    $("#color option[value='dimgrey']").show();
  };
}
// When design input change, call function to change color options
$('#design').change( changeColorOptions );
