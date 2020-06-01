export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (content: any) => ({
  type: USER_LOGIN,
  payload: {
    user: content
  }
});
