import isEmail from "validator/lib/isEmail";

type Input = HTMLInputElement;
const hideErrorMessages = (form: HTMLFormElement):void => {
  const errorMessages = form.querySelectorAll('.text-danger');
  errorMessages.forEach(element => element.classList.add('d-none'));
}

const showErrorMessages = (input: HTMLInputElement, msg: string):void => {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector('.text-danger') as HTMLSpanElement;
  errorMessage.innerText = msg;
  errorMessage.classList.remove('d-none');
}

const checkForEmptyFields = (...inputs: HTMLInputElement[]):boolean => {
  let error = false;
  inputs.forEach( input => {
    if(!input.value){
      showErrorMessages(input, "This field can't be null");
      error = true;
    }
  })

  return error;
}
const checkForValidFields = (username: Input, email: Input, password: Input, repeatPassword: Input):boolean => {
  let error = false;
  if(username.value.length < 3 || username.value.length > 16){
    showErrorMessages(username, 'Invalid username.');
    error = true;
  }

  if(!isEmail(email.value)) {
    showErrorMessages(email, 'Invalid email.');
    error = true;
  }

  if(password.value.length < 5 || password.value.length > 15){
    showErrorMessages(password, 'The password must contain between 3 and 15 characters.');
    showErrorMessages(repeatPassword, 'The password must contain between 3 and 15 characters.');
    error = true;
  }

  if(password.value !== repeatPassword.value) {
    showErrorMessages(password, 'The passwords must be the same');
    showErrorMessages(repeatPassword, 'The passwords must be the same');
    error = true;
  }

  return error;
}
const handleSubmit = (e: any):void => {
  e.preventDefault()
  const form = e.target;
  const username = document.querySelector('#username') as HTMLInputElement;
  const email = document.querySelector('#email') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;
  const repeatPassword = document.querySelector('#r-password') as HTMLInputElement;

  hideErrorMessages(form);
  checkForEmptyFields(username, email, password, repeatPassword);
  if(!checkForValidFields(username, email, password, repeatPassword)){
    console.log('submit')
 }


}

export const Form = () => (
  <form action="#" onSubmit={handleSubmit}>
    <div className="col-12">
      <div className="form-fields mb-3 col">
        <span>Your user:</span>
        <input type="text" className="form-control" id="username" placeholder="Your user"/>
        <span className="text-danger d-none">Error message</span>
      </div>
      <div className="form-fields mb-3 col">
        <span>Your e-mail:</span>
        <input type="text" className="form-control" id="email" placeholder="Your email"/>
        <span className="text-danger d-none">Error message</span>
      </div>
      <div className="form-fields mb-3 col">
        <span>Your password:</span>
        <input type="text" className="form-control" id="password" placeholder="Your password"/>
        <span className="text-danger d-none">Error message</span>
      </div>
      <div className="form-fields mb-3 col">
        <span>Repeat password:</span>
        <input type="text" className="form-control" id="r-password" placeholder="Repeat password"/>
        <span className="text-danger d-none">Error message</span>
      </div>
      <button className="btn btn-primary">Submit</button>
    </div>
  </form>
)
