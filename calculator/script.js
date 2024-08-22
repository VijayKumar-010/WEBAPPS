function append(value) {
  document.getElementById("display").value += value;
}
function clearD() {
  document.getElementById("display").value = "";
}
function del() {
  let val = document.getElementById("display").value;
  document.getElementById("display").value = val.slice(0, -1);
}
function cal() {
  try {
    if (document.getElementById("display").value) {
      let result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    }
  } catch (error) {
    alert("Invalid Expression");
    clearD();
  }
}
