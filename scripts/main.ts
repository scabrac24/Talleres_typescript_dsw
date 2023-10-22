
import { Serie } from "./serie.js";

import { dataSeries } from "./dataSeries.js";


let seriesTbody: HTMLElement = document.getElementById("series")!;
const averageSeasons: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(dataSeries);

averageSeasons.innerHTML = `${getSeasonsAverage(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td style="color: blue; text-decoration: underline;">${c.serie_name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
                           
    seriesTbody.appendChild(trElement);
  });
}

function getSeasonsAverage(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons/series.length;
  }




function showSerieInformation(serie: Serie) {

  const serieInfoDiv = document.getElementById('serieInfo');

  if (serieInfoDiv) {
    
    const cardHtml = `
      <div class="card">
      <img src=${serie.image} class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${serie.serie_name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.channel_url}" class="btn btn-primary">Ver en el canal</a>
        </div>
      </div>
    `;

    serieInfoDiv.innerHTML = cardHtml;
  }
}


const seriesNombres = document.querySelectorAll('#series td:nth-child(2)');


seriesNombres.forEach((nombre, index) => {
  nombre.addEventListener('click', () => {
    showSerieInformation(dataSeries[index]);
  });
});

