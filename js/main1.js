$(function () {

var protests = [
  {
    name: 'City of Refuge: 24 Hour Action for Refugees',
    neighborhood: 'financial district', 
    issue: 'immigration',
    date: 'march 28 (tuesday)',
    link: 'https://www.facebook.com/events/1899030313649428/'
  } , {
    name: 'Cesar Chavez RALLY for New York State Farmworker Rights',
    neighborhood: 'lower manhattan',
    issue: 'immigration',
    tags: ['immigration', 'lowerManhattan'],  
    date: 'march 28 (tuesday)',
    link: 'https://www.facebook.com/events/1381782628547228/'
  }, {
    name: 'ACT UP: 30th Anniversary March and Rally',
    neighborhood: 'greenwich village', 
    issue: 'health care',
    date: 'march 28 (tuesday)',
    link: 'https://www.facebook.com/events/204115296734664/'
  } 
]

$('#finder').click(displayCards);


//console log each item in array

function displayCards() {
  protests.forEach(function(item, index) {
    console.log(protests[index].name);
    console.log(protests[index].neighborhood);
    console.log(protests[index].issue);
    console.log(protests[index].date);
   // var currentHeader = $('.header')[index];
   var currentDate = protests[index].date;
   var currentName = protests[index].name;
   var currentNeighborhood = protests[index].neighborhood;
   var currentIssue = protests[index].issue;
   var currentLink = protests[index].link;
   var currentTagArray = protests[index].tags;
   var currentTags;
   
   currentTagArray.forEach(function(item, index) {
    
   });
   // var currentLink = $('.link')[index];
   // console.log('X: ', item.name);
   // $(currentHeader).html(item.name);
   // $(currentDate).html(item.date);
   // $(currentLink).html(item.link);

   var card = `
      <div class="ui raised card ${currentTags}">
        <div class="content">
          <div class="header">${currentName}</div>
          <div class="meta">
            <span class="date">${currentDate}</span>
            <a href="${currentLink}" target="_blank">more info</a>
          </div>
          <div class="description">
            <p></p>
          </div>
        </div>
      </div>
`;

   $('#results').append(card);

  });
}



var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

});