<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo local

1. Clonar el repositorio
2. Instalar dependencias
    ```shell
    npm install
    ```
3. Tener Nest CLI instalado
    ```shell
    npm i -g @nestjs/cli
    ```
4. Levantar la base de datos
    ```shell
    docker-compose up -d
    ```
5. Clonar el archivo __.env.template__ y renombrar la copia __.env__

6. Llenar las variables de entorno definidas en el __.env__

7. Ejecutar
    ```shell
    npm run start:dev
    ```
8. Reconstruir la base de datos con la semilla
    ```shell
   http://localhost:3000/api/v2/seed
    ```

# Ejecutar en desarrollo Docker
1. Crear el archivo ```.env.dev```
2. Llenar las variables del entorno
3. Ejecutar para crear imagen
    ```shell
    docker-compose -f docker-compose.dev.yaml --env-file .env.dev build
    ```
4. Ejecutar para correr contenedor
    ```shell
    docker-compose -f docker-compose.dev.yaml --env-file .env.dev up
    ```

# Ejecutar en produccion Docker
1. Crear el archivo ```.env.prod```
2. Llenar las variables del entorno
3. Ejecutar para crear imagen
    ```shell
    docker-compose -f docker-compose.prod.yaml --env-file .env.prod build
    ```
4. Ejecutar para correr contenedor
    ```shell
    docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
    ```

## Stack usado
* Nest
* MongoDB