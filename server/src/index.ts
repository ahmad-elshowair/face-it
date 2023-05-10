import express, { Application } from 'express';
import { config } from './config/config';

const app: Application = express();
const port = config.port;


app.get('/', (req, res) => {
    res.send('Hello world!');
    }
);

app.listen(port, () => console.log(`Server running on  http://localhost:${port}`));
