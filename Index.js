import { setup } from "./lib/mongo/index.js";
import { getCount, find, findOne, findRange, findPage } from "./lib/mongo/find.js";
import { unzip } from './lib/compress/index.js'

const init = async () => {
  setup("mongodb://127.0.0.1:27017/", "testing", "room"); 
  await find();    
}

init();
