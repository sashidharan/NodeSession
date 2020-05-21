const socket = io();

socket.on('chatRoom', (message) => {
    console.log(message);
})

document.querySelector('#form_socket').addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = e.target.elements.message.value;
    socket.emit('chatMsg', msg);
})