const {app} = require('./server/server')
const PORT = process.env.PORT || 3131
app.listen(PORT)
console.log(`Server Open AI Test is running in port ${PORT}`);