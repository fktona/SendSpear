const sql = require("msnodesqlv8");

const asyncFunction = async (query) => {
    try {
        const connectionString = "server=localhost;Database=SENDSPEAR;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}";

        const executeQuery = () => {
            return new Promise((resolve, reject) => {
                sql.query(connectionString, query, (err, result) => {
                    if (err) {
                        reject(result);
                        return;
                    }
                    console.table(result); 
                    resolve(result);
                });
            });
        };

        const result = await executeQuery();

        console.log('Connection closed');
        return result;
    } catch (err) {
        console.error('Error executing query:', err);
    }
};

module.exports = {
    asyncFunction
};
