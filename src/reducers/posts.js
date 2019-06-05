const initialState = {
	posts: []
};

const posts = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return { ...state, posts: action.payload };
		default:
			return state;
	}
};

export default posts;
