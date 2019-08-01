# RiderApp

This App was built for a coding challenge. AirlineOverride System - Airline Override maintenance web app with the
following characteristics: An Editable Grid for adding, Editing, deleting and viewing Airline overrides

## Getting Started

App URL: https://airlineoverrideapp.azurewebsites.net/

The app is hosted on Azure using WebApps.

The SQL server is also configured on Azure, using Azure SQL server and db. There is a script of the tables that were created for 
this application in the RiderApp folder named RiderAppDB_script. 2 tables - AirlineOverride and AirlineOverrideTarget

### Assumptions

* Simple App to showcase my full stack skills.
* You can only add, update, delete airline overrides and their targets. Dummy data has been added via DB
* The Groupable and Self Ticketing checkbox not updated through frontend. But renders properly according to values in db.
* Basic clock on the top of the page
* Not much validation against the fields for both airline overrides and their targets 
* Sufficient Unit tests
* Just 2 SQL tables - AirlineOverride, AirlineOverride

### Improvements

* UI can be improved big time.
* When airline override targets gets added/updated/deleted, does not get rendered auto, unless we toggle the down arrow. To be rendered automatically
* The Groupable and Self Ticketing checkbox to updated through frontend
* The API controllers in the back to be made asynchronous as possible.
* Web API documentation using swagger
* Authentication/Authorization for the the API's
* Unit test to involve stub/mock interfaces to talk with dummy data instead of actual database.
* Azure Devops CI/CD could be integrated with this repo.
* Docker container for the app.

### Prerequisites

There are no prerequisites for this app as everything is hosted on the cloud. 

## Running the tests

I have created a few unit tests which are found in the folder AirlineOverrideTest. This could be run manually. Tests include the interface testing i.e. test the controllers. 

These tests will talk with the production database, unfortunately. I can create a dummy db and run the tests.


### Deisgn Architrecture

3 Tier Architecture - Presentation layer, Business Layer, Data Access Layer

### Deisgn TEchnique

* Agile - split tasks into mini srints and then release them then and there
* TDD

## Built With

* React.js, css, bootstrap - Front End 
* .NET MVC/Core C# - Back End
* Hosted on Azure WebApps
* Azure SQL Server - Database
