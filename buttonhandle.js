function handleSubmit(event) {
  let randomForm = document.querySelector("#formRandom");
  event.preventDefault();
  console.log(randomForm.elements.start.value);
  // let addPostForm = document.querySelector("#formRandom");
  // event.preventDefault();
  // console.log(addPostForm.elements.start.value, addPostForm.elements.end.value);
  randomPattern(randomForm.elements.start.value, randomForm.elements.end.value);
}
