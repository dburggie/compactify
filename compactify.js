


/*
For all links in the page:
	if they link to a non-compact reddit page
	then modify the link to a compact one
*/
var collection = document.getElementsByTagName("a");
var x;
for (i = 0; i < collection.length; i++) {
	x = collection[i];
	if (x.hasAttribute("href")) {
		scrutinize(x);
	}
}

function scrutinize(x) {
	href = x.getAttribute("href");
	if (href.indexOf("reddit.com") > -1 && href.indexOf(".compact") < 0) {
		x.setAttribute("href", fixURL(href));
	}
}

function fixURL(url) {
	
	var chunks = url.split("?context", 1);
	var fixed = "";
	
	if (chunks[0].endsWith("/")) {
		fixed = chunks[0].concat(".compact");
	}
	
	else {
		fixed = chunks[0].concat("/.compact");
	}
	
	if (chunks.length > 1) {
		fixed = fixed.concat("?context").concat(chunks[1]);
	}
	
	return fixed;
}

