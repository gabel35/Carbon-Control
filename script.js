function clear() {
  $("#resultDiv").empty();
}




$("#countryCode").keypress(function(event) {
  clear();
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == "13") {
    event.preventDefault();
    var countryName = $("#countryCode").val().trim();
    console.log(countryName);
    var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName;
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        for (var i = 0;i<response.length;i++){
          var curDiv = $("#resultDiv");
          var spaceBrk = $("<br>");
          countryName = response[i].name;
          var resultName = $("<p id='countryP'>").text("Country: " + countryName);
          curDiv.append(resultName);
      
          //grabbing all currencies that the country uses and their info//
          for (var c = 0; c<response[i].currencies.length; c++){
            var countryCurrency = {
              code: response[i].currencies[c].code,
              name: response[i].currencies[c].name,
              symbol: response[i].currencies[c].symbol
            };
            var resultCurrencyC = $("<p class='currencyP'>").text("Currency Code: " + countryCurrency.code);
            var resultCurrencyN = $("<p class='currencyP'>").text("Currency Name: " + countryCurrency.name);
            var resultCurrencyS = $("<p class='currencyP'>").text("Currency Symbol: " + countryCurrency.symbol);
            curDiv.append(resultCurrencyC);
            curDiv.append(resultCurrencyN);
            curDiv.append(resultCurrencyS);
            curDiv.append(spaceBrk)
          }
          curDiv.append(spaceBrk);
        } 
      })
  };
})



// $("#thatBtn").on("click", function(event) {
//   event.preventDefault();
//   clear();
// var countryName = $("#countryCode").val().trim();
// console.log(countryName);
// var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName;
//   //pulling user input for country name for API search//
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//   .then(function(response) {
//     console.log(queryURL);
//     console.log(response);

//     //grabbing the country name, its capital, an population size from the API and other variables//
//     for (var i = 0;i<response.length;i++){
//       var curDiv = $("#resultDiv");
//       countryName = response[i].name;
//       var capitalCity = response[i].capital;
//       var countryPop = response[i].population;
//       var resultName = $("<p>").text("Country: " + countryName);
//       var resultCapCity = $("<p>").text("Capital City: " + capitalCity);
//       var resultPop = $("<p>").text("Population Size: " + countryPop);
//       curDiv.append(resultName);
//       curDiv.append(resultCapCity);
//       curDiv.append(resultPop);
  
//       //grabbing all currencies that the country uses and their info//
//       for (var c = 0; c<response[i].currencies.length; c++){
//         var countryCurrency = {
//           code: response[i].currencies[c].code,
//           name: response[i].currencies[c].name,
//           symbol: response[i].currencies[c].symbol
//         };
//         var resultCurrencyC = $("<p>").text("Currency Code: " + countryCurrency.code);
//         var resultCurrencyN = $("<p>").text("Currency Name: " + countryCurrency.name);
//         var resultCurrencyS = $("<p>").text("Currency Symbol: " + countryCurrency.symbol);
//         curDiv.append(resultCurrencyC);
//         curDiv.append(resultCurrencyN);
//         curDiv.append(resultCurrencyS);
//       }   

//       //grabbing all the languages that the country uses En and Native language bersion//
//       for (var l = 0; l<response[i].languages.length; l++) {
//         var countryLang = response[i].languages[l].name;
//         var resultLang = $("<p>").text("Language in English: " + countryLang);
//         curDiv.append(resultLang);
  
//         var countryNativeLang = response[i].languages[l].nativeName;
//         var resultNativeLang = $("<p>").text("Language in Native Language: " + countryNativeLang);
//         curDiv.append(resultNativeLang);
//         var breakDiv = $("<br>");
                  
//       }
  
//       curDiv.append(breakDiv)
//     }
//   })
// })
    

  
  
  

// API key = b1785630c546994e1265e973c055fa4a09c9f1a5
  //  Currency convert GET: https://api.getgeoapi.com/api/v2/currency/convert
  //  Currency list GET: https://api.getgeoapi.com/api/v2/currency/list
  //  Historical Conversion rate GET: https://api.getgeoapi.com/api/v2/currency/historical/{YYYY-MM-DD}
          
var listQueryURL = "https://api.getgeoapi.com/api/v2/currency/list?api_key=b1785630c546994e1265e973c055fa4a09c9f1a5&format=json";
  
$.ajax({
  url: listQueryURL,
  method: "GET"
}).then(function(listResponse) {
  console.log(listResponse)
});
  
  
$("#convert").on("click", function(event){
  event.preventDefault();
  console.log("clicked")
  var country1 = $("#country1").val()
  var country2 = $("#country2").val()
  var amount = $("#amount").val()
  var convertQueryURL = "https://api.getgeoapi.com/api/v2/currency/convert?api_key=b1785630c546994e1265e973c055fa4a09c9f1a5&from=" + country1 + "&to=" + country2+ "&amount=" + amount + "&format=json";
  
  $.ajax({
    url: convertQueryURL,
    method: "GET"
  }).then(function(conversionResponse) {
    console.log(conversionResponse)
        
    console.log(conversionResponse.amount)
    var convertedAmount = conversionResponse.rates[country2].rate_for_amount
    convertedAmount = parseFloat(convertedAmount).toFixed(2)
         
    // let convertedArray = convertedAmount.split(".")
  
    console.log(convertedAmount)
    console.log(parseFloat(convertedAmount).toFixed(2))
    $("#display-conversion").text(convertedAmount)
         
  });
        
});
         
  
  
  
    
//  $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     .then(function(response) {
//       console.log(queryURL);
//       console.log(response);
//  })
// API key = b1785630c546994e1265e973c055fa4a09c9f1a5
//  Currency convert GET: https://api.getgeoapi.com/api/v2/currency/convert
//  Currency list GET: https://api.getgeoapi.com/api/v2/currency/list
//  Historical Conversion rate GET: https://api.getgeoapi.com/api/v2/currency/historical/{YYYY-MM-DD}
        
var listQueryURL = "https://api.getgeoapi.com/api/v2/currency/list?api_key=b1785630c546994e1265e973c055fa4a09c9f1a5&format=json";

$.ajax({
  url: listQueryURL,
  method: "GET"
}).then(function(listResponse) {
  console.log(listResponse)
});


$("#convert").on("click", function(event){
  event.preventDefault();
  console.log("clicked")
  var country1 = $("#country1").val()
  var country2 = $("#country2").val()
  var amount = $("#amount").val()
  var convertQueryURL = "https://api.getgeoapi.com/api/v2/currency/convert?api_key=b1785630c546994e1265e973c055fa4a09c9f1a5&from=" + country1 + "&to=" + country2+ "&amount=" + amount + "&format=json";

  $.ajax({
    url: convertQueryURL,
    method: "GET"
  }).then(function(conversionResponse) {
    console.log(conversionResponse)
      
    console.log(conversionResponse.amount)
    var convertedAmount = conversionResponse.rates[country2].rate_for_amount
    convertedAmount = parseFloat(convertedAmount).toFixed(2)
       
    // let convertedArray = convertedAmount.split(".")

    console.log(convertedAmount)
    console.log(parseFloat(convertedAmount).toFixed(2))
    $("#display-conversion").text(convertedAmount)
       
  });
      
});
       


