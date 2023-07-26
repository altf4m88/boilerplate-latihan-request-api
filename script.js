// // Function to fetch cat data and render the image
function fetchCatData() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const catImageUrl = data[0].url;
            // renderCatImage(catImageUrl);
        })
        .catch(error => {
        console.error('Fetch error:', error);
        });
    }