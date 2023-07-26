// // Function to fetch cat data and render the image
function ambilKucing() {

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            return response.json();
        })
        .then(data => {

            const catImageUrl = data[0].url;

            renderKucing(catImageUrl);
        })
        .catch(error => {
        console.error('Fetch error:', error);
        });
}

function renderKucing (url) {
    let element = document.getElementById('cat-image');

    element.src = url;
}

ambilKucing()