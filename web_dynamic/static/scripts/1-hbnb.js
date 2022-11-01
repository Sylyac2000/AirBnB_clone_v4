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
});
