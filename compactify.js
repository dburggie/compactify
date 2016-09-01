

/*
Injected into reddit's compact site.
We add an Event Listener for clicks, if they are links to reddit.com,
we make sure they go to the compact site also.
*/

document.addEventListener("mousedown", function(e) {
	
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
	if (url.includes(".compact") || url.includes("i.reddit.com")) {
		return;
	}
	
	//correct the url
	e.target.setAttribute("href", makeCompact(url));
});



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
