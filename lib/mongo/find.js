import { MongoClient } from "mongodb";
import { url, database, collection } from './index';

export const find =  async (param = {}) => {
  const client = new MongoClient(url, {useNewUrlParser:true, useUnifiedTopology:true}).db(database).collection(collection);  
  let res = await client.find(param).limit(100).toArray();
  client.close();
  return res;
}

export const findOne = async (param = {}) => {
  const client = new MongoClient(url, {useNewUrlParser:true, useUnifiedTopology:true}).db(database).collection(collection);  
  let res = await client.findOne(param);
  client.close();
  return res;
}

export const findRange = async (param = {},start = 0, count = 0) => {
  const client = new MongoClient(url, {useNewUrlParser:true, useUnifiedTopology:true}).db(database).collection(collection);    
  let res = await client.find(param).skip(start).limit(count).toArray();  
  client.close();
  return res;
}

export const findPage = async (param = {},page = 1,count = 10) => {  
  let skp = limit * (page-1);
  let res = await findRange(param, skp, count);  
  return res;
}

