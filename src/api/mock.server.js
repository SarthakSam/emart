import { createServer, Model } from "miragejs";
import { data } from './mockdata';
 
export function server() {
  createServer({
      models: {
        product: Model,
      },
      routes() {
        // this.namespace = "api";
        this.timing = 3000;
        this.get('/api/products',(schema)=>{
          return schema.products.all();
        });
        this.post('/api/products',(schema,request)=>{
          let body = JSON.parse(request.requestBody);
          return schema.products.create(body);
        });
      },
      seeds(server){
          data.forEach(element => {
            server.create("product", element);
          });
          // server.create("product",{name:"product1"});
          // server.create("product",{name:"product2"});
          // server.create("product",{name:"product3"});
          // server.create("product",{name:"product4"});
      }
  })
}