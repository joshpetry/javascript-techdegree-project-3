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
// Hide other title input field by default
