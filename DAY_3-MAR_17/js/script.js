function validation() {
  var name, email, subject, message, error_message;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  subject = document.getElementById("subject").value;
  message = document.getElementById("message").value;
  error_message = document.getElementById("error-message");

  var txt;

  error_message.style.padding = "10px";
  if (name.length < 3) {
    txt = "Please Enter Name more than 2 characters";
    error_message.innerHTML = txt;
    return false;
  }

  if (email.indexOf("@") == 0 || email.length < 6) {
    txt = "Please Enter valid E-mail";
    error_message.innerHTML = txt;
    return false;
  }

  if (subject.length < 10) {
    txt = "please Enter valid Subject more than 10 characters";
    error_message.innerHTML = txt;
    return false;
  }

  if (message.length < 20) {
    txt = "Message should contain more than 20 Characters";
    error_message.innerHTML = txt;
    return false;
  }

  alert("Message Sent");
  return true;
}

function resButton() {
  document.getElementById("menu-item").classList.toggle("show");
}
