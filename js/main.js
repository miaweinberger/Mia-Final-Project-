$(function() {
    
  var config = {
    apiKey: "AIzaSyBbSJKpSy8AI_jQfwQlGL1agDNmaOf6AbQ",
    authDomain: "protests-2d81b.firebaseapp.com",
    databaseURL: "https://protests-2d81b.firebaseio.com",
    storageBucket: "protests-2d81b.appspot.com",
    messagingSenderId: "392531691793"
  };
  firebase.initializeApp(config);

  var dbReferenceProtests = firebase.database().ref().child('protests');

  console.log(dbReferenceProtests);


  $('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
  });

  $('#finder').click(findProtest);
  $('#createProtest').submit(createProtest);

  function findProtest() {
    //1. get values from selects
    var issue = $('#issueFinder').val();
    var neighborhood = $('#neighborhoodFinder').val();
    var results

    if (issue === null && neighborhood === null) {
      alert('Whoa there! Please select an issue and/or neighborhood.');
    } else if (issue === "immigration" && neighborhood === "upper west side") {
      console.log('immigration march at columbus circle');
    }
      else {
      console.log('issue:', issue);
      console.log('neighborhood:', neighborhood);
    }
  }

  function createProtest(event) {
    event.preventDefault();

    var issue = $('#issue').val();
    console.log(issue);
    console.log('about to push')

      // create task and send it to firebase
    var newProtest = dbReferenceProtests.push();

    console.log('made it here');
    newProtest.set({
      name: "march"
    });

  }


    //1a. check if values have been entered

    //1b. console log

  
});