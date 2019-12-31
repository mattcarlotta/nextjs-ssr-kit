import request from "supertest";
import express from "express";
import routes from "~routes";

const app = express();
routes(app);

export default () => request(app);
