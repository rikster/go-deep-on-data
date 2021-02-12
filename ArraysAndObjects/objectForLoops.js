let monsters = {
    'Australia': 'Bunyip',
    'New Zealand': 'Taniwha',
    'Canada': 'Sasquatch',
    'Nepal': 'Yeti',
    'Scotland': 'Lock Ness Monster'
}

// objects dont support array methods
console.log(monsters.length)

//for in works on objects
for (const monstersKey in monsters) {
    console.log(monstersKey)
    console.log(monsters[monstersKey])
    console.log("In", monstersKey, "we have the", monsters[monstersKey])
}

// can be used in arrays too
let names = ['Jeff Lebowski', 'Donnie Kerabatos', 'Walter Sobchak', 'Bunny Lebowski',
    'Karl Hungas', 'Brandt', 'Maude Lebowski', 'Jackie Treehorn' ];

for (const numNamesKey in names) {
    console.log(numNamesKey, ":", names[numNamesKey])
}


