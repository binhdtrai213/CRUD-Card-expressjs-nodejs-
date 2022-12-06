const Course = require("../model/Course");

class SiteController {
    
    //[GET] /
    index(req, res, next) { 
        Course.find({}).lean()
            .then(Course => {
                res.render('home', {
                    Course
                });
            })
            .catch(next); // same with (error) => next(error)

    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;