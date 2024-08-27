let Users = [];

function submitForm() {
  let name = document.getElementById("name").value;
  console.log(name);
  let fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  let mobile = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let dob = document.getElementById("dob").value;
  let gen = document.getElementsByName("gender");
  let gender;
  for (let i = 0; i < gen.length; i++) {
    if (gen[i].checked) {
      gender = gen[i].value;
    }
  }
  let city = document.getElementById("city").value;
  let User = [name, fname, mname, mobile, email, dob, gender, city];
  Users.push(User);
  console.log(Users);
}
