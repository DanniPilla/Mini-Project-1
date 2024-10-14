
let subcultures=[];

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(posts => {
            subcultures=posts;
            displaySubcultures(subcultures);
        });
    }

    function displaySubcultures(subcultures){
            //  the second time you use .then(), you are defining the name of the variable that will hold the array of objects from the JSON response. You can give it any name, and it will represent the data returned from the API.
            const postList = document.getElementById('post-list');
            const template = document.getElementById('post-template');
            postList.innerHTML = ''; // Clear previous posts

            // Loop through posts and use the template to create cards
            subcultures.forEach(subculture => {
                const clone = template.content.cloneNode(true);
                clone.querySelector('.subculture-title').innerText = subculture.title;
                clone.querySelector('.subculture-overview').innerText = subculture.overview;
                clone.querySelector('.origins-content').innerText = subculture.body;
                clone.querySelector('.style-basics-content').innerText = post.body;
                clone.querySelector('.gallery-content').src = post.body;
                postList.appendChild(clone);
            });
}

function searchItems() {

    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredSubcultures = subcultures.filter(subcultures =>
        subculture.title.toLowerCase().includes(searchInput) || //Boolean, so if the search input matches it will display in category
        subculture.category.toLowerCase().includes(searchInput)
    );

    displayPosts(filteredSubcultures);
}

function filterByCategory(subcultures) {

    if (category === 'all') {
        displaySubcultures(subcultures);
    } else {
        const filteredSubcultures = subcultures.filter(subculture => subculture.category.toLowerCase() === subculture.toLowerCase());
        displaySubcultures(filteredSubcultures);
    }
}

fetchPosts();