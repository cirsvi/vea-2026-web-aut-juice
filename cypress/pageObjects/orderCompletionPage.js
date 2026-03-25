import { BasePage } from "./basePage"

export class OrderCompletionPage extends BasePage{
    static get orderCompletionHeader(){
        return cy.get('.order-completion-header h1')
    }
}