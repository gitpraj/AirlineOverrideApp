using NUnit.Framework;
using AirlineOverrideApp.Models;
using System;
using System.Linq;

namespace Tests
{
    public class AirlineOverrideTargetTest
    {
        [SetUp]
        public void Setup()
        {
        }

        // add airlineoverridetarget for some random airlineoverride id from db
        [Test]
        public void Test1()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideTargetController();

            AirlineOverrideTarget airlineoverridetarget = new AirlineOverrideTarget();

            airlineoverridetarget.AirlineOverrideId = new Guid("D0E0CC17-6C98-46CC-AF83-04CCDA5C5DC4");
            airlineoverridetarget.Percent = 5M;
            airlineoverridetarget.Max = 1M;
            airlineoverridetarget.Roi = 2M;
            airlineoverridetarget.MaxRoi = 3M;
            airlineoverridetarget.HardMaxRoi = 5M;

            int res = controller.Create(airlineoverridetarget);

            Assert.AreEqual(1, res);
        }

        // add airlineoverridetarget for some random airlineoverride id from db, chekcing boundary constraint for percent
        [Test]
        public void Test2()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideTargetController();

            AirlineOverrideTarget airlineoverridetarget = new AirlineOverrideTarget();

            airlineoverridetarget.AirlineOverrideId = new Guid("D0E0CC17-6C98-46CC-AF83-04CCDA5C5DC4");
            airlineoverridetarget.Percent = 123456M;
            airlineoverridetarget.Max = 1M;
            airlineoverridetarget.Roi = 2M;
            airlineoverridetarget.MaxRoi = 3M;
            airlineoverridetarget.HardMaxRoi = 5M;

            int res = controller.Create(airlineoverridetarget);

            Assert.AreEqual(-1, res);
        }

        // add airlineoverridetarget for already existing airlineoverridetarget id
        [Test]
        public void Test3()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideTargetController();

            AirlineOverrideTarget airlineoverridetarget = new AirlineOverrideTarget();

            airlineoverridetarget.AirlineOverrideTargetId = new Guid("32EA7BDA-D53F-4250-AB66-F7294D3E81E6");
            airlineoverridetarget.AirlineOverrideId = new Guid("D0E0CC17-6C98-46CC-AF83-04CCDA5C5DC4");
            airlineoverridetarget.Percent = 123456M;
            airlineoverridetarget.Max = 1M;
            airlineoverridetarget.Roi = 2M;
            airlineoverridetarget.MaxRoi = 3M;
            airlineoverridetarget.HardMaxRoi = 5M;

            int res = controller.Create(airlineoverridetarget);

            Assert.AreEqual(-1, res);
        }

        // update random airlineoverridetarget
        [Test]
        public void Test4()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideTargetController();

            AirlineOverrideTarget airlineoverridetarget = new AirlineOverrideTarget();

            airlineoverridetarget.AirlineOverrideTargetId = new Guid("32EA7BDA-D53F-4250-AB66-F7294D3E81E6");
            airlineoverridetarget.AirlineOverrideId = new Guid("D0E0CC17-6C98-46CC-AF83-04CCDA5C5DC4");
            airlineoverridetarget.Percent = 1234M;
            airlineoverridetarget.Max = 1M;
            airlineoverridetarget.Roi = 2M;
            airlineoverridetarget.MaxRoi = 3M;
            airlineoverridetarget.HardMaxRoi = 5M;

            int res = controller.Edit(airlineoverridetarget);

            Assert.AreEqual(1, res);
        }

        // add airlineoverridetarget for some random airlineoverride id from db, chekcing boundary constraint for Roi which is (6,2)
        [Test]
        public void Test5()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideTargetController();

            AirlineOverrideTarget airlineoverridetarget = new AirlineOverrideTarget();

            airlineoverridetarget.AirlineOverrideTargetId = new Guid("32EA7BDA-D53F-4250-AB66-F7294D3E81E6");
            airlineoverridetarget.AirlineOverrideId = new Guid("D0E0CC17-6C98-46CC-AF83-04CCDA5C5DC4");
            airlineoverridetarget.Percent = 1234M;
            airlineoverridetarget.Max = 1M;
            airlineoverridetarget.Roi = 123456;
            airlineoverridetarget.MaxRoi = 3M;
            airlineoverridetarget.HardMaxRoi = 5M;

            int res = controller.Edit(airlineoverridetarget);

            Assert.AreEqual(-1, res);
        }

        /* delete airliveoverride. */
        [Test]
        public void Test6()
        {
            // Set up Prerequisites   
            var controller = new AirlineOverrideApp.Controllers.AirlineOverrideTargetController();
            int res = controller.Delete("F78CFDCA-7FED-485D-AC23-B0190624DF34");

            Assert.AreEqual(1, res);
        }
    }
}
