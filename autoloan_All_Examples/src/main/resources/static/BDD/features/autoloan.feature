Feature: Home Page

Scenario: Menu in Login Page
     Given After launching the application
     When I am in the Login page
     Then I should see the Menu on top of the page

Scenario: Header and Footer in Login Page
     Given After launching the application
     When I am in the Login page
     Then I should see the Header and Footer in the page

Scenario: Customer with Platinum Status
     Given I am in the home page
     When I click the  Apply Now button
     Then Take me to gettng started page

