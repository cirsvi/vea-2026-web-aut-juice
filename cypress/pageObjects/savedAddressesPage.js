import { BasePage } from "./basePage";

export class SavedAddressPage extends BasePage{
    static get addNewAddressButton(){
        return cy.get("[aria-label='Add a new address']");
    }

    static get addressRow(){
        return cy.get('.mat-mdc-row');
    }
}