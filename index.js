var rect = {
    perimetr: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
}

function solveRect(l, b) {
    console.log("Solving for rectange with l = " + l + " and b = " + b);
    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimencions should be greater than zero, l =" + l + " and b= " + b);
    }
    else {
        console.log("The perinmetr of rectangle is " + rect.perimetr(l, b));
        console.log("The area of rectangle is " + rect.area(l, b));
    }
}

solveRect(2, 5);
solveRect(4, 5);
solveRect(-2, 5);
solveRect(0, 7);