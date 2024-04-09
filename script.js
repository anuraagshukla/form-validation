function formValid() {
  let fullname = document.userForm.inputName.value;
  let password1 = document.userForm.inputPassword.value;
  let password2 = document.userForm.inputPassword2.value;
  let mail = document.userForm.inputEmail.value;

  if (fullname === '') {
    document.getElementById('nameError').innerText = "Name can't be empty";
    return false;
  }

  if (mail == "") {
    document.getElementById('mailError').innerText = 'Email is required';
    return false;
  }

  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.test(mail)) {
    document.getElementById('mailError').innerText = 'Please enter a valid email address';
    return false;
  }


  if (password1.length < 6) {
    document.getElementById('passError').innerText = 'Password must be 6 characters long';
    return false;
  }

  if (password2 !== password1) {
    document.getElementById('passError2').innerText = 'Passwords do not match';
    return false;
  }


  // spanDelete();

  alert(`Registration Successful!\nName: ${fullname}\nEmail: ${mail}`);

}

// function spanDelete (){
// let input = document.getElementsByClassName("form-control").value;
// if (input != null) {
// let bl = document.getElementsByTagName("span");
// bl.innerHTML = "";}

// }

// function Email(mail) {
//      re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// }
