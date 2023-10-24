import { randomUUID } from "crypto"
import { sql } from "./db.js"
//UUID --> Universally Unique Identifier,
export class DatabasePostegres{
    #videos = new Map()

    async list(search){
        let video

        if(search){
            video = await sql`select from * videos where title ilike ${'%' + search + '%'}`
        }else{
            video = await sql`select from * videos`
        }
    }

    async create(video) {
        const videoID = randomUUID()
        const {title, description, duration} = video

        await sql`insert into videos(id, title, description, duration) VALUES (${videoID},${title},${description},${duration})`
    }

    update(id, video){
        this.#videos.set(id,video)
    }

    delete(id){
        this.#videos.delete(id)
    }
}