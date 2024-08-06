// Array Map

const numbers = [1,2,3,4,5,6,7,8,9,10];

const doubledNumbers = numbers.map(number =>  number * 2);

console.log(doubledNumbers);


// Same with forEach

const doubleNumbers2 = [];

numbers.forEach((number) => {
    doubleNumbers2.push(number * 2);

});

// console.log(doubleNumbers2);


const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1874, end: 2009},
    {name: 'Company Three', category: 'Tech', start: 1981, end: 2003},
    {name: 'Company Four', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Five', category: 'Retail', start: 1874, end: 2009},
    {name: 'Company Six', category: 'Tech', start: 1981, end: 2003}


];

// Create an arrays of company names

const CompanyNames = companies.map((company) => company.name);
// console.log(CompanyNames);


// Create an array with just company and category

// companyNames = companies.map((company) => company.name);
// const companyInfo = companies.map((company) => {
//     return {
//         name: company.name,
//         category: company.category,
//         // start: company.start,
//     };
// });

// console.log(companyInfo);
console.clear();

// Create an array of objects with the name and the legnht of each company in years

const companyYears = companies.map((company) => {
    return {
        name: company.name,
        length: company.end - company.start + ' years',
    };
});

// console.log(companyYears);


// Chain map methods (double sqr root)

const squareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2);

const squareAndDouble3 = numbers.map(function (number) {
    return Math.sqrt(number);
})
.map(function (sqrt) {
    return sqrt * 2;
})
.map(function (sqrtDoubled) {
    return sqrtDoubled*3;
});

console.log(squareAndDouble3);


// Chaining different methods

const evenDouble = numbers
.filter((number) => number % 2 ===0)
.map((number) => number *2);

console.log(evenDouble);