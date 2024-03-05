const AppDataSource = require("./config");

const { PORT } = process.env;

AppDataSource.initialize()
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
        console.log("DataSource has been initialized!");
    })
    .catch((error) => console.log(error));
