let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let studentCollection = mongoose.Schema({
    nombre: {type: String},
    apellido: {type: String},
    matricula: {
        type: Number,
        required: true,
        unique: true
    }
});

let Student = mongoose.model('students', studentCollection);

let StudentList = {
    getAll: function() {
        return Student.find()
            .then(students => {
                return students;
            })
            .catch(error => {
                throw Error(error);
            });
    },
    getByName: function(name) {
        return Student.find({nombre: name})
            .then(students => {
                return students;
            })
            .catch(error => {
                throw Error(error);
            });
    },
    getById: function(id) {
        return Student.findOne({matricula: id})
            .then(students => {
                return students;
            })
            .catch(error => {
                throw Error(error);
            });
    },
    createNewStudent: function(newStudent) {
        return Student.create(newStudent)
            .then(ns => {
                return ns;
            })
            .catch(error => {
                throw Error(error);
            });
    }
};

module.exports = {StudentList};