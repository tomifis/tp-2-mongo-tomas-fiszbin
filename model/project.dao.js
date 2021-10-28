import { ObjectId } from 'mongodb'
import { conexion } from './database.js'

export async function findAll() {
    return conexion(async function (db) {
        return await db.collection("testimonios").find().toArray()
    })
}

export async function findAllPublicados() {
    return conexion(async function (db) {
        return await db.collection("testimonios").find({publicado:true}).toArray()
    })
}

export async function create(entity) {
    return conexion(async function (db) {
        let date = new Date()
        entity.fecha = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        entity.hora = date.getHours() + ':' + date.getMinutes()
        entity.publicado=false
        await db.collection("testimonios").insertOne(entity)
        return entity
    })
}

export async function findById(id){
    return conexion(async function(db){
        return await db.collection("testimonios").findOne({_id: ObjectId(id)})
    })
}

export async function deleteById(id){
    return conexion(async function(db){
        return await db.collection("testimonios").deleteOne({_id: ObjectId(id)})
    })
}

export async function updateById(id){
    return conexion(async function(db){
        return await db.collection("testimonios").updateOne({_id: ObjectId(id)},{
            $set:{
                publicado:true
            }
        })
    })
}

export async function replaceById(id,reemplazo){
    return conexion(async function(db){
        return await db.collection("testimonios").replaceOne({_id: ObjectId(id)},
            {
                ...reemplazo
            })
    })
}

export default {
    findAllPublicados,
    create,
    findById,
    deleteById,
    deleteById,
    findAll,
    updateById,
    replaceById
}
