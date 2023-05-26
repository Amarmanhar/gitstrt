// function saveToLocalStorage(event){
//     event.preventDefault();

//     const fname = event.target.fname.value;
//     const lname = event.target.lname.value;
//     const email = event.target.email.value;
//     const password = event.target.password.value;

//     localStorage.setItem('firstname', fname);
//     localStorage.setItem('lastname', lname);
//     localStorage.setItem('emailId', email);
//     localStorage.setItem('password', password);
// 

// Retrieve the registration form element
//const form = document.getElementById('register');

//  save to local storage 
function saveToLocalStorage(event){
   event.preventDefault();

   const fname = event.target.fname.value;
   const lname = event.target.lname.value;
   const email = event.target.email.value;
   const password = event.target.password.value;

   const obj = {
      fname: fname,
      lname: lname,
      email: email,
      password: password
   }
   localStorage.setItem('userdetails', JSON.stringify(obj));
    showOnscreen(obj);
}
function showOnscreen(obj){
   const parentEle = document.getElementById('listofitems');
  // parentEle.innerHTML = parentEle.innerHTML + `<li> ${obj.fname} - ${obj.lname} - ${obj.email} - ${obj.password}`;
    const childele = document.createElement('li');
    childele.textContent = obj.fname + '-' + obj.lname + "-" + obj.email + "-" + obj.password;

    const deletbtn = document.createElement('input');
    deletbtn.type = "button"
    deletbtn.value =  'Delete'
    deletbtn.onclick =() =>{
      localStorage.removeItem(obj.email)
      parentEle.removeChild(childele)
    }
    childele.appendChild(deletbtn);
    parentEle.appendChild(childele);
   
}
