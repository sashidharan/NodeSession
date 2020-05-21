
class users {
    constructor (req, res) {
        this.userDb = req.app.locals._db.db('Sample').collection('users');
        this.objectId = req.app.locals.mongo.ObjectId;
        this.params = req.params;
        this.queryParams = req.queryParams;
        this.bodyObj = req.body;
        this.req = req;
        this.res = res;
    }

    getBodyObj() {
        return {
            firstName: this.bodyObj.firstName,
            lastName: this.bodyObj.lastName,
            address: this.bodyObj.address
        }
    }
    createUser(){        
        let updateObj = this.getBodyObj();
        this.userDb.insertMany(updateObj, (err, result) => {
            if(err) throw err;
            this.res.json(result);
        })
    };

    updateUser(){
        let updateObj = this.getBodyObj();
        this.userDb.updateOne({_id: this.objectId(this.params.id)}, {$set: updateObj}, {multi: true}, (err, result) => {
            if(err) throw err;
            console.log('User Updated Successfully');
            this.getUserById();
        })
    };

    deleteUser(){
        this.userDb.deleteMany({_id: this.objectId(this.params.id)}, (err, result) => {
            if(err) throw err;
            this.res.send('User Removed Successfully');
        })
    };

    getUserById(){
        this.userDb.findOne({_id: this.objectId(this.params.id)}, (err, result) => {
            if(err) throw err;
            this.res.json(result);
        })
    };

    getUsers() {
        this.userDb.find().toArray((err, result) => {
            if(err) throw err;
            this.res.json(result);
        })
    }
}

module.exports = users