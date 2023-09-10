let key = "70fbe850b06ac5d1a69e3435e0b94209";
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai";
let inp = document.querySelector("#search");
let cityName = document.querySelector(".city");
async function getWheather(city) {
    try {
        let res = await axios.get(url + `&appid=${key}&q=${city}`);
        console.log(res);
        console.log(res.data.main.humidity);
        console.log(res.data.main.temp);
        console.log(res.data.wind.speed);
        return res;
    } catch(e) {
        console.log(e);
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=> {

    console.log(inp.value);
    let city = inp.value;
    let res = await getWheather(city);
    cityName.innerText = city;
    console.log(res);
    let temp = document.querySelector(".temp");
    let humidity = document.querySelector(".humidity");
    let speed = document.querySelector(".wind");

    let t = `${res.data.main.temp}°C`
    temp.innerHTML = t;
    humidity.innerText = res.data.main.humidity;
    speed.innerText = res.data.wind.speed;
    inp.innerText = "";
    setBack(temp);
});
let back = document.querySelector(".wheater-icon");
function setBack(temp) {
    if(temp<20) {
        back.src = "snow.png";
    }
}

