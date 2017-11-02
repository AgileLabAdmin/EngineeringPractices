Feature:New Loan Application
  In Order to apply a new Car loan
  As a registered user
  I can able to submit a new loan application

  Scenario: Check the user have any existing loan application
    Given As a User, when I provide the user name as 'Jerry Ryder'
    When the given user name is searched for any loan application available for him
    Then the system should not create another loan application for the user

  Scenario: Check the Submitted Application is valid
    Given the user submits the loan application
    When the loan application is empty with no details provided
    Then alert back the user the 'Loan Application is Empty/Blank'

  Scenario: Get all applied loan applications
      Given For Auditing purpose
      When requested for getting all saved loan applications is received
      Then list of Loan applications should be provided


  Scenario: Validate Requested Loan Amount
        Given the following loan applications are applied
          | applicationId  | applicationStatus  | userName     | requestedAmt | applicationState |
          | 12345670       | Applied            | Jerry Ryder  | 3000         | New              |
          | 12345671       | Applied            | Sylvia Tyler | 12000        | New              |
          | 12345672       | Applied            | Antony Reese | 7000         | New              |
          | 12345673       | Applied            | Jim Beans    | 25000        | New              |

        When the system validates the application
        Then the application with id '12345673' should be rejected