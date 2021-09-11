var x = document.getElementById("locName");
const apiKey = "cd2e66ad6ceb4003beb9dd7fae853fb3"

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }


function showPosition(position) {

    let geo = "https://api.opencagedata.com/geocode/v1/json?q="+position.coords.latitude+"+"+position.coords.longitude+"&key="+apiKey; 
    console.log(geo);

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      const myArr = JSON.parse(this.responseText);
      let disName =myArr.results[0].components.state_district.split("District")
      x.innerHTML = disName[0];
    }
    xmlhttp.open("GET", geo, true);
    xmlhttp.send();
}


