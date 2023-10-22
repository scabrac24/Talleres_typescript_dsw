import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById("series");
var averageSeasons = document.getElementById("average-seasons");
renderSeriesInTable(dataSeries);
averageSeasons.innerHTML = "".concat(getSeasonsAverage(dataSeries));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td style=\"color: blue; text-decoration: underline;\">").concat(c.serie_name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
function showSerieInformation(serie) {
    var serieInfoDiv = document.getElementById('serieInfo');
    if (serieInfoDiv) {
        var cardHtml = "\n      <div class=\"card\">\n      <img src=".concat(serie.image, " class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(serie.serie_name, "</h5>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          <a href=\"").concat(serie.channel_url, "\" class=\"btn btn-primary\">Ver en el canal</a>\n        </div>\n      </div>\n    ");
        serieInfoDiv.innerHTML = cardHtml;
    }
}
var seriesNombres = document.querySelectorAll('#series td:nth-child(2)');
seriesNombres.forEach(function (nombre, index) {
    nombre.addEventListener('click', function () {
        showSerieInformation(dataSeries[index]);
    });
});
