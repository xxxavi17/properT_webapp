var chatbox = document.getElementById('chatlogs');

        function updateChat(msg, type) {
            var newMessage = document.createElement('div');
            newMessage.className = 'chat-message ' + type;
            newMessage.innerText = msg;
            chatbox.appendChild(newMessage);
            chatbox.scrollTop = chatbox.scrollHeight;
        }

        document.getElementById('submitmsg').addEventListener('click', function () {
            var usermsg = document.getElementById('usermsg').value;
            if (usermsg.trim() !== '') {
                updateChat(usermsg, 'self');
                document.getElementById('usermsg').value = '';
            }
        });

        document.getElementById('usermsg').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                document.getElementById('submitmsg').click();
            }
        });

        document.getElementById('searchInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const searchValue = event.target.value.toLowerCase();
                if (searchValue === 'maria' || searchValue === 'maria teresa') {
                    window.location.href = 'clients_teresa_only.html';
                } else {
                    alert('Client not found');
                }
            }
        });

