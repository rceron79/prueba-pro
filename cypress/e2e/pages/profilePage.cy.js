
export class profilePage {


    uploadUserImage() {
        cy
            .get('.file-upload > #image')
            .selectFile('cypress/fixtures/john.jpg');
    }

    setFullUserInfo(userName, lastName){
        cy  
            .get('#name').clear().type(userName)
            .get('#lastName').clear().type(lastName)
            .get('#bornDate').clear().type('01/05/1979')
            .get('#country').select('Colombia')
            .get('#save-profile').click()
            .get('.confirmation-modal-info').should('have.text', 'Tu información se guardó correctamente');
    }
}
