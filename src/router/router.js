import { AuthContainer } from "../components/authentication/Authentication";
import { DialogsContainer } from "../components/messages/DialogsContainer";
import { EditProfileContainer } from "../components/profile/EditProfile/EditProfileContainer";
import { ProfileContainer } from "../components/profile/ProfileContainer";
import { UsersContainer } from "../components/users/UsersContainer";
import { WelcomeContainer } from "../components/Welcome/WelcomeContainer";
import { PATHS } from "./paths";



export const routes = [
	{
		path: `${PATHS.PROFILE}/:userId?`,
		element: ProfileContainer
	},
	{
		path: `${PATHS.DIALOGS}/:userId?`,
		element: DialogsContainer
	},
	{
		path: `${PATHS.USERS}/:pageId?`,
		element: UsersContainer
	},
	{
		path: PATHS.AUTH,
		element: AuthContainer
	},
	{
		path: PATHS.HOME,
		element: WelcomeContainer
	},
	{
		path: `${PATHS.ACCOUNT_SETTING}/:page?`,
		element: EditProfileContainer
	},

]

