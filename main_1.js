function saveToLocalStorage(event){
    event.preventDefault();

    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    localStorage.setItem('firstname', fname);
    localStorage.setItem('lastname', lname);
    localStorage.setItem('emailId', email);
    localStorage.setItem('password', password);
}