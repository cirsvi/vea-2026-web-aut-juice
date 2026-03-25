import { BasePage } from "./basePage";

export class OrderSummaryPage extends BasePage {
    static get checkoutButton(){
        return cy.get('#checkoutButton');
    }
}