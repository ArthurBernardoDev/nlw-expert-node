import { fastify } from "fastify";
import { createPool } from "./routes/create-poll";

const app = fastify();

app.register(createPool)

app.listen({ port: 3000 }).then(() => {
  console.log("listening on port 3000");
});
