let selectedCountry = '';

function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function selectCountry(country) {
    selectedCountry = country;
    document.getElementById('location').value = country;
}

function confirmLocation() {
    if (selectedCountry) {
        document.getElementById('current-location').textContent = 'Ship to ' + selectedCountry;
        closeModal();
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}
