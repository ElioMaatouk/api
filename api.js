import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/data", (rew, res) => {
  let data = [
    { id: 0, name: "name 0" },
    { id: 1, name: "name 0" },
    { id: 2, name: "name 0" },
    { id: 3, name: "name 0" },
  ];

  res.send(data);
});

app.listen(3000)
