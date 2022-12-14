<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

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
5. Reconstruir la base de datos con la semilla
    ```shell
   http://localhost:3000/api/v2/seed
    ```
5. Ejecutar
    ```shell
    npm run start:dev
    ```

## Stack usado
* Nest
* MongoDB