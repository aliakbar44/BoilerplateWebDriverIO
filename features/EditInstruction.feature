Feature: Edit instruction

    Scenario: Edit instruction in optima
        Given I open the optima application
        When I click commercial
        When I enter username and password

        #Then I click on the Sign Link
        When I click sign in

        When I click wallet icon

        When I click intra company cash pooling

        Then I click edit instruction
