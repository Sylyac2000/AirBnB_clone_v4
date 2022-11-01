$(document).ready(function () {
/*****************************************************
    display list of checkboxes clicked
   *****************************************************/
  let lstAmenity = [];
  $('input[type=checkbox]').change(function () {
    const name = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      lstAmenity.push(name);
    } else {
      lstAmenity = lstAmenity.filter(amen => amen !== name);
    }
    $('.amenities h4').text(lstAmenity.join(', '));
  });

  /*******************************************************
      display red circle at top right, if status ok
  *******************************************************/
  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    dataType: 'json',
    success: function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
