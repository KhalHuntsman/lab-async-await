document.addEventListener('DOMContentLoaded', () => {
  fetchPosts(); // This still runs automatically on page load
});

// Fetch posts from the API
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
    return posts; // <-- return posts so tests can await fetchPosts()
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Display posts on the page
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  if (!postList) {
    console.error('No element with id "post-list" found.');
    return;
  }

  posts.forEach(post => {
    const li = document.createElement('li');

    const title = document.createElement('h1');
    title.textContent = post.title;

    const body = document.createElement('p');
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Export functions for testing (if using Mocha with Node/JSDOM)
if (typeof module !== 'undefined') {
  module.exports = { fetchPosts, displayPosts };
}
