async function sha256(message) {
    const encodedMessage = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encodedMessage);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray
        .map(function (byte) {
            return byte.toString(16).padStart(2, '0');
        })
        .join('');
}

function blockString(data, previousHash, nonce) {
    return data + '|' + previousHash + '|' + nonce;
}

async function calculateHash(blockNumber) {
    const data = document.getElementById('data' + blockNumber).value;
    const previousHash = document.getElementById('prev' + blockNumber).value;
    const nonce = document.getElementById('nonce' + blockNumber).value;

    return sha256(blockString(data, previousHash, nonce));
}

async function updateValidity(blockNumber) {
    const hash = await calculateHash(blockNumber);
    const hashElement = document.getElementById('hash' + blockNumber);
    const badge = document.getElementById('valid' + blockNumber);
    const isValid = hash.startsWith('00');

    hashElement.textContent = hash;
    badge.textContent = isValid ? 'Block Valid' : 'Block Invalid';
    badge.className = 'status-badge ' + (isValid ? 'valid' : 'invalid');

    return {
        hash: hash,
        valid: isValid
    };
}

async function syncChain() {
    const block1 = await updateValidity(1);

    document.getElementById('prev2').value = block1.hash;
    await updateValidity(2);
}

async function mine(blockNumber) {
    let nonce = 0;
    let hash = '';
    const nonceInput = document.getElementById('nonce' + blockNumber);

    do {
        nonceInput.value = nonce;
        hash = await calculateHash(blockNumber);
        nonce++;
    } while (!hash.startsWith('00'));

    await syncChain();
}

document.getElementById('mine1').addEventListener('click', function () {
    mine(1);
});

document.getElementById('mine2').addEventListener('click', function () {
    mine(2);
});

['data1', 'prev1', 'nonce1', 'data2', 'nonce2'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', syncChain);
});

syncChain();

