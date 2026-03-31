import { HomePage } from '../pageObjects/homePage';
import { LoginPage } from '../pageObjects/loginPage';
import { RegistrationPage } from '../pageObjects/registrationPage';
import { BasketPage } from '../pageObjects/basketPage';
import { SelectAddressPage } from '../pageObjects/selectAddressPage';
import { DeliveryMethodPage } from '../pageObjects/deliveryMethodPage';
import { PaymentOptionsPage } from '../pageObjects/paymentOptionsPage';
import { OrderSummaryPage } from '../pageObjects/orderSummaryPage';
import { OrderCompletionPage } from '../pageObjects/orderCompletionPage';
import { SavedAddressPage } from '../pageObjects/savedAddressesPage';
import { CreateAddressPage } from '../pageObjects/createAddressPage';
import { SavedPaymentMethodsPage } from '../pageObjects/savedPaymentMethodsPage';


describe('Juice-shop scenarios', () => {
  context('Without auto login', () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it('Login', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click()
      // Set email value to "demo"
      LoginPage.emailField.type('demo');
      // Set password value to "demo"
      LoginPage.passwordField.type('demo');
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click()
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should('contain.text', 'demo');
    });

    it('Registration', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click()
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click()
      // Find - how to generate random number in JS
      const randomNum = Math.floor(Math.random() * 9000) + 1000;
      const email = `email_${randomNum}@ebox.com`;
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      const password = 'password123'
      RegistrationPage.passwordField.type(password);
      RegistrationPage.passwordRepeatField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionDropdown.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions.contains('Name of your favorite pet?').click();
      // Fill in answer
      RegistrationPage.securityAnswer.type('Tomas');
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click()
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should('contain.text', email);
    });
  });

  context('With auto login', () => {
    beforeEach(() => {
      cy.login('demo', 'demo');
      HomePage.visit();
    });

    it('Search and validate Lemon', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchInputFiled.type('Lemon{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should('contain.text', "Sour but full of vitamins.")
    });

    it('Search 500ml and validate Lemon', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchInputFiled.type('500ml{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should('contain.text', "Sour but full of vitamins.")
    });  

    it('Search 500ml and validate cards', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchInputFiled.type('500ml{enter}');
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productNames.contains('Eggfruit Juice (500ml)').click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productCard.should('contain.text', "Now with even more exotic flavour.")
      // Close the card
      HomePage.productCloseCardButton.click()
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should('contain.text', "Sour but full of vitamins.")
      // Close the card
      HomePage.productCloseCardButton.click()
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productNames.contains('Strawberry Juice (500ml)').click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productCard.should('contain.text', "Sweet & tasty!")
    })

    it('Read a review', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchInputFiled.type('King{enter}');
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productNames.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.productCardReviewDropdown.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.productCardReviewRow.should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!')
    })
    
    it('Add a review', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchInputFiled.type('Raspberry{enter}');
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productNames.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      HomePage.productCardReviewInputField.click();
      HomePage.productCardReviewInputField.type("Tastes like metal");
      // Click Submit
      HomePage.productCardReviewSubmitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.productCardReviewDropdown.click();
      // Validate review -  "Tastes like metal"
      HomePage.productCardReviewRow.should('contain.text', 'Tastes like metal')
    })

    it('Validate product card amount', () => {
      // Validate that the default amount of cards is 12
      HomePage.amountsOfItemsPerPageDropdown.should('contain.text', '12');
      // Change items per page (at the bottom of page) to 24
      HomePage.itemsPerPageDropdown.click();
      HomePage.itemsPerPageAmountOptions.contains('24').click();
      // Validate that the amount of cards is 24
      HomePage.amountsOfItemsPerPageDropdown.should('contain.text', '24');
      // Change items per page (at the bottom of page) to 36
      HomePage.itemsPerPageDropdown.click();
      HomePage.itemsPerPageAmountOptions.contains('36').click();
      // Validate that the amount of cards is 36
      HomePage.amountsOfItemsPerPageDropdown.should('contain.text', '36');
    })
    
    it('Buy Girlie T-shirt', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Girlie
      HomePage.searchInputFiled.type('Girlie{enter}');
      // Add to basket "Girlie"
      HomePage.addToBasketButton.click();
      // Click on "Your Basket" button
      HomePage.basketButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressRow.contains('United Fakedom').click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryRowOption.contains('Standard Delivery').click()
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.cardRadioButton('5678').click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.checkoutButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.orderCompletionHeader.should('contain.text', 'Thank you for your purchase!')
    })
    
    it('Add address', () => {
      const country = 'Latvia';
      const uniqueName = `Demo ${Date.now()}`; // Date.now() returns the timestamp, in millisecons, of the current time
      const mobileNumber = '20000000';
      const zipCode = 'LV0000';
      const addressLine = 'Riga, Random Street 14';
      const city = 'Riga';
      const state = 'Test';
      const fullAddress = `${addressLine}, ${city}, ${state}, ${zipCode}`;

      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPaymentButton.click()
      // Click on My saved addresses
      HomePage.savedAddressButton.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressPage.addNewAddressButton.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.countryInputFiled.type(country);
      CreateAddressPage.nameInputFiled.type(uniqueName);
      CreateAddressPage.mobileNumberInputField.type(mobileNumber);
      CreateAddressPage.zipCodeInputField.type(zipCode);
      CreateAddressPage.addressInputField.type(addressLine);
      CreateAddressPage.cityInputField.type(city);
      CreateAddressPage.stateInputField.type(state);
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      SavedAddressPage.addressRow
        .should('contain', uniqueName)
        .and('contain', fullAddress)
        .and('contain', country);
    })
    
    it('Add payment option', () => {
      const uniqueName = `Demo ${Date.now()}`;
      const cardNumber = '2342351241241242';
      const expiryMonth = '7';
      const expiryYear = '2090';

      const last4Digits = cardNumber.slice(-4);
      const maskedCard = `************${last4Digits}`;

      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPaymentButton.click()
      // Click on My payment options
      HomePage.savedPaymentButton.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addCardDropdown.click();
      // Fill in Name
      SavedPaymentMethodsPage.nameInputField.type(uniqueName);
      // Fill in Card Number
      SavedPaymentMethodsPage.cardInputField.type(cardNumber);
      // Set expiry month to 7
      SavedPaymentMethodsPage.expiryMonthSelect.select(expiryMonth);
      // Set expiry year to 2090
      SavedPaymentMethodsPage.expiryYearSelect.select(expiryYear);
      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.cardDetailRow
        .should('contain', maskedCard)
        .and('contain', uniqueName)
        .and('contain', `${expiryMonth}/${expiryYear}`);
    })
  });
});
