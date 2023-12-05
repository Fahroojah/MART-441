$(document).ready(function() {
    // Arrays to hold your images, texts, and shapes
    let images = ['images/fatbike.jpg', 'images/gofish.jpg', 'images/mountainbike.jpg', 'images/roadbike.jpg', 'images/tricycle.jpg', 'images/unicycle.jpg'];
    let texts = ['The only constant in life is change.','Actions speak louder than words','In the midst of challenges lie opportunities.','Learning from the past shapes a wiser future.','Happiness is a journey, not a destination.'];
    let shapes = ['<div class="shape" style="width: 100px; height: 100px;"></div>'];

    let currentImage = 0;
    let currentText = 0;
    let currentShape = 0;

    function rotateImages() {
        let $image = $('<img>', {
            src: images[currentImage],
            class: 'image',
            css: {
                top: Math.random() * $(window).height(),
                left: Math.random() * $(window).width(),
            }
        }).appendTo('#art-container');

        $image.fadeIn(Math.random() * 1000, function() {
            setTimeout(function() {
                $image.fadeOut(Math.random() * 1000, function() {
                    $image.remove();
                    currentImage = (currentImage + 1) % images.length;
                    rotateImages();
                });
            }, Math.random() * 5000);
        });
    }

    function rotateTexts() {
        let $text = $('<div>', {
            class: 'text',
            text: texts[currentText],
            css: {
                top: Math.random() * $(window).height(),
                left: Math.random() * $(window).width(),
                fontSize: (Math.random() * 20) + 10 + 'px',
            }
        }).appendTo('#art-container');

        setTimeout(function() {
            $text.remove();
            currentText = (currentText + 1) % texts.length;
            rotateTexts();
        }, Math.random() * 7000);
    }

    function moveShapes() {
        let $shape = $(shapes[currentShape]).css({
            top: Math.random() * $(window).height(),
            left: Math.random() * $(window).width(),
            background: '#' + Math.floor(Math.random()*16777215).toString(16) // random color
        }).appendTo('#art-container');

        $shape.fadeIn(Math.random() * 1000, function() {
            setTimeout(function() {
                $shape.fadeOut(Math.random() * 1000, function() {
                    $shape.remove();
                    currentShape = (currentShape + 1) % shapes.length;
                    moveShapes();
                });
            }, Math.random() * 5000);
        });
    }

    // Starting the animation functions
    rotateImages();
    rotateTexts();
    moveShapes();
});

