import mongoose from "mongoose";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const colors = require('colors/safe');


export function connectToDataBase() {
    console.log(colors.green('Подключение к базе данных...'));

    const dataBaseURI = process.env.DATABASE_URI; 

    if (!dataBaseURI) {
        throw new Error('Missing DATABASE_URI');
    }
    
    try {
        mongoose.connect(dataBaseURI);
    } catch (error) {
        console.log(error);
    }
}