import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send('Hello from Tolu.')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))