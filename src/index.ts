const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");

let data = [];

const getData = async (secret: string) => {
  // fetch data
  data = await axios.get("/fruit.json?token=${secret}");

  // process data (get fruit with quantities of 2 and 5)
  let processedData = [];
  for (let x = 0; x < data.length; x++) {
    if (data[x].quantity === 2) {
      processedData.push(data[x]);
    }
    if (data[x].quantity == 5) {
      processedData.push(data[x]);
    }
  }

  // finally return the serialised data
  return {
    data: processedData,
  };
};

// define a route handler for the default home page
app.get("/", async (req: any, res: any) => {
  // obfusicate token
  let token = "D2E26WwXZdORjKPxCA" + "AcZfs3jydFHs32fF3y";

  // return response
  const response = res.send(await getData(token.toString()));
});

// start the Express server
app.listen(8080, () => {
  console.log(`server started at http://localhost:8080`);
});
