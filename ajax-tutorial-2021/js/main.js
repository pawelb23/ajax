console.log('Ajax szkolenie 2021');

const countryArray = [];

function showCountries() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            console.log('ok');
            let countries = JSON.parse(this.response);
            // console.log(countries);
            countries.forEach((country, index) => {
                // console.log(country.name.official);
                // const countryCard = document.createElement('p');

                // if (index < 10) {
                //     index = `&nbsp;&nbsp;${index}`;
                //     countryCard.innerHTML = `${index}: ${country.name.official}`;
                //     document.getElementById('feed').appendChild(countryCard);
                // } else {
                //     countryCard.innerHTML = `${index}: ${country.name.official}`;
                //     document.getElementById('feed').appendChild(countryCard);
                // }
                countryArray.push(country.name.official);
                countryArray.sort();
                // console.log(countryArray);
            })
            console.log(countryArray);
            countryArray.forEach((countryTwo, indexTwo) => {
                // console.log(countryArray);
                const countryCard = document.createElement('p');

                if (indexTwo < 10) {
                    var indexCountry = indexTwo;
                    indexTwo = `&nbsp;&nbsp;${indexTwo}`;
                    countryCard.innerHTML = `${indexTwo}: ${countryArray[indexCountry]}`;
                    document.getElementById('feed').appendChild(countryCard);
                } else {
                    countryCard.innerHTML = `${indexTwo}: ${countryArray[indexTwo]}`;
                    document.getElementById('feed').appendChild(countryCard);
                }
            })
        }
    }
    xhr.send()
}

let buttonCountries = document.querySelector('.show-countries');

buttonCountries.addEventListener('click', showCountries);