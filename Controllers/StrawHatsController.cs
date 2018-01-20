using System.Collections.Generic;
using StrawHats.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace StrawHats.Controllers {

    [Route("api/[controller]")]
    public class StrawHatsController : Controller {
        
        private readonly PirateDbContext oDbContext;

        public StrawHatsController(PirateDbContext pDbContext)
        {
            oDbContext = pDbContext;            
        }

        [HttpGet]
        public IEnumerable<Pirate> GetAll(){
            return oDbContext.Pirates.ToList();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id){
            var vPirate = oDbContext.Pirates.SingleOrDefault(pirate => pirate.Id == id);
            if(vPirate == null){
                return NotFound();
            }

            return new ObjectResult(vPirate);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Pirate pirate){

            if(pirate == null){
                return BadRequest();
            }

            oDbContext.Add(pirate);
            oDbContext.SaveChanges();

            return CreatedAtAction("GetById", new { id = pirate.Id }, pirate);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Pirate pirate){

            if(pirate == null || pirate.Id != id){
                return BadRequest();
            }

            var vPirate = oDbContext.Pirates.SingleOrDefault(p => p.Id == id);

            if(vPirate == null){
                return NotFound();
            }

            vPirate.Name = pirate.Name;
            vPirate.NickName = pirate.NickName;
            vPirate.Position = pirate.Position;
            vPirate.Bounty = pirate.Bounty;

            oDbContext.Pirates.Update(vPirate);
            oDbContext.SaveChanges();

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id){

            var vPirate = oDbContext.Pirates.SingleOrDefault(pirate => pirate.Id == id);

            if(vPirate == null){
                return NotFound();
            }

            oDbContext.Remove(vPirate);
            oDbContext.SaveChanges();

            return new NoContentResult();
        }

    }

}