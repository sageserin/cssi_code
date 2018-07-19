let likeButton = document.querySelector('button');

likeButton.style.fontSize = '250px';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function setRandomColor() {
//   $("#colorpad").css("background-color", getRandomColor());
// }

likeButton.addEventListener('mouseover', e => {
    likeButton.style.backgroundColor = getRandomColor();
})

likeButton.addEventListener('mouseout', e => {
    likeButton.style.backgroundColor = getRandomColor();
})

const names = ['Alice', 'Bob', 'Charlie', 'Deborah'];
for(i=0; i<names.length; i++){
  console.log(names[i]);
}
