const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors : [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId){
 const course = await Course.update({_id : courseId}, {
  // remove proprty
  // $unset : {
  //   'author' : ''
  // }
   $set : {
     'author.name' : 'vivek mavani'
   }
 });

}
//updateAuthor('618cc54a98633609588672ea');
createCourse('Node Course',[ 
new Author({ name: 'Mosh' }),
new Author({ name: 'Vivek' }),
new Author({ name: 'Josh' }),
  ]);

  async function addAuthor(courseId,author)
  {
    const course  = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
  }
  //addAuthor('618cc8ba016ab71cf0073cf1',new Author({ name: 'Mosh' }));
  removeAuthor('618cc8ba016ab71cf0073cf1','618cc8ba016ab71cf0073cee');

  async function removeAuthor(courseId,authorId)
  {
    const course  = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    author.remove();
    course.save();
  }