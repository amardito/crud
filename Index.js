import { getCount, find, findOne, findRange, findPage } from "./lib/mongo/find.js";
import { gzip } from "./lib/compress/index.js";
import Mongo from "./lib/mongo/index.js";

const mongo = new Mongo();
const mongo1 = new Mongo();

const init = async () => {
  
  const obj1 = mongo.setup("mongodb://127.0.0.1:27017", "testing", "room");
  const obj2 = mongo1.setup("mongodb://127.0.0.1:27017", "testing", "user");

  let [res, res2] = await Promise.all([find(obj1), find(obj2)]);  
  
  console.log(gzip(res.toString()));  
  console.log(gzip(res2.toString()));  

  //console.log(res);
  //console.log(res2);

}

init();
