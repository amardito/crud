import mongo from "mongodb";

const {MongoClient, ObjectID} = mongo;

export let url = new String();
export let database = new String();
export let collection = new String();

export const objectID = (param = new String()) => {
  return new ObjectID(param);  
}

export const setup = (u = new String(),d = new String(),c = new String()) => {
  url = u;database = d;collection = c;  
}

export const con = async () => {
  const conn =  await MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
  const client =  await conn.db(database).collection(collection);  
  return{conn, client};
}

