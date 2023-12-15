function validateForm() {
		var emailInput = document.getElementById('email').value;
		var passwordInput = document.getElementById('password').value;
		var ageInput = document.getElementById('age').value;
		var errorMessage = document.getElementById('errorMessage');

		if (emailInput == "") {
			errorMessage.textContent = 'Please enter valid email!';
		}else if(passwordInput == ""){
			errorMessage.textContent = 'Please enter valid password!';
		} else if(ageInput < 18){
				errorMessage.textContent = 'You must be 18 or older to login.';
		} else {
				if (duplicateUser(emailInput, passwordInput)) {
						errorMessage.textContent = 'Email or Password already exists.';
				}else{
					var users = userData();
					
					users.push({ emailInput, passwordInput });
					
					var userstr = users.map(user => `${user.emailInput},${user.passwordInput}`).join(';');
					localStorage.setItem('allUsers', userstr);
					alert('Login successful!');
					errorMessage.textContent = ''; 
				}
		}
}

function userData() {
    var allusersdata = localStorage.getItem('allUsers') || '';
    return allusersdata.split(';').map(user => {
        var [emailInput, passwordInput] = user.split(',');
        return { emailInput, passwordInput };
    });
}
function duplicateUser(emailInput, passwordInput) {
    var users = userData();
    return users.some(user => user.emailInput === emailInput || user.passwordInput === passwordInput);
}
