
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to Mongodb...'))
    .catch(err => console.error('Could not connected to Mongodb...', err));


const courseSchema = new mongoose.Schema({
    name: { type: String,
         required: true, 
        minlength : 5,
        maxlength : 255,        
        },
        category : {
            type: String,
            required : true,
            enum :['web','mobile','network'],
            lowercase : true,
            trim :true,
        },
    author: String,
    tags: {
        type: Array,
        validate : {
            isAsync : true,
            validator : function(v, callback){
                setTimeout(()=> {
                const result =  v && v.length > 0;
                callback(result);
                },1000);
            },
            message : 'A course should have at least one tag.   '
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished; },
        min :10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v),
    }
});

//Course is colletion and courseSchema is shape of the document
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
         name: 'flutter with  mongoose',
        category : 'Web',
        author: 'vivek',
        tags: ['frontend'],
        isPublished: true,
        price : 12.1
    });
    try {
        const result = await course.save();
        console.log(result);
    }
    catch (ex) {
        for(field in ex.errors)
         console.log(ex.errors[field].message);
    }

}
//createCourse();

async function getCourse() {
    const pageNumber = 2;
    const pageSize = 10;
    //get all
    //const courses = await Course.find();
    // filter serch (1 for ass. and -1 for dissad.)
    const courses = await Course
        .find({ author: 'vivek', isPublished: true })
        //.find({price : {$gte : 10, $lte : 20}})
        // .find({price : {$in : [10,20,50]}})
        //.or([{author: 'vivek'}, {isPublished: true}])
        //.and([{author: 'vivek'}, {isPublished: true}])
        //started with vivek.
        //.find({author : /^vivek/})
        //ends with ek. i case insen.
        //.find({author : /ek$/i})
        //any with ek. i case insen.
        //.find({author : /.*ek.*/i})
        //.limit(10)
        //pagination
        //.skip((pageNumber -1) * pageSize)
        //.limit(pageSize)
        //.select({name: 1,tags: 1});
        // number of data 
        //.count();

        .sort({ name: 1 })

    console.log(courses);
}
//getCourse();

async function updateCourse(id) {
    // Approch : Query first
    //findBYId()
    //Modify its proprties
    //save()

    // const course =await Course.findById(id);
    // if(!course) return;

    // course.isPublished  =true;
    // course.author = 'another author';

    // const result = await course.save();
    // console.log(result);

    // Approch :  Update first
    //Update directly
    //Optionally: get the updated document

    // const result = await Course.update({_id :id},{
    //     $set :{
    //         author : 'Vivek',
    //         isPublished: false
    //     }
    // });

    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Vivek1',
            isPublished: false
        }
    }, { new: true });
    console.log(course);
}

//updateCourse('6188e7bc16e2480e8ccdfa54');

async function removeCourse(id) {
    //only one can delete
    // const result = await Course.deleteOne({_id:id});
    //const result = await Course.deleteMany({ _id: id });
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}
//removeCourse('6188e7bc16e2480e8ccdfa54');