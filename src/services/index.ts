import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { firestore } from "../settings";

interface IDna {
  status: number;
  anomaly: boolean;
  dna: string;
}

const valArray = (dna: Array<string[]>) => {
  const longitud = dna[0].length;
  return dna.some((subArr) => subArr.length !== longitud) ? false : true;
};

export const getAllStats = async () => {
  const collectionRef = collection(firestore, "dna");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => ({
    status: doc.get("status"),
    anomaly: doc.get("anomaly"),
  }));

  if (data.length > 0) {
    const withAnomalies = data.filter((item) => item.anomaly).length;
    const withoutAnomalies = data.filter((item) => !item.anomaly).length;
    const response = {
      countAnomalies: withAnomalies,
      countNoAnomalies: withoutAnomalies,
      ratio: withAnomalies / (withAnomalies + withoutAnomalies),
    };
    return response;
  } else {
    return { status: 200, message: "No data" };
  }
};

export const findDna = async (dna: Array<string[]>) => {
  let anomaly = false;
  let flag = "";

  if (valArray(dna)) {
    for (let firstLevel = 0; firstLevel < dna.length; firstLevel++) {
      anomaly = findDnaRigth(dna[firstLevel]);
      if (anomaly) {
        flag = "lineal";
        break;
      }
    }

    if (!anomaly) {
      flag = "vertical";
      anomaly = findVertical(dna);
    }

    if (!anomaly) {
      flag = "RightDiaginal";
      anomaly = findRightDiaginal(dna);
    }

    if (!anomaly) {
      const invertDna = invertRows(dna);
      flag = "LeftDiaginal";
      anomaly = findRightDiaginal(invertDna);
    }
    await addDna({
      status: anomaly ? 200 : 403,
      anomaly,
      dna: JSON.stringify(dna),
    });

    return anomaly;
  } else {
    throw new Error("The array is not square");
  }
};

const addDna = async (data: IDna) => {
  try {
    const collectionRef = collection(firestore, "dna");
    await addDoc(collectionRef, data);
    return { status: 200 };
  } catch (error) {
    return { status: 500 };
  }
};

const findDnaRigth = (dna: string[]): boolean => {
  let anomaly = false;
  let arrConcidences: string[] = [];
  for (let index = 0; index < dna.length; index++) {
    if (
      arrConcidences.length === 0 ||
      arrConcidences[arrConcidences.length - 1] === dna[index]
    ) {
      arrConcidences.push(dna[index]);
    }
    if (arrConcidences.length >= 3) {
      anomaly = true;
    }
    if (!anomaly && dna[index] !== dna[index + 1]) {
      arrConcidences = [];
    }
    if (arrConcidences[arrConcidences.length - 1] !== dna[index] && anomaly) {
      break;
    }
  }

  return anomaly;
};

const findVertical = (dna: Array<string[]>) => {
  const numRows = dna.length;
  const numCols = dna[0].length;
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      let count = 1;
      let nextRow = row + 1;

      while (nextRow < numRows && dna[nextRow][col] === dna[row][col]) {
        count++;
        if (count >= 3) {
          return true;
        }
        nextRow++;
      }
    }
  }
  return false;
};

const findRightDiaginal = (dna: Array<string[]>) => {
  const numRows = dna.length;
  const numCols = dna[0].length;

  for (let firstLevel = 0; firstLevel < numRows; firstLevel++) {
    for (let secondLevel = 0; secondLevel < numCols; secondLevel++) {
      if (secondLevel <= numCols - 3) {
        const letter = dna[firstLevel][secondLevel];
        let count = 1;
        let row = firstLevel + 1;
        let col = secondLevel + 1;

        while (row < numRows && col < numCols && dna[row][col] === letter) {
          count++;
          if (count >= 3) {
            return true;
          }
          row++;
          col++;
        }
      }
    }
  }

  return false;
};

const invertRows = (dna: Array<string[]>) => {
  for (let i = 0; i < dna.length; i++) {
    dna[i].reverse();
  }
  return dna;
};
