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
    public class AirlineOverrideTargetController : Controller
    {
        AirlineOverrideTargetDataAccessLayer objAirlineOverrideTarget = new AirlineOverrideTargetDataAccessLayer();


        [HttpGet]
        [Route("api/AirlineOverrideTarget/Index")]
        public IEnumerable<AirlineOverrideTarget> Index()
        {
            return objAirlineOverrideTarget.GetAllAirlineOverrideTargets();
        }
        [HttpPost]
        [Route("api/AirlineOverrideTarget/Create")]
        public int Create(AirlineOverrideTarget AirlineOverride)
        {
            return objAirlineOverrideTarget.AddAirlineOverrideTarget(AirlineOverride);
        }
        [HttpGet]
        [Route("api/AirlineOverrideTarget/Details/{id}")]
        public AirlineOverrideTarget Details(string id)
        {
            return objAirlineOverrideTarget.GetAirlineOverrideTargetData(id);
        }
        [HttpGet]
        [Route("api/AirlineOverrideTarget/TargetDetails/{id}")]
        public IEnumerable<AirlineOverrideTarget> AirlineOverrideTargetDetails(string id)
        {
            return objAirlineOverrideTarget.GetTargetData(id);
        }
        [HttpPut]
        [Route("api/AirlineOverrideTarget/Edit")]
        public int Edit(AirlineOverrideTarget AirlineOverride)
        {
            return objAirlineOverrideTarget.UpdateAirlineOverrideTarget(AirlineOverride);
        }
        [HttpDelete]
        [Route("api/AirlineOverrideTarget/Delete/{id}")]
        public int Delete(string id)
        {
            return objAirlineOverrideTarget.DeleteAirlineOverrideTarget(id);
        }
    }
}