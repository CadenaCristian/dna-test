import { findDna, getAllStats } from "../services";

export const valAnomality = async (dna: string[][]) => {
  try {
    const response = await findDna(dna);
    return {
      status: response ? 200 : 403,
      message: response ? "Tiene anomalia" : "No tiene anomalia",
    };
  } catch (error) {
    return { status: 400, message: `${error}` };
  }
};

export const getStats = async () => {
  try {
    const response = getAllStats();
    return response;
  } catch (error) {
    return { status: 400, message: `${error}` };
  }
};
