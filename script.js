function showImagePreview(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var outputId = event.target.getAttribute('data-output');
    var output = document.getElementById(outputId);
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
