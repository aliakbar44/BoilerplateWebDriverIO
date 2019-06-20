
Feature: LBG Test 1
 
    Scenario: Google search for Halifax
	 Given I open the google home page
	 When I Search with Halifax
     And I press "Enter"
	 Then I click on the Halifax Link
	 Then I expect that the title is "Halifax UK | Bank Accounts, Savings, Loans & Mortgages"
