using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectRecpies.Models
{
    public class User
    {
        public int Code { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Mail { get; set; }
        public string Psw { get; set; }

        public User(int code,string name,string address,string mail,string psw) {
            this.Code = code;
            this.Name = name;
            this.Address = address;
            this.Mail = mail;
            this.Psw = psw;
        }
        public User() { }
    }
}