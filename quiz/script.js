function check1(qus) {
  var ele = document.getElementsByName(qus);
  const ans = ["C", "D", "A"];
  console.log(ans);
  const initial = "";
  for (i = 0; i < ele.length; i++) {
    let label = document.querySelector(`label[for="${ele[i].id}"]`);
    label.style.backgroundColor = initial;
    if (ele[i].checked) {
      if (ele[i].value == ans[qus]) {
        let result = document.getElementById(qus);
        console.log(result);
        result.innerHTML = "Correct...!";
        let label = document.querySelector(`label[for="${ele[i].id}"]`);
        label.style.backgroundColor = "green";
      } else {
        let result = document.getElementById(qus);
        result.innerHTML = "Wrong...!";
        let label = document.querySelector(`label[for="${ele[i].id}"]`);
        label.style.backgroundColor = "red";
      }
    }
  }
}
