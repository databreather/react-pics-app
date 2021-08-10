import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID jrrYcOVirGORRJ5Mluj9M92OyKWLHNpXBwPCZc9gIpQ",
	},
});
