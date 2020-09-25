const {con} = require('./option');

const set = async (objCon, param = {}, set = {}) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.updateOne(param, {
      $set: set,
      $currentDate: { lastModified: true }
    });
  } catch (error) {return false;}
  
  await conn.close();
  return true;
}

const setMany = async (objCon, param = {}, set = {}) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.updateMany(param, {
      $set: set,
      $currentDate: { lastModified: true}
    });
  } catch (error) {return false;}
  
  await conn.close();
  return true;
}

module.exports = {set, setMany};