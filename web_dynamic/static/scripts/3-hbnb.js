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

  /*******************************************************
    populate places section from api
   *******************************************************/
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify({}),
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        $('section.places').append('<article><div class="title"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + data[i].max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + data[i].number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + data[i].number_bathrooms + ' Bathroom</div></div><div class="description">' + data[i].description + '</div></article>');
      }
    }
  });
});
