var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
console.log(characters);

// get length of array
console.log(characters.length);
console.log(characters[characters.length-1]);

// add to end of array
characters.push('Anakin');
characters.push('Obiwan');
console.log(characters);

// remove from end of array
characters.pop();
characters.pop();
console.log(characters);

// add to front of array
characters.unshift('C3P0');
characters.unshift('R2D2');
console.log(characters);

// remove from front of array
console.log(characters.shift());
characters.shift();
console.log(characters);