import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

let cropTool;

const fileInput = document.getElementById('uploadInput');
const imageElement = document.getElementById('previewImage');
const cropBtn = document.getElementById('cropImageBtn');
const saveBtn = document.getElementById('saveImageBtn');
const outputCanvas = document.getElementById('resultCanvas');

fileInput.addEventListener('change', handleFileUpload);
cropBtn.addEventListener('click', generateCroppedImage);
saveBtn.addEventListener('click', downloadCroppedImage);

function handleFileUpload(event) {
  const selectedFile = event.target.files[0];

  if (selectedFile && selectedFile.size <= 300 * 1024) {
    const reader = new FileReader();
    reader.onload = function() {
      imageElement.src = reader.result;
    };
    reader.readAsDataURL(selectedFile);

    imageElement.onload = () => {
      if (cropTool) {
        cropTool.destroy();
      }
      cropTool = new Cropper(imageElement, {
        viewMode: 2,
        aspectRatio: NaN,
      });
    };
  } else {
    alert('Пожалуйста, выберите изображение размером до 300 КБ.');
  }
}

function generateCroppedImage() {
  if (!cropTool) return;

  const croppedCanvas = cropTool.getCroppedCanvas();

  outputCanvas.width = croppedCanvas.width;
  outputCanvas.height = croppedCanvas.height;

  const ctx = outputCanvas.getContext('2d');
  ctx.drawImage(croppedCanvas, 0, 0);
}

function downloadCroppedImage() {
  const link = document.createElement('a');
  link.href = outputCanvas.toDataURL('image/png');
  link.download = 'edited-photo.png';
  link.click();
}
