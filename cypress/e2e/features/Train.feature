Feature: Booking Ticket

Scenario: User logs in if disclaimer modal exists
  Given Open Browser and Visit Website
  When Click on Login Button
  Then Enter Mobile Number and Password
  Then Verify the Username
  Then Select the first available bogie with seat
  When I select two available seats
  Then I should see the selected seats
  Then I click on the Book Now button


  
