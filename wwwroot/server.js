const express = require('express');
const path = require('path');
let app = express();
let clientDir = path.resolve(__dirname, '..');


app.use(express.static(clientDir));
let server = app.listen(8080, () => {
    console.log(`server running... 
                    address: ${server.address().address}
                    port: ${server.address().port}
                    serving from: ${clientDir}`);
});