const find =  async (client, param = {}, field = {}, sort = {}) => {  
  let res = await client.find(param, {projection:field}).limit(100).sort(sort).toArray();  
  return res;
}

const findOne = async (client, param = {}, field={}) => {  
  let res = await client.findOne(param, {projection:field});
  return res;
}

const findRange = async (client, start = 0, count = 1,param = {}, field={}, sort = {}) => {  
  let res = await client.find(param, {projection:field}).skip(start).limit(count).sort(sort).toArray();  
  return res;
}

const findPage = async (client, page = 1,count = 10,param = {}, field = {}, sort = {}) => {  
  let skp = count * (page-1);
  let res = await findRange(objCon, skp, count, param, field, sort);  
  return res;
}

const getCount = async (client, param = {}) => {    
  let res = await client.countDocuments(param);  
  return res;
}

module.exports = {find, findOne, findRange, findPage, getCount};


