document.addEventListener('DOMContentLoaded', function() {
  var memeForm = document.querySelector('#meme-form');
  var memeList = document.querySelector('#meme-list');

  memeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var imgURL = document.querySelector('#img-url').value;
    var topCaptionText = document.querySelector('#top-caption').value;
    var bottomCaptionText = document.querySelector('#bottom-caption').value;

    if (imgURL === '') {
      alert('Please enter an image URL!');
    } else {
      var meme = document.createElement('div');
      meme.classList.add('img-container');

      var img = document.createElement('img');
      img.src = imgURL;

      function addItem(itemName, tagName, className, text) {
        var itemName = document.createElement(tagName);
        itemName.classList.add(className);
        itemName.innerText = text;
        meme.appendChild(itemName);
      }

      addItem('topCaption', 'div', 'text-top', topCaptionText);
      addItem('bottomCaption', 'div', 'text-bottom', bottomCaptionText);
      addItem('removeButton', 'div', 'delete', 'X');

      meme.appendChild(img);

      memeList.appendChild(meme);
      memeForm.reset();
    }
  });

  document.addEventListener('click', function(event) {
    if (event.target.className.toLowerCase() === 'delete') {
      event.target.parentNode.remove();
    }
  });
});
