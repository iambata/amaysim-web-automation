Feature: Home Functionality

  @0001 @Regression
  Scenario: Verify Declined credit card payment error message
    Given the user is already in the Amaysim home page
    When the user select the "7 day SIM Plans"
    And the user proceed through the purchase steps
    And the user enter valid personal details
    And the user enter a credit card number that will be Declined
    And the user submit the payment
    Then the error message for Declined credit card payment is displayed
