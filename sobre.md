# Projeto API com Node
- Criado Servidor
```javascript
/*import {createServer} from 'node:http'

const server = createServer((request,reponse) => {
    reponse.write("server ok ----->>>2233")
    console.log("Server ok--->")
    return reponse.end()
})

server.listen(3333)
*/
```
## Utilizar o Postgres com o Neon

  [Link para o neon.tech](https://neon.tech/ )


O Postgres multinuvem totalmente gerenciado com um nível gratuito

## TabelaS

- Criando a Tabela:

```javascript
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
```