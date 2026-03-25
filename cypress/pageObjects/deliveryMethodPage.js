import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage{
    static get deliveryRowOption(){
        return cy.get('.mat-mdc-row');
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to delivery method selection"]')
    }
}