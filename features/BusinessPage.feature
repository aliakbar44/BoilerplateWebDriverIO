
Feature: LBG Test 2
 
	 
	Scenario: Llyods Bank Business Login 
	 Given I open the url "http://localhost:3004/#/"
	 Then I click on logon
	 Then I click on Business
	 Then I expect that the title is "Lloyds Bank - Welcome to Online for Business"
