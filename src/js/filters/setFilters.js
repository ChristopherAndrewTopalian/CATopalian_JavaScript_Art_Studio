// setFilters.js

function setFilters(whichId)
{
    let theDeg = 'deg';
    let thePx = 'px';

    //-//

    let dropShadowOpacity = ge("dropShadowOpacityInput").value;

    let dropShadowColor = 'rgba(0, 0, 0, ' + dropShadowOpacity + ')';

    let contrast = ge("contrastInput").value;

    let brightness = ge("brightnessInput").value;

    let hue = ge("hueInput").value;

    let saturation = ge("saturationInput").value;

    let grayScale = ge("grayScaleInput").value;

    let blur = ge("blurInput").value;

    let invert = ge("invertInput").value;

    let sepia = ge("sepiaInput").value;

    let dropShadowX = ge("dropShadowXSlider").value;

    let dropShadowY = ge("dropShadowYSlider").value;

    let dropShadowBlurRadius = ge("dropShadowBlurRadiusSlider").value;

    //-//

    let theFilters = "contrast(" + contrast + ") " + "brightness(" + brightness + ") " + "saturate(" + saturation + ") " + 
    "grayscale(" + grayScale + ") " + 
    "hue-rotate(" + hue + "" + theDeg + ") " + "invert(" + invert + ") " + 
    "blur(" + blur + "" + thePx + ") " + 
    "sepia(" + sepia + ") " + 
    "drop-shadow(" + dropShadowX + "" + thePx + " " + 
    dropShadowY + "" + thePx + " " + 
    dropShadowBlurRadius + "" + thePx + " " + 
    dropShadowColor + ")";

    // apply the filters to the element
    ge(whichId).style.filter = theFilters;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

