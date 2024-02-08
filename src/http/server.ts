import { fastify } from "fastify";
import { createPool } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import fastifyCookie from "@fastify/cookie";
import fastifyWebsocket from "@fastify/websocket";
import { pollResults } from "./webSocket/poll-results";

const app = fastify();

app.register(fastifyCookie, {
  secret: "dasokfgjak.l@s,/.d.asgdoasgdoas89d8a9s7d089asfya0sdy8a06f",
  hook: "onRequest",
  parseOptions: {},
});

app.register(fastifyWebsocket);
app.register(createPool);
app.register(getPoll);
app.register(voteOnPoll);
app.register(pollResults);

app.listen({ port: 3000 }).then(() => {
  console.log("listening on port 3000");
});
