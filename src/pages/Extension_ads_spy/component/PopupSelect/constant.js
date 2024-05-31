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
		value: 1,
	},
	{
		label: "English",
		value: 1,
	},
	{
		label: "Japanese",
		value: 1,
	},
	{
		label: "Korea",
		value: 1,
	},
	{
		label: "Arabic",
		value: 1,
	},
	{
		label: "Chinese (Traditional)",
		value: 1,
	},
	{
		label: "Thai",
		value: 1,
	},
	{
		label: "German",
		value: 1,
	},
	{
		label: "Spanish",
		value: 1,
	},
	{
		label: "French",
		value: 1,
	},
	{
		label: "Hindi",
		value: 1,
	},
	{
		label: "Italian",
		value: 1,
	},
	{
		label: "Malay",
		value: 1,
	},
	{
		label: "Dutch",
		value: 1,
	},
	{
		label: "Portuguese",
		value: 1,
	},
	{
		label: "Russian",
		value: 1,
	},
	{
		label: "Vietnamese",
		value: 1,
	},
	{
		label: "Indonesian",
		value: 1,
	},
	{
		label: "Hebrew",
		value: 1,
	},
	{
		label: "Filipino",
		value: 1,
	},
	{
		label: "Norwegian",
		value: 1,
	},
	{
		label: "Turkish",
		value: 1,
	},
	{
		label: "Polish",
		value: 1,
	},
];

const MarketingObjectivesConstant = [
	{
		topic: "Shopping",
		list_data: [
			{
				label: "Buy Now",
				value: 1,
			},
			{
				label: "Order Now",
				value: 2,
			},
			{
				label: "Shop Now",
				value: 3,
			},
			{
				label: "Start Order",
				value: 4,
			},
			{
				label: "Add To Cart",
				value: 5,
			},
			{
				label: "Sell Now",
				value: 6,
			},
		],
	},
	{
		topic: "Conversion / Leads",
		list_data: [
			{
				label: "Contact Us",
				value: 1,
			},
			{
				label: "Learn More",
				value: 2,
			},
			{
				label: "Get Offer",
				value: 3,
			},
			{
				label: "Get Showtimes",
				value: 4,
			},
			{
				label: "Request Time",
				value: 5,
			},
			{
				label: "See Menu",
				value: 6,
			},
			{
				label: "SubScribe",
				value: 7,
			},
			{
				label: "Apply Now",
				value: 8,
			},
			{
				label: "Book Travel",
				value: 9,
			},
			{
				label: "Buy Now",
				value: 10,
			},
			{
				label: "Buy Tickets",
				value: 11,
			},
			{
				label: "Get Offer View",
				value: 12,
			},
			{
				label: "Sign Up",
				value: 13,
			},
		],
	},
	{
		topic: "Message",
		list_data: [
			{
				label: "Get Queue",
				value: 1,
			},
			{
				label: "Send Message",
				value: 2,
			},
			{
				label: "Send WhatsApp Message",
				value: 3,
			},
			{
				label: "WhatsApp Message",
				value: 4,
			},
			{
				label: "Message Page",
				value: 5,
			},
		],
	},
	{
		topic: "Video News",
		list_data: [
			{
				label: "Watch Video",
				value: 1,
			},
			{
				label: "Watch More",
				value: 2,
			},
			{
				label: "Shop Now",
				value: 3,
			},
			{
				label: "Listen Music",
				value: 4,
			},
			{
				label: "Listen Now",
				value: 5,
			},
		],
	},
	{
		topic: "Engagement",
		list_data: [
			{
				label: "Like Page",
				value: 1,
			},
			{
				label: "Get Quote",
				value: 2,
			},
			{
				label: "Call Now",
				value: 3,
			},
			{
				label: "Get Offer View",
				value: 4,
			},
			{
				label: "Message Page",
				value: 5,
			},
			{
				label: "View Instagram",
				value: 6,
			},
		],
	},
	{
		topic: "Other",
		list_data: [
			{
				label: "Email Now",
				value: 1,
			},
			{
				label: "Get Tickets",
				value: 2,
			},
			{
				label: "Get Directions",
				value: 3,
			},
			{
				label: "Open Link",
				value: 4,
			},
			{
				label: "Save",
				value: 5,
			},
			{
				label: "Search",
				value: 6,
			},
			{
				label: "Try It",
				value: 7,
			},
			{
				label: "Donate",
				value: 8,
			},
			{
				label: "Donate Now",
				value: 9,
			},
			{
				label: "Go Live",
				value: 10,
			},
			{
				label: "Link Card",
				value: 11,
			},
			{
				label: "Event RSVP",
				value: 12,
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
				value: "us",
			},
			{
				name: "Malaysia",
				image_country: maSvg,
				value: "ma",
			},
			{
				name: "Indonesia",
				image_country: inSvg,
				value: "in",
			},
			{
				name: "Philippines",
				image_country: phSvg,
				value: "ph",
			},
			{
				name: "Thailand",
				image_country: thSvg,
				value: "th",
			},
			{
				name: "Brazil",
				image_country: usSvg,
				value: "us",
			},
			{
				name: "Vietnam",
				image_country: vnSvg,
				value: "vn",
			},
			{
				name: "Spain",
				image_country: snSvg,
				value: "sn",
			},
			{
				name: "Mexico",
				image_country: mxSvg,
				value: "mx",
			},
			{
				name: "India",
				image_country: inSvg,
				value: "in",
			},
		],
	},
	{
		topic: "HA/MO/TW",
		list_country: [
			{
				name: "Macau",
				image_country: maSvg,
				value: "ma",
			},
			{
				name: "Taiwan",
				image_country: trSvg,
				value: "tw",
			},
			{
				name: "Hong Kong",
				image_country: kwSvg,
				value: "hk",
			},
		],
	},
	{
		topic: "Japanese Korea",
		list_country: [
			{
				name: "Japan",
				image_country: jpSvg,
				value: "jp",
			},
			{
				name: "korea",
				image_country: keSvg,
				value: "ke",
			},
		],
	},
	{
		topic: "Southeast Asia",
		list_country: [
			{
				name: "Thailand",
				image_country: thSvg,
				value: "th",
			},
			{
				name: "Indonesia",
				image_country: idSvg,
				value: "id",
			},
			{
				name: "Singapore",
				image_country: snSvg,
				value: "sn",
			},
			{
				name: "Malaysia",
				image_country: maSvg,
				value: "ma",
			},
			{
				name: "Vietnam",
				image_country: vnSvg,
				value: "vn",
			},
			{
				name: "Philippines",
				image_country: phSvg,
				value: "ph",
			},
			{
				name: "Cambodia",
				image_country: caSvg,
				value: "ca",
			},
			{
				name: "Myanmar",
				image_country: maSvg,
				value: "ma",
			},
		],
	},
	{
		topic: "Southern Asia",
		list_country: [
			{
				name: "India",
				image_country: inSvg,
				value: "in",
			},
			{
				name: "Pakistan",
				image_country: paSvg,
				value: "pa",
			},
			{
				name: "Bangladesh",
				image_country: bdSvg,
				value: "sn",
			},
		],
	},
	{
		topic: "Middle East",
		list_country: [
			{
				name: "Bahrian",
				image_country: bhSvg,
				value: "bh",
			},
			{
				name: "Qatar",
				image_country: qaSvg,
				value: "qa",
			},
			{
				name: "Saudi Arabia",
				image_country: saSvg,
				value: "sa",
			},
			{
				name: "United Arab Emirates",
				image_country: uaSvg,
				value: "ua",
			},
			{
				name: "Azerbaijani",
				image_country: azSvg,
				value: "az",
			},
			{
				name: "Lebanon",
				image_country: lbSvg,
				value: "lb",
			},
			{
				name: "Kuwait",
				image_country: kwSvg,
				value: "kw",
			},
			{
				name: "Israel",
				image_country: ilSvg,
				value: "il",
			},
			{
				name: "Oman",
				image_country: omSvg,
				value: "om",
			},
			{
				name: "Iraq",
				image_country: ieSvg,
				value: "ie",
			},
			{
				name: "Morocco",
				image_country: qaSvg,
				value: "qa",
			},
		],
	},
];

export { options, optionsAge, ListLanguages, MarketingObjectivesConstant, listCountry };
