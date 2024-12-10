let $ = document;
let inputBox = $.getElementById("inputBox");
let addButton = $.getElementById("addButton");
let errorMessage = $.getElementById("error");
let successMessage = $.getElementById("success");
let ul = $.querySelector("ul");
let deleteButton = $.querySelector("i");
let deleteAllButton = $.getElementById("delall");

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    let li = e.target.parentElement;
    li.remove();
  }
});
addButton.addEventListener("click", () => {
  if (inputBox.value.trim() == "") {
    errorMessage.style.display = "flex";
    setTimeout(() => {
      errorMessage.style.translate = "0px 200%";
    }, 100);
    setTimeout(() => {
      errorMessage.style.translate = "0px -200%";
    }, 3000);
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3200);
  } else {
    ul.innerHTML += "<li>" + inputBox.value + "  <i>حذف</i></li>";
    successMessage.style.display = "flex";
    setTimeout(() => {
      successMessage.style.translate = "0px 200%";
    }, 100);
    setTimeout(() => {
      successMessage.style.translate = "0px -200%";
    }, 3000);
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3200);
    inputBox.value = null;
  }
});
deleteAllButton.addEventListener("click", () => {
  ul.innerHTML = null;
});
