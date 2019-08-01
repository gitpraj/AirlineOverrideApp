using NUnit.Framework;
using AirlineOverrideApp.Models;
using System;
using System.Linq;

namespace Tests
{
    public class AirlineOverrideTest
    {
        [SetUp]
        public void Setup()
        {
        }

        // add airliveoverride
        [Test]
        public void Test1()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideController();

            AirlineOverrideApp.Models.AirlineOverride airlineoverride = new AirlineOverrideApp.Models.AirlineOverride();

            airlineoverride.Code = "4M";
            airlineoverride.StartDate = new DateTime(2010, 8, 18);
            airlineoverride.EndDate = new DateTime(2011, 8, 18);
            airlineoverride.Groupable = true;
            airlineoverride.SelfTicketing = false;
            airlineoverride.MinRevenue = 8;
            airlineoverride.GuaranteedRoi = 2;
            airlineoverride.PayingFrom = 8;
            airlineoverride.Active = true;

            int res = controller.Create(airlineoverride);

            Assert.AreEqual(1, res);
        }

        /* add airliveoverride with code more than 2 chars. 
            To check if it doesnt get created because of db limitation */
        [Test]
        public void Test2()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideController();

            AirlineOverrideApp.Models.AirlineOverride airlineoverride = new AirlineOverrideApp.Models.AirlineOverride();

            airlineoverride.Code = "4MT";
            airlineoverride.StartDate = new DateTime(2010, 8, 18);
            airlineoverride.EndDate = new DateTime(2011, 8, 18);
            airlineoverride.Groupable = true;
            airlineoverride.SelfTicketing = false;
            airlineoverride.MinRevenue = 8;
            airlineoverride.GuaranteedRoi = 2;
            airlineoverride.PayingFrom = 8;
            airlineoverride.Active = true;

            int res = controller.Create(airlineoverride);

            Assert.AreEqual(-1, res);
        }

        // add airliveoverride with existing airlineoverride. db not to allow
        [Test]
        public void Test3()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideController();

            AirlineOverrideApp.Models.AirlineOverride airlineoverride = new AirlineOverrideApp.Models.AirlineOverride();

            airlineoverride.AirlineOverrideId = new Guid("DC59C40E-07E7-492E-B4D6-229A9E4BD758");
            airlineoverride.Code = "QM";
            airlineoverride.StartDate = new DateTime(2010, 8, 18);
            airlineoverride.EndDate = new DateTime(2011, 8, 18);
            airlineoverride.Groupable = true;
            airlineoverride.SelfTicketing = false;
            airlineoverride.MinRevenue = 8;
            airlineoverride.GuaranteedRoi = 2;
            airlineoverride.PayingFrom = 8;
            airlineoverride.Active = true;

            int res = controller.Create(airlineoverride);

            Assert.AreEqual(-1, res);
        }

        // update airliveoverride
        [Test]
        public void Test4()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideController();

            AirlineOverrideApp.Models.AirlineOverride airlineoverride = new AirlineOverrideApp.Models.AirlineOverride();

            airlineoverride.AirlineOverrideId = new Guid("DC59C40E-07E7-492E-B4D6-229A9E4BD758");
            airlineoverride.Code = "QM";
            airlineoverride.StartDate = new DateTime(2010, 8, 18);
            airlineoverride.EndDate = new DateTime(2011, 8, 18);
            airlineoverride.Groupable = true;
            airlineoverride.SelfTicketing = false;
            airlineoverride.MinRevenue = 123456789123.01M;
            airlineoverride.GuaranteedRoi = 2;
            airlineoverride.PayingFrom = 8;
            airlineoverride.Active = true;

            int res = controller.Edit(airlineoverride);

            Assert.AreEqual(1, res);
        }

        /* update airliveoverride. picking a random guid from db. Minrevenue feeded with decimal
           more than (14,2) */
        [Test]
        public void Test5()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideController();

            AirlineOverrideApp.Models.AirlineOverride airlineoverride = new AirlineOverrideApp.Models.AirlineOverride();

            airlineoverride.AirlineOverrideId = new Guid("DC59C40E-07E7-492E-B4D6-229A9E4BD758");
            airlineoverride.Code = "Q9";
            airlineoverride.StartDate = new DateTime(2010, 8, 18);
            airlineoverride.EndDate = new DateTime(2011, 8, 18);
            airlineoverride.Groupable = true;
            airlineoverride.SelfTicketing = false;
            airlineoverride.MinRevenue = 12345678912345M;
            airlineoverride.GuaranteedRoi = 2;
            airlineoverride.PayingFrom = 8;
            airlineoverride.Active = true;

            int res = controller.Edit(airlineoverride);

            Assert.AreEqual(-1, res);
        }

        /* delete airliveoverride. */
        [Test]
        public void Test6()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideController();
            int res = controller.Delete("2CE5CC58-E0AF-414A-A90E-2B186705FACE");

            Assert.AreEqual(1, res);
        }
    }
}