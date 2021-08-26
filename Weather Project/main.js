// // console.log('hello')

// // const url = 'https://restcountries.eu/rest/v2/lang/en';

// // async function inIt(){
// //     const response = await fetch(url);
// //     const jsonResponse = await response.json();
// //     console.log(jsonResponse)
// //     return jsonResponse;
// // }
// // inIt();

// // function contriesUSD(contries){
// //     contries.filter((contry)=>{
// //         console.log(contry);
// //     })
    

// // }

// // contriesUSD(inIt)

// // ------------------------------------------------

// // fetch('https://restcountries.eu/rest/v2/lang/en')
// //     .then(response => response.json())
// //     .then(countriesByCurrency)

// // /*Create function that return all the countries which currency be as 
// //   a parameter USD
// //   and create another function that show the name of that countries 
// //   in the console 
// //   */

// // function countriesByCurrency(countries) {
// //     const usdCountries = countries.filter(country => {
// //         return country.currencies.some(currency => currency.code === 'USD')
// //     })
// //     console.log(usdCountries)
// // }

// // ---------------------------------------------

// const URL = "https://restcountries.eu/rest/v2/lang/en";

// /*Create function that return all the countries which currency be as 
//   a parameter USD
//   and create another function that show the name of that countries 
//   in the console 
//   */

// const filterCountriesByCurrency = (countries, currency) => {
//   const filteredCountries = countries.filter(({ currencies }) => {
//     return currencies.some(({ code }) => code === currency);
//   });
//   return filteredCountries;
// };

// const printCountriesName = (countries) => {
//   countries.map(({ name }) => console.log(name));
// };

// fetch(URL)
//   .then((response) => response.json())
//   .then((countries) => {
//     const filteredCountries = filterCountriesByCurrency(countries, "USD");
//     printCountriesName(filteredCountries);
//   });
