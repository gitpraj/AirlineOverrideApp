using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace AirlineOverrideApp.Models
{
    public class AirlineOverrideDataAccessLayer
    {
        AirLineContext db = new AirLineContext();
        public IEnumerable<AirlineOverride> GetAllAirlineOverrides()
        {
            try
            {
                return db.AirlineOverride.ToList();
            }
            catch
            {
                return null;
            }
        }
        //To Add new airlineoverride record     
        public int AddAirlineOverride(AirlineOverride airlineoverride)
        {
            try
            {
                db.AirlineOverride.Add(airlineoverride);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                return -1;
            }
        }
        //To Update the records of a particluar airlineoverride    
        public int UpdateAirlineOverride(AirlineOverride airlineoverride)
        {
            try
            {
                db.Entry(airlineoverride).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                return -1;
            }
        }
        //Get the details of a particular airlineoverride    
        public AirlineOverride GetAirlineOverrideData(String id)
        {
            try
            {
                Guid guid = new Guid(id);
                AirlineOverride airlineoverride = db.AirlineOverride.Find(guid);
                return airlineoverride;
            }
            catch
            {
                return null;
            }
        }
        //To Delete the record of a particular airlineoverride    
        public int DeleteAirlineOverride(string id)
        {
            try
            {
                Guid guid = new Guid(id);
                AirlineOverride airlineoverride = db.AirlineOverride.Find(guid);

                if (airlineoverride != null)
                {
                    var aot = db.AirlineOverrideTarget.Where(o => o.AirlineOverride.AirlineOverrideId == guid).ToList();

                    db.AirlineOverrideTarget.RemoveRange(aot);

                    db.AirlineOverride.Remove(airlineoverride);
                    db.SaveChanges();
                }
                return 1;
            }
            catch
            {
                return -1;
            }
        }
    }
}