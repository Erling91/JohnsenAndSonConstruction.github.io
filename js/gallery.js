
const images = [
    'images/georgia/IMG_0701.JPEG',
    'images/georgia/IMG_0702.JPEG',
    'images/georgia/IMG_0705.JPEG',
    'images/georgia/IMG_0706.JPEG'
];

// Function to create the initial gallery
function createGallery() {
    const galleryContainer = document.querySelector('.gallery-container');

    images.forEach((imageUrl) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Construction Project';
        img.classList.add('gallery-image'); // Optional: Add a CSS class for styling

        // Add a click event listener to each image
        img.addEventListener('click', () => openModal(imageUrl));

        galleryContainer.appendChild(img);
    });
}

window.addEventListener('load', createGallery);

// Open the modal with a clicked image
function openModal(imageSrc) {
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');

    modalImage.src = imageSrc;
    modal.style.display = 'block';
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('gallery-modal');
    modal.style.display = 'none';
}
