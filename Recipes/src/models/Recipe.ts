import { Kategory } from "./Kategory";

export class Recipe {
    arr: string[];
    constructor(public CodeRecipe: number, public NameRecipe: string,
        public CodeKatgory: number,
        public OrderTime: number, public Label: number, public DateAdd: Date,
        public Ingredients: string[], public Preparation: string[],
        public UserCode: number, public UrlImg: string) {
        
         

            
        }
    }



