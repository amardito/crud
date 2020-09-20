import { con } from "./index.js";
import { createObjText } from "../transform/index.js";

export const setField = (field = new Array()) => {
  if(field.length === 0) return false;
  const {conn, client} = await con(objCon);      
  let i = 0;
  let len = field.length;
  while(i<len){    
    let tmp = createObjText(field[i]);
    await client.createIndex(tmp);
    i++;
  }
  await conn.close();
  return true;
}

export const searchText = () => {
  const {conn, client} = await con(objCon);  
  let res = await client.find(param, {projection:field}).limit(100).sort(sort).toArray();
  
  await conn.close();
}