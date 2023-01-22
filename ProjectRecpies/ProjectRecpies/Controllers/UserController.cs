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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpGet]
        public List<User> Get()
        {
            return DB.allUsers;
        }
       
        [HttpPost]
        public List<User> Post(User u)
        {
            
           
            DB.allUsers.Add(u);
            return DB.allUsers;
        }
    }
}
