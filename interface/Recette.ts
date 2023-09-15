interface Recette {
    titre: string;
    description: string;
    tempsPreparation: number;
    nombrePersonnes: number;
    image: string;
    ingredients: { qty: number; nom: string }[];
    instructions: { texte: string; image?: string }[];
}
