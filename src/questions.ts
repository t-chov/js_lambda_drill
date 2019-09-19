export default [
  {
    inputArray: [1, 2, 3, 4, 5],
    answer: [2, 4, 6, 8, 10],
    output: [1, 2, 3, 4, 5],
    inputCode: '[1, 2, 3, 4, 5].map(x => /* write here */);',
    isSolved: false
  },
  {
    inputArray: [1, 2, 3, 4, 5],
    answer: [2, 4],
    output: [1, 2, 3, 4, 5],
    inputCode: '[1, 2, 3, 4, 5].filter(x => /* write here */);',
    isSolved: false
  },
  {
    inputArray: [1, 2, 3],
    answer: [1, 2, 3, 4, 5, 6],
    output: [1, 2, 3],
    inputCode: '[1, 2, 3].flatMap(x => /* write here */);',
    isSolved: false
  },
  {
    inputArray: [1, 2, 3],
    answer: 6,
    output: [1, 2, 3],
    inputCode: '[1, 2, 3].reduce((acc, cur) => /* write here */);',
    isSolved: false
  }
]
