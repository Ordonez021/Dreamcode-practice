let dato = {
    title: 'nuevo Post',
    body: 'mi contenido'
}
let miToken = 'este_es_i_token';


axios.interceptors.request.use(
    (config) => {
        config.headers.authorizatios = `Bearer $(miToken)`;
        return config;
    },(error)=>{
        return Promise.reject(error);

    }
)


//tenemos axios.spread() distribuir las variables en diferentes respuestas

let pedido1 = axios.get('htttps://api.ejemplo.com/data1');
let pedido2 = axios.get('htttps://api.ejemplo.com/data2');
let pedido3 = axios.get('htttps://api.ejemplo.com/data3');

const array = [pedido1,pedido2,pedido3];
//utilizamos el axios.post tambien se puede utiolizar axios.get / axios.put / axios.patch
axios.all(array)
.then(axios.spread((respuesta1,respuesta2,respuesta3)=>{
    //codigo
}))
.catch(error => {
    //manejar errores
});