$(document).ready(function () {
    $("#button").on("click", function() {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=Q9aJkIiXSXWzACWqx4PHdHikKoQ9KwSs";
        var term = $("#term").val().trim();
        //console.log(term);
        var records = $("#records").val();
        //console.log(records);
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();

        console.log(startYear);
        if (isNaN(startYear)){
            alert("Please enter a start year");
        }
        if (isNaN(endYear)){
            alert("Please enter an end year");
        }
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
       console.log(response);
   })

        console.log(endYear);
    });

});
