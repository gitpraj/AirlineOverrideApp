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
                return null;
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
                    if (airlineOverrideTargetList.Any())
                    {
                        int seq = airlineOverrideTargetList.Max(o => o.Sequence);
                        maxSequence = seq + 1;

                    } else
                    {
                        maxSequence = 1;
                    }
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
                return -1;
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
                return -1;
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
                return null;
            }
        }
        //To Delete the record of a particular AirlineOverrideTarget    
        public int DeleteAirlineOverrideTarget(string id)
        {
            try
            {
                Guid guid = new Guid(id);
                AirlineOverrideTarget airlineOverrideTarget = db.AirlineOverrideTarget.Find(guid);

                if (airlineOverrideTarget != null)
                {
                    db.AirlineOverrideTarget.Remove(airlineOverrideTarget);
                    db.SaveChanges();
                }
                return 1;
            }
            catch
            {
                return -1;
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
                return null;
            }
        }
    }
}