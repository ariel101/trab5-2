const express = require("express");

const taskRoutes = require("./routes/tasks.routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando correctamente 🚀"
  });
});

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});