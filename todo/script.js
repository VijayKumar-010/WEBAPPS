function add_list() {
  let list = document.getElementById("task");
  if (!list.value) {
    alert("Enter Task...!");
  } else {
    new_list(list.value);
    list.value = "";
  }
}

function new_list(task) {
  list_counter++;
  const list_id = `list-${list_counter}`;
  const loc = document.getElementById("list");
  const new_list = `
    <div class="todo" id='${list_counter}'>
        <input type="text" id="${list_id}" disabled/>
        <button onclick='remove("${list_counter}")'>Del</button>
        <button onclick='completed("${list_id}")'>Done</button>
    </div>
`;
  loc.insertAdjacentHTML("beforeend", new_list);
  document.getElementById(list_id).value = task;
}

function completed(list_id) {
  let list = document.getElementById(list_id);
  list.style.backgroundColor = "#FFBD31";
  list.style.color = "white";
}

function remove(list_id) {
  let list = document.getElementById(list_id);
  list.remove();
}
