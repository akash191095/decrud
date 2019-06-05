const initialState = {};

const posts = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return { ...state, fetchedPosts: action.payload };
		default:
			return state;
	}
};

export default posts;
