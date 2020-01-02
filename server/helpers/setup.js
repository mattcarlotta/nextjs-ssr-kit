import request from "supertest"; // eslint-disable-line import/no-extraneous-dependencies
import express from "express";
import routes from "~routes";

const app = express();
routes(app);

export default () => request(app);
