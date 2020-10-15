require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Configura o app para entender requisições com tipo de corpo JSON
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_DOMAIN }));

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
// const commentRouter = require("./routes/comment.routes");

require("./configs/db.config");

require("./configs/passport.config")(app);

// Rotas para dev, popular DB ou drop DB
const devRoutes = require("./routes/dev.routes.js");
app.use("/dev", devRoutes);

app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", postRouter);
// app.use("/api", commentRouter);

app.listen(process.env.PORT, () =>
  console.log(`running at port ${process.env.PORT}`)
);
