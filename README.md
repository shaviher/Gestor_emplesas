
# Proyecto Bimestrar Gestor de Tienda

Este proyecto se centra en el desarrollo de una API web implementada en NodeJS, destinada a gestionar el registro de ventas, productos en línea y otras operaciones comerciales de una empresa. La aplicación se estructura en dos secciones principales, administrador y cliente

## Variables de Entorno
- `PORT=3001`
- `URI_MONGO=mongodb://localhost:27017/gestortienda`
- `SECRETORPRIVATEKEY=Est03sMyPub1cK3yM1sL0c0$`

## Credenciales del Administrador
```bash
  {
        name: "Braulio",
        lastname: "Echeverria",
        username: "jbraulio85",
        email: "becheverria@gmail.com",
        password: "admin123",
        rol: "ADMIN"
    }
```

#  Instalación del Proyecto
- Pasos: Instalar Node.js y MongoDB en su equipo.
- Clonar el repositorio:

```bash
  git clone https://github.com/tuusuario/tu-repo.git
```
- Instalar dependencias 
```bash
  npm install
```
# Iniciar la API
- Para iniciar en modo desarrollo
```bash 
  npm run dev
```
- Para iniciar en producción:

```bash 
  npm start
```
## 📌 Uso de la API http://localhost:3001/GestorTienda/v1
### 🔹 Autenticación
| Método | Ruta                 | Descripción          |  |
|--------|----------------------|----------------------|--------------|
| POST   | `/auth/login`    | Iniciar sesión       |  USER / ADMIN      |
| POST   | `/auth/register` | Registrar usuario    |  USER / ADMIN      |

### 🔹 USER
| Método | Ruta                 | Descripción          |  |
|--------|----------------------|----------------------|--------------|
| POST   | `/user/updateUser/:uid`    |  Actualizar Usuario       |  USER / ADMIN      |
| POST   | `/user/deleteUser/:uid` | Eliminar usuario    |  USER / ADMIN      |

### 🔹 Gestión de Categorias
| Método | Ruta                | Descripción                 |  |
|--------|---------------------|-----------------------------|--------------|
| GET    | `/category/getCategories`     | Obtener todos las categorias | USER / ADMIN |
| POST   | `/category/createCategory`     | Crear una nueva categoria     | ADMIN |
| PUT    | `/category/updateCategory/:cid` | Actualizar una cateogira      | ADMIN |
| DELETE | `/category/deleteCategory/:cid` | Eliminar una categoria        | ADMIN |

### 🔹 Gestión de Productos
| Método | Ruta                | Descripción                 |  |
|--------|---------------------|-----------------------------|--------------|
| GET    | `/product/exploreProducts`     | Obtener todos los productos | USER / ADMIN |
| GET    | `/product/searchProduct/:pid` | Obtener un producto por ID  | USER / ADMIN |
| POST   | `/product/createProduct`     | Crear un nuevo producto     | ADMIN |
| PUT    | `/product/updateProduct/:pid` | Actualizar un producto      | ADMIN |
| DELETE | `/product/deleteProduct/:pid` | Eliminar un producto        | ADMIN |

### 🔹 Carrito de Compras
| Método | Ruta                     | Descripción                   | Autenticación |
|--------|--------------------------|-------------------------------|--------------|
| POST   | `/api/cart`              | Agregar un producto al carrito | USER    |
| GET    | `/api/cart`              | Ver productos en el carrito    | USER   |
| DELETE | `/api/cart/:id`          | Eliminar un producto del carrito | USER   |

---
