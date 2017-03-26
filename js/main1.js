$(function () {

var protests = [
  {
    name: 'City of Refuge: 24 Hour Action for Refugees',
    neighborhood: 'financial district', 
    issue: 'immigration'
  } , {
    name: 'Cesar Chavez RALLY for New York State Farmworker Rights',
    neighborhood: 'lower manhattan',
    issue: 'immigration'
  }, {
    name: 'ACT UP: 30th Anniversary March and Rally',
    neighborhood: 'greenwich village', 
    issue: 'health care'
  } 
]

$('#finder').click(showResults);

function showResults() {
// $('#results').append(protests[0].name);
$('.header').html(protests[0].name);
}


});