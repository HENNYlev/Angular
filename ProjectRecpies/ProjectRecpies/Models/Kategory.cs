using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectRecpies.Models
{
    public class Kategory
    {
        public int Code { get; set; }
        public string Name { get; set; }
        public string UrlIkon { get; set; }

        public Kategory(int code,string name,string urlIkon)
        {
            this.Code = code;
            this.Name = name;
            this.UrlIkon = urlIkon;
        }

        public Kategory() { }
    }
}