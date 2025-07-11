const button = document.getElementById("button");
async function getData(lat,long)
{
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=70ae6ad8ee67407da94123824251007&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();
}
async function gotlocation(position)
{
    const result = await getData(position.coords.latitude,position.coords.longitude);
    console.log(result);
}
function failedtogetlocation()
{
    console.log('there was issue');
}
button.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(gotlocation,failedtogetlocation)
})