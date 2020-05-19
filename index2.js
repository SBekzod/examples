var rect = require('./rectangle');
var util = require('util');
var promrect = util.promisify(rect);

function solveRect(l, b) {
    console.log("Solving for rectange with l = " + l + " and b = " + b);

    promrect(l, b)
        .then(rectan => {
            console.log("The area equils to ", rectan.perimetr());
        })
        .catch(err => {
            console.log("Minus parametres of l or b", err.message);
        });

    console.log("Say hi");
}

solveRect(2, 5);
// solveRect(4, 5);
// solveRect(-2, 5);
// solveRect(0, 7);

console.log("I also reached here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");