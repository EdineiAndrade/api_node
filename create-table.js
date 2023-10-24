import { sql } from "./db.js";

sql`
    CREATE TABLE videos3 (
            ID TEXT PRIMARY KEY,
            title TEXT,
            description TEXT,
            duration INTEGER
        );
    `
    .then(() =>{
        console.log('Tabela criada!!')
    })