/*
{
      "id": 2,
      "title": "Farmstead Tofu",
      "description": "This is a dish from rural Hunan province in China and has tofu, some flavouring, and lots of chili peppers.",
      "feeds_this_many": 2,
      "preparation_time": 45,
      "ingredients": [
        {
          "ingredient": "garlic",
          "measure": "1/2 bulb, slice"
        },
        {
          "ingredient": "ginger",
          "measure": "10g, sliced"
        },
        {
          "ingredient": "thai red chillis",
          "measure": "10, finely chopped"
        },
        {
          "ingredient": "large red chillis",
          "measure": "3, chopped"
        },
        {
          "ingredient": "Guilin hot pepper sauce",
          "measure": "1 tbsp"
        },
        {
          "ingredient": "bacon",
          "measure": "2-3 strips, chopped up"
        },
        {
          "ingredient": "green onions",
          "measure": "green parts of one bunch, coarsely chopped"
        },
        {
          "ingredient": "tofu",
          "measure": "1 500g pack, sliced"
        },
        {
          "ingredient": "salt",
          "measure": "1/4 tsp"
        },
        {
          "ingredient": "生抽",
          "measure": "1 tsp"
        }
      ],
      "instructions": [
        {
          "instruction": "Deep fry the tofu slices in hot oil",
          "photo": null
        },
        {
          "instruction": "Remove tofu from pot, put aside oil",
          "photo": null
        },
        {
          "instruction": "Add 2 tbsp oil on high heat.",
          "photo": null
        },
        {
          "instruction": "Add garlic, ginger, chillis, guilin hot papper sauce, bacon.",
          "photo": null
        },
        {
          "instruction": "Cook until garlic a bit soft, maybe 1 mninute.",
          "photo": null
        },
        {
          "instruction": "Add tofu and green onions. Fry 2 minutes",
          "photo": null
        },
        {
          "instruction": "Add salt, stir",
          "photo": null
        },
        {
          "instruction": "Add 生抽, stir",
          "photo": null
        },
        {
          "instruction": "Add 125ml of water, str",
          "photo": null
        },
        {
          "instruction": "Fry for another minute or two, serve over steamed rice.",
          "photo": null
        }
      ],
      "cover_photo": null,
      "keywords": [
        "农家豆腐",
        "tofu",
        "hunan",
        "spicy",
        "chinese"
      ],
      "deleted": true
    },
 */


    export interface IRecette {
        id: number;
        title: string;
        description: string;
        feeds_this_many: number;
        preparation_time: number;
        ingredients: IIngredient[];
        instructions: IInstruction[];
        cover_photo: string;
        keywords: string[];
        deleted: boolean;
    }

    export interface IIngredient {
        ingredient: string;
        measure: string;
    }

    export interface IInstruction {
        instruction: string;
        photo: string;
    }