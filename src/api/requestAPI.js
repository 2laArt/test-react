import axios from "axios";
import { changeFollow } from "./otherRequests/changeFollow";
import { getUsers } from "./otherRequests/getUsers";
import { getProfile } from "./otherRequests/getProfile";
import { authentication } from "./otherRequests/authentication";
import { changeStatus } from "./otherRequests/changeStatus";
import { getStatus } from "./otherRequests/getStatus";

const URL = "https://social-network.samuraijs.com/api/1.0/";
const APIKey = '8031c677-4f57-4285-9bff-140b1bc864a1';

const instance = axios.create({
	baseURL: URL,
	withCredentials: true,
	headers: {
		'API-KEY': APIKey,
	}
})

export const requests = {
	instance,
	...changeFollow,
	...getUsers,
	...getProfile,
	...authentication,
	...changeStatus,
	...getStatus,

}