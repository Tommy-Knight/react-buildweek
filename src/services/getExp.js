const getExp = async (userID) => {
  const headers = {
    Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
  };

  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        { userID } +
        "/experiences",
      {
        headers,
      }
    );
    console.log(response);
    if (response.ok) {
      const myExp = await response.json();
      console.log(myExp);
      return myExp;
    } else {
      alert("Error in response");
    }
  } catch (error) {
    alert("You have an error:", error);
  }
};

export default getExp;
