/* global chrome */
chrome.action.onClicked.addListener((tab) => chrome.runtime.openOptionsPage());
const paramsString =
	"av=61555670706435&__aaid=0&__user=61555670706435&__a=1&__req=8&__hs=19886.HYP%3Acomet_pkg.2.1..2.1&dpr=1&__ccg=POOR&__rev=1014158298&__s=dlslz7%3A0l1pt1%3Ac1apum&__hsi=7379602457535146220&__dyn=7AzHK4HwkEng5K8G6EjBAg2owIxu13wFwhUngS3q2ibwNwnof8boG0x8bo6u3y4o2Gwfi0LVEtwMw65xO2OU7m2210wEwgo9oO0-E4a3a4oaEnxO0Bo7O2l2Utwwwi831w9O7Udo5qfK0zEkxe2GewyAG0z9obrwKxm5oe8464-5pUfEe88o4Wm7-2K0SEuBwFKq2-azo2NwwwOg2cwMwhEkxebwHwNxe6Uak0zU8oC1hxG1FwgU4q3G1eKufxa3mUqwjUy2-2K&__csr=h48jTqilObQIQ8N7jsP8HhCIyaKQLGZOqvit4jjElvcF7Tn5uJ58TWOlvfbsBIyj9RQGiLLXWgDRXHhemCiGGLp9eqK8gK4ktz2ifUFammHghXTJ-A4aHh944qhBGl29AmUpFkFFUCqfQUWibwyDAQ8yAjymVVpbVoC4UqBGQ9K5Epxi9JB-ErykFUO-mFUpx2Fax27AubUjGqUpxacDxu48CmFUgwCwAzoG2K4GUkxu22q7KcwGgOS5ojKFqgCEgwGzEGmEWEboKrwGwWwAwSKcwhoK1SU5qi224FoW1DyU8e2m0JrzUkwVw9q26E984G0iS0CE1XUb86Xwang1yo3jxAE1282BwFw0h9qw6dy80324w0ZGwl80DqlU10409xg2cw5Ew2dU5-04LVU0JW0n24Uvxe016jw0DEy-8Dw1gi02vC0VU0Lu2W02gS0Uy062g3Oooemmu780CG48&__comet_req=15&fb_dtsg=NAcP-8Ebnj78UOyuGVY5Kt1tggzmrIEDzpSbL7rY2Ul6_oIOFPKIDDQ%3A9%3A1709203384&jazoest=25344&lsd=ZlZBKFD-EBGkK-KodtjEM4&__spin_r=1014158298&__spin_b=trunk&__spin_t=1718197590&qpl_active_flow_ids=521477507&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=RTWebCallBlockSettingHooksQuery&variables={}&server_timestamps=true&doc_id=6238322836279073";

fetch("https://www.facebook.com/api/graphql/", {
	headers: {
		"content-type": "application/x-www-form-urlencoded",
		"sec-ch-prefers-color-scheme": "dark",
		"sec-ch-ua": '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
		"sec-ch-ua-full-version-list":
			'"Google Chrome";v="125.0.6422.142", "Chromium";v="125.0.6422.142", "Not.A/Brand";v="24.0.0.0"',
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-model": '""',
		"sec-ch-ua-platform": '"macOS"',
		"sec-ch-ua-platform-version": '"11.2.0"',
		"x-asbd-id": "129477",
		"x-fb-friendly-name": "ProfileCometTimelineFeedQuery",
		"x-fb-lsd": "SdGtPZ161NFIVgaTX2aGje",
	},
	referrer: "https://www.facebook.com/groups/1933100987123983",
	referrerPolicy: "strict-origin-when-cross-origin",
	body: paramsString,
	method: "POST",
	mode: "cors",
	credentials: "omit",
})
	.then((response) => response.json())
	.then((response) => console.log("heheh", response));
