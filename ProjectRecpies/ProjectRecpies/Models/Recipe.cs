using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectRecpies.Models
{
    public class Recipe
    {
        public int CodeRecipe { get; set; }
        public string NameRecipe { get; set; }
        public int CodeKatgory { get; set; }
        public int OrderTime { get; set; }
        public int Label { get; set; }
        public DateTime DateAdd { get; set; }
        public List<string>Ingredients;
        public List<string> Preparation;
        public int UserCode { get; set; }
        public string UrlImg { get; set; }
        public Recipe() { }
        public Recipe(int CodeRecipe, string NameRecipe, int CodeKatgory, int OrderTime,
            int Label, DateTime DateAdd,
         List<string> Ingredients, List<string> Preparation,
            int UserCode, string UrlImg)
        { this.CodeRecipe = CodeRecipe;
            this.NameRecipe = NameRecipe;
            this.CodeKatgory = CodeKatgory;
            this.OrderTime = OrderTime;
            this.Label = Label;
            this.DateAdd = DateAdd;
            this.Ingredients = Ingredients;
            this.Preparation = Preparation;
            this.UserCode = UserCode;
            this.UrlImg = UrlImg;
        }
    }
}