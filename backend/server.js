const app = require('./app');
const connectDatabase = require('./config/db');

connectDatabase();

 const server = app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`)
});