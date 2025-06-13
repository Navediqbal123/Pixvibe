document.getElementById('upload').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('preview').src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});
document.getElementById('regenerate').addEventListener('click', function() {
    alert('Regenerating... (feature coming soon)');
});