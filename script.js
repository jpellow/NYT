$(document).ready(function () {
    $("#button").on("click", function() {
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&facet=true&begin_date=20120101&end_date=20120101&api-key="
        var term = $("#term").val();
        //console.log(term);
        var records = $("#records").val();
        //console.log(records);
        var startYear = $("#startYear").val();
        console.log(startYear);
        var endYear = $("#endYear").val();
        console.log(endYear);
    })

});
