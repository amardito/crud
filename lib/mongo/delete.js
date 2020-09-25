const {con} = require('./option');

const del = async (objCon, param = {}) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.deleteOne(param);
  } catch (error) {return false;}
  
  await conn.close();
  return true;
}

const delMany = async (objCon, param = {}) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.deleteMany(param);
  } catch (error) {return false;}
  
  await conn.close();
  return true;
}

module.exports = {del,delMany};