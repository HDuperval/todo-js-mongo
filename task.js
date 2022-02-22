import { MongoClient, ObjectId } from "mongodb"

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);

const dbName = 'todo';

const createTask = async (providedName) => {
    await client.connect()
    const db = client.db(dbName);
    const collection = db.collection('tasks');

    const result = await collection.insertOne({name: providedName, done: false})
    console.log(result)
    return result;

}
//createTask("Maïs");

//CreateMultitasks

const createMultipleTasks = async (taskList) => {
    await client.connect()
    const db = client.db(dbName);
    const collection = db.collection('tasks');

    const result = await collection.insertMany(taskList)
    console.log(result)
    
    return result;
}

    //createMultipleTasks([
        // {name: "Rice", done: false}, 
        // {name: "Oil", done: false}, 
        // {name: "Meat", done: false}, 
        // {name: "Milk", done: false}])


        //getAllTasks()

        const getAllTasks = async () => {
            await client.connect()
            const db = client.db(dbName)
            const collection = db.collection('tasks')
            
            const result = await collection.find().toArray()
            console.log(result)

            return result;

    }

    //getAllTasks()

   // updateTask(id)
    const updateTask = async (id) => {
        await client.connect()
        const db = client.db(dbName)
        const collection = db.collection('tasks')
        
        const objId = new ObjectId(id);
        const updateTask = await collection.updateOne({ _id: objId  }, { $set: { done: true }});

        console.log(updateTask);
        return updateTask;
   }

    //updateTask("6214ffaffa6cf16f215d64da")

    //deleteTask(id)

    const deleteTask = async (id) => {
        await client.connect()
        const db = client.db(dbName)
        const collection = db.collection('tasks') 

        const objId = new ObjectId(id);
        const deleteTask = await collection.deleteOne({ _id: objId });
        console.log(deleteTask)

    }
    //deleteTask("6214ffaffa6cf16f215d64d7")
    deleteTask("6214f4ad6b63c0a8d218388d")