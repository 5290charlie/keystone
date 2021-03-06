module.exports = {
	before: function (browser) {
		browser.app = browser.page.app();
		browser.signinPage = browser.page.signin();

		browser.app.navigate();
		browser.app.waitForElementVisible('@signinScreen');
	},
	after: function (browser) {
		browser.end();
	},
	'Signin page should allow users to login': function (browser) {
		browser.signinPage
			.signin();
		browser.app
			.waitForElementVisible('@homeScreen');
	},
	'Signin page should be presented upon signout': function (browser) {
		browser.app
			.signout();
	},
};
