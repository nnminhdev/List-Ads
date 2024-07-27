(function () {
	const adsData = [];

	function findReactPropsKey(node) {
		return Object.keys(node).filter((key) => key.includes("reactProps"))[0];
	}
	if (window.location.origin.includes("facebook.com") && window.location.pathname.includes("/ads/library")) {
		setInterval(() => {
			const hrElements = document.querySelectorAll("hr");

			hrElements.forEach((hr) => {
				if (hr.parentNode && hr.parentNode.lastChild && hr.parentNode.lastChild.firstChild) {
					const adCardNode = hr.parentNode.lastChild.firstChild;
					const reactPropsKey = findReactPropsKey(adCardNode);
					const adCard = adCardNode[reactPropsKey]?.children?.props?.adCard;
					if (adCard && !adsData.find((ad) => ad.adArchiveID === adCard.adArchiveID)) {
						let clonedAdCard = JSON.parse(JSON.stringify(adCard));
						if (hr) {
							hr.setAttribute('data-id', adCard.adArchiveID);
						}
						function parseNodeContent(node) {
							if (node && node.nodeName === "#document-fragment") {
								let div = document.createElement("div");
								div.style.display = "none";
								let clone = node.cloneNode(true);
								div.appendChild(clone);
								let html = div.innerHTML;
								return JSON.parse(JSON.stringify(html));
							}
							return node && node.nodeName === "#text" ? node.textContent : null;
						}

						let bodyMarkup = parseNodeContent(adCard.snapshot.body);
						if (bodyMarkup !== null) {
							clonedAdCard.snapshot.body = {
								markup: {
									__html: bodyMarkup,
								},
							};
						}

						if (adCard.snapshot.cards && adCard.snapshot.cards.length > 0) {
							for (let i = 0; i < adCard.snapshot.cards.length; i++) {
								let cardBodyMarkup = parseNodeContent(adCard.snapshot.cards[i].body);
								if (cardBodyMarkup !== null) {
									clonedAdCard.snapshot.cards[i].body = {
										markup: {
											__html: cardBodyMarkup,
										},
									};
								}
							}
						}

						adsData.push(clonedAdCard);
					}
				}
			});

			window.postMessage(
				{
					action: "fbAdData",
					adJsons: JSON.stringify(adsData),
				},
				"*"
			);
		}, 1500);
	}
})();
