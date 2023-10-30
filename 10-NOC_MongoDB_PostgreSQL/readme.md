# Readme para este archivo

He quitado del package.json **general** la dependencia de _nodemon_ porque voy a trabajar aquí con ts-node. [Configuración](https://gist.github.com/Klerith/3ba17e86dc4fabd8301a59699b9ffc0b)
```json
  "nodemon": "3.0.1",
```

## Para dev

1. Clonar el archivo .env.template y pasarlo a .env
2. Configurar las variables de entorno:
  ```.env
    PORT=

    MAILER_EMAIL=
    MAILER_SECRET_KEY=

    PROD=false
  ```
3. Crear los módulos de node con `npm i`
4. Levantar las bases de datos con
  ```
    docker compose up -d
  ```
5. Ejecutar el comando `npx prisma migrate dev`
6. Ejecutar `npm run dev`

## DBs

Voy a usar [Mongoose](https://mongoosejs.com)
Voy a usar [Prisma](https://www.prisma.io/docs/getting-started/quickstart) (siguiendo la doc con PostgreSQL)

También ha otra que es [TypeORM](https://typeorm.io) la cual no voy a usar pero existe
