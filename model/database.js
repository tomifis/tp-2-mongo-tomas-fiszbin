import mongodb from 'mongodb'
const client = new mongodb.MongoClient('mongodb://localhost:27017')

export async function conexion(callback){
    
    await client.connect()
    
    let result = await callback(client.db("portfolio"))

    client.close()

    return result
}

export default {
    conexion
}