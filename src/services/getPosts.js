export const getPosts = async () => {
  const headers = {
    Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
  };
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/",
      {
        headers,
      }
    );
    const posts = await response.json();
    console.log(posts);
    return posts;
  } catch (error) {
    console.log("You have an error getting posts:", error);
  }
};
