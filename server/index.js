const express = require("express");
const app = express();
const port = 3212;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
