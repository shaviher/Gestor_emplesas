import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title: "Gestor de Tienda API",
            version: "1.0.0",
            description: "API para administrar una tienda",
            contact:{
                name: "Javier Alejnadro Hernandez Ochoa",
                email: "jhernandez-2020439@gkinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/GestorTienda/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js",
        "./src/product/product.routes.js",
        "./src/category/category.routes.js",
        "./src/cart/cart.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}