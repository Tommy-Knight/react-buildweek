const getAnotherUser = async (userID) => {
  const headers = {
    Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
  };

  try {
    console.log('my USERID getAnotherUser', userID);
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/' +
        userID +
        {
          headers,
        }
    );
    console.log(response);
    if (response.ok) {
      const user = await response.json();
      console.log(user);
      return user;
    } else {
      alert('Error in response when getting another user');
    }
  } catch (error) {
    alert('You have an error in sending another user request:', error);
  }
};

//{ userID } // { userID: userID }

export default getAnotherUser;
