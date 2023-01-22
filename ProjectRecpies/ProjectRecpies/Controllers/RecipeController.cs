using ProjectRecpies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjectRecpies.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class RecipeController : ApiController
    {
        [HttpGet]
        public List<Recipe> Get()
        {
            return DB.arrRecepies;
        }
        [HttpGet]
        public Recipe Get(int id)
        {
         
            return DB.arrRecepies.FirstOrDefault(i => i.CodeRecipe == id);
        }
        [HttpPost]
        public List<Recipe> addRecipe(Recipe recipe)
        {
            DB.arrRecepies.Add(recipe);
            return DB.arrRecepies;
            
        }
        [HttpDelete]
        public List<Recipe> delete(int id)
        {
            DB.arrRecepies.Remove(DB.arrRecepies.FirstOrDefault(i => i.CodeRecipe == id));
            
            return DB.arrRecepies;

        }
    }
}
