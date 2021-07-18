const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.email


export default { getIsAuthenticated, getUserName };