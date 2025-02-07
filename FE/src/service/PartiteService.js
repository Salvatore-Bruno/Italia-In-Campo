export const PartiteService = {
    getPartite(isConcluse) {
        if (isConcluse) {
            return[
                {
                    id: 1,
                    squadraCasa: 'Inter',
                    squadraOspite: 'Juventus',
                    data: '2021-05-15',
                    ora: '20:45',
                    risultato: '2-1',
                    campo: 'San Siro',
                    location: 'Milano, Lombardia'

                },

                {
                    id: 2,
                    squadraCasa: 'Milan',
                    squadraOspite: 'Roma',
                    data: '2021-05-15',
                    ora: '18:00',
                    risultato: '1-1',
                    campo: 'San Siro',
                    location: 'Milano, Lombardia'

                },

                {
                    id: 3,
                    squadraCasa: 'Napoli',
                    squadraOspite: 'Lazio',
                    data: '2021-05-15',
                    ora: '15:00',
                    risultato: '3-0',
                    campo: 'San Paolo',
                    location: 'Napoli, Campania'

                }
            ] 
        }
        else {
            return[
                {
                    id: 4,
                    squadraCasa: 'Inter',
                    squadraOspite: 'Milan',
                    data: '2021-05-22',
                    ora: '20:45',
                    campo: 'San Siro',
                    location: 'Milano, Lombardia'

                },

                {
                    id: 5,
                    squadraCasa: 'Juventus',
                    squadraOspite: 'Roma',
                    data: '2021-05-22',
                    ora: '18:00',
                    campo: 'Juventus Stadium',
                    location: 'Torino, Piemonte'

                },

                {
                    id: 6,
                    squadraCasa: 'Napoli',
                    squadraOspite: 'Juventus',
                    data: '2021-05-22',
                    ora: '15:00',
                    campo: 'San Paolo',
                    location: 'Napoli, Campania'

                }
            ] 
        }
    },
    getPartiteComputed(isConcluse) {
        // Recupera l'array di partite, che si assume sia un array di oggetti con la proprietà "location"
        const partite = this.getPartite(isConcluse);
      
        // Raggruppa le partite per location usando il metodo reduce
        const grouped = partite.reduce((acc, partita) => {
          const loc = partita.location;
          if (!acc[loc]) {
            acc[loc] = [];
          }
          acc[loc].push(partita);
          return acc;
        }, {});
      
        // Trasforma l'oggetto raggruppato in un array di oggetti { location, partite }
        const partiteComputed = Object.entries(grouped).map(([location, partite]) => ({
          location: location,
          partite: partite
        }));
      
        // Restituisce una Promise già risolta con il risultato
        return Promise.resolve(partiteComputed);
      }      
      
}