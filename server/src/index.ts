import express, { Application } from 'express';

const app: Application = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('Hello world!');
    }
);

app.listen(port, () => console.log(`Server running on  http://localhost:${port}`));
