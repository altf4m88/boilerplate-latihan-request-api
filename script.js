// Fungsi untuk mengambil gambar kucing
function requestKucing() {

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

// menempelkan gambar kucing ke element HTML
function renderKucing (url) {
    let element = document.getElementById('cat-image');

    element.src = url;
}

// memanggil fungsi requestKucing()
requestKucing()

// buatlah fungsi untuk memanggil gambar Anjing disini
// https://dog.ceo/api/breeds/image/random



// buatlah fungsi untuk memanggil gambar Rubah disini
// https://randomfox.ca/floof/


// buatlah fungsi untuk memanggil gambar Kapibara disini
// https://api.capy.lol/v1/capybara?json=true
