// Password toggle
    document.getElementById('pwToggle').addEventListener('click', function() {
      const pw = document.getElementById('password');
      pw.type = pw.type === 'password' ? 'text' : 'password';
      this.textContent = pw.type === 'password' ? '👁' : '🙈';
    });

    // Form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email    = document.getElementById('email');
      const password = document.getElementById('password');
      const emailErr = document.getElementById('emailError');
      const pwErr    = document.getElementById('passwordError');
      let valid = true;

      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email.value.trim())) {
        emailErr.textContent = 'Please enter a valid email address.';
        email.classList.add('error');
        valid = false;
      } else {
        emailErr.textContent = ''; email.classList.remove('error');
      }

      if (password.value.length < 6) {
        pwErr.textContent = 'Password must be at least 6 characters.';
        password.classList.add('error');
        valid = false;
      } else {
        pwErr.textContent = ''; password.classList.remove('error');
      }

      if (!valid) return;

      const btn = document.getElementById('loginBtn');
      const txt = document.getElementById('loginBtnText');
      btn.disabled = true;
      txt.textContent = 'Logging in…';

      // Simulate async
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    });

    // Social button placeholder
    document.querySelectorAll('.social-auth-btn').forEach(btn => {
      btn.addEventListener('click', () => alert('Social login coming soon!'));
    });