import pool from "../index"

const dbRowCount = () => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT COUNT(*) as dbCount FROM events;',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements[0].dbCount);
        });
    });
};

export default dbRowCount;