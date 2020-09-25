const {ObjectID, MongoClient}  = require('mongodb');

export const objectID = (param = new String()) => {
  return new ObjectID(param);  
}

export const con = async ({url, database, collection}) => {
  const conn =  await MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
  const client =  await conn.db(database).collection(collection);  
  return{conn, client};
}

module.exports = {objectID, con};