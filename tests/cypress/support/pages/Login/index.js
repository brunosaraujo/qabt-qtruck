import { el } from './elements'
import modal from '../../components/Modal'

class LoginPage {

    constructor() {
        this.modal = modal
    }

    go() {
        cy.visit('/')

        cy.get(el.title)
            .should('be.visible')
            .should('have.text', 'Acesse sua conta')
    }

    form(user) {
        if (user.instagram)
            cy.get(el.instagram)
                .clear()
                .type(user.instagram)
    
        if (user.password)
            cy.get(el.password)
                .clear()
                .type(user.password)
    }

    submit() {
        cy.contains(el.button)
            .click()
    }
}

export default new LoginPage()

