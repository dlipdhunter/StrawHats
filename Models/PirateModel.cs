using System;

namespace StrawHats.Models {

    public class PirateModel {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NickName { get; set; }
        public string CrewName { get; set; }
        public string Position { get; set; }
        public double Bounty { get; set; }        
    }

}