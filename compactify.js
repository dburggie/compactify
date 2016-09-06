
/*
Injected into reddit's compact site.
We add an Event Listener for mouse events on the page. If the events are in
relation to a reddit url, we make sure that url points to the compact site.
*/

function eventHandler(e) {
	
	//we don't care if we're not clicking a link
	if (!e.target.hasAttribute("href")) {
		return;
	}
	
	//return if we're not clicking a link to reddit.com
	var url = e.target.getAttribute("href");
	if (!url.includes("reddit.com")) {
		return;
	}
	
	//return if already a compact link
	if (url.includes(".compact")) {
		return;
	}
	
	//correct the url
	e.target.setAttribute("href", makeCompact(url));
}



function makeCompact(url) {
	
	//.compact tag goes before any context fields (if present)
	var chunks = url.split("?context");
	var compactURL = chunks[0];
	
	//add .compact tag to the end of the url
	if (!compactURL.endsWith("/")) {
		compactURL = compactURL.concat("/.compact");
	}
	
	else {
		compactURL = compactURL.concat(".compact");
	}
	
	//add any context fields
	for (i = 1; i < chunks.length; i++) {
		compactURL = compactURL.concat("?context");
		compactURL = compactURL.concat(chunks[i]);
	}
	
	return compactURL;
}



document.addEventListener("mousedown", eventHandler);
document.addEventListener("contextmenu", eventHandler);
