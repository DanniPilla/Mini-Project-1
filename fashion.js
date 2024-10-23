let subcultures = [];

let cachedData = null;

function fetchPosts() {
  if (cachedData) {
    // If there is cached data, use that
    displaySubcultures(cachedData);
    return; // exit early to avoid making network request
  }

  // Now fetch from server if there is no cached data
  fetch("http://localhost:3000/fashion")
    .then((response) => response.json()) //  the second time you use .then(), you are defining the name of the variable that will hold the array of objects from the JSON response. You can give it any name, and it will represent the data returned from the API.
    .then((posts) => {
      cachedData = posts;
      subcultures = posts;
      displaySubcultures(subcultures);
    })
    .catch((error) => console.error("Error fetchingdata:", error));
}

function displaySubcultures(subcultures) {
  // Error handling to make sure data is an array
  try {
    if (!Array.isArray(subcultures)) {
      throw new Error("Data not available");
    }

    const postList = document.getElementById("post-list");
    const template = document.getElementById("post-template");
    postList.innerHTML = ""; // Clear previous posts

    // Loop through posts and use the template to create cards
    subcultures.forEach((subculture) => {
      if (
        !subculture.title ||
        !subculture.Overview ||
        !subculture.origins ||
        !subculture.styleBasics ||
        !subculture.img
      ) {
        console.log("Subculture data is missing properties", subculture);

        return; // this will skip iteration if there are any missing data properties.
      }

      const clone = template.content.cloneNode(true);
      clone.querySelector(".subculture-title").innerText = subculture.title;
      clone.querySelector(".subculture-overview").innerText =
        subculture.Overview;
      clone.querySelector(".origins-content").innerText = subculture.origins;
      clone.querySelector(".style-basics-content").innerText =
        subculture.styleBasics;
      clone.querySelector(".gallery-content").src = subculture.img;
      postList.appendChild(clone);
    });
  } catch (error) {
    console.log("Error while displaying subcultures", error);
    alert("An error occurred, please try again");
  }
}

function searchItems() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const filteredSubcultures = subcultures.filter(
    (subculture) =>
      subculture.title.toLowerCase().includes(searchInput) ||
      subculture.Overview.toLowerCase().includes(searchInput)
  );

  displaySubcultures(filteredSubcultures);
}

function filterBySubculture(category) {
  if (category === "all") {
    displaySubcultures(subcultures);
  } else {
    const filteredSubcultures = subcultures.filter(
      (subculture) => subculture.title.toLowerCase() === category.toLowerCase()
    );
    displaySubcultures(filteredSubcultures);
  }
}

fetchPosts();
