$(document).ready(function () {
    $("#button").on("click", function() {
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&facet=true&begin_date=" + startYear +"&end_date=20120101&api-key="
        var term = $("#term").val();
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

        console.log(endYear);
    });

});
