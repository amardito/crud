import { con } from './index.js';

export const find =  async (objCon, param = {}) => {
  const {conn, client} = await con(objCon);
  let res = await client.find(param).limit(100).toArray();
  
  await conn.close();
  return res;
}

export const findOne = async (objCon, param = {}) => {
  const {conn, client} = await con(objCon);
  let res = await client.findOne(param);
  
  await conn.close();
  return res;
}

export const findRange = async (objCon, start = 0, count = 1,param = {}) => {
  const {conn, client} = await con(objCon);
  let res = await client.find(param).skip(start).limit(count).toArray();  
  
  await conn.close();
  return res;
}

export const findPage = async (objCon, page = 1,count = 10,param = {}) => {  
  let skp = count * (page-1);
  let res = await findRange(objCon, skp, count, param);  
  return res;
}

export const getCount = async (objCon, param = {}) => {  
  const {conn, client} = await con(objCon);
  let res = await client.countDocuments(param);
  
  await conn.close();
  return res;
}




