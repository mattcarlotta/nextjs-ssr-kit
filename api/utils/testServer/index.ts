import request from "supertest";
import express from "express";
import middlewares from "~middlewares";
import routes from "~routes";

const server = express();
middlewares(server);
server.use("/api", routes);

const setupServer = (): request.SuperTest<request.Test> => request(server);

export default setupServer;
