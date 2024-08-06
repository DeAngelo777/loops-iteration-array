// Array prototype filter

const numbers = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

//Long version
// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });

//Short version
// const evenNumbers = numbers.filter(number => number % 2 ===0);


// Same with forEach

// let evenNumbers = [];

// numbers.forEach((number) => {
//     if (number % 2 ===0) {
//         evenNumbers.push(number);
//     }
// });


const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1874, end: 2009},
    {name: 'Company Three', category: 'Tech', start: 1981, end: 2003}


];

//Get only retail company
const retailCompanies = companies.filter((company)  => company.category === 'Retail');

console.log(retailCompanies);

//Get companies that started in or after 1980 and ended no more than 2005

const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
console.log(earlyCompanies);

// Get companies that lasted 10 years or more

const longCompanies = companies.filter((company) => company.end - company.start >= 10);

console.log(longCompanies);