import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'

describe('Recomendação', ()=> {

    it('deve recomentada um food truck', ()=>{

        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: 'pwd123'
        }
        
        const foodtruck = {
            latitude: '-23.584548837854058',
            longitude:'-46.674446913517876',
            name: 'Tienda Del Chavo',
            details: 'O melhor lugar para tomar o suco de limão que parece de groselhaa e tem sabor de tamarindo.',
            opening_hours: 'das 14h às 20h',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')
    })

    it('não deve cadastrar foodtruck com o nome duplicado', () => {
        // 1 - a massa de testes deve ser independente
        // 2 - latitude e longitude deve ser único
        // 3 - você encontrar e corrigir o bug

        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: 'pwd123'
        }
        
        const foodtruck = {
            latitude: '-23.583654062428796',
            longitude: '-46.67752861976624',
            name: 'Churros da Dona Florinda',
            details: 'O melhor churros mecxicano da região.',
            opening_hours: 'das 15h às 16h',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)        
        
        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food truck já foi cadastrado!')


    })

    it('todos os campos são obrigatórios', () => {
        const user = {
            name: 'Mordecai',
            instagram: '@mordecai',
            password: 'pwd123'
        }
        
        const foodtruck = {
            latitude: '-23.584548837854058',
            longitude:'-46.674446913517876',
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        createPage.submit()

        const message = 'Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!'
        createPage.modal.haveText(message)
    })

    it('sem selecionar localização', () => {
        const user = {
            name: 'Mordecai',
            instagram: '@mordecai',
            password: 'pwd123'
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        createPage.submit()

        const message = 'Por favor, marque a localização no mapa!'
        createPage.modal.haveText(message)
    })
})