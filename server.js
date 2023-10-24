
import { fastify } from "fastify"
//import { DatabaseMemory } from "./database-memory.js"
import { DatabasePostegres } from "./database-postgres.js"


const server = fastify()

//const database = new DatabaseMemory()
const database = new DatabasePostegres()
server.post('/videos', async (request, reply) =>{
    const {title, description, duration} = request.body
   await database.create({
        title,
        description,
        duration,
    })  

    console.log(database.list())
    return reply.status(201).send()
})
server.get('/videos', async(request) =>{
    const search = request.query.search

    const videos = await database.list(search)

    return videos
})
server.put('/videos/:id', (request,reply) =>{
    const {title, description, duration} = request.body
    database.create({
        titl: title,
        description,
        duration,
    })  
    return reply.status(204).send()
})
server.delete('/videos/:id', (request,reply) =>{
    const videoID = request.params.id
    
    database.delete(videoID)

    return reply.status(204).send()
})

server.listen({
    port: 3333,

})