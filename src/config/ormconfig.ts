import { DataSource } from "typeorm";
import { testUser } from "../Entity/testUser";
import dotenv from "dotenv";
import path from "path";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
console.log(path.resolve(__dirname, "../../migration"));

dotenv.config();
export const datasource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  entities: [testUser],
  migrations: ["src/migrations/*{.ts,.js}"],
  migrationsTableName: "Migration",
  //@ts-ignore
  cli: {
    migrationsDir: "migration",
  },
});
// export default datasource;
