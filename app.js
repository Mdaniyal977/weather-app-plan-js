// let menu = document.querySelector('#menu-btn');
// let header = document.querySelector('.header');

// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     header.classList.toggle('active');
// }

// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     header.classList.remove('active');
// }

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

// const optionss = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b4df3597abmsh20750d38dbd1f5cp1f03ddjsnbb971f9f7e9d',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };


//  const getweather = (city)=>{
//  cityname.innerHTML=city
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather'+ city, optionss)
// 	.then(response => response.json())
// 	.then(response =>{

//                 console.log(response)
//                 temp.innerHTML = response.temp
//                 feels_like.innerHTML = response.feels_like
//                 humidity.innerHTML = response.humidity
//                 console.log(city)
//             }
//     )
// 	.catch(err => console.error(err));
//         }
//         submit.addEventListener("click",(e)=>{
//     getweather(city.value)
// })
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b4df3597abmsh20750d38dbd1f5cp1f03ddjsnbb971f9f7e9d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const araay = ["lahore", "karachi", "multan", "Faisalabad", "Rawalpindi", "Gujranwala", "Peshawar", "Hyderabad", "Islamabad", "Quetta"];

const getweathero = (araay) => {
    //  console.log(cityname)
    for (var key in araay) {

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + araay[0], options)

            .then(response => response.json())
            .then(response => {
                console.log(response)
                city1.innerHTML = araay[0]
                temp1.innerHTML = response.temp
                feel_like1.innerHTML = response.feels_like
                humidity1.innerHTML = response.humidity
            })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + araay[1], options)

            .then(response => response.json())
            .then(response => {

                console.log(response)
                city2.innerHTML = araay[1]
                temp2.innerHTML = response.temp
                feel_like2.innerHTML = response.feels_like
                humidity2.innerHTML = response.humidity
            })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + araay[2], options)

            .then(response => response.json())
            .then(response => {

                console.log(response)
                city3.innerHTML = araay[2]
                temp3.innerHTML = response.temp
                feel_like3.innerHTML = response.feels_like
                humidity3.innerHTML = response.humidity
            })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + araay[3], options)

            .then(response => response.json())
            .then(response => {

                console.log(response)
                city4.innerHTML = araay[3]
                temp4.innerHTML = response.temp
                feel_like4.innerHTML = response.feels_like
                humidity4.innerHTML = response.humidity
            })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + araay[4], options)

            .then(response => response.json())
            .then(response => {

                console.log(response)
                city5.innerHTML = araay[4]
                temp5.innerHTML = response.temp
                feel_like5.innerHTML = response.feels_like
                humidity5.innerHTML = response.humidity
            })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + araay[5], options)

            .then(response => response.json())
            .then(response => {

                console.log(response)
                city6.innerHTML = araay[5]
                temp6.innerHTML = response.temp
                feel_like6.innerHTML = response.feels_like
                humidity6.innerHTML = response.humidity
            })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + araay[6], options)

            .then(response => response.json())
            .then(response => {

                console.log(response)
                city7.innerHTML = araay[6]
                temp7.innerHTML = response.temp
                feel_like7.innerHTML = response.feels_like
                humidity7.innerHTML = response.humidity
            })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + araay[7], options)

            .then(response => response.json())
            .then(response => {

                console.log(response)
                city8.innerHTML = araay[7]
                temp8.innerHTML = response.temp
                feel_like8.innerHTML = response.feels_like
                humidity8.innerHTML = response.humidity
            })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + araay[8], options)

            .then(response => response.json())
            .then(response => {

                console.log(response)
                city9.innerHTML = araay[8]
                temp9.innerHTML = response.temp
                feel_like9.innerHTML = response.feels_like
                humidity9.innerHTML = response.humidity
            })

                fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ araay[9] , options)
            
                .then(response => response.json())
                .then(response => {
                    
                    console.log(response)
                    city10.innerHTML=araay[9]
                    temp10.innerHTML=response.temp
                    feel_like10.innerHTML=response.feels_like
                    humidity10.innerHTML=response.humidity
                })
            
            .catch(err => console.error(err));
    }
}



addEventListener("DOMContentLoaded", (e) => {
    getweathero(araay)
}
)

const getweather = (city) => {
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            console.log(city)
        }
        )
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    getweather(city.value)
})