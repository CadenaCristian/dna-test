import request from "supertest";
import app from "../app";
import {
  matrixzData,
  incompleteMatrix,
  matrixWithoutAnomaly,
} from "../utils/data";

describe("Without stats table", () => {
  it(`should return a object`, async () => {
    const response = await request(app).get("/stats");
    expect(response.body).toEqual({
      status: 200,
      message: "No data",
    });
  });
});

matrixzData.forEach((matriz) => {
  describe(`Matriz test ${matriz.name}`, () => {
    it(`should return true ${matriz.descriptions}`, async () => {
      const response = await request(app)
        .post("/validate-anomaly")
        .send(matriz.dna);
      expect(response.body?.status).toBe(200);
    });
  });
});

describe("Matriz test incomplete matrix", () => {
  it(`should return error`, async () => {
    const response = await request(app)
      .post("/validate-anomaly")
      .send(incompleteMatrix.dna);
    expect(response.body?.status).toBe(400);
  });
});

describe("Matriz test without anomaly", () => {
  it(`should return 403`, async () => {
    const response = await request(app)
      .post("/validate-anomaly")
      .send(matrixWithoutAnomaly.dna);
    expect(response.body?.status).toBe(403);
  });
});

describe("Get stats", () => {
  it(`should return a object`, async () => {
    const response = await request(app).get("/stats");
    expect(Object.keys(response.body)).toEqual([
      "countAnomalies",
      "countNoAnomalies",
      "ratio",
    ]);
  });
});
