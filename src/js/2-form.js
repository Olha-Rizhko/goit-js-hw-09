let formData = {
  email: "",
  message: ""
};

const storedData = localStorage.getItem("feedback-form-state");
if (storedData) {
  formData = JSON.parse(storedData);
  document.querySelector('[name="email"]').value = formData.email;
  document.querySelector('[name="message"]').value = formData.message;
}

document.querySelector('.feedback-form').addEventListener('input', function(event) {
  const inputName = event.target.name;
  const inputValue = event.target.value;
  formData[inputName] = inputValue;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

document.querySelector('.feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem("feedback-form-state");
  formData = {
    email: "",
    message: ""
  };
  document.querySelector('[name="email"]').value = "";
  document.querySelector('[name="message"]').value = "";
});
