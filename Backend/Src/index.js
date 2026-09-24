import dotenv from 'dotenv';
import connectDB from './Config/database.js';
import app from "./app.js";
dotenv.config({
    path: './.env'
});
const Startserver = async () => {
    try {
        await connectDB ()
        app.on('error', (error) => {
            console.log('Error occurred while starting the server:', error);
            throw error;
        });
        app.listen(process.env.PORT ||8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error occurred while starting the server:', error);
    }
}
    startserver();