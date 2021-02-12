var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
console.log(characters);

//replace 1st item
characters.splice(0,1, 'Rey');
console.log(characters);

//replace middle 2 items w/ Kylo
characters.splice(1, 2, 'Kylo');
console.log(characters);

//replace Kylo w/ CP30 & R2D2
characters.splice(1, 1,'CP30', 'R2D2');
console.log(characters)

// delete middle 2 items
characters.splice(1, 2 );
console.log(characters);

// add items
characters.push('BB8');
characters.push('Obiwan');
console.log(characters);

// sorting
characters.reverse();
console.log(characters);

characters.sort();
console.log(characters);

// find an item (-1 mean not found)
var position = characters.indexOf('Chewie');
console.log(position);

//find an item (-1 mean not found), start from back
position = characters.lastIndexOf('Chewie');
console.log(position); // should be 3?

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52"


