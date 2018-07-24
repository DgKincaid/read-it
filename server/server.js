require('dotenv').load();

var mongoose = require('mongoose');

const UserService = require('./service/user.service');

var connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB}`;

mongoose.connect(connectionString, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', (err)=>{
    console.log(err);
});

db.once('open', () => {
    console.log('connected');

    UserService.save({ email: 'test1@test', password: '1234'});
    UserService.save({ email: 'test2@test', password: '1234'});
});