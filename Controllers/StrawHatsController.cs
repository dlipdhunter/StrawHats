using System.Collections.Generic;
using StrawHats.Models;
using Microsoft.AspNetCore.Mvc;

namespace StrawHats.Controllers {

    [Route("api/[controller]")]
    public class StrawHatsController : Controller {

        private static List<PirateModel> StrawHats;

        public StrawHatsController()
        {
            StrawHats = new List<PirateModel>{
                new PirateModel { Id = 1, Name = "Monkey D. Luffy", NickName = "Moogiwara no ruffy", CrewName = "Straw hat pirates", Position = "Captain", Bounty = 500000000 },
                new PirateModel { Id = 2, Name = "Roronoa Zoro", NickName = "Pirate hunter", CrewName = "Straw hat pirates", Position = "Swordsman", Bounty = 320000000 },
                new PirateModel { Id = 3, Name = "Vinsmoke Sanji", NickName = "Black leg", CrewName = "Straw hat pirates", Position = "Cook", Bounty = 177000000 }
            };            
        }

        [HttpGet]
        public IEnumerable<PirateModel> GetAll(){
            return StrawHats;
        }

    }

}