const TOO_SHORT_EMAIL = 'I don\'t know any emails having name length less than 5 symbols';
const TOO_SHORT_PASS = 'It\'s too short password. Sorry.';
const UNKNOWN_USER = 'I don\'t know you';
const WRONG_PASS = 'Wrong password';
const WRONG_CONFIRM_PASS = 'You wrote the wrong password.';
const CHANGE_PASS = 'Do you want to change your password?';
const SUCCESS_CHANGE = 'You have successfully changed your password.';
const USER_EMAIL = 'user@gmail.com';
const USER_PASS = 'UserPass';
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASS = 'AdminPass';

let minLenght = 5;
let userEmail = prompt('Please enter your email address: ');


if (userEmail === null) {
    alert('Canceled');
} else if (userEmail.length === 0) {
    alert('Canceled');
} else if (userEmail.length < minLenght) {
    alert(TOO_SHORT_EMAIL);
} else if (userEmail === ADMIN_EMAIL) {
    if (ADMIN_PASS === prompt('Please Enter Your Password: ')) {
        if (confirm(CHANGE_PASS)) {
            if (ADMIN_PASS === prompt('Please Enter Your Password: ')) {
                let newPass = prompt('Please Enter Your New Password:');
                if (newPass === null) {
                    alert('Canceled');
                } else if (newPass.length <= minLenght) {
                    alert(TOO_SHORT_PASS);
                } else {
                    if (newPass === prompt('Please Enter Your New Password Again:')) {
                        alert(SUCCESS_CHANGE);
                    } else {
                        alert(WRONG_CONFIRM_PASS);
                    }
                }
            } else {
                alert('Canceled');
            }

        } else {
            alert('You have failed the change.');
        }
    } else {
        alert(WRONG_PASS);
    }
} else if (userEmail === USER_EMAIL) {
    if (USER_PASS === prompt('Please Enter Your Password: ')) {
        if (confirm(CHANGE_PASS)) {
            if (USER_PASS === prompt('Please Enter Your Password: ')) {
                let newPass = prompt('Please Enter Your New Password:');
                if (newPass === null) {
                    alert(TOO_SHORT_PASS);
                } else if (newPass.length < minLenght) {
                    alert(TOO_SHORT_PASS);
                } else {
                    if (newPass === prompt('Please Enter Your New Password Again:')) {
                        alert(SUCCESS_CHANGE);
                    } else {
                        alert(WRONG_CONFIRM_PASS);
                    }
                }
            } else {
                alert('Canceled');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert(WRONG_PASS);
    }
} else {
    alert(UNKNOWN_USER);
}