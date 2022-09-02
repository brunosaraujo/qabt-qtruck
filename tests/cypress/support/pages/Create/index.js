import { el } from './elements'
import modal from '../../components/Modal'

class CreatePage {

    constructor() {
        this.modal = modal
    }

    form(foodtruck){
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        cy.get(el.name).type(foodtruck.name)
        cy.get(el.details).type(foodtruck.details)
        cy.get(el.opening_hours).type(foodtruck.opening_hours)

        cy.contains(el.final_semana, foodtruck.open_on_weekends ? 'Sim' : 'Não' ).click()

    }

    submit() {
        cy.contains('button', 'Cadastrar').click()
    }

}

export default new CreatePage