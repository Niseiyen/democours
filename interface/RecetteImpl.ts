class RecetteImpl implements Recette {
    constructor(
      public titre: string,
      public description: string,
      public tempsPreparation: number,
      public nombrePersonnes: number,
      public image: string,
      public ingredients: { qty: number; nom: string }[],
      public instructions: { texte: string; image?: string }[]
    ) {}

    afficher() {
      console.log(`Titre : ${this.titre}`);
      console.log(`Description : ${this.description}`);
      console.log(`Temps de préparation : ${this.tempsPreparation} minutes`);
      console.log(`Nombre de personnes : ${this.nombrePersonnes}`);
      console.log(`Image : ${this.image}`);
  
      console.log('Ingrédients :');
      this.ingredients.forEach((ingredient) => {
        console.log(`- ${ingredient.qty} ${ingredient.nom}`);
      });
  
      console.log('Instructions :');
      this.instructions.forEach((instruction, index) => {
        console.log(`${index + 1}. ${instruction.texte}`);
        if (instruction.image) {
          console.log(`   Image : ${instruction.image}`);
        }
      });
    }
  }
  const recette1 = new RecetteImpl(
    'Recette de pâtes',
    'Une délicieuse recette de pâtes aux légumes.',
    30,
    4,
    'https://example.com/image1.jpg',
    [
      { qty: 200, nom: 'pâtes' },
      { qty: 100, nom: 'courgettes' },
      { qty: 50, nom: 'tomates cerises' },
    ],
    [
      { texte: 'Faire bouillir les pâtes dans de l\'eau salée.' },
      { texte: 'Couper les courgettes en dés.' },
      { texte: 'Mélanger les pâtes cuites avec les légumes.' },
    ]
  );

  recette1.afficher();