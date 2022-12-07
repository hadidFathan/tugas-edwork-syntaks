Feature: Login to application

    As a valid user
    I want to login into application

    Scenario: valid login
     Given I open login page
     When I submit login
     Then I should see homepage