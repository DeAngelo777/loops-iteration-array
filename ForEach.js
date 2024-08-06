const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//     console.log(item);
// });

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);


const socialObj = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://Facebook.com'},
    {name: 'LinkedIn', url: 'https://LinkedIn.com'},
    {name: 'Instagram', url: 'https://Instagram.com'},

];

socialObj.forEach((item) => console.log(item.url));