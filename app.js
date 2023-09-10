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
    let tempForFunc = res.data.main.temp;
    let humiForFunc = res.data.main.humidity;;
    let t = `${res.data.main.temp}°C`
    temp.innerHTML = t;
    humidity.innerText = res.data.main.humidity;
    speed.innerText = res.data.wind.speed;
    inp.innerText = "";
    setBack(tempForFunc, humiForFunc );
});
let back = document.querySelector(".wheater-icon");
function setBack(temp,humidity) {
    if(temp<20) {
        back.src = "snow.png";
    } else if(temp>=20 &&temp <=40) {
        back.src = "clear.png";
    }

    if(humidity > 60 && humidity < 70) {
        back.src = "mist.png";
    } else if(humidity >= 70 && humidity < 85) {
        back.src = "drizzle.png";
    }  else {
        console.log(`else humidity is ${humidity}`);
        back.src = "rain.png";
    }
}

