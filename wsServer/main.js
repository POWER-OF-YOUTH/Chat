const io = require('socket.io')();

const usernames = {};

io.on('connection', client => {
    const cc = client;
    console.log(`New connection`);
    client.on('setname', event => {
        console.log(`Set name: ${event.name}`);
        usernames[client.id] = {
            name: event.name,
            socket: cc
        };
    });
    client.on('sendmsg', (event => {
        const sender = usernames[cc.id];
        for (let id in usernames) {
            const client = usernames[id];
            client.socket.emit('msg', {owner: sender.name, message: event.message});
        }
    }));

});

io.listen(9999);