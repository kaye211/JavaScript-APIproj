// Init Github
const github = new Github();

// Init UI
const ui = new UI();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', function(e) {
	//Get input text
	const textInput = searchUser.value;

	if (textInput != '') {
		//HTTP call
		github.getUser(textInput).then(data => {
			if (data.profile.message === 'Not Found') {
				// Show alert
				ui.showAlert('User not found', 'alert alert-danger');
			} else {
				// Show profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else {
		//Clear Profile
		ui.clearProfile();
	}
});
