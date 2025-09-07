const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/users/login',
      data: { email, password }
    });
    console.log('Response from server:', res.data);

    if (res.data.status === 'login successful') {
      // redirect after successful login
      window.location.href = 'http://127.0.0.1:3000/api/notes/overview'; // change to your page
    } else {
      document.getElementById('message').textContent = res.data.status;
    }

  } catch (err) {
    console.error('Login failed:', err.response ? err.response.data : err.message);
    document.getElementById('message').textContent = err.response ? err.response.data.status : 'Login failed';
  }
};

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('login.js loaded');
  const email = e.target.email.value;
  const password = e.target.password.value;
  login(email, password);
});