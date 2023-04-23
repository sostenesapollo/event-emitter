// Block execution til' someone presses control-c
console.log('Press control-C to exit.');
process.stdin.resume();
process.on('SIGINT', function() {
  console.log('Exiting...');
  process.exit();
});

// This is the main file
const Client = require("./Client");
const client = new Client('a23js123k')

client.on('initalized', (id)=>{
    console.log('Initalized id:', id);
})

client.on('newMessage', (content)=>{
    console.log('New message', content);   
})

client.emit('messageLogged', {test: 'asdf'})

client.initalize()
client.initalize()