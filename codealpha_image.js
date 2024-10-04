let currentImageIndex = 1;
const totalImages = 4;

function changeImage(index) {
  currentImageIndex = index;
  document.getElementById('galleryImage').src = `images/img${index}.jpg`;
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 1) {
    currentImageIndex = totalImages;
  }
  document.getElementById('galleryImage').src = `images/img${currentImageIndex}.jpg`;
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex > totalImages) {
    currentImageIndex = 1;
  }
  document.getElementById('galleryImage').src = `images/img${currentImageIndex}.jpg`;
}
