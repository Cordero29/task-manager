//  "sub": "auth0|688d6a8e64c95f0b26bb61d8",
// 	"nickname": "chris",
// 	"name": "chris",
// 	"picture": "https://cdn.auth0.com/avatars/ch.png",
// 	"updated_at": "2025-08-02T01:33:24.828Z",
// 	"email": null,
// 	"username": "chris"

type UserInfo = {
	sub: string;
	nickname: string;
	name: string;
	picture: string;
	updated_at: string;
	email: string | null;
	username: string;
}

export default UserInfo;