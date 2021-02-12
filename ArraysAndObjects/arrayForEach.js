// for each element call a function
let dwarves = ['Bifur', 'Bofur', 'Bomber', 'Fili', 'Kili', 'Oin', 'Gloin', 'Thorin', 'Balin',
    'Dwalin', 'Nori', 'Dori'];

// called function
dwarves.forEach(output);
function output(item, index) {
    console.log(index, item)
}

//anonymous function
dwarves.forEach(function (item, index) {
    if (item === 'Thorin')
        item = item.toUpperCase()
    else
        item = item.toLocaleLowerCase()
    console.log(index, item)
})
