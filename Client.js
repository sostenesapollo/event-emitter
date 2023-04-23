const EventEmitter = require('events')

module.exports = class Client extends EventEmitter {
    initialized = false
    id = null
    constructor(id) {
        super()
        this.id = id
    }

    initalize() {
        if(this.initialized) return console.log('Already initialized');
        this.initialized = true
        this.emit('initalized', this.id)
        
        this.listenMessages()
    }
    
    listenMessages() {
        setTimeout(()=>{ this.emit('newMessage', {message: 'Message 1'}) },800)
        setTimeout(()=>{ this.emit('newMessage', {message: 'Hello world'}) },2000)
        setTimeout(()=>{ this.emit('newMessage', {message: 'Message 2 received'})},2300)
        setTimeout(()=>{ this.emit('newMessage', {message: 'Message 3 received'}) },2900)
    }

}