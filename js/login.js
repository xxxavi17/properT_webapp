document.getElementById('staffButton').addEventListener('click', function() {
    document.getElementById('logoutModal').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('logoutModal').classList.add('show');
        document.querySelector('.logout-content').classList.add('show');
    }, 10);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password === '1234') {
        closeModal();
        window.location.href = "index_admin.html"; // Redirect to admin page after successful login
    } else {
        errorMessage.textContent = 'Invalid email or password';
    }
});

function closeModal() {
    document.querySelector('.logout-content').classList.remove('show');
    document.getElementById('logoutModal').classList.remove('show');
    setTimeout(() => {
        document.getElementById('logoutModal').style.display = 'none';
        resetForm();
    }, 300);
}

function resetForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('errorMessage').textContent = '';
}
