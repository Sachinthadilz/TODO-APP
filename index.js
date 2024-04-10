const app = require('./app');

const PORT = process.env.PORT || 5050;

//listen server
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});

