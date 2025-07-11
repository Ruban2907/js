const button = document.getElementById("search");
const input = document.getElementById("input");
const cityname = document.getElementById("city");
const local = document.getElementById("localtime");
const degree = document.getElementById("temp");
async function getData(cityname)
{
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=70ae6ad8ee67407da94123824251007&q=${cityname}&aqi=yes`
    );
    return await promise.json();
}
button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    cityname.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
    local.innerText = result.location.localtime;
    degree.innerText = result.current.temp_c;
})