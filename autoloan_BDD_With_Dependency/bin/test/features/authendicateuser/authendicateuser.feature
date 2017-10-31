Feature:Authenticate User
  
  Scenario: Check the user authentication
    Given As a User, when I provide the user name as 'testuser' and password as 'pass1234'
    When the system authenticate the above user details
    Then it should return successfully authenticated