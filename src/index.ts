import "reflect-metadata";
import {createConnection} from "typeorm";
// import {User} from "./entity/User";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

createConnection({
    type: "postgres",
    host: "raja.db.elephantsql.com",
    port: 5432,
    username: "zxpbzzdh",
    password: "3JA0JBdZ--4N8eGIzdYQZ_jIWfYMh1-S",
    database: "zxpbzzdh",
    entities: [
      // User,
      __dirname + "/entity/*.ts"
    ],
    synchronize: true,
    logging: true,
}).then(async () => {
    console.log('syncing to database')
}).catch(error => console.log(error))

