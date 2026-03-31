import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get('#navbarAccount');
  }

  static get loginButton(){
    return cy.get('#navbarLoginButton');
  }

  static get ordersAndPaymentButton(){
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }


  static get savedAddressButton(){
    return cy.get("[aria-label='Go to saved address page']");
  }

  static get savedPaymentButton(){
    return cy.get("[aria-label='Go to saved payment methods page']");
  }

  static get userProfileButton(){
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon(){
    return cy.get('#searchQuery');
  }

  static get searchInputFiled(){
    return cy.get('#searchQuery input');
  }

  static get productNames(){
    return cy.get(".item-name");
  }

  static get productCard(){
    return cy.get('.details-row')
  }

  static get productCloseCardButton(){
    return cy.get("[aria-label='Close Dialog']")
  }

  static get productCardReviewDropdown(){
    return cy.get('[aria-label="Expand for Reviews"]');
  }

  static get productCardReviewRow(){
    return cy.get('.review-row');
  }

  static get productCardReviewInputField(){
    return cy.get('[aria-label="Text field to review a product"]');
  }

  static get productCardReviewSubmitButton(){
    return cy.get('#submitButton');
  }

  static get amountsOfItemsPerPageDropdown(){
     return cy.get('.mat-mdc-select');
  }

  static get itemsPerPageDropdown(){
     return cy.get('.mat-mdc-paginator-touch-target');
  }

  static get itemsPerPageAmountOptions(){
     return cy.get('.mat-mdc-option');
  }
  static get addToBasketButton(){
    return cy.get("[aria-label='Add to Basket']")
  }
  
  static get basketButton(){
    return cy.get("[aria-label='Show the shopping cart']");
  }
  
}
