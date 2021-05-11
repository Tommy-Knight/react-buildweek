const getExp = async (userID) => {
  const headers = {
    Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
  };

  try {
    console.log("my USERID IN GETEXP", userID);
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
      const listOfExp = await response.json();
      console.log(listOfExp);
      return listOfExp;
    } else {
      alert("Error in response");
    }
  } catch (error) {
    alert("You have an error in sending experience request:", error);
  }
};

export default getExp;
