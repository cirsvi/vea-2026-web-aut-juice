import { BasePage } from "./basePage";

export class CreateAddressPage extends BasePage{
    static get countryInputFiled(){
        return cy.get("input[placeholder='Please provide a country.']");
    }

    static get nameInputFiled(){
        return cy.get("input[placeholder='Please provide a name.']");
    }

    static get mobileNumberInputField(){
        return cy.get("input[placeholder='Please provide a mobile number.']");
    }

    static get zipCodeInputField(){
        return cy.get("input[placeholder='Please provide a ZIP code.']");
    }

    static get addressInputField(){
        return cy.get("textarea[placeholder='Please provide an address.']");
    }

    static get cityInputField(){
        return cy.get("input[placeholder='Please provide a city.']");
    }
    
    static get stateInputField(){
        return cy.get("input[placeholder='Please provide a state.']");
    }s

    static get submitButton(){
        return cy.get('#submitButton');
    }

    
    
}
    