document.write("JS says hello");

function pickItem1(image) {
  if (image.src.includes('image_part_001.jpg')) {
      image.src = 'resources/image_part_001_pressed.jpg';
  } else if (image.src.includes('image_part_001_pressed.jpg')) {
      image.src = 'resources/image_part_001.jpg';
    }

    checkAllPressed();
}

function pickItem2(image) {
  if (image.src.includes('image_part_002.jpg')) {
      image.src = 'resources/image_part_002_pressed.jpg';
  } else if (image.src.includes('image_part_002_pressed.jpg')) {
      image.src = 'resources/image_part_002.jpg';
  }

  checkAllPressed();
}

function pickItem3(image) {
  if (image.src.includes('image_part_003.jpg')) {
      image.src = 'resources/image_part_003_pressed.jpg';
  } else if (image.src.includes('image_part_003_pressed.jpg')) {
      image.src = 'resources/image_part_003.jpg';
    }

    checkAllPressed();
}

function checkAllPressed() {
  let img1 = document.getElementById('img1').src.includes('image_part_001_pressed.jpg');
  let img2 = document.getElementById('img2').src.includes('image_part_002_pressed.jpg');
  let img3 = document.getElementById('img3').src.includes('image_part_003_pressed.jpg');
  if(img1&&img2&&img3){
    if (img1 && img2 && img3) {
      document.getElementById('text1').innerText = 'Вы собрали автомобиль!';
      
    } else {
      document.getElementById('text1').innerText = 'Соберите автомобиль';
    }
  } else{
    document.getElementById('text1').innerText = 'Соберите автомобиль';
  }
}
