const fetchUser = async () => {
  const headers = {
    Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
  };

  try {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/me',
      {
        headers,
      }
    );

    // console.log(response);
    const user = await response.json();
    // console.log(user);
    return user;
  } catch (error) {
    alert('You have an error in fetching another user:', error);
  }
};

export default fetchUser;
