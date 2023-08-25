export  function login_validate(values) {

    const errors = {}

    //email
    if (!values.email) {
        errors.email = "Required"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //password
    if (!values.password) {
        errors.password = "Required"
    }
    else if (values.password.length < 6 || values.password.length > 15) {
        errors.password = 'Must be 6 characters and less than 15 characters long';
    }
    else if (values.password.includes(" ")) {
        errors.password = 'Required';
    }

    
    return errors
}

export  function signup_validate(values) {

    const errors = {}

    //name
    if (!values.name.includes(" ")) {
        errors.name = "Required"
    }

    //email
    if (!values.email) {
        errors.email = "Required"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //password
    if (!values.password) {
        errors.password = "Required"
    }
    else if (values.password.length < 6 || values.password.length > 15) {
        errors.password = 'Must be 6 characters and less than 15 characters long';
    }
    else if (values.password.includes(" ")) {
        errors.password = 'Required';
    }

    //confirmPassword
    if(!values.confirmPassword || values.confirmPassword.includes(" ")){
        errors.confirmPassword = "Required"
    }
    else if(values.password!==values.confirmPassword){
        errors.password = "Passwords do not match"
    }
    return errors
}