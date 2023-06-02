export default {
  async registerAccount(context, data) {
    const accountData = {
      firstName: data.first,
      lastName: data.last,
      library: data.libraryId,
    };

    const response = await fetch("https://api.com/user/", {
      method: "POST",
      body: JSON.stringify(accountData),
    });

    const responseData = await response.json();

    if (responseData.statusCodeHeader !== 201) {
      // error
    }

    context.commit("registerAccount", {
      ...accountData,
      id: responseData.body.userId,
    });
  },
};
