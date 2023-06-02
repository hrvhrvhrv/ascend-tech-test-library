export default {
  getAccountFirstName(state) {
    return state.account[0].firstName;
  },
  account(state) {
    return state.account;
  },
  hasAccount(state) {
    return state.account && state.account.length > 0;
  },
};
