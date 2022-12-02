const {expect} = require('chai')

let colors = [];

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            colors.push(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`)
            console.log(push[i]);
        }
    }
    return majorColors.length * minorColors.length;
}

result = print_color_map();
expect(result).equals(25);
for(let x = 1; x < colors.length(); x++){
    expect(colors[x-1].length()).equals(colors[x].length());
}
console.log('All is well (maybe!)');
