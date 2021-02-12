let names = ['Jeff Lebowski', 'Donnie Kerabatos', 'Walter Sobchak', 'Bunny Lebowski',
            'Karl Hungas', 'Brandt', 'Maude Lebowski', 'Jackie Treehorn' ];
let numNames = names.length;

//intialise; test; increment
// (i, j, etc was used to save memory)
for (let i = 0; i < numNames; i++) {
    console.log(names[i]);
}

// backwards
for (let i = numNames-1 ; i > 0; i--) {
    console.log(names[i]);
}

// values
for (const name of names) {
    console.log(name)
}

// keys
for (const numNamesKey in names) {
    console.log(numNamesKey)
}

