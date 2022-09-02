import { el } from './elements'
import modal from '../../components/Modal'

class LoginPage {

    constructor() {
        this.modal = modal
    }

    go(lat = '-26.55052', long = '-46.633309') {
        cy.visit('/', this.mockLocation(lat, long))

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

    mockLocation(latitude, longitude) {
        return {
            onBeforeLoad(win) {
                cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err)=>{
                    if (latitude && longitude) {
                        return cb({coords: {latitude, longitude}})
                    }
                    throw err({code: 1})
                });
            }
        }       
    }
}

export default new LoginPage()

