import { optionalChain, truncateString } from "./helpers.js";

export function resultsToDivs (results, {
	titleLength = 72,
	textLength = 144
} = {}) {
	return results.map(result => {
		const div = document.createElement("div");
		const img = document.createElement("img");
		const title = document.createElement("h2");
		const text = document.createElement("p");

		img.src = optionalChain(
			result,
			"coverimages.coverimage.0._text",
			"./src/images/coverimage_notfound.png");

		title.innerText = truncateString(
			optionalChain(
				result,
				"titles.short-title._text",
				"Geen titel."),
			titleLength);

		text.innerText = truncateString(
			optionalChain(
				result,
				"summaries.summary._text",
				"Geen samenvatting."),
			textLength);

		div.append(img, title, text);
		return div;
	});
}