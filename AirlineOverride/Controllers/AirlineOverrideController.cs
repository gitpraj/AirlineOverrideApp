using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AirlineOverrideApp.Models;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using System.IO;

namespace AirlineOverrideApp.Controllers
{
    public class AirlineOverrideController : Controller
    {
        AirlineOverrideDataAccessLayer objAirlineOverride = new AirlineOverrideDataAccessLayer();


        [HttpGet]
        [Route("api/AirlineOverride/Index")]
        public IEnumerable<AirlineOverrideApp.Models.AirlineOverride> Index()
        {
            return objAirlineOverride.GetAllAirlineOverrides();
        }
        [HttpPost]
        [Route("api/AirlineOverride/Create")]
        public int Create(AirlineOverrideApp.Models.AirlineOverride AirlineOverride)
        {
            return objAirlineOverride.AddAirlineOverride(AirlineOverride);
        }
        [HttpGet]
        [Route("api/AirlineOverride/Details/{id}")]
        public AirlineOverrideApp.Models.AirlineOverride Details(string id)
        {
            return objAirlineOverride.GetAirlineOverrideData(id);
        }
        [HttpPut]
        [Route("api/AirlineOverride/Edit")]
        public int Edit(AirlineOverrideApp.Models.AirlineOverride AirlineOverride)
        {
            return objAirlineOverride.UpdateAirlineOverride(AirlineOverride);
        }
        [HttpDelete]
        [Route("api/AirlineOverride/Delete/{id}")]
        public int Delete(string id)
        {
            return objAirlineOverride.DeleteAirlineOverride(id);
        }
    }
}