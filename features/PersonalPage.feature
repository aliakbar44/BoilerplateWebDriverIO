
Feature: LBG Test 3
 
	Scenario: Llyods Bank Personal Login 
	 Given I open the url "https://www.lloydsbank.com/online-banking/home.asp"
	 Then I click on logon
	 Then I click on Personal
	 Then I expect that the title is "Lloyds Bank - Welcome to Internet Banking"
