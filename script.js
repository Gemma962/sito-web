document.getElementById('search').onclick = function() {
    let apiKey = 'a24b079c7b98f0d9de3fa5e898aea7fc';
    let city = document.getElementById('weather').value;
    let uri = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

    var request = new XMLHttpRequest();
    request.open('GET', uri, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(this.response);
            var temp = data.main.temp;
            temp = parseInt(temp) - 273.15; 
            var ris = document.getElementById('ris');
            ris.innerHTML = "A " + city + " ci sono " + temp.toFixed(2) + " gradi.";
            console.log(data);
        } else {
            var ris = document.getElementById('ris');
            ris.innerHTML = "Errore generico";
        }
    };
    request.send();
};
