function processImage() {
  const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("preview");
  const downloadLink = document.getElementById("downloadLink");

  if (!fileInput.files.length) {
    alert("Please upload an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.src = e.target.result;
    preview.innerHTML = "";
    preview.appendChild(img);
    downloadLink.href = e.target.result;
    downloadLink.style.display = "inline-block";
  };
  reader.readAsDataURL(fileInput.files[0]);
}

function resetTool() {
  document.getElementById("fileInput").value = "";
  document.getElementById("preview").innerHTML = "";
  document.getElementById("downloadLink").style.display = "none";
}
