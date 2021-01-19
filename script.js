// Filter out countries
// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
// 2.	Find the country containing the hightest number of characters in the countries array
// 3. Sort the countries by length of characters in the countries array
// 4.	Extract all the countries containing only four characters from the countries array and print it as array
// 5.	Extract all the countries containing two or more words from the countries array and print it as array
// 6.	Reverse the countries array and capitalize each country and stored it as an array.
// 7.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.

const countries = [
	'Albania',
	'bolivia',
	'Canada',
	'Bali',
	'denmark',
	'czech republic',
	'ethiopia',
	'Finland',
	'Germany',
	'hungary',
	'Ireland',
	'Japan',
	'Kenya',
	'United States',
];

//Step-1

const countryWithLand = (arr) => {
	return arr.filter((country) => country.includes('land'));
};

console.log(countryWithLand(countries));

//Step-2

const maxLength = (arr) => {
	let max = arr[0].length;
	let res = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > max) {
			max = arr[i].length;
			res = arr[i];
		}
	}
	return `${res} has ${max} characters including space`;
};

console.log(maxLength(countries));

//Step-3

const sortByLength = (arr) => {
	return arr.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(countries));

//Step-4

const findWithFour = (arr) => {
	return arr.filter((country) => country.length == 4);
};

console.log(findWithFour(countries));

//Step-5

const findWithTwoWords = (arr) => {
	return arr.filter((country) => country.split(' ').length == 2);
};

console.log(findWithTwoWords(countries));

//Step-6

const reverseCapitalize = (arr) => {
	return arr.reverse().map((country) => country.toUpperCase());
};
console.log(reverseCapitalize(countries));

//Step-7

const addLand = (arr) => {
	return arr
		.filter((country) => !country.includes('land'))
		.map((country) => country + 'land');
};

console.log(addLand(countries));
