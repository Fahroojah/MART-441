$(document).ready(function() {
    // AJAX request to fetch data from the API
    $.ajax({
        url: 'https://api.exchangerate-api.com/v4/latest/USD',
        type: 'GET',
        success: function(response) {
            // Call the function to display data when the request is successful
            displayExchangeRates(response);
        },
        error: function() {
            // Display an error message if the request fails
            $('#exchange-rate-container').append('<p>Error loading data</p>');
        }
    });

    // Function to process and display the exchange rates
    function displayExchangeRates(data) {
        var rates = data.rates;
        var ratesDiv = $('#rates');
        ratesDiv.empty(); // Clear any existing content

        $.each(rates, function(currency, rate) {
            // Append each rate to the 'rates' div
            ratesDiv.append('<p>' + currency + ': ' + rate + '</p>');
        });
    }
});
