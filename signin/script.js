let users = {};
let user = {};
let note = document.getElementById("note");
let sigup_note = document.getElementById("Signup-note");
let found;
let loggedin;

function sigin() {
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;
  for (let user in users) {
    found = false;
    for (let emailid in users[user]) {
      if (users[user][email] == password) {
        found = true;
        loggedin = user;
      }
    }
  }
  if (found) {
    note.innerHTML = `Wellcome ${loggedin}...!`;
    note.style.color = "green";
    note.style.fontSize = "2rem";
  } else {
    note.innerHTML = "Invalid Credentials..!";
    note.style.color = "red";
    note.style.fontSize = "2rem";
  }
}

function signup() {
  let name = document.getElementById("Name").value;
  let email = document.getElementById("NewEmail").value;
  let password = document.getElementById("NewPassword").value;
  user[email] = password;
  users[name] = user;
  sigup_note.innerHTML = `${name} Your account is created`;
  sigup_note.style.color = "blue";
}
