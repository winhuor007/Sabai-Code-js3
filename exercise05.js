const readFile = require("./exercise03");
const writeFile = require("./exercise04");

readFile("output.txt", (data) => {
  const modifiedData1 = data + "\nFirst modification";
  writeFile("output1.txt", modifiedData1, () => {
    readFile("output1.txt", (data) => {
      const modifiedData2 = data + "\nSecond modification";
      writeFile("output2.txt", modifiedData2, () => {
        readFile("output2.txt", (data) => {
          console.log(data);
        });
      });
    });
  });
});
