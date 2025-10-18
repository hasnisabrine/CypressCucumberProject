Feature: add employee suite test
    Scenario: add user with valid credatials

        When user clicks on PIM and clicks on Add employee
        Then user redirects to Add Employee page
        When remplir les champs obligatoires et clicker sur save
            | First_Name | Middle_Name | Last_Name |
            | abc       | def        | hij      |
# Then the new user must be in the users list



