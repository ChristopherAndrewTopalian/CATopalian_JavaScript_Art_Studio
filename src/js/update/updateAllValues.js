// updateAllValues.js

let actorSettings = {};

function getObjectInfo()
{
    // get actors width and assign it to object
    actorSettings.width = ge(actor).getBoundingClientRect().width.toFixed(3);

    //-//

    // get actors z-index and assign it to object
    actorSettings.layer = window.getComputedStyle(ge(actor)).getPropertyValue('z-index');

    //-//

    // get rotation
    actorSettings.rotation = getRotation(ge(actor));

    // get actors xPos and assign it to object
    actorSettings.xPos = ge(actor).getBoundingClientRect().left;

    //-//

    // get actors yPos and assign it to object
    actorSettings.yPos = ge(actor).getBoundingClientRect().top;

    //-//

    // get actors opacity and assign it to object
    actorSettings.opacity = window.getComputedStyle(ge(actor)).getPropertyValue('opacity');

    // get actors src and assign it to the object
    actorSettings.src = ge(actor).src;
}

//----//

function getRotation(el)
{
    let style = window.getComputedStyle(el);
    let transform = style.getPropertyValue("transform");

    if (transform === "none") return 0;

    // transform is like: matrix(a, b, c, d, e, f)
    let values = transform.match(/matrix\(([^)]+)\)/)[1].split(", ");
    let a = parseFloat(values[0]);
    let b = parseFloat(values[1]);

    let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    return angle;
}

function updateAllValues()
{
    ge('opacityInput').value = actorSettings.opacity;

    ge('opacitySlider').value = actorSettings.opacity;

    //-//

    ge('rotationInput').value = actorSettings.rotation;

    ge('rotationSlider').value = actorSettings.rotation;

    //-//

    ge('posXInput').value = actorSettings.xPos.toFixed(3);

    ge('posXSlider').value = actorSettings.xPos.toFixed(3);

    //-//

    ge('posYInput').value = actorSettings.yPos.toFixed(3);

    ge('posYSlider').value = actorSettings.yPos.toFixed(3);
    
    if (ge('sizeInput'))
    {
        // update value of sizeInput
        ge('sizeInput').value = actorSettings.width
    }

    if (ge('sizeSlider'))
    {
        // update value of sizeSlider
        ge('sizeSlider').value = actorSettings.width
    }

    //-//

    if (ge('zIndexInput'))
    {
        // layer
        ge("zIndexInput").value = actorSettings.layer
    } 

    if (ge('zIndexSlider'))
    {
        // layer
        ge("zIndexSlider").value = actorSettings.layer
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

