import knex from "knex";
const builder = knex({
  client: 'postgres',
  connection: {
    host : '127.0.0.1',
    user : "postgres",
    password : "Vonic@Team281045",
    database : "trainning"
  },
  pool: { min: 0, max: 7 } // connectionpool có tối đa 7 connection trong 1 lúc.
});
export default builder;
