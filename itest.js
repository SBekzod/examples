var rect = require('./rectangle');

async function solveRect(l, b) {
    console.log("Solving for rectange with l = " + l + " and b = " + b);


    const data = await rect(l, b);
    if (data) {
        console.log("Answer" + data.area);
    }


    console.log("Say hi");
}

solveRect(2, 5);
// solveRect(4, 5);
// solveRect(-2, 5);
// solveRect(0, 7);

console.log("I also reached here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");