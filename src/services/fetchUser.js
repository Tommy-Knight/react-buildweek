const fetchUser = async (pathname) => {
  const headers = {
    Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
  };

  console.log("MY PATH IN GET", pathname);

  try {
    const response = await fetch(
      pathname === "/"
        ? "https://striveschool-api.herokuapp.com/api/profile/me"
        : "https://striveschool-api.herokuapp.com/api/profile/" + pathname,
      {
        headers,
      }
    );

    // console.log(response);
    const user = await response.json();
    // console.log(user);
    return user;
  } catch (error) {
    alert("You have an error in fetching another user:", error);
  }
};

export default fetchUser;
