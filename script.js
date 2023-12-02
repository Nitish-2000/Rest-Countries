// var res = document.createElement("div");
var countries = fetch("https://restcountries.com/v2/all")
countries.then((data)=>data.json()).then((data1)=>{
    data1.map((result)=> {
    var div = document.createElement("div");
    div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
    <div class="col">
      <div class="card">
        <img src="${result.flag}" class="card-img-top" alt="country-flag">
        <div class="card-body">
          <h5 class="card-title">${result.name}</h5>
          <p class="card-text"><b><i>Capital: ${result.capital}</i></b></p>
          <p class="card-text"><b><i>Region: ${result.region}</b></p>
          <p class="card-text"><b><i>SubRegion: ${result.subregion}</i></b></p>
          <p class="card-text"><b><i>Population: ${result.population}</i></b></p>
        </div>
      </div>
    </div>
    </div>`;
    document.body.append(div);
    })
});
