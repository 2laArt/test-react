import { AuthContainer } from "../components/authentication/Authentication";
import { DialogsContainer } from "../components/messages/DialogsContainer";
import { ProfileContainer } from "../components/profile/ProfileContainer";
import { UsersContainer } from "../components/users/UsersContainer";
import { WelcomeContainer } from "../components/Welcome/WelcomeContainer";



export const routes = [
	{
		path: '/profile/:userId?',
		element: ProfileContainer
	},
	{
		path: '/dialogs/:userId?',
		element: DialogsContainer
	},
	{
		path: '/users/:page?',
		element: UsersContainer
	},
	{
		path: '/auth',
		element: AuthContainer
	},
	{
		path: '/',
		element: WelcomeContainer
	},
]

