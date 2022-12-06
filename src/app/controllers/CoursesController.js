const Course = require("../model/Course");

class CoursesController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
        .then(course => {
            res.render('courses/show', { course });
        })
        .catch(next);
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        const data = new Course(req.body);
        data.save()
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', { course }))
            .catch(next);
    }

    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new CoursesController;