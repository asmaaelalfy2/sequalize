const db=require('./connectdb')
const {app}=require('./index')

const start=async()=>{
    try {
     await db.sync()
     app.listen(3000)   
    } catch (error) {
        console.log(error)
    }
}
start()