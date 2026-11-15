function checkAcc() {
  let login = document.getElementById('Login').value;
  let password = document.getElementById('Password').value;
  let result = document.getElementById('result');

  result.classList.remove('show', 'success', 'error');
  setTimeout(() => {
    if (login === '') {
      result.textContent = 'Zadejte login.';
      result.classList.add('error');
    } else if (login !== 'Admin') {
      result.textContent = 'Špatný login.';
      result.classList.add('error');
    } else if (password !== 'Admin') {
      result.textContent = 'Špatný heslo.';
      result.classList.add('error');
    } else {
      result.textContent = 'Heslo je správné! Vítejte!';
      result.classList.add('success');
    }

    result.classList.add('show');
  }, 100);
}

document.getElementById('checkBtn').addEventListener('click', checkAcc);
