import { BasePage } from "./basePage";

export class RegistrationPage{
    static get emailField(){
        return cy.get('#emailControl');
    }

    static get passwordField(){
        return cy.get('#passwordControl');
    }

    static get passwordRepeatField(){
        return cy.get('#repeatPasswordControl');
    }

    static get securityQuestionDropdown(){
        return cy.get("[name='securityQuestion']")   
    }

    static get securityQuestionOptions(){
        return cy.get("[role='option']");
    }

    static get securityAnswer(){
        return cy.get('#securityAnswerControl');
    }

    static get registerButton(){
        return cy.get('#registerButton');
    }
}