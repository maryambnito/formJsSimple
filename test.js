function validate(){
    const username=document.getElementById('Username')
    const userErr=document.getElementById('UsError')
    const passErr=document.getElementById('PassError')
    const allErr=document.getElementById('AllError')
    const password=document.getElementById('Password')
    if(username.value.trim()==='' && password.value.trim()===''){
        allErr.classList.remove('lblErrorAllValidation')
        allErr.innerText='Invalid UserName and password';
        allErr.classList.add('lblErrorAllValidationshow')
        return false;
    }
    else if(username.value.trim()==='' && password.value.trim()!==''){
        userErr.classList.remove('lblError')
        userErr.innerText='invalid UserName';
        userErr.classList.add('lblErrorShow')
        return false;
    }
    else if(username.value.trim()!=='' && password.value.trim()===''){
        passErr.classList.remove('lblError')
        passErr.innerText='invalid Password';
        passErr.classList.add('lblErrorShow')
        return false;
    }

    else{
        return true;
    }
}