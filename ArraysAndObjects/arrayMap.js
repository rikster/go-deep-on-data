let dwarves = ['Bifur', 'Bofur', 'Bomber', 'Fili', 'Kili', 'Oin', 'Gloin', 'Thorin', 'Balin',
    'Dwalin', 'Nori', 'Dori'];

// determine the length of each name asn save it in an Array
// forEach leaves original array, map returns a new array
let nameLengths = dwarves.map(function (item, index, array) {
    len = item.length
    return item + " length is " + len + " chars";
})

console.log(nameLengths)