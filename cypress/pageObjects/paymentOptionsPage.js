import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage{
    static cardRadioButton(cardNumber) {
        return cy.contains('.mat-mdc-row', cardNumber).find('mat-radio-button');
    }  

    static get continueButton(){
        return cy.get('[aria-label="Proceed to review"]')
    }
}