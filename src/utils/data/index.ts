export const matrixzData = [
  {
    name: "threeByThreeLine",
    descriptions: "3x3 line",
    dna: [
      ["A", "A", "A"],
      ["A", "B", "C"],
      ["B", "A", "D"],
    ],
  },
  {
    name: "fourByFourLine",
    descriptions: "4x4 line",
    dna: [
      ["A", "B", "C", "D"],
      ["A", "A", "A", "A"],
      ["B", "A", "D", "A"],
      ["A", "B", "C", "D"],
    ],
  },
  {
    name: "fiveByFiveLine",
    descriptions: "5x5 line",
    dna: [
      ["A", "B", "C", "D", "E"],
      ["B", "A", "C", "D", "D"],
      ["B", "A", "D", "A", "E"],
      ["A", "C", "C", "C", "A"],
      ["B", "A", "C", "D", "E"],
    ],
  },
  {
    name: "sixBySixLine",
    descriptions: "6x6 line",
    dna: [
      ["A", "B", "C", "D", "E", "E"],
      ["B", "A", "C", "D", "D", "D"],
      ["B", "A", "D", "A", "E", "E"],
      ["A", "C", "C", "D", "A", "A"],
      ["B", "A", "E", "E", "E", "E"],
      ["B", "A", "C", "D", "E", "E"],
    ],
  },
  {
    name: "threeByThreeColumn",
    descriptions: "3x3 column",
    dna: [
      ["A", "B", "C"],
      ["A", "B", "C"],
      ["B", "B", "D"],
    ],
  },
  {
    name: "fourByFourColumn",
    descriptions: "4x4 column",
    dna: [
      ["A", "B", "C", "C"],
      ["A", "A", "C", "C"],
      ["A", "B", "D", "D"],
      ["A", "B", "D", "D"],
    ],
  },
  {
    name: "fiveByFiveColumn",
    descriptions: "5x5 column",
    dna: [
      ["A", "B", "D", "C", "C"],
      ["A", "C", "D", "C", "C"],
      ["B", "B", "E", "A", "D"],
      ["A", "B", "A", "C", "D"],
      ["A", "B", "D", "A", "D"],
    ],
  },
  {
    name: "sixBySixColumn",
    descriptions: "6x6 column",
    dna: [
      ["A", "B", "C", "D", "C", "C"],
      ["A", "E", "A", "E", "C", "C"],
      ["B", "B", "D", "F", "C", "D"],
      ["A", "D", "A", "B", "A", "B"],
      ["B", "B", "D", "A", "D", "D"],
      ["A", "B", "D", "C", "D", "D"],
    ],
  },
  {
    name: "threeByThreeRightDiaginal",
    descriptions: "3x3 right diagonal",
    dna: [
      ["A", "B", "C"],
      ["A", "A", "C"],
      ["B", "A", "A"],
    ],
  },
  {
    name: "fourByFourRigthDiagonal",
    descriptions: "4x4 right diagonal",
    dna: [
      ["B", "B", "C", "D"],
      ["B", "A", "D", "C"],
      ["C", "B", "C", "B"],
      ["D", "C", "B", "A"],
    ],
  },
  {
    name: "fiveByFiveRithDiagonal",
    descriptions: "5x5 right diagonal",
    dna: [
      ["A", "B", "C", "D", "E"],
      ["B", "A", "D", "E", "C"],
      ["C", "D", "A", "E", "B"],
      ["D", "E", "B", "A", "C"],
      ["E", "C", "D", "B", "A"],
    ],
  },
  {
    name: "sixBySixRigthDiagonal",
    descriptions: "6x6 right diagonal",
    dna: [
      ["B", "B", "C", "D", "E", "F"],
      ["B", "A", "D", "C", "F", "E"],
      ["C", "D", "A", "F", "B", "E"],
      ["D", "C", "F", "A", "E", "B"],
      ["E", "F", "B", "E", "C", "D"],
      ["F", "E", "E", "B", "D", "A"],
    ],
  },
  {
    name: "threeByThreeLeftDiagonal",
    descriptions: "3x3 left diagonal",
    dna: [
      ["A", "B", "B"],
      ["A", "B", "C"],
      ["B", "A", "D"],
    ],
  },
  {
    name: "fourByFourLeftDiagonal",
    descriptions: "4x4 left diagonal",
    dna: [
      ["A", "B", "C", "D"],
      ["B", "C", "D", "E"],
      ["C", "D", "A", "B"],
      ["D", "E", "B", "A"],
    ],
  },
  {
    name: "fiveByFiveLeftDiagonal",
    descriptions: "5x5 left diagonal",
    dna: [
      ["A", "B", "C", "D", "E"],
      ["B", "A", "D", "E", "A"],
      ["C", "D", "C", "F", "G"],
      ["D", "E", "J", "C", "G"],
      ["E", "F", "G", "G", "A"],
    ],
  },
  {
    name: "sixBySixLeftDiagonal",
    descriptions: "6x6 left diagonal",
    dna: [
      ["A", "B", "C", "D", "E", "F"],
      ["B", "A", "D", "E", "F", "G"],
      ["C", "D", "C", "F", "G", "B"],
      ["D", "E", "F", "C", "G", "C"],
      ["E", "F", "G", "G", "A", "D"],
      ["F", "G", "B", "C", "D", "A"],
    ],
  },
];

export const incompleteMatrix = {
  name: "IncompleteMatrix",
  descriptions: "matrix invalid, is not square",
  dna: [
    ["A", "A", "A"],
    ["A", "B", "C"],
    ["B", "A"],
  ],
};

export const matrixWithoutAnomaly = {
  name: "Matrix without anomaly",
  descriptions: "Matrix without anomaly",
  dna: [
    ["A", "B", "A"],
    ["A", "B", "C"],
    ["B", "A", "C"],
  ],
};
