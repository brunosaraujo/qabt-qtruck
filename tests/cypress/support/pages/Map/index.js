import { el } from './elements'

class MapPage {

    loggedUser(name) {

        const firstName = name.split(' ')[0]

        cy.get(el.logged)
            .should('be.visible')
            .should('have.text', `Olá, ${firstName}`)
    }

    createLink() {
        cy.get(el.createLink)
            .should('be.visible')
            .click()
    }

    goToFoodTruck(foodtruckName){
        cy.get(`img[alt="${foodtruckName}"]`)
            .should('be.visible')
            .click({force: true})

        cy.get('.leaflet-popup-content a').click()  
    }
}

export default new MapPage()
