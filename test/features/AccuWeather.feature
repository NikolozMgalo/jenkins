Feature: AccuWeather Test

    Background:
        Given I open main page


    Scenario: Search City
        When I consent data usage
        And I input 'New York' in search field
        Then Search results list is displayed
        When I click on the first search result
        Then City weather page header should contain 'New York'

    Scenario: Recent Locations
        When I consent data usage
        And I input 'London' in search field
        And I click on the first search result
        Then City weather page is displayed
        When I go back to main page
        When I choose first city in recent locations
        Then City weather page header should contain 'London'

    Scenario: Current location label
        When I consent data usage
        And I click on search field
        Then Use your current location label is displayed