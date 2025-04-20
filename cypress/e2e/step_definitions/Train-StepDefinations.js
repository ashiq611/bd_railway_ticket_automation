import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Login_Page_locatorsPage from "../../Locators/Login_Page_locators";
import allData from '../../data/data'
import 'cypress-file-upload';

const locator = new Login_Page_locatorsPage();
const data = new allData();

Given("Open Browser and Visit Website", () => {
  cy.visit("https://eticket.railway.gov.bd/");
});


When("Click on Login Button", () => {
  cy.acceptDisclaimerIfVisible(locator.Disclaimmer, locator.AgreeButton);
  cy.wait(2000);
  cy.get(locator.LoginNav).should("be.visible").click();
});

Then("Enter Mobile Number and Password", () => {
  cy.wait(2000);
    cy.xpath(locator.MobileNumber).type(data.MobileNumberValue);
    cy.xpath(locator.Password).type(data.PasswordValue);
    cy.xpath(locator.LoginButton).click();
});

Then("Verify the Username", () => {
  cy.wait(2000);
  cy.xpath(locator.UserName_Nav)
  .should("be.visible")
  .and("have.text", data.username); 
  cy.xpath(locator.FormInput).should("be.visible").invoke('removeAttr', 'readonly').scrollIntoView().type('Dhaka');
  // cy.xpath(locator.ToInput).should("be.visible").scrollIntoView()
  cy.xpath(locator.ToInput).should("be.visible").invoke('removeAttr', 'readonly').scrollIntoView().type('Chattogram');
  cy.get(locator.DateOFJourneyInput).invoke('removeAttr', 'readonly').type(data.DateOfJourney);
  cy.get(locator.ChosseClass, { timeout: 10000 }).should('be.visible').select('S_CHAIR');
  cy.xpath(locator.SearchButton).click();
  cy.wait(2000);
  cy.visit(`https://eticket.railway.gov.bd/booking/train/search?fromcity=${data.FromCity}&tocity=${data.ToCity}&doj=${data.linkDate}&class=${data.Class}`);

  // cy.get('.trip-collapse-btn', { timeout: 10000 }).click();  // or use .trigger('click') if click() doesn't work
  
  cy.get(locator.FindAvailableBookNowButton)



cy.get(locator.SeatClass).should('exist');


cy.get('.single-seat-class')
  .contains(data.Class)      
  .parents('.single-seat-class')             
  .within(() => {
    cy.get('.all-seats').invoke('text').then((text) => {
      const availableSeats = parseInt(text.trim());
      if (availableSeats > 0) {
        cy.get('.book-now-btn').click();     
      } else {
        cy.log('No seats available for SNIGDHA');
      }
    });
  });
});


Then("Select the first available bogie with seat", () => {
  cy.get(locator.SelectAvailabeOption).then(options => {
    let found = false;

    // Loop through each option to check for seat availability
    Cypress._.some(options, option => {
      const text = option.innerText;
      const value = option.value;


      const match = text.match(/(\d+)\s*Seat/);
      const seatCount = match ? parseInt(match[1]) : 0;

      if (seatCount > 0) {
        cy.get('#select-bogie').select(value); 
        cy.log(`Selected option: ${text}`);
        found = true;
        return true;
      }

      return false;
    });

    if (!found) {
      cy.log('No bogie found with available seats.');
    }
  });
});

When('I select two available seats', () => {
  cy.get(locator.SeatAvailable).then(($seats) => {
    if ($seats.length >= data.TicketNO) {
      // Click on the first two available seats
      cy.wrap($seats[0]).click();
      cy.wrap($seats[1]).click();
    } else {
      throw new Error('Not enough available seats');
    }
  });
});

Then('I should see the selected seats', () => {
  cy.get(locator.SeatSelected).should('have.length', 2);
});

Then ('I click on the Book Now button', () => {
  cy.xpath(locator.PurchaseButton).click();
});


