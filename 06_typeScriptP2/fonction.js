// Fonction 'is' qui prend des arguments de type T et les compare
function is() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Vérifie que tous les éléments dans le tableau sont égaux
    for (var i = 1; i < args.length; i++) {
        if (args[i] !== args[i - 1]) {
            return false;
        }
    }
    return true;
}
// Exemples d'utilisation
console.log(is('string', 'otherstring')); // false
console.log(is(true, false)); // false
console.log(is(42, 42)); // true
// Erreur de compilation pour des types différents
// is(10, 'foo'); // Ceci générera une erreur de compilation
console.log(is([1], [1, 2], [1, 2, 3])); // false
