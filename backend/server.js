const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const usersRouter = require("./routes/users.routes.js");
const diaryRouter = require("./routes/diary.routes.js");
dotenv.config();
const app = express();
 
app.use(cors({ credentials: true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(usersRouter); 
app.use(diaryRouter);

 
app.listen(3001, ()=> console.log('Server running at port 3001'));