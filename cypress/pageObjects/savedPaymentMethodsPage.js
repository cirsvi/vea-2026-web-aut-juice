import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage{
    static get cardDetailRow(){
        return cy.get('.mat-mdc-row');
    }

    static get addCardDropdown(){
        return cy.get('.mat-expansion-panel-header');
    }

    static get nameInputField() {
        // return cy.get('#mat-input-2');

        return cy.contains('mat-label', 'Name')
            .parents('mat-form-field')
            .find('input');
    }

    static get cardInputField(){
        // return cy.get('#mat-input-3');

        return cy.contains('mat-label', 'Card Number')
            .parents('mat-form-field')
            .find('input');
    }

    static get expiryMonthSelect(){
        // return cy.get('#mat-input-4');

        return cy.contains('mat-label', 'Expiry Month')
            .parents('mat-form-field')
            .find('select');
    }

    static get expiryYearSelect(){
        // return cy.get('#mat-input-5');

        return cy.contains('mat-label', 'Expiry Year')
            .parents('mat-form-field')
            .find('select');
    }

    static get submitButton(){
        return cy.get('#submitButton');
    }
}
