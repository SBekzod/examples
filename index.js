var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving for rectange with l = " + l + " and b = " + b);

    rect(l, b, (err, rectan) => {
        if (err) {
            console.log("Minus parametres of l or b", err.message);
        } else {
            console.log("The area equils to ", rectan.area());
        }
    });

    console.log("Say hi");
}

solveRect(2, 5);
solveRect(4, 5);
solveRect(-2, 5);
solveRect(0, 7);

console.log("I also reached here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");