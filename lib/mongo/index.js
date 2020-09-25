class Mongo{
  constructor(){
    this.url = new String();
    this.database = new String();
    this.collection = new String();
  }
  setup = (u = new String(),d = new String(),c = new String()) => {
    this.url = u;this.database = d;this.collection = c;  
    return {url : this.url, database : this.database, collection : this.collection}
  }  
}

module.exports = Mongo;
