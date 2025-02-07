# ItaliaInCampo

ItaliaInCampo è un'applicazione che gestisce i dati delle partite e delle classifiche del calcio delle categorie minori in Italia. Il progetto è composto da tre principali componenti:

1. **Frontend (FE)**: Interfaccia utente sviluppata con Vue.js e Bootstrap.
2. **Backend (BE)**: API sviluppate con Java e Spring Boot.
3. **Database (DB)**: MySQL con script per la creazione e inizializzazione del database.

## Struttura del progetto

La struttura del progetto è la seguente:
```bash
ItaliainCampo/ 
├── .idea/ # Configurazioni di JetBrains IDE 
├── BE [italia-in-campo]/ # Backend (Spring Boot) 
├── DB/ # Cartella con lo script di inizializzazione del database 
│ └── init.sql # Script SQL per la creazione del database 
├── FE/ # Frontend (Vue.js + Bootstrap) 
└── docker-compose.yml # Configurazione Docker Compose
```

## Prerequisiti

- **Docker**: Assicurati di avere Docker installato sulla tua macchina.
- **Docker Compose**: Utilizzato per orchestrare i tre container.

## Installazione e avvio

### Passo 1: Clona il repository

Se non lo hai già fatto, clona il repository del progetto:

```bash
git clone <url_del_repository>
cd ItaliaInCampo
```
### Passo 2: Configura l'ambiente
Assicurati che le cartelle `BE`, `FE` e `DB` siano correttamente configurate e che il tuo script SQL si trovi all'interno della cartella `DB/init.sql`.

## Passo 3: Avvia i container
Dal terminale, nella cartella principale del progetto, esegui il comando:

```bash
docker-compose up --build
```

Questo comando costruisce e avvia i seguenti container:

- **Database (MySQL):** MySQL sarà avviato e verrà eseguito lo script `init.sql` per creare il database.
- **Backend (Spring Boot):** Le API saranno esposte sulla porta 8080.
- **Frontend (Vue.js + Bootstrap):** L'interfaccia utente sarà disponibile sulla porta 3000.

## Passo 4: Accesso

- **Frontend:** Apri il browser e accedi a [http://localhost:3000](http://localhost:3000) per vedere l'interfaccia utente.
- **Backend:** Le API backend sono disponibili su [http://localhost:8080](http://localhost:8080).
- **Database:** Il database MySQL è accessibile sulla porta 3306.

## Comandi utili

- **Avvia i container (con build, se necessario):**

  ```bash
  docker-compose up --build
  ```

- **Spegni i container:**

  ```bash
  docker-compose down
  ```

- **Visualizza i log di un container:**

  ```bash
  docker logs <nome_del_container>
  ```

- **Accedi a un container (ad esempio per il database):**

  ```bash
  docker exec -it my-database bash
  ```