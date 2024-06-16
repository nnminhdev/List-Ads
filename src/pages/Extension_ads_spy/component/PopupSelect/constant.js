import usSvg from "../../../../assets/country/us.svg";
import aeSvg from "../../../../assets/country/ae.svg";
import aoSvg from "../../../../assets/country/ao.svg";
import arSvg from "../../../../assets/country/ar.svg";
import atSvg from "../../../../assets/country/at.svg";
import auSvg from "../../../../assets/country/au.svg";
import azSvg from "../../../../assets/country/az.svg";
import bdSvg from "../../../../assets/country/bd.svg";
import beSvg from "../../../../assets/country/be.svg";
import bhSvg from "../../../../assets/country/bh.svg";
import brSvg from "../../../../assets/country/br.svg";
import caSvg from "../../../../assets/country/ca.svg";
import chSvg from "../../../../assets/country/ch.svg";
import ciSvg from "../../../../assets/country/ci.svg";
import clSvg from "../../../../assets/country/cl.svg";
import cnSvg from "../../../../assets/country/cn.svg";
import coSvg from "../../../../assets/country/co.svg";
import deSvg from "../../../../assets/country/de.svg";
import dkSvg from "../../../../assets/country/dk.svg";
import dzSvg from "../../../../assets/country/dz.svg";
import egSvg from "../../../../assets/country/eg.svg";
import esSvg from "../../../../assets/country/es.svg";
import fiSvg from "../../../../assets/country/fi.svg";
import frSvg from "../../../../assets/country/fr.svg";
import gbSvg from "../../../../assets/country/gb.svg";
import grSvg from "../../../../assets/country/gr.svg";
import idSvg from "../../../../assets/country/id.svg";
import ieSvg from "../../../../assets/country/ie.svg";
import ilSvg from "../../../../assets/country/il.svg";
import inSvg from "../../../../assets/country/in.svg";
import iqSvg from "../../../../assets/country/iq.svg";
import itSvg from "../../../../assets/country/it.svg";
import jpSvg from "../../../../assets/country/jp.svg";
import keSvg from "../../../../assets/country/ke.svg";
import khSvg from "../../../../assets/country/kh.svg";
import krSvg from "../../../../assets/country/kr.svg";
import kwSvg from "../../../../assets/country/kw.svg";
import lbSvg from "../../../../assets/country/lb.svg";
import luSvg from "../../../../assets/country/lu.svg";
import lySvg from "../../../../assets/country/ly.svg";
import maSvg from "../../../../assets/country/ma.svg";
import mmSvg from "../../../../assets/country/mm.svg";
import mxSvg from "../../../../assets/country/mx.svg";
import mySvg from "../../../../assets/country/my.svg";
import ngSvg from "../../../../assets/country/ng.svg";
import nlSvg from "../../../../assets/country/nl.svg";
import noSvg from "../../../../assets/country/no.svg";
import nzSvg from "../../../../assets/country/nz.svg";
import omSvg from "../../../../assets/country/om.svg";
import paSvg from "../../../../assets/country/pa.svg";
import peSvg from "../../../../assets/country/pe.svg";
import phSvg from "../../../../assets/country/ph.svg";
import pkSvg from "../../../../assets/country/pk.svg";
import ptSvg from "../../../../assets/country/pt.svg";
import pySvg from "../../../../assets/country/py.svg";
import qaSvg from "../../../../assets/country/qa.svg";
import roSvg from "../../../../assets/country/ro.svg";
import ruSvg from "../../../../assets/country/ru.svg";
import saSvg from "../../../../assets/country/sa.svg";
import seSvg from "../../../../assets/country/se.svg";
import sgSvg from "../../../../assets/country/sg.svg";
import snSvg from "../../../../assets/country/sn.svg";
import thSvg from "../../../../assets/country/th.svg";
import trSvg from "../../../../assets/country/tr.svg";
import uaSvg from "../../../../assets/country/ua.svg";
import veSvg from "../../../../assets/country/ve.svg";
import vnSvg from "../../../../assets/country/vn.svg";
import zaSvg from "../../../../assets/country/za.svg";
import huSvg from "../../../../assets/country/hu.svg";

const options = [
	{
		label: "Male(>50%)",
		value: 1,
	},
	{
		label: "Male(>75%)",
		value: 2,
	},
	{
		label: "Male(100%)",
		value: 3,
	},
	{
		label: "Female(>50%)",
		value: 4,
	},
	{
		label: "Female(>75%)",
		value: 5,
	},
	{
		label: "Female(100%)",
		value: 6,
	},
];

const optionsAge = [
	{
		label: "13-17",
		value: 1,
	},
	{
		label: "18-24",
		value: 2,
	},
	{
		label: "25-34",
		value: 3,
	},
	{
		label: "35-44",
		value: 4,
	},
	{
		label: "55-64",
		value: 5,
	},
	{
		label: "65+",
		value: 6,
	},
];

const ListLanguages = [
	{
		label: "Chinese (Simplified)",
		value: "zh-CN",
	},
	{
		label: "English",
		value: "en",
	},
	{
		label: "Japanese",
		value: "ja",
	},
	{
		label: "Korea",
		value: "ko",
	},
	{
		label: "Arabic",
		value: "ar",
	},
	{
		label: "Chinese (Traditional)",
		value: "zh-TW",
	},
	{
		label: "Thai",
		value: "th",
	},
	{
		label: "German",
		value: "de",
	},
	{
		label: "Spanish",
		value: "es",
	},
	{
		label: "French",
		value: "fr",
	},
	{
		label: "Hindi",
		value: "hi",
	},
	{
		label: "Italian",
		value: "it",
	},
	{
		label: "Malay",
		value: "ms",
	},
	{
		label: "Dutch",
		value: "nl",
	},
	{
		label: "Portuguese",
		value: "pt",
	},
	{
		label: "Russian",
		value: "ru",
	},
	{
		label: "Vietnamese",
		value: "vi",
	},
	{
		label: "Indonesian",
		value: "id",
	},
	{
		label: "Hebrew",
		value: "he",
	},
	{
		label: "Filipino",
		value: "tl",
	},
	{
		label: "Norwegian",
		value: "no",
	},
	{
		label: "Turkish",
		value: "tr",
	},
	{
		label: "Polish",
		value: "pl",
	},
];

const MarketingObjectivesConstant = [
	{
		topic: "Shopping",
		list_data: [
			{
				label: "Buy Now",
				value: "BUY_NOW",
			},
			{
				label: "Order Now",
				value: "ORDER_NOW",
			},
			{
				label: "Shop Now",
				value: "SHOP_NOW",
			},
			{
				label: "Start Order",
				value: "START_ORDER",
			},
			{
				label: "Add To Cart",
				value: "ADD_TO_CART",
			},
			{
				label: "Sell Now",
				value: "SELL_NOW",
			},
		],
	},
	{
		topic: "Conversion / Leads",
		list_data: [
			{
				label: "Contact Us",
				value: "CONTACT_US",
			},
			{
				label: "Learn More",
				value: "LEARN_MORE",
			},
			{
				label: "Get Offer",
				value: "GET_OFFER",
			},
			{
				label: "Get Showtimes",
				value: "GET_SHOWTIMES",
			},
			{
				label: "Request Time",
				value: "REQUEST_TIME",
			},
			{
				label: "See Menu",
				value: "SEE_MENU",
			},
			{
				label: "SubScribe",
				value: "SUBSCRIBE",
			},
			{
				label: "Apply Now",
				value: "APPLY_NOW",
			},
			{
				label: "Book Travel",
				value: "BOOK_TRAVEL",
			},
			{
				label: "Buy Now",
				value: "BUY_NOW",
			},
			{
				label: "Buy Tickets",
				value: "BUY_TICKETS",
			},
			{
				label: "Get Offer View",
				value: "GET_OFFER_VIEW",
			},
			{
				label: "Sign Up",
				value: "SIGN_UP",
			},
		],
	},
	{
		topic: "Message",
		list_data: [
			{
				label: "Get Queue",
				value: "GET_QUEUE",
			},
			{
				label: "Send Message",
				value: "SEND_MESSAGE",
			},
			{
				label: "Send WhatsApp Message",
				value: "SEND_WHATSAPP_MESSAGE",
			},
			{
				label: "WhatsApp Message",
				value: "WHATSAPP_MESSAGE",
			},
			{
				label: "Message Page",
				value: "MESSAGE_PAGE",
			},
		],
	},
	{
		topic: "Video News",
		list_data: [
			{
				label: "Watch Video",
				value: "WATCH_VIDEO",
			},
			{
				label: "Watch More",
				value: "WATCH_MORE",
			},
			{
				label: "Shop Now",
				value: "SHOP_NOW",
			},
			{
				label: "Listen Music",
				value: "LISTEN_MUSIC",
			},
		],
	},
	{
		topic: "Engagement",
		list_data: [
			{
				label: "Like Page",
				value: "LIKE_PAGE",
			},
			{
				label: "Get Quote",
				value: "GET_QUOTE",
			},
			{
				label: "Call Now",
				value: "CALL_NOW",
			},
			{
				label: "Get Offer View",
				value: "GET_OFFER_VIEW",
			},
			{
				label: "Message Page",
				value: "MESSAGE_PAGE",
			},
			{
				label: "View Instagram",
				value: "VIEW_INSTAGRAM",
			},
		],
	},
	{
		topic: "Other",
		list_data: [
			{
				label: "Email Now",
				value: "EMAIL_NOW",
			},
			{
				label: "Get Tickets",
				value: "GET_TICKETS",
			},
			{
				label: "Get Directions",
				value: "GET_DIRECTIONS",
			},
			{
				label: "Open Link",
				value: "OPEN_LINK",
			},
			{
				label: "Save",
				value: "SAVE",
			},
			{
				label: "Search",
				value: "SEARCH",
			},
			{
				label: "Try It",
				value: "TRY_IT",
			},
			{
				label: "Donate",
				value: "DONATE",
			},
			{
				label: "Donate Now",
				value: "DONATE_NOW",
			},
			{
				label: "Go Live",
				value: "GO_LIVE",
			},
			{
				label: "Link Card",
				value: "LINK_CARD",
			},
			{
				label: "Event RSVP",
				value: "EVENT_RSVP",
			},
		],
	},
];

const listCountry = [
	{
		topic: "Most Popular",
		list_country: [
			{
				name: "United States",
				image_country: usSvg,
				value: "USA",
			},
			{
				name: "Malaysia",
				image_country: mySvg,
				value: "MYS",
			},
			{
				name: "Indonesia",
				image_country: inSvg,
				value: "IDN",
			},
			{
				name: "Philippines",
				image_country: phSvg,
				value: "PHL",
			},
			{
				name: "Thailand",
				image_country: thSvg,
				value: "THA",
			},
			{
				name: "Brazil",
				image_country: brSvg,
				value: "BRA",
			},
			{
				name: "Vietnam",
				image_country: vnSvg,
				value: "VNM",
			},
			{
				name: "Spain",
				image_country: esSvg,
				value: "ESP",
			},
			{
				name: "Mexico",
				image_country: mxSvg,
				value: "MEX",
			},
			{
				name: "India",
				image_country: inSvg,
				value: "IND",
			},
		],
	},
	{
		topic: "Southern Asia",
		list_country: [
			{
				name: "India",
				image_country: inSvg,
				value: "IND",
			},
			{
				name: "Pakistan",
				image_country: pkSvg,
				value: "PAK",
			},
			{
				name: "Bangladesh",
				image_country: bdSvg,
				value: "BGD",
			},
		],
	},
	{
		topic: "HA/MO/TW",
		list_country: [
			{
				name: "Macau",
				image_country: cnSvg,
				value: "MAC",
			},
			{
				name: "Taiwan",
				image_country: cnSvg,
				value: "TWN",
			},
			{
				name: "Hong Kong",
				image_country: cnSvg,
				value: "HKG",
			},
		],
	},
	{
		topic: "Japanese Korea",
		list_country: [
			{
				name: "Japan",
				image_country: jpSvg,
				value: "JPN",
			},
			{
				name: "korea",
				image_country: krSvg,
				value: "KOR",
			},
		],
	},
	{
		topic: "Southeast Asia",
		list_country: [
			{
				name: "Thailand",
				image_country: thSvg,
				value: "THA",
			},
			{
				name: "Indonesia",
				image_country: idSvg,
				value: "IDN",
			},
			{
				name: "Singapore",
				image_country: sgSvg,
				value: "SGP",
			},
			{
				name: "Malaysia",
				image_country: mySvg,
				value: "MYS",
			},
			{
				name: "Vietnam",
				image_country: vnSvg,
				value: "VNM",
			},
			{
				name: "Philippines",
				image_country: phSvg,
				value: "PHL",
			},
			{
				name: "Cambodia",
				image_country: khSvg,
				value: "KHM",
			},
			{
				name: "Myanmar",
				image_country: mmSvg,
				value: "MMR",
			},
		],
	},
	{
		topic: "Middle East",
		list_country: [
			{
				name: "Bahrian",
				image_country: bhSvg,
				value: "BHR",
			},
			{
				name: "Qatar",
				image_country: qaSvg,
				value: "QAT",
			},
			{
				name: "Saudi Arabia",
				image_country: saSvg,
				value: "SAU",
			},
			{
				name: "United Arab Emirates",
				image_country: aeSvg,
				value: "ARE",
			},
			{
				name: "Azerbaijani",
				image_country: azSvg,
				value: "AZE",
			},
			{
				name: "Lebanon",
				image_country: lbSvg,
				value: "LBN",
			},
			{
				name: "Kuwait",
				image_country: kwSvg,
				value: "KWT",
			},
			{
				name: "Israel",
				image_country: ilSvg,
				value: "ISR",
			},
			{
				name: "Oman",
				image_country: omSvg,
				value: "OMN",
			},
			{
				name: "Iraq",
				image_country: iqSvg,
				value: "IRQ",
			},
			{
				name: "Morocco",
				image_country: maSvg,
				value: "MAR",
			},
		],
	},

	{
		topic: "Russian-speaking World",
		list_country: [
			{
				name: "Russia",
				image_country: ruSvg,
				value: "RUS",
			},
			{
				name: "Ukraine",
				image_country: uaSvg,
				value: "RUS",
			},
		],
	},

	{
		topic: "South America",
		list_country: [
			{
				name: "Brazil",
				image_country: brSvg,
				value: "BRA",
			},
			{
				name: "Chile",
				image_country: clSvg,
				value: "CHL",
			},
			{
				name: "Argentina",
				image_country: arSvg,
				value: "ARG",
			},
			{
				name: "Colombia",
				image_country: coSvg,
				value: "COL",
			},
			{
				name: "Peru",
				image_country: peSvg,
				value: "PER",
			},
			{
				name: "Venezuel",
				image_country: veSvg,
				value: "VEN",
			},
			{
				name: "paraguay",
				image_country: pySvg,
				value: "PRY",
			},
		],
	},

	{
		topic: "North America",
		list_country: [
			{
				name: "United States",
				image_country: usSvg,
				value: "USA",
			},
			{
				name: "Canada",
				image_country: caSvg,
				value: "CAN",
			},
			{
				name: "Mexico",
				image_country: mxSvg,
				value: "MEX",
			},
			{
				name: "Panama",
				image_country: paSvg,
				value: "PAN",
			},
		],
	},

	{
		topic: "Europe",
		list_country: [
			{
				name: "Türkiye",
				image_country: trSvg,
				value: "TUR",
			},
			{
				name: "France",
				image_country: frSvg,
				value: "FRA",
			},
			{
				name: "Germany",
				image_country: deSvg,
				value: "DEU",
			},
			{
				name: "United Kingdom",
				image_country: gbSvg,
				value: "ENG",
			},

			{
				name: "Italy",
				image_country: itSvg,
				value: "ITA",
			},
			{
				name: "Spain",
				image_country: esSvg,
				value: "ESP",
			},

			//
			{
				name: "Netherlands",
				image_country: nlSvg,
				value: "NLD",
			},
			{
				name: "Norway",
				image_country: noSvg,
				value: "NOR",
			},
			{
				name: "Portugal",
				image_country: ptSvg,
				value: "POL",
			},
			{
				name: "Poland",
				image_country: ptSvg,
				value: "PRT",
			},

			{
				name: "Belgium",
				image_country: beSvg,
				value: "BEL",
			},
			{
				name: "Switzerland",
				image_country: chSvg,
				value: "CHE",
			},

			//
			{
				name: "Austria",
				image_country: atSvg,
				value: "AUT",
			},
			{
				name: "Romania",
				image_country: roSvg,
				value: "ROM",
			},
			{
				name: "Sweden",
				image_country: seSvg,
				value: "SWE",
			},
			{
				name: "Greece",
				image_country: grSvg,
				value: "GRC",
			},

			{
				name: "Denmark",
				image_country: dkSvg,
				value: "DNK",
			},
			{
				name: "Luxembourg",
				image_country: luSvg,
				value: "LUX",
			},
			{
				name: "Ireland",
				image_country: ieSvg,
				value: "IRL",
			},

			{
				name: "Finland",
				image_country: fiSvg,
				value: "FIN",
			},
			{
				name: "Hungary",
				image_country: huSvg,
				value: "HUN",
			},
		],
	},

	{
		topic: "Oceania",
		list_country: [
			{
				name: "Australia",
				image_country: auSvg,
				value: "AUS",
			},
			{
				name: "New Zealand",
				image_country: nzSvg,
				value: "NZL",
			},
		],
	},

	{
		topic: "africa",
		list_country: [
			{
				name: "Egypt",
				image_country: egSvg,
				value: "EGY",
			},
			{
				name: "Kenya",
				image_country: keSvg,
				value: "KEN",
			},
			{
				name: "Nigeria",
				image_country: ngSvg,
				value: "NGA",
			},
			{
				name: "Angola",
				image_country: aoSvg,
				value: "AGO",
			},
			{
				name: "South Africa",
				image_country: zaSvg,
				value: "ZAF",
			},
			{
				name: "Algeria",
				image_country: dzSvg,
				value: "DZA",
			},
			{
				name: "Libyan Arab Jm",
				image_country: lySvg,
				value: "LBY",
			},
			{
				name: "Senegal",
				image_country: snSvg,
				value: "SEN",
			},
			{
				name: "Cote d'lvoire",
				image_country: clSvg,
				value: "CIV",
			},
		],
	},
];

export { options, optionsAge, ListLanguages, MarketingObjectivesConstant, listCountry };
