
let subcultures=[];

function fetchPosts() {
    fetch('http://localhost:3001/fashion')
        .then(response => response.json())
        .then(posts => {
            subcultures=posts;
            displaySubcultures(subcultures);
        })
        .catch(error => console.error('Error fetchingdata:', error));
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
                clone.querySelector('.subculture-overview').innerText = subculture.Overview;
                clone.querySelector('.origins-content').innerText = subculture.origins;
                clone.querySelector('.style-basics-content').innerText = subculture.styleBasics;
                clone.querySelector('.gallery-content').src = subculture.img;
                postList.appendChild(clone);
            });
}

function searchItems() {

    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredSubcultures = subcultures.filter(subculture =>
        subculture.title.toLowerCase().includes(searchInput) || 
        subculture.Overview.toLowerCase().includes(searchInput)
    );

    displayPosts(filteredSubcultures);
}

function filterBySubculture(category) {

    if (category === 'all') {
        displaySubcultures(subcultures);
    } else {
        const filteredSubcultures = subcultures.filter(subculture => subculture.title.toLowerCase() === category.toLowerCase());
        displaySubcultures(filteredSubcultures);
    }
}


fetchPosts();