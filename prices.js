const coins = {
    bitcoin: 'Bitcoin',
    ethereum: 'Ethereum'
};

const grid = document.getElementById('priceGrid');
const statusText = document.getElementById('status');
const refreshButton = document.getElementById('refreshBtn');

async function fetchPrices() {
    statusText.textContent = 'Loading prices...';
    grid.innerHTML = '';

    try {
        const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd&include_24hr_change=true';
        const response = await fetch(url);
        const data = await response.json();

        Object.keys(coins).forEach(function (id) {
            const change = data[id].usd_24h_change || 0;
            const isUp = change >= 0;
            const card = document.createElement('article');

            card.className = 'price-card';
            card.innerHTML =
                '<h2>' + coins[id] + '</h2>' +
                '<p class="price">$' + data[id].usd.toLocaleString() + '</p>' +
                '<p class="' + (isUp ? 'up' : 'down') + '">' +
                    (isUp ? '▲' : '▼') + ' ' + change.toFixed(2) + '% in 24h' +
                '</p>';

            grid.appendChild(card);
        });

        statusText.textContent = 'Last updated: ' + new Date().toLocaleTimeString();
    } catch (error) {
        statusText.textContent = 'Could not load prices. Check internet and try again.';
    }
}

refreshButton.addEventListener('click', fetchPrices);
fetchPrices();

