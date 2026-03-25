import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage{
    static get addressRow(){
        return cy.get('.mat-mdc-row');
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to payment selection"]');
    }

    
}