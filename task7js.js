var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    var res = JSON.parse(req.response);
    var asiacon = res.filter(country => country.region === "Asia");
    console.log("Countries in Asia:", asiacon);


    var lesspop = res.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", lesspop);


    res.forEach(country => {
        console.log(country.name.common,country.capital,country.flags.svg);
    });

    
    var total = res.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of countries:", total);

    // Print the country that uses US dollars as currency
    var usdcur = res.find(country => country.currencies.USD);
    console.log("Country that uses US dollars as currency:", usdcur);
}
