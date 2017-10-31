Feature:Password Strength Validation
  
  Scenario: Check the password strength
    Given As a User, when I provide the password as empty string
    When the system validate the strength of the password
    Then it should return password is not strong