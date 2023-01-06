// import { createBrowserRouter } from "react-router-dom";
import Profile from '../components/profile/Profile';
import { News } from '../components/news/News';
import { Dialogs } from "../components/messages/Dialogs";

// export const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <h1>Welcome to my website</h1>
// 	},
// 	{
// 		path: '/profile',
// 		element: <Profile />
// 	},
// 	{
// 		path: '/news',
// 		element: <News />
// 	},
// 	{
// 		path: '/dialogs/*',
// 		element: <Dialogs />
// 	}
// ])

const messages = [
	[
		{
			id: 1,
			text: "Hello."
		},
		{
			id: 2,
			text: "How do you doing."
		},
		{
			id: 1,
			text: "Do you want to go with me."
		},
		{
			id: 1,
			text: "I am sure of it."
		},
	],
	[
		{
			id: 3,
			text: "Hi"
		},
		{
			id: 3,
			text: "Nice to meet you."
		},
		{
			id: 1,
			text: "Hello."
		},
		{
			id: 3,
			text: "You need to learn English more intensively."
		},
		{
			id: 3,
			text: "Bay"
		},
	],
	[
		{
			id: 1,
			text: "Eee."
		}, {
			id: 4,
			text: "What is sup man."
		}, {
			id: 1,
			text: "Let's go !!!!!!."
		}, {
			id: 4,
			text: "yes"
		},
	],
];
const dialogs = [
	{
		id: 1,
		img: "https://avatars.mds.yandex.net/i?id=8c488830373f58f85a17abf9e2677c70-4231037-images-thumbs&n=13",
		name: "Anna Goodman",
	},
	{
		id: 2,
		img: "https://avatars.mds.yandex.net/i?id=956b7362cef902d3517011d83622a08a_sr-6356719-images-thumbs&n=13",
		name: "Ivan Morozov",
	},
	{
		id: 3,
		img: "https://avatars.mds.yandex.net/i?id=959634e827f25855c980de6b855b5022_sr-3480301-images-thumbs&n=13",
		name: "Lisa Pop",
	},
];
const postData = [
	{
		id: 1,
		img: "https://avatars.mds.yandex.net/i?id=c375e9b50892ee18c63d9bdb1022efcd-4080717-images-thumbs&n=13",
		title: "I like swimming",
		text: "English texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order. The texts below are designed to help you develop while giving you an instant evaluation of your progress.",
		likes: 12,
	},
	{
		id: 2,
		img: "https://static.pixel.ee/avatars/3249_s.jpg",
		title: "My advice",
		text: "Prepared by experienced English teachers, the texts, articles and conversations are brief and appropriate to your level of proficiency. Take the multiple-choice quiz following each text, and you'll get the results immediately.",
		likes: 550,
	},
];
const userProfile = {
	introImg:
		"https://lh6.googleusercontent.com/8Bv_pfeWF7dZIPi2HSXfRHGf_HuVworlYMo8JP4_90ku4vSUeX9YapPOq8ak8M5-oeVm1njsgwvIzNZ26OHabtMiMGn7X5nbvK7-6O-fueZSSKua5GfRYa0ZyroxdFoTfg=w1200",

	userData: {
		userAvatar:
			"https://rabotaip.ru/wp-content/uploads/2021/05/2801748531-150x150.jpg",
		userName: "Ivan",
		userCity: "Moscow",
		userEducation: "Intermediate",
		userWebsite: {
			url: 'https://google.com',
			name: "https://ivan-mocsow.com"
		}
	},
};

export const router = [
	{
		path: '/',
		element: <h1>Welcome to my website</h1>
	},
	{
		path: '/profile',
		element: <Profile postData={postData} userProfile={userProfile} />
	},
	{
		path: '/news',
		element: <News />
	},
	{
		path: '/dialogs/*',
		element: <Dialogs messages={messages} dialogs={dialogs} />
	}
]

