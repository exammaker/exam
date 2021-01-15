/**
 * App Main Script
 */

$(function() {
	if (!window.indexedDB)
	{
		alert("Your browser does not support IndexedDB, you are not able to use Exam Maker. To fix this either change your browser settings or install another browser such as Google Chrome or Mozilla Firefox");
	}
	if(!window.isSecureContext) {
		alert("This is not being served from a secure origin, exam maker will not work");
	}
	if('serviceWorker' in window.navigator) {
		window.navigator.serviceWorker.register("/sw.js").then((registration) => {
			console.log("ServiceWorker registered with scope: ", registration.scope);
		}, (err) => {
			console.log("ServiceWorker registration failed: ", err);
		});
	}
	console.log("end")
});