function multiply(number, multiplyBy = 2) {
    return number * multiplyBy;
}

console.log(multiply(3));

function getCountryCode(country, code = country.toUpperCase().slice(0,3)) {
    console.log("Wykonuję funkcję getCountryCode");

    return {
        country,
        code
    }
}

console.log(getCountryCode("Polska"));

function getContryInfo(countryInfo = getCountryCode("Polska")) {
    return "Państwo to " + countryInfo.country + ", a jego kod to " + countryInfo.code;
}

console.log(getContryInfo());
console.log(getContryInfo({country: "Germany", code: "GER"}));