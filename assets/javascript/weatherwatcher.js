

var firebaseConfig = {
  apiKey: "AIzaSyCe5nF0tPdPYk__wVNJTJO2-iWV6547fAg",
  authDomain: "flightsandfahrenheit.firebaseapp.com",
  databaseURL: "https://flightsandfahrenheit.firebaseio.com",
  projectId: "flightsandfahrenheit",
  storageBucket: "",
  messagingSenderId: "507367803069",
  appId: "1:507367803069:web:36fdaf156df85aa3e84fd4"
};
//code from Francisco
// var firebaseConfig = {
//     apiKey: "AIzaSyDORWg5o64fPN4R0Cnt1DlwC_8dWfEhI4U",
//     authDomain: "flights-and-fahrenheit.firebaseapp.com",
//     databaseURL: "https://flights-and-fahrenheit.firebaseio.com",
//     projectId: "flights-and-fahrenheit",
//     storageBucket: "flights-and-fahrenheit.appspot.com",
//     messagingSenderId: "15407877860",
//     appId: "1:15407877860:web:a9fe39f08a0be2871426f1"
//   };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// firebaseConfig.initializeApp(firebaseConfig);

var database = firebase.database();

var long = 0;
var lat = 0;
var weather = [];
$(document).ready(function() {

  $("#add-gif").on("click", function() {
    event.preventDefault();
    console.log(5);
    var airSettings = {
      "async": false,
      "crossDomain": true,
      "url": "https://aerodatabox.p.rapidapi.com/flights/DL47",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
        "x-rapidapi-key": "91517b45bamsh422e95c783d3857p157a15jsne3d2bb772529"
      }
    }
    console.log(airSettings);

    $.ajax(airSettings).done(function (response) {
      console.log(response);
    });
    
    var weatherSettings = {
      "async": true,
      "crossDomain": true,
      "url": "https://weather2020-weather-v1.p.rapidapi.com/e8ecee8ff60c478f8a36280fea0524fe/39.0997,94.5783",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "weather2020-weather-v1.p.rapidapi.com",
        "x-rapidapi-key": "91517b45bamsh422e95c783d3857p157a15jsne3d2bb772529"
      }
    }
    console.log(weatherSettings);
    $.ajax(weatherSettings).done(function (resp) {
      console.log(resp);
    });

  });
});





  //var query = $(this).attr("data-name");
  //console.log("query is " + query);
 // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=ttW7fYuN6GCKvPWa0Vn5T0Lox99zjQT2&limit=10&rating=pg-13&offset="+random;

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  //   }).then(function(response) {
  //     console.log(response.data);
  //     gif=response.data;
  //     console.log("random is "+ random);
  //       if (random==0){
  //         populateGif(); 
  //         random+=10;  
  //       } else {
  //         gifArrayPersistence();   
  //       }
  //   });

  //}

  // Function for displaying movie data
  // function renderButtons() {
  //   $("#buttons-view").empty();
  //   // Looping through the array of movies
  //   for (var i = 0; i < topics.length; i++) {
  //     var a = $("<button>");
  //     a.addClass("gif-btn");
  //     a.attr("data-name", topics[i]);
  //     a.append(topics[i]);
  //     $("#buttons-view").append(a);
  //   }
  // }
  // function populateGif() {
  //   //$("#gif-view").empty();
  //   // Looping through the array of gifs from Response
  //   for (var i = 0; i < gif.length; i++) {       
  //     gifArray.push(gif[i]);
  //     var gifDiv = $("<p class='gif'>");
  //     gifDiv.addClass('gif col-md-4 ');
  //     //gifDiv.attr("data-name", gif[i]);
  //     gifDiv.append('<img class="gifStill" src='+gif[i].images.fixed_height_still.url + ' data-still=' + gif[i].images.fixed_height_still.url + ' data-load=' + gif[i].images.fixed_height.url + ' data-state="still"/>');
  //     gifDiv.append('<span class="label rated label-default">Rated: '+gif[i].rating.toUpperCase() + '</span>'+'<p></p>');
  //     gifDiv.append('<span class="label title label-default">Title: '+gif[i].title + '</span>'+'<p></p>');
  //     $("#gif-view").append(gifDiv);   
  //   }
  // };

  // // This function handles events where a gif category button is clicked and added to array
  // $("#add-gif").on("click", function(event) {
  //   event.preventDefault();
  //   var gifTopic = $("#gif-input").val().trim();
  //   //console.log("this is gifTopic " + gifTopic);
  //   // Adding gif category from the textbox to our array
  //   topics.push(gifTopic);
  //  // Calling renderButtons which handles the processing of our GIF array
  //   renderButtons();
  //   displayGifInfo();
  // });