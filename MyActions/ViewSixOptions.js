
module.exports = () => {

	browser.isExisting('h2=I want to call Lloyds Bank')
	browser.isExisting('h2=My card is lost or stolen')
	browser.isExisting('h2*=noticed suspicious activity')
	browser.isExisting('h2=Ask a question')
	browser.isExisting('h2=Self Service')
	browser.isExisting('h2=Make a complaint')	
};
