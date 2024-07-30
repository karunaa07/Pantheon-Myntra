document.addEventListener('DOMContentLoaded', () => {
    const imagePaths = {
        beach: ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg', 'b5.jpg'],
        mountain: ['m1.jpg', 'm2.jpg', 'm3.jpg', 'm4.jpg', 'm5.jpg'],
        galaxy: ['g1.jpg', 'g2.jpg', 'g3.jpg', 'g4.jpg', 'g5.jpg'],
        forest: ['f1.jpg', 'f2.jpg', 'f3.jpg', 'f4.jpg', 'f5.jpg']
    };

    const clothPaths = {
        beach: ['bc1.jpg', 'bc2.jpg', 'bc3.jpg', 'bc4.jpg','bc5.jpg','bc6.jpg','bc7.jpg','bc8.jpg'],
        mountain: ['mo1.jpg', 'mo2.jpg', 'mo3.jpg', 'mo4.jpg','mo5.jpg','mo6.jpg','mo7.jpg','mo8.jpg'],
        galaxy: ['ga1.jpg', 'ga2.jpg', 'ga3.jpg', 'ga4.jpg','ga5.jpg','ga6.jpg','ga7.jpg','ga8.jpg'],
        forest: ['fo1.jpg', 'fo2.jpg', 'fo3.jpg', 'fo4.jpg','fo5.jpg','fo6.jpg','fo7.jpg']
    };

    const imageDescriptions = {
        forest: [
            "Imagine yourself surrounded by towering trees and the sound of rustling leaves. Where would you go from here?",
            "The forest whispers secrets of adventure. Can you hear it calling you?",
            "Feel the cool breeze and the scent of pine. What journey awaits in the heart of nature?",
            "In the forest, every path leads to a new story. What's yours?"
        ],
        galaxy: [
            "Gaze upon the stars and let your mind wander among galaxies. Where does your imagination take you?",
            "The universe is vast and full of wonders. What mysteries do you dream of exploring?",
            "Under the starlit sky, anything is possible. What cosmic adventures lie ahead?",
            "Feel the awe of the galaxy's expanse. What celestial dreams do you hold?"
        ],
        mountain: [
            "Standing at the base of a majestic mountain, you feel a sense of awe. What's your next adventure?",
            "The mountain's peak beckons with promises of breathtaking views. What path will you take?",
            "Feel the crisp mountain air and the thrill of ascent. What summit are you aiming for?",
            "Among the rugged mountains, new challenges await. What heights will you conquer?"
        ],
        beach: [
            "Imagine the sun's warmth and the sound of waves. Where does this beach daydream take you?",
            "The ocean's horizon stretches infinitely. What coastal adventures are you longing for?",
            "Feel the sand between your toes and the sea breeze. What beachside stories will you create?",
            "Under the golden sun, the beach offers endless possibilities. What seaside escape do you envision?"
        ]
    };

    const clothDetails = {
        'bc1.jpg': { name: 'Beach Cloth 1', price: '$30.00', color: 'Blue', sizes: ['S', 'M', 'L'], company: 'Beachwear Co.', reviews: 'Great quality!' },
        'bc2.jpg': { name: 'Beach Cloth 2', price: '$35.00', color: 'Red', sizes: ['S', 'M', 'L'], company: 'Beachwear Co.', reviews: 'Very comfortable.' },
        'bc3.jpg': { name: 'Beach Cloth 3', price: '$40.00', color: 'Green', sizes: ['S', 'M', 'L'], company: 'Beachwear Co.', reviews: 'Stylish and durable.' },
        'bc4.jpg': { name: 'Beach Cloth 4', price: '$45.00', color: 'Yellow', sizes: ['S', 'M', 'L'], company: 'Beachwear Co.', reviews: 'Perfect for sunny days.' },
        'mo1.jpg': { name: 'Mountain Cloth 1', price: '$50.00', color: 'Brown', sizes: ['S', 'M', 'L'], company: 'Mountain Gear', reviews: 'Excellent for hiking.' },
        'mo2.jpg': { name: 'Mountain Cloth 2', price: '$55.00', color: 'Gray', sizes: ['S', 'M', 'L'], company: 'Mountain Gear', reviews: 'Keeps you warm.' },
        'mo3.jpg': { name: 'Mountain Cloth 3', price: '$60.00', color: 'Black', sizes: ['S', 'M', 'L'], company: 'Mountain Gear', reviews: 'Lightweight and durable.' },
        'mo4.jpg': { name: 'Mountain Cloth 4', price: '$65.00', color: 'White', sizes: ['S', 'M', 'L'], company: 'Mountain Gear', reviews: 'Breathable fabric.' },
        'ga1.jpg': { name: 'Galaxy Cloth 1', price: '$70.00', color: 'Purple', sizes: ['S', 'M', 'L'], company: 'Galaxy Fashion', reviews: 'Futuristic design.' },
        'ga2.jpg': { name: 'Galaxy Cloth 2', price: '$75.00', color: 'Black', sizes: ['S', 'M', 'L'], company: 'Galaxy Fashion', reviews: 'Elegant and sleek.' },
        'ga3.jpg': { name: 'Galaxy Cloth 3', price: '$80.00', color: 'Silver', sizes: ['S', 'M', 'L'], company: 'Galaxy Fashion', reviews: 'Eye-catching.' },
        'ga4.jpg': { name: 'Galaxy Cloth 4', price: '$85.00', color: 'Blue', sizes: ['S', 'M', 'L'], company: 'Galaxy Fashion', reviews: 'Unique pattern.' },
        'fo1.jpg': { name: 'Forest Cloth 1', price: '$90.00', color: 'Green', sizes: ['S', 'M', 'L'], company: 'Forest Attire', reviews: 'Blends with nature.' },
        'fo2.jpg': { name: 'Forest Cloth 2', price: '$95.00', color: 'Brown', sizes: ['S', 'M', 'L'], company: 'Forest Attire', reviews: 'Comfortable fit.' },
        'fo3.jpg': { name: 'Forest Cloth 3', price: '$100.00', color: 'Olive', sizes: ['S', 'M', 'L'], company: 'Forest Attire', reviews: 'Great for camping.' },
        'fo4.jpg': { name: 'Forest Cloth 4', price: '$105.00', color: 'Khaki', sizes: ['S', 'M', 'L'], company: 'Forest Attire', reviews: 'Durable and strong.' }
    };

    let selectedImages = [];
    let imageQueue = [];
    let imageQueueIndex = 0;

    const imageSelectionScreen = document.getElementById('imageSelectionScreen');
    const recommendationScreen = document.getElementById('recommendationScreen');
    const clothDetailScreen = document.getElementById('clothDetailScreen');
    const imageGrid = document.getElementById('imageGrid');
    const clothGrid = document.getElementById('clothGrid');
    const clothDetail = document.getElementById('clothDetail');
    const restartButton = document.getElementById('restartButton');
    const tryOnButton = document.getElementById('tryOnButton');
    const purchaseButton = document.getElementById('purchaseButton');

    function displayRandomImages() {
        imageGrid.innerHTML = '';
        const imagesToDisplay = imageQueue.slice(imageQueueIndex, imageQueueIndex + 4);
        imageQueueIndex += imagesToDisplay.length;

        imagesToDisplay.forEach(img => {
            const btn = createImageButton(img);
            imageGrid.appendChild(btn);
        });

        const numOfEmptySpaces = Math.max(0, 4 - imagesToDisplay.length);
        for (let i = 0; i < numOfEmptySpaces; i++) {
            const btn = document.createElement('button');
            btn.style.width = '300px';
            btn.style.height = '370px';
            btn.style.border = 'none';
            imageGrid.appendChild(btn);
        }

        if (imageQueueIndex >= imageQueue.length) {
            showRecommendationScreen();
        }
    }

    function createImageButton(img) {
        const btn = document.createElement('button');
        btn.className = 'image-btn';
        btn.style.backgroundImage = `url(${img.path})`;
        btn.style.width = '300px';
        btn.style.height = '370px';
        btn.style.backgroundSize = 'cover';
        btn.style.border = 'none';
        btn.addEventListener('click', () => selectImage(img));

        const overlay = document.createElement('div');
        overlay.className = 'text-overlay animated';
        overlay.innerText = getImageDescription(img.category);

        btn.appendChild(overlay);
        return btn;
    }

    function initializeImageQueue() {
        const categories = Object.keys(imagePaths);
        let images = [];
        categories.forEach(category => {
            images = images.concat(imagePaths[category].map(path => ({ path, category })));
        });

        imageQueue = [...images];
        shuffleArray(imageQueue);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function selectImage(imageData) {
        selectedImages.push(imageData);
        if (selectedImages.length < 12) {
            displayRandomImages();
        } else {
            showRecommendationScreen();
        }
    }

    function getImageDescription(category) {
        const descriptions = imageDescriptions[category];
        return descriptions[Math.floor(Math.random() * descriptions.length)];
    }

    function showRecommendationScreen() {
        imageSelectionScreen.classList.add('hidden');
        recommendationScreen.classList.remove('hidden');

        const predominantCategory = getPredominantCategory(selectedImages);
        const descriptions = imageDescriptions[predominantCategory];
        const description = descriptions[Math.floor(Math.random() * descriptions.length)];

        clothGrid.innerHTML = '';
        const suggestedClothes = clothPaths[predominantCategory] || [];

        suggestedClothes.forEach(cloth => {
            const btn = createImageButton({ path: cloth, category: predominantCategory });
            btn.addEventListener('click', () => showClothDetail(cloth));
            const overlay = document.createElement('div');
            overlay.className = 'text-overlay animated';
            overlay.innerText = description;
            btn.appendChild(overlay);
            clothGrid.appendChild(btn);
        });
    }

    function getPredominantCategory(selectedImages) {
        const categoryCount = selectedImages.reduce((count, image) => {
            count[image.category] = (count[image.category] || 0) + 1;
            return count;
        }, {});

        let predominantCategory = null;
        let maxCount = 0;

        for (const category in categoryCount) {
            if (categoryCount[category] > maxCount) {
                maxCount = categoryCount[category];
                predominantCategory = category;
            }
        }

        return predominantCategory;
    }

    function showClothDetail(clothPath) {
        recommendationScreen.classList.add('hidden');
        clothDetailScreen.classList.remove('hidden');

        clothDetail.style.backgroundImage = `url(${clothPath})`;

        const details = clothDetails[clothPath] || { name: 'Unknown', price: '$0.00', color: 'N/A', sizes: [], company: 'Unknown', reviews: 'No reviews.' };
        document.getElementById('clothName').innerText = details.name;
        document.getElementById('clothPrice').innerText = `Price: ${details.price}`;
        document.getElementById('clothColor').innerText = `Color: ${details.color}`;
        
        const sizeSelect = document.getElementById('clothSizes');
        sizeSelect.innerHTML = ''; // Clear existing options
        details.sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.innerText = size;
            sizeSelect.appendChild(option);
        });

        document.getElementById('clothCompany').innerText = `Company: ${details.company}`;
        document.getElementById('clothReviews').innerText = `Reviews: ${details.reviews}`;
    }

    function restartApp() {
        selectedImages = [];
        imageQueueIndex = 0;
        initializeImageQueue();
        imageSelectionScreen.classList.remove('hidden');
        recommendationScreen.classList.add('hidden');
        clothDetailScreen.classList.add('hidden');
        displayRandomImages();
    }

    function downloadCSV() {
        const csvContent = "data:text/csv;charset=utf-8," +
            "Image Path,Category\n" +
            selectedImages.map(img => `${img.path},${img.category}`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "selected_images.csv");
        document.body.appendChild(link);
        link.click();
    }

    document.getElementById('backButton').addEventListener('click', () => {
        clothDetailScreen.classList.add('hidden');
        recommendationScreen.classList.remove('hidden');
    });

    restartButton.addEventListener('click', () => {
        restartApp();
        downloadCSV();
    });

    initializeImageQueue();
    displayRandomImages();
});
