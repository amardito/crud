import { con } from './index.js';
import { gzip } from "../compress/index.js";

export const find =  async (param = {}) => {
  const {conn, client} = await con();
  let res = await client.find(param).limit(100).toArray();
  
  await conn.close();
  return res;
}

export const findOne = async (param = {}) => {
  const {conn, client} = await con();
  let res = await client.findOne(param);
  
  await conn.close();
  return res;
}

export const findRange = async (start = 0, count = 1,param = {}) => {
  const {conn, client} = await con();
  let res = await client.find(param).skip(start).limit(count).toArray();  
  
  await conn.close();
  return res;
}

export const findPage = async (page = 1,count = 10,param = {}) => {  
  let skp = count * (page-1);
  let res = await findRange(skp, count, param);  
  return res;
}

export const getCount = async (param = {}) => {  
  const {conn, client} = await con();
  let res = await client.countDocuments(param);
  
  await conn.close();
  return res;
}




