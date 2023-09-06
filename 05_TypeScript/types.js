// var let const
function f(shouldInitialize) {
    var x; // 3
    //const x = 4; // 5
    x = 20; // 4
    if (shouldInitialize) {
        var x = 10; // 1
        // let x=10;  // 2
    }
    return x;
}
console.log(f(true));
console.log(f(false));
