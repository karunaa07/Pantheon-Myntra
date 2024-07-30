document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('open-popup-btn');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const submitReviewBtn = document.getElementById('submit-review');

    openPopupBtn.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    submitReviewBtn.addEventListener('click', () => {
        const selectedEmoji = document.querySelector('.emoji.selected');
        const selectedColor = document.querySelector('.color.selected');
        const selectedFabric = document.getElementById('fabric-select').value;

        if (selectedEmoji && selectedColor && selectedFabric) {
            alert(`Review submitted!\nRating: ${selectedEmoji.textContent}\nColor: ${selectedColor.style.backgroundColor}\nFabric: ${selectedFabric}`);
            popup.classList.add('hidden');
        } else {
            alert('Please complete all sections.');
        }
    });

    document.querySelectorAll('.emoji').forEach(emoji => {
        emoji.addEventListener('click', () => {
            document.querySelectorAll('.emoji').forEach(e => e.classList.remove('selected'));
            emoji.classList.add('selected');
        });
    });

    document.querySelectorAll('.color').forEach(color => {
        color.addEventListener('click', () => {
            document.querySelectorAll('.color').forEach(c => c.classList.remove('selected'));
            color.classList.add('selected');
        });
    });
});
