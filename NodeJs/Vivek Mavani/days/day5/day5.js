// University of Mumbai needs to set an online exam for their students. For that they need to 
//set a timer for three hours. After 3 hours exams should be finished.

  const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('exams', () => {
  console.log('exams started : 00:00:00')
})
eventEmitter.on('exams', () => {
  setTimeout(()=>console.log('exams end : 03:00:00'),30000)
})

eventEmitter.emit('exams')
