import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let e={email:"",message:""};const a=localStorage.getItem("feedback-form-state");a&&(e=JSON.parse(a),document.querySelector('[name="email"]').value=e.email,document.querySelector('[name="message"]').value=e.message);document.querySelector(".feedback-form").addEventListener("input",function(t){const m=t.target.name,o=t.target.value;e[m]=o,localStorage.setItem("feedback-form-state",JSON.stringify(e))});document.querySelector(".feedback-form").addEventListener("submit",function(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},document.querySelector('[name="email"]').value="",document.querySelector('[name="message"]').value=""});
//# sourceMappingURL=commonHelpers2.js.map
