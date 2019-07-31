using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace AirlineOverrideApp.Models
{
    public class AirlineOverrideTargetDataAccessLayer
    {
        AirLineContext db = new AirLineContext();
        public IEnumerable<AirlineOverrideTarget> GetAllAirlineOverrideTargets()
        {
            try
            {
                return db.AirlineOverrideTarget.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new AirlineOverrideTarget record     
        public int AddAirlineOverrideTarget(AirlineOverrideTarget airlineOverrideTarget)
        {
            try
            {
                int maxSequence;
                if (db.AirlineOverrideTarget.Any())
                {
                    var airlineOverrideTargetList = db.AirlineOverrideTarget.Where(o => o.AirlineOverrideId == airlineOverrideTarget.AirlineOverrideId).ToList();
                    int seq = airlineOverrideTargetList.Max(o => o.Sequence);
                    maxSequence = seq + 1;
                }
                else
                {
                    maxSequence = 1;
                }

                airlineOverrideTarget.Sequence = maxSequence;

                db.AirlineOverrideTarget.Add(airlineOverrideTarget);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar AirlineOverrideTarget    
        public int UpdateAirlineOverrideTarget(AirlineOverrideTarget airlineOverrideTarget)
        {
            try
            {
                db.Entry(airlineOverrideTarget).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular AirlineOverrideTarget    
        public AirlineOverrideTarget GetAirlineOverrideTargetData(string id)
        {
            try
            {
                Guid guid = new Guid(id);
                AirlineOverrideTarget AirlineOverrideTarget = db.AirlineOverrideTarget.Find(guid);
                return AirlineOverrideTarget;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular AirlineOverrideTarget    
        public int DeleteAirlineOverrideTarget(int id)
        {
            try
            {
                AirlineOverrideTarget emp = db.AirlineOverrideTarget.Find(id);
                db.AirlineOverrideTarget.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the target details of a particular AirlineOverride   
        public IEnumerable<AirlineOverrideTarget> GetTargetData(string id)
        {
            try
            {
                Guid guid = new Guid(id);
                return db.AirlineOverrideTarget.Where(o => o.AirlineOverrideId == guid).ToList();
            }
            catch
            {
                throw;
            }
        }
    }
}