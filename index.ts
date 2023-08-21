
import  express  from "express";
import bodyParser from "body-parser";
const app = express();

import todosrouter from  '../nodeWithTypeScript/routes/todos';

app.use(todosrouter);
app.use(bodyParser.json());
app.listen(2000);