const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch) {
  return cities.filter(place => {
    // 從 RegExp
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);

    // 從 String.indexOf
    // const strIdxCity = place.city.indexOf(wordToMatch);
    // const strIdxState = place.state.indexOf(wordToMatch);
    // return place.city[strIdxCity] || place.state[strIdxState];
  });
}

// 三位數一撇的 helper
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value);
  const html = matchArray
    .map(place => {
      // 為搜尋到的字加上黃色提醒
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
            <li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${numberWithCommas(
                place.population
              )}</span>
            </li>
          `;
    })
    .join("");
  suggestions.html(html);
}

const searchInput = $(".search");
const suggestions = $(".suggestions");
searchInput.on("keyup", displayMatches);
