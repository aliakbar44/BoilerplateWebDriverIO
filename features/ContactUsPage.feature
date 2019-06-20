
Feature: LBG Test 3
 
	Scenario: Llyods Bank Contact Us Page  
	 Given I open the url "https://www.lloydsbank.com/online-banking/home.asp"
	 Then I click on ContactUs
	 Then I expect that the title is "Lloyds Bank - Contact Information - Phone Numbers, Branch Info & More"
	 Then I Verify the six options are present in the screen
	 
