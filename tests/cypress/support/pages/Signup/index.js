import { el } from './elements'
import modal from '../../components/Modal'

class SigupPage {

    constructor() {
        this.modal = modal
    }

    go() {
        cy.visit('/signup')
    }

    form(user) {
        if (user.name)
            cy.get(el.name)
                .clear()
                .type(user.name)

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

export default new SigupPage()
