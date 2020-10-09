import request from "supertest";
import express from "express";
import routes from "~routes";

const server = express();
server.use("/api", routes);

const setupServer = (): request.SuperTest<request.Test> => request(server);

export default setupServer;
