describe("Inscription à un événement", () => {
    beforeEach(() => {
        cy.viewport(1440, 900)
    })

    const evenementPublie = {
        evenement: {
            id: 1,
            titre: 'Concert Reggae',
            description: 'Une soirée musicale.',
            date_debut: '2026-12-25 20:00:00',
            date_fin: '2026-12-25 23:00:00',
            lieu: 'Palais de la Culture',
            image: null,
            statut: 'publie',
            categorie: { libelle: 'Musique' },
            localisation: { libelle: 'Plateau' },
        },
    }

    it('inscrit un participant et affiche la confirmation', () => {
        cy.intercept('GET', '**/api/evenements/*', { body: evenementPublie }).as('getEvenement')
        cy.intercept('POST', '**/api/inscriptions', {
            statusCode: 201,
            body: { success: true, inscription: { email_participant: 'awa@example.com' } },
        }).as('inscription')

        cy.visit('/evenements/1')
        cy.wait('@getEvenement')
        cy.wait(1500)
        cy.get('input[placeholder="Votre nom et prénom"]').type('Awa Koné', { delay: 200 })
        cy.wait(1500)
        cy.get('input[placeholder="Votre adresse email"]').type('awa@example.com', { delay: 200 })
        cy.wait(1500)
        cy.contains('button', 'Confirmer mon inscription').click()
        cy.wait('@inscription')
        cy.contains('Inscription confirmée').should('be.visible')
        cy.contains('awa@example.com').should('be.visible')
        cy.wait(2500)
    })

    it("affiche une erreur si l'événement est complet", () => {
        cy.intercept('GET', '**/api/evenements/*', { body: evenementPublie })
        cy.intercept('POST', '**/api/inscriptions', {
            statusCode: 409,
            body: { success: false, message: 'Cet événement est complet.' },
        }).as('inscription')

        cy.visit('/evenements/1')
        cy.wait(1500)
        cy.get('input[placeholder="Votre nom et prénom"]').type('Awa Koné', { delay: 200 })
        cy.get('input[placeholder="Votre adresse email"]').type('awa@example.com', { delay: 200 })
        cy.wait(1500)
        cy.contains('button', 'Confirmer mon inscription').click()
        cy.wait('@inscription')
        cy.scrollTo('top', { duration: 800 })
        cy.wait(1000)
        cy.contains('Cet événement est complet').should('be.visible')
        cy.wait(2500)
    })

    it("masque le formulaire si l'événement est annulé", () => {
        cy.intercept('GET', '**/api/evenements/*', {
            body: { evenement: { ...evenementPublie.evenement, statut: 'annule' } },
        })

        cy.visit('/evenements/1')
        cy.wait(1500)
        cy.contains('Cet événement a été annulé').should('be.visible')
        cy.get('input[placeholder="Votre nom et prénom"]').should('not.exist')
        cy.wait(2500)
    })
})