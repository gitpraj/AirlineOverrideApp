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
                throw;
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
                throw;
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
                throw;
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
                throw;
            }
        }
        //To Delete the record of a particular airlineoverride    
        public int DeleteAirlineOverride(int id)
        {
            try
            {
                AirlineOverride emp = db.AirlineOverride.Find(id);
                db.AirlineOverride.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}