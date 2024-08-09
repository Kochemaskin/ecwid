Ecwid.OnAPILoaded.add(function() {
  console.log("Ecwid storefront JS API has loaded");
});



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
/*function before(){
    document.getElementById('myImage')
    .src="img/photo1.jpg";
    document.getElementById('message')
    .innerHTML="Hii! GeeksforGeeks people";
}
     
function afterr(){
    document.getElementById('myImage')
    .src="img/photo2.jpg";
    document.getElementById('message')
    .innerHTML="Bye! GeeksforGeeks people";
}
function pickItem(imgId) {
  const image = document.getElementById(imgId);
  const baseName = image.src.match(/image_part_\d{3}/)[0];

  if (image.src.includes(`${baseName}_pressed.jpg`)) {
    image.src = `resources/${baseName}.jpg`;
  } else {
    image.src = `resources/${baseName}_pressed.jpg`;
  }
}
/*

function pickItem() {
  let image = document.getElementById('img1');
  if (image.src.includes('resources/image_part_001_pressed.jpg')) {
      image.src = 'resources/image_part_001.jpg';
  } else {
      image.src = 'resources/image_part_001_pressed.jpg';
  }
}
*/


/*
var product = {
    id: 10,
    quantity: 3,
    options: {
      "Size": "L"
    },
    recurringChargeSettings: { 
      recurringInterval: "month",
      recurringIntervalCount: 1,
      },
    callback: function(success, product, cart) {
      // ...  
    }
  }
  
  Ecwid.Cart.addProduct(product);

  */