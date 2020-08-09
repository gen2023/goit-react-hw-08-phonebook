export const getIsAutorization = (state) => Boolean(state.authorization.token);
export const getUsername = (state) => state.authorization.user.name;
