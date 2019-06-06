const initialState = {
	posts: []
};

const posts = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return { ...state, posts: action.payload };
		case 'DELETE_POST':
			return { ...state, posts: state.posts.filter((item) => item.id !== action.payload) };
		case 'EDIT_POST':
			return {
				...state,
				posts: state.posts.map((item) => {
					if (item.id === action.payload.id) {
						return { ...item, title: action.payload.body.title, body: action.payload.body.body };
					} else {
						return item;
					}
				})
			};
		default:
			return state;
	}
};

export default posts;
