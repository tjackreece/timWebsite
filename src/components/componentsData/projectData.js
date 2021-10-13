import af from "./imgFiles/af.png";
import chah from "./imgFiles/chah.png";
import plndi from "./imgFiles/plndi.png";
import rsn from "./imgFiles/rsn.png";
import sitc from "./imgFiles/sitc.jpeg";

const Websites = {
	name: "Timothy Jackreece",
	email: "TimothyJackreece@gmail.com",
	Twitter: "https://twitter.com/Tjackreece",
	github: "https://github.com/tjackreece",
	phone: "(239)238-0926",
	websites: [
		{
			id: 1,
			name: "Restaurant Scourt Naples",
			description:
				"This website allows users to review, rate and create restaurants found around Naples, Fl and surrounding areas. Restaurants are made and given a rating between 1 - 5 stars.",
			url: "https://restaurant-scout-naples.herokuapp.com/",
			languagesDisplayed: [
				"HTML",
				"CSS",
				"JavaScript",
				"Knex",
				"Express",
				"SQL",
			],
			Responsibilities: "",
			// "I cordinated this project for a smalll group of developers so we can implement our framework we mad to create awesome U/I ",
			image: rsn,
			classname: "restaurantScout",
			classname2: "rsn",
		},
		{
			id: 2,
			name: "Anywhere Fitness",
			description:
				'This site allows Users to register as a client or an instructor, as an Instructor you are allowed to create a class such as "Yoga on the Beach", seta class size, pick a location, time, date and a description of the class. Clients can log in as clients and register for the class, before class the instructor can scan the Qrcode generated to show attendance.',
			url: "https://anywhere-fitness-ap.herokuapp.com/",
			languagesDisplayed: [
				"HTML",
				"SQL",
				"KNEX.js",
				"JavaScript",
				"React",
				"RestfulAPI's",
				"Redux",
			],
			Responsibilities: "", // "I lead a team for the forms and also maade the classes page for people tosig up for classes.",
			image: af,
			classname: "anywhereFitnesss",
			classname2: "af",
		},
		{
			id: 3,
			name: "Caring Hands at Home",
			description:
				"Created this site for a Care Giver looking to have a way for customers to view her services. Also the ability to be contacted by company email or by phone number.",
			url: "https://caring-hands-at-home.com/",
			languagesDisplayed: [
				"HTML",
				"CSS",
				"JavaScript",
				"WordPress",
				"PostgreSQL",
				"Bootstrap",
			],
			Responsibilities: "",
			// "Everything created was made by me using wordpress",
			image: chah,
			classname: "caringHands",
			classname2: "chah",
		},
		{
			id: 4,
			name: "Potluck-N-Dropit",
			description:
				"This site allows users to create a profile, choose a potluck/party to attend and type in an item you want to bring to the potluck/party. Users also can update their own potluck/party created and also invite other users to attend.",
			url: "https://potluck-n-drop-it-pro.herokuapp.com/",
			languagesDisplayed: [
				"HTML",
				"CSS",
				"JavaScript",
				"Knex",
				"Express",
				"SQL",
			],
			Responsibilities: "",
			// "I cordinated this project for a smalll group of developers so we can implement our framework we mad to create awesome U/I ",
			image: plndi,
			classname: "potluck",
			classname2: "PLNDI",
		},
		{
			id: 5,
			name: "School In The Clouds",
			description:
				"Created this site with a Team of Developers for a School In The Cloud or online based Schooling. The site allows Instructors to be able to log in as an instructor and make Classes, A student role to allow students to select classes and give them acesss to a schedule.",
			url: "https://school-in-the-cloud-lambda-school.vercel.app/",
			languagesDisplayed: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"RestfulAPI's",
				"Redux",
				"MongoDB",
			],
			image: sitc,
			Responsibilities: "",
			// "Responsibilities included the CSS and styling of the site, along as making the login and regrister form. first time for me working with a team but i displayed my skills effectivelly and eloquently explained my problems when they arised.",
			loginInfo: "ADMIN_CODE=giveAdminPls",
			classname: "schoolInTheClouds",
			classname2: "sitc",
		},
	],
};
export default Websites;
