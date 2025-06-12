function processImage() {
    const input = document.getElementById('fileInput');
    const link = document.getElementById('downloadLink');
    const preview = document.getElementById('preview');

    if (input.files.length === 0) {
        alert("Please select a file first.");
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.style.maxWidth = '100%';
        preview.innerHTML = "";
        preview.appendChild(img);

        link.href = event.target.result;
        link.style.display = 'inline-block';
    }
    reader.readAsDataURL(file);
}