module.exports = (x, y, callback) => {
    console.log("function passes here")
    if (x <= 0 || y <= 0) {
        setTimeout(() =>
            callback(new Error("Rectangle dimencions should be greater than zero, l ="
             + x + " and b= " + y), null),
            2000);
    }
    else {
        setTimeout(() =>
            callback(null, {
                perimetr: () => 2 * (x + y),
                area: () => (x * y)
            }),
            5000);
    }
}