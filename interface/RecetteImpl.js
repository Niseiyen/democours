var RecetteImpl = /** @class */ (function () {
    function RecetteImpl(titre, description, tempsPreparation, nombrePersonnes, image, ingredients, instructions) {
        this.titre = titre;
        this.description = description;
        this.tempsPreparation = tempsPreparation;
        this.nombrePersonnes = nombrePersonnes;
        this.image = image;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
    RecetteImpl.prototype.afficher = function () {
        console.log("Titre : ".concat(this.titre));
        console.log("Description : ".concat(this.description));
        console.log("Temps de pr\u00E9paration : ".concat(this.tempsPreparation, " minutes"));
        console.log("Nombre de personnes : ".concat(this.nombrePersonnes));
        console.log("Image : ".concat(this.image));
        console.log('Ingrédients :');
        this.ingredients.forEach(function (ingredient) {
            console.log("- ".concat(ingredient.qty, " ").concat(ingredient.nom));
        });
        console.log('Instructions :');
        this.instructions.forEach(function (instruction, index) {
            console.log("".concat(index + 1, ". ").concat(instruction.texte));
            if (instruction.image) {
                console.log("   Image : ".concat(instruction.image));
            }
        });
    };
    return RecetteImpl;
}());
var recette1 = new RecetteImpl('Recette de pâtes', 'Une délicieuse recette de pâtes aux légumes.', 30, 4, 'https://example.com/image1.jpg', [
    { qty: 200, nom: 'pâtes' },
    { qty: 100, nom: 'courgettes' },
    { qty: 50, nom: 'tomates cerises' },
], [
    { texte: 'Faire bouillir les pâtes dans de l\'eau salée.' },
    { texte: 'Couper les courgettes en dés.' },
    { texte: 'Mélanger les pâtes cuites avec les légumes.' },
]);
recette1.afficher();
