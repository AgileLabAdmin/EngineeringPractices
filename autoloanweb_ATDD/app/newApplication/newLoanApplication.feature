Feature: Auto Loan Application


Scenario Outline: The field values has to be saved into respective objects
    Given I selected primary phone number type as '<key>' and respective value '<value>'
     When checkPhoneType method called
     Then the primaryPhoneType object should be saved with '<type>'

    Examples:
	| key   | value  | type  |
	|  pr  | Mobile | Mobile|
    |  pr  | Home   | Home |

Scenario: Should get the Bank Details for the given zip code
	Given I enter '08817' as my current zip code
	When fetch Bank Details for zip code method is called
	Then the bank name is 'Edison-Talmadge Branch'

Scenario: Should make a call service to get bank details
	Given '08817' is my current zip code
	When fetch Bank Details for zip code service
	Then the bank id is '100'

Scenario: Should make a http call to
	Given '08817' is my current zip code
	When fetch Bank Details for zip code service
	Then the bank id is '100'