const fetchUser = async () => {
  const headers = {
    // "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
  };

  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        headers,
      }
    );
    console.log(response);
    const user = await response.json();
    console.log(user);
    return user;
  } catch (error) {
    alert("You have an error:", error);
  }
};

export default fetchUser;
