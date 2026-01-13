// menuOptions.js

function menuOptions(whichId)
{
    let menuId = 'menuOptionsId';

    //-//

    // if menu exists
    if (ge(menuId))
    {
        // remove menu
        ge(menuId).remove();
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.style.position = "absolute";
    mainDiv.style.right = 0 + "px";
    mainDiv.style.top = 10 + "px";
    mainDiv.style.width = 260 + 'px';
    mainDiv.style.height = 285 + 'px';
    mainDiv.style.overflowY = 'scroll';
    mainDiv.style.zIndex = 9000;
    ba(mainDiv);

    //-//

    makeElementDraggable(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = 'ourButton';
    theCloseX.style.position = 'absolute';
    theCloseX.style.right = 20 + 'px';
    theCloseX.style.top = 0 + 'px';
    theCloseX.style.zIndex = 9001;
    theCloseX.onclick = function()
    {
        clickSound();

        ge(menuId).remove();
    };
    mainDiv.append(theCloseX);

    //-//

    let thePanel = ce("div");
    thePanel.id = menuId;
    thePanel.className = 'panel';
    mainDiv.append(thePanel);

    //-//

    let idOfCharacterChosen = ce('div');
    idOfCharacterChosen.textContent = actorName;
    idOfCharacterChosen.style.fontWeight = 'bold';
    idOfCharacterChosen.style.textAlign = 'center';
    thePanel.append(idOfCharacterChosen);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let removeButton = ce('button');
    removeButton.id = 'removeButton';
    removeButton.className = 'ourButton';
    removeButton.textContent = 'Remove';
    removeButton.style.display = 'flex';
    removeButton.style.justify = 'center';
    removeButton.style.margin = 'auto';
    removeButton.onmouseover = function()
    {
        hoverSound();
    };
    removeButton.onclick = function()
    {
        clickSound();

        ge(whichId).remove();
    };
    thePanel.append(removeButton);

    //-//

    thePanel.append(ce('hr'));

    //-//

    thePanel.append(ce('hr'));

    //-//

    let layerLabel = ce('div');
    layerLabel.textContent = 'Layer';
    thePanel.append(layerLabel);

    //-//

    let zIndexInput = ce('input');
    zIndexInput.type = 'number';
    zIndexInput.id = 'zIndexInput';
    zIndexInput.className = 'textAreaMenuOptionsStyle';
    zIndexInput.style.width = 150 + 'px';
    zIndexInput.onkeyup = function()
    {
        ge(whichId).style.zIndex = zIndexInput.value;
    };
    zIndexInput.oninput = function()
    {
        inputSound();

        ge(whichId).style.zIndex = zIndexInput.value;
    };
    thePanel.append(zIndexInput);

    //-//

    thePanel.append(ce('hr'));

    //-//

    thePanel.append(ce('hr'));

    //-//

    let sizeOutputDiv = ce('div');
    sizeOutputDiv.textContent = 'Size';
    thePanel.append(sizeOutputDiv);

    //-//

    let sizeInput = ce('input');
    sizeInput.type = 'number';
    sizeInput.id = 'sizeInput';
    sizeInput.className = 'textAreaMenuOptionsStyle';
    sizeInput.onmouseover = function()
    {
        hoverSound();
    };
    sizeInput.oninput = function()
    {
        inputSound();

        // size element
        ge(whichId).style.width = sizeInput.value;

        // update sizeSlider
        ge('sizeSlider').value = sizeInput.value;
    };
    thePanel.append(sizeInput);

    //-//

    let sizeSlider = ce('input');
    sizeSlider.type = 'range';
    sizeSlider.id = 'sizeSlider';
    sizeSlider.min = 0;
    sizeSlider.max = 2000;
    sizeSlider.onmouseover = function()
    {
        hoverSound();
    };
    sizeSlider.oninput = function()
    {
        inputSound();

        // size element
        ge(whichId).style.width = ge('sizeSlider').value;

        // update sizeInput
        ge('sizeInput').value = sizeSlider.value;
    };
    sizeSlider.onmousedown = function()
    {
        ge(menuId).style.opacity = 0.5;
    };
    sizeSlider.onmouseup = function()
    {
        ge(menuId).style.opacity = 1.0;
    };
    thePanel.append(sizeSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let posXLabel = ce('div');
    posXLabel.textContent = 'PosX';
    thePanel.append(posXLabel);

    //-//

    let posXInput = ce('input');
    posXInput.type = 'number';
    posXInput.id = 'posXInput';
    posXInput.className = 'textAreaMenuOptionsStyle';
    posXInput.onmouseover = function()
    {
        hoverSound();
    };
    posXInput.oninput = function()
    {
        inputSound();

        // position element
        ge(whichId).style.left = posXInput.value;

        // update posXSlider
        ge('posXSlider').value = posXInput.value;
    };
    thePanel.append(posXInput);

    //-//

    let posXSlider = ce('input');
    posXSlider.type = 'range';
    posXSlider.id = 'posXSlider';
    posXSlider.min = -500;
    posXSlider.max = 500;
    posXSlider.onmouseover = function()
    {
        hoverSound();
    };
    posXSlider.oninput = function()
    {
        inputSound();

        // position element
        ge(whichId).style.left = posXSlider.value;

        // update posXInput
        ge('posXInput').value = posXSlider.value;
    };
    thePanel.append(posXSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let posYLabel = ce('div');
    posYLabel.textContent = 'Pos Y';
    thePanel.append(posYLabel);

    //-//

    let posYInput = ce('input');
    posYInput.type = 'number';
    posYInput.id = 'posYInput';
    posYInput.className = 'textAreaMenuOptionsStyle';
    posYInput.onmouseover = function()
    {
        hoverSound();
    };
    posYInput.oninput = function()
    {
        inputSound();

        // position element
        ge(whichId).style.top = posYInput.value;

        // update posYSlider
        ge('posYSlider').value = posYInput.value;
    };
    thePanel.append(posYInput);

    //-//

    let posYSlider = ce('input');
    posYSlider.id = 'posYSlider';
    posYSlider.type = 'range';
    posYSlider.min = -500;
    posYSlider.max = 500;
    posYSlider.onmouseover = function()
    {
        inputSound();
    };
    posYSlider.oninput = function()
    {
        inputSound();

        // position element
        ge(whichId).style.top = posYSlider.value;

        // update posYInput
        ge('posYInput').value = posYSlider.value;
    };
    thePanel.append(posYSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let rotationLabel = ce('div');
    rotationLabel.textContent = 'Rotation';
    thePanel.append(rotationLabel);

    //-//

    let rotationInput = ce('input');
    rotationInput.type = 'number';
    rotationInput.id = 'rotationInput';
    rotationInput.className = 'textAreaMenuOptionsStyle';
    rotationInput.style.width = 100 + 'px';
    rotationInput.onmouseover = function()
    {
        hoverSound();
    };
    rotationInput.oninput = function()
    {
        inputSound();

        ge(whichId).style.zIndex = zIndexInput.value;

        // rotate element
        //~ ge(whichId).style.rotate = rotationInput.value + "deg";

        ge(whichId).style.transform = "rotate(" + rotationInput.value + "deg)";

        // update rotationSlider
        ge('rotationSlider').value = rotationInput.value;
    };
    thePanel.append(rotationInput);

    //-//

    let rotationSlider = ce('input');
    rotationSlider.type = 'range';
    rotationSlider.id = 'rotationSlider';
    rotationSlider.min = 0;
    rotationSlider.max = 360;
    rotationSlider.className = 'slider';
    rotationSlider.oninput = function()
    {
        inputSound();

        //ge(whichId).style.rotate = rotationSlider.value + "deg";
        ge(whichId).style.transform = "rotate(" + rotationSlider.value + "deg)";

        // update rotationInput
        ge('rotationInput').value = rotationSlider.value;
    };
    thePanel.append(rotationSlider);

    //-//

    thePanel.append(ce('br'));

    //-//

    let rotation0Button = ce('button');
    rotation0Button.id = 'rotation0Button';
    rotation0Button.className = 'ourButton';
    rotation0Button.textContent = '0';
    rotation0Button.onmouseover = function()
    {
        hoverSound();
    };
    rotation0Button.onclick = function()
    {
        inputSound();

        // rotate element
        ge(whichId).style.rotate = 0 + "deg";

        // update rotationInput
        ge('rotationInput').value = 0;

        // update rotationSlider
        ge('rotationSlider').value = 0;
    };
    thePanel.append(rotation0Button);

    //-//

    let rotation45Button = ce('button');
    rotation45Button.id = 'rotation45Button';
    rotation45Button.className = 'ourButton';
    rotation45Button.textContent = '45';
    rotation45Button.onmouseover = function()
    {
        hoverSound();
    };
    rotation45Button.onclick = function()
    {
        inputSound();

        ge(whichId).style.rotate = 45 + "deg";

        // update rotationInput
        ge('rotationInput').value = 45;

        // update rotationSlider
        ge('rotationSlider').value = 45;
    };
    thePanel.append(rotation45Button);

    //-//

    let rotation90Button = ce('button');
    rotation90Button.id = 'rotation90Button';
    rotation90Button.className = 'ourButton';
    rotation90Button.textContent = '90';
    rotation90Button.onmouseover = function()
    {
        hoverSound();
    };
    rotation90Button.onclick = function()
    {
        inputSound();

        ge(whichId).style.rotate = 90 + "deg";

        // update rotationInput
        ge('rotationInput').value = 90;

        // update rotationSlider
        ge('rotationSlider').value = 90;
    };
    thePanel.append(rotation90Button);

    //-//

    let rotation180Button = ce('button');
    rotation180Button.id = 'rotation180Button';
    rotation180Button.className = 'ourButton';
    rotation180Button.textContent = '180';
    rotation180Button.onmouseover = function()
    {
        hoverSound();
    };
    rotation180Button.onclick = function()
    {
        inputSound();

        ge(whichId).style.rotate = 180 + "deg";

        // update rotationInput
        ge('rotationInput').value = 180;

        // update rotationSlider
        ge('rotationSlider').value = 180;
    };
    thePanel.append(rotation180Button);

    //-//

    let rotation270Button = ce('button');
    rotation270Button.id = 'rotation270Button';
    rotation270Button.className = 'ourButton';
    rotation270Button.textContent = '270';
    rotation270Button.onmouseover = function()
    {
        hoverSound();
    };
    rotation270Button.onclick = function()
    {
        inputSound();

        ge(whichId).style.rotate = 270 + "deg";

        // update rotationInput
        ge('rotationInput').value = 270;

        // update rotationSlider
        ge('rotationSlider').value = 270;
    };
    thePanel.append(rotation270Button);

    //-//

    thePanel.append(ce('br'));

    //-//

    let flipTLButton = ce('button');
    flipTLButton.textContent = 'FlipTL';
    flipTLButton.onmouseover = function()
    {
        hoverSound();
    };
    flipTLButton.onclick = function()
    {
        inputSound();

        ge(whichId).style.transform = 'scaleX(-1)';
    };
    flipTLButton.className = 'ourButton';
    thePanel.append(flipTLButton);

    //-//

    let flipTRButton = ce('button');
    flipTRButton.textContent = 'FlipTR';
    flipTRButton.onmouseover = function()
    {
        hoverSound();
    };
    flipTRButton.onclick = function()
    {
        inputSound();

        ge(whichId).style.transform = 'scaleX(1)';
    };
    flipTRButton.className = 'ourButton';
    thePanel.append(flipTRButton);

    //-//

    let flipBLButton = ce('button');
    flipBLButton.textContent = 'FlipBL';
    flipBLButton.onmouseover = function()
    {
        hoverSound();
    };
    flipBLButton.onclick = function()
    {
        inputSound();

        ge(whichId).style.transform = 'scaleX(-1) scaleY(-1)';
    };
    flipBLButton.className = 'ourButton';
    thePanel.append(flipBLButton);

    //-//

    let flipBRButton = ce('button');
    flipBRButton.textContent = 'FlipBR';
    flipBRButton.onmouseover = function()
    {
        hoverSound();
    };
    flipBRButton.onclick = function()
    {
        inputSound();

        ge(whichId).style.transform = 'scaleX(1) scaleY(-1)';
    };
    flipBRButton.className = 'ourButton';
    thePanel.append(flipBRButton);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let opacityLabel = ce('div');
    opacityLabel.textContent = 'Opacity';
    thePanel.append(opacityLabel);

    //-//

    let opacityInput = ce('input');
    opacityInput.type = 'number';
    opacityInput.id = 'opacityInput';
    opacityInput.className = 'textAreaMenuOptionsStyle';
    opacityInput.min = 0;
    opacityInput.max = 1;
    opacityInput.step = 0.1;
    opacityInput.oninput = function()
    {
        inputSound();

        // opacity of element
        ge(whichId).style.opacity = opacityInput.value;

        // update opacitySlider
        ge('opacitySlider').value = opacityInput.value;
    };
    thePanel.append(opacityInput);

    //-//

    let opacitySlider = ce('input');
    opacitySlider.id = 'opacitySlider';
    opacitySlider.type = 'range';
    opacitySlider.min = 0.0;
    opacitySlider.max = 1.0;
    opacitySlider.step = 0.1;
    opacitySlider.oninput = function()
    {
        inputSound();

        // opacity of element
        ge(whichId).style.opacity = opacitySlider.value;

        // update opacityInput
        ge('opacityInput').value = opacitySlider.value;
    };
    thePanel.append(opacitySlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let contrastLabel = ce('div');
    contrastLabel.textContent = 'Contrast';
    thePanel.append(contrastLabel);

    //-//

    let contrastInput = ce('input');
    contrastInput.id = 'contrastInput';
    contrastInput.type = 'number';
    contrastInput.className = 'textAreaMenuOptionsStyle';
    contrastInput.min = 0;
    contrastInput.max = 100;
    contrastInput.step = 0.1;
    contrastInput.value = 1;
    contrastInput.oninput = function()
    {
        inputSound();

        // update contrastSlider
        ge('contrastSlider').value = contrastInput.value;

        setFilters(whichId);
    };
    thePanel.append(contrastInput);

    //-//

    let contrastSlider = ce('input');
    contrastSlider.id = 'contrastSlider';
    contrastSlider.type = 'range';
    contrastSlider.min = 0;
    contrastSlider.max = 100;
    contrastSlider.step = 0.1;
    contrastSlider.value = 1.0;
    contrastSlider.oninput = function()
    {
        inputSound();

        // update contrastInput
        ge('contrastInput').value = contrastSlider.value;

        setFilters(whichId);
    };
    thePanel.append(contrastSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let brightnessLabel = ce('div');
    brightnessLabel.textContent = 'Brightness';
    thePanel.append(brightnessLabel);

    //-//

    let brightnessInput = ce('input');
    brightnessInput.id = 'brightnessInput';
    brightnessInput.type = 'number';
    brightnessInput.className = 'textAreaMenuOptionsStyle';
    brightnessInput.min = 0;
    brightnessInput.max = 100;
    brightnessInput.step = 0.1;
    brightnessInput.value = 1;
    brightnessInput.oninput = function()
    {
        inputSound();

        // update brightnessSlider
        ge('brightnessSlider').value = brightnessInput.value;

        setFilters(whichId);
    };
    thePanel.append(brightnessInput);

    //-//

    let brightnessSlider = ce('input');
    brightnessSlider.id = 'brightnessSlider';
    brightnessSlider.type = 'range';
    brightnessSlider.min = 0;
    brightnessSlider.max = 100;
    brightnessSlider.step = 0.1;
    brightnessSlider.value = 1;
    brightnessSlider.oninput = function()
    {
        inputSound();

        // update the brightnessInput
        ge('brightnessInput').value = brightnessSlider.value;

        setFilters(whichId);
    };
    thePanel.append(brightnessSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let hueLabel = ce('div');
    hueLabel.textContent = 'Hue';
    thePanel.append(hueLabel);

    //-//

    let hueInput = ce('input');
    hueInput.id = 'hueInput';
    hueInput.type = 'number';
    hueInput.className = 'textAreaMenuOptionsStyle';
    hueInput.min = 0;
    hueInput.max = 100;
    hueInput.step = 0.1;
    hueInput.value = 0;
    hueInput.oninput = function()
    {
        inputSound();

        // update the hueSlider
        ge('hueSlider').value = hueInput.value;

        setFilters(whichId);
    };
    thePanel.append(hueInput);

    //-//

    let hueSlider = ce('input');
    hueSlider.id = 'hueSlider';
    hueSlider.type = 'range';
    hueSlider.min = 0;
    hueSlider.max = 100;
    hueSlider.step = 0.1;
    hueSlider.value = 0;
    hueSlider.oninput = function()
    {
        inputSound();

        // update the hueInput
        ge('hueInput').value = hueSlider.value;

        setFilters(whichId);
    };
    thePanel.append(hueSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let saturationLabel = ce('div');
    saturationLabel.textContent = 'Saturation';
    thePanel.append(saturationLabel);

    //-//

    let saturationInput = ce('input');
    saturationInput.type = 'number';
    saturationInput.id = 'saturationInput';
    saturationInput.className = 'textAreaMenuOptionsStyle';
    saturationInput.min = 0;
    saturationInput.max = 100;
    saturationInput.step = 0.1;
    saturationInput.value = 1;
    saturationInput.oninput = function()
    {
        inputSound();

        // update the saturationSlider
        ge('saturationSlider').value = saturationInput.value;

        setFilters(whichId);
    };
    thePanel.append(saturationInput);

    //-//

    let saturationSlider = ce('input');
    saturationSlider.id = 'saturationSlider';
    saturationSlider.type = 'range';
    saturationSlider.min = 0;
    saturationSlider.max = 100;
    saturationSlider.step = 0.1;
    saturationSlider.value = 1;
    saturationSlider.oninput = function()
    {
        inputSound();

        // update the saturationInput
        ge('saturationInput').value = saturationSlider.value;

        setFilters(whichId);
    };
    thePanel.append(saturationSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let grayScaleLabel = ce('div');
    grayScaleLabel.textContent = 'Gray Scale';
    thePanel.append(grayScaleLabel);

    //-//

    let grayScaleInput = ce('input');
    grayScaleInput.id = 'grayScaleInput';
    grayScaleInput.type = 'number';
    grayScaleInput.className = 'textAreaMenuOptionsStyle';
    grayScaleInput.min = 0;
    grayScaleInput.max = 1;
    grayScaleInput.step = 0.1;
    grayScaleInput.value = 0;
    grayScaleInput.oninput = function()
    {
        inputSound();

        // update the grayScaleSlider
        ge('grayScaleSlider').value = grayScaleInput.value;

        setFilters(whichId);
    };
    thePanel.append(grayScaleInput);

    //-//

    let grayScaleSlider = ce('input');
    grayScaleSlider.id = 'grayScaleSlider';
    grayScaleSlider.type = 'range';
    grayScaleSlider.min = 0;
    grayScaleSlider.max = 1;
    grayScaleSlider.step = 0.1;
    grayScaleSlider.value = 0;
    grayScaleSlider.oninput = function()
    {
        inputSound();

        // update the grayScaleInput
        ge('grayScaleInput').value = grayScaleSlider.value;

        setFilters(whichId);
    };
    thePanel.append(grayScaleSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let blurLabel = ce('div');
    blurLabel.textContent = 'Blur';
    thePanel.append(blurLabel);

    //-//

    let blurInput = ce('input');
    blurInput.id = 'blurInput';
    blurInput.type = 'number';
    blurInput.className = 'textAreaMenuOptionsStyle';
    blurInput.min = 0;
    blurInput.max = 100;
    blurInput.step = 0.1;
    blurInput.value = 0;
    blurInput.oninput = function()
    {
        inputSound();

        // update blurSlider
        ge('blurSlider').value = blurInput.value;

        setFilters(whichId);
    };
    thePanel.append(blurInput);

    //-//

    let blurSlider = ce('input');
    blurSlider.id = 'blurSlider';
    blurSlider.type = 'range';
    blurSlider.min = 0;
    blurSlider.max = 100;
    blurSlider.step = 0.1;
    blurSlider.value = 0;
    blurSlider.oninput = function()
    {
        inputSound();

        // update blurInput
        ge('blurInput').value = blurSlider.value;

        setFilters(whichId);
    };
    thePanel.append(blurSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let invertLabel = ce('div');
    invertLabel.textContent = 'Invert';
    thePanel.append(invertLabel);

    //-//

    let invertInput = ce('input');
    invertInput.id = 'invertInput';
    invertInput.type = 'number';
    invertInput.className = 'textAreaMenuOptionsStyle';
    invertInput.min = 0;
    invertInput.max = 1;
    invertInput.step = 0.1;
    invertInput.value = 0;
    invertInput.oninput = function()
    {
        inputSound();

        // update invertSlider
        ge('invertSlider').value = invertInput.value;

        setFilters(whichId);
    };
    thePanel.append(invertInput);

    //-//

    let invertSlider = ce('input');
    invertSlider.id = 'invertSlider';
    invertSlider.type = 'range';
    invertSlider.min = 0;
    invertSlider.max = 1;
    invertSlider.step = 0.1;
    invertSlider.value = 0;
    invertSlider.oninput = function()
    {
        inputSound();

        // update invertInput
        ge('invertInput').value = invertSlider.value;

        setFilters(whichId);
    };
    thePanel.append(invertSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let sepiaLabel = ce('div');
    sepiaLabel.textContent = 'Sepia';
    thePanel.append(sepiaLabel);

    //-//

    let sepiaInput = ce('input');
    sepiaInput.id = 'sepiaInput';
    sepiaInput.type = 'number';
    sepiaInput.id = 'sepiaInput';
    sepiaInput.className = 'textAreaMenuOptionsStyle';
    sepiaInput.min = 0;
    sepiaInput.max = 1;
    sepiaInput.step = 0.1;
    sepiaInput.value = 0;
    sepiaInput.oninput = function()
    {
        inputSound();

        // update the sepiaSlider
        ge('sepiaSlider').value = sepiaInput.value;

        setFilters(whichId);
    };
    thePanel.append(sepiaInput);

    //-//

    let sepiaSlider = ce('input');
    sepiaSlider.id = 'sepiaSlider';
    sepiaSlider.type = 'range';
    sepiaSlider.min = 0;
    sepiaSlider.max = 1;
    sepiaSlider.step = 0.1;
    sepiaSlider.value = 0;
    sepiaSlider.oninput = function()
    {
        inputSound();

        // update the sepiaInput
        ge('sepiaInput').value = sepiaSlider.value;

        setFilters(whichId);
    };
    thePanel.append(sepiaSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let dropShadowXLabel = ce('div');
    dropShadowXLabel.textContent = 'Drop Shadow X';
    thePanel.append(dropShadowXLabel);

    //-//

    let dropShadowXInput = ce('input');
    dropShadowXInput.id = 'dropShadowXInput';
    dropShadowXInput.type = 'number';
    dropShadowXInput.className = 'textAreaMenuOptionsStyle';
    dropShadowXInput.min = 0;
    dropShadowXInput.max = 100;
    dropShadowXInput.step = 0.1;
    dropShadowXInput.value = 0;
    dropShadowXInput.oninput = function()
    {
        inputSound();

        // update the dropShadowXSlider
        ge('dropShadowXSlider').value = dropShadowXInput.value;

        setFilters(whichId);
    };
    thePanel.append(dropShadowXInput);

    //-//

    let dropShadowXSlider = ce('input');
    dropShadowXSlider.id = 'dropShadowXSlider';
    dropShadowXSlider.type = 'range';
    dropShadowXSlider.min = 0;
    dropShadowXSlider.max = 100;
    dropShadowXSlider.step = 0.1;
    dropShadowXSlider.value = 0;
    dropShadowXSlider.oninput = function()
    {
        inputSound();

        // update the dropShadowXInput
        ge('dropShadowXInput').value = dropShadowXSlider.value;

        setFilters(whichId);
    };
    thePanel.append(dropShadowXSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let dropShadowYLabel = ce('div');
    dropShadowYLabel.textContent = 'Drop Shadow Y';
    thePanel.append(dropShadowYLabel);

    //-//

    let dropShadowYInput = ce('input');
    dropShadowYInput.id = 'dropShadowYInput';
    dropShadowYInput.type = 'number';
    dropShadowYInput.className = 'textAreaMenuOptionsStyle';
    dropShadowYInput.min = 0;
    dropShadowYInput.max = 100;
    dropShadowYInput.step = 0.1;
    dropShadowYInput.value = 0;
    dropShadowYInput.oninput = function()
    {
        inputSound();

        // update the dropShadowYSlider
        ge('dropShadowYSlider').value = dropShadowYInput.value;

        setFilters(whichId);
    };
    thePanel.append(dropShadowYInput);

    //-//

    let dropShadowYSlider = ce('input');
    dropShadowYSlider.id = 'dropShadowYSlider';
    dropShadowYSlider.type = 'range';
    dropShadowYSlider.min = 0;
    dropShadowYSlider.max = 100;
    dropShadowYSlider.step = 0.1;
    dropShadowYSlider.value = 0;
    dropShadowYSlider.oninput = function()
    {
        inputSound();

        // update the dropShadowYInput
        ge('dropShadowYInput').value = dropShadowYSlider.value;

        setFilters(whichId);
    };
    thePanel.append(dropShadowYSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let dropShadowBlurRadiusLabel = ce('div');
    dropShadowBlurRadiusLabel.textContent = 'Blur Radius';
    thePanel.append(dropShadowBlurRadiusLabel);

    //-//

    let dropShadowBlurRadiusInput = ce('input');
    dropShadowBlurRadiusInput.id = 'dropShadowBlurRadiusInput';
    dropShadowBlurRadiusInput.type = 'number';
    dropShadowBlurRadiusInput.className = 'textAreaMenuOptionsStyle';
    dropShadowBlurRadiusInput.min = 0;
    dropShadowBlurRadiusInput.max = 100;
    dropShadowBlurRadiusInput.step = 0.1;
    dropShadowBlurRadiusInput.value = 0;
    dropShadowBlurRadiusInput.oninput = function()
    {
        inputSound();
    
        // update the dropShadowBlurRadiusSlider
        ge('dropShadowBlurRadiusSlider').value = dropShadowBlurRadiusInput.value;

        setFilters(whichId);
    };
    thePanel.append(dropShadowBlurRadiusInput);

    //-//

    let dropShadowBlurRadiusSlider = ce('input');
    dropShadowBlurRadiusSlider.id = 'dropShadowBlurRadiusSlider';
    dropShadowBlurRadiusSlider.type = 'range';
    dropShadowBlurRadiusSlider.min = 0;
    dropShadowBlurRadiusSlider.max = 100;
    dropShadowBlurRadiusSlider.step = 0.1;
    dropShadowBlurRadiusSlider.value = 0;
    dropShadowBlurRadiusSlider.oninput = function()
    {
        inputSound();

        ge('dropShadowBlurRadiusInput').value = dropShadowBlurRadiusSlider.value;

        setFilters(whichId);
    };
    thePanel.append(dropShadowBlurRadiusSlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let dropShadowOpacityLabel = ce('div');
    dropShadowOpacityLabel.textContent = 'Drop Shadow Opacity';
    thePanel.append(dropShadowOpacityLabel);

    //-//

    let dropShadowOpacityInput = ce('input');
    dropShadowOpacityInput.id = 'dropShadowOpacityInput';
    dropShadowOpacityInput.type = 'number';
    dropShadowOpacityInput.className = 'textAreaMenuOptionsStyle';
    dropShadowOpacityInput.min = 0;
    dropShadowOpacityInput.max = 1;
    dropShadowOpacityInput.step = 0.01;
    dropShadowOpacityInput.value = 0.5; // default opacity value
    dropShadowOpacityInput.oninput = function()
    {
        inputSound();

        ge('dropShadowOpacitySlider').value = dropShadowOpacityInput.value;

        setFilters(whichId);
    };
    thePanel.append(dropShadowOpacityInput);

    //-//

    let dropShadowOpacitySlider = ce('input');
    dropShadowOpacitySlider.id = 'dropShadowOpacitySlider';
    dropShadowOpacitySlider.type = 'range';
    dropShadowOpacitySlider.min = 0;
    dropShadowOpacitySlider.max = 1;
    dropShadowOpacitySlider.step = 0.01;
    dropShadowOpacitySlider.value = 0.5; // default opacity value
    dropShadowOpacitySlider.oninput = function()
    {
        inputSound();

        ge('dropShadowOpacityInput').value = dropShadowOpacitySlider.value;

        setFilters(whichId);
    };
    thePanel.append(dropShadowOpacitySlider);

    //-//

    thePanel.append(ce('hr'));

    //-//

    let titleOfApp = ce('a');
    titleOfApp.textContent = 'CATopalian JavaScript Art Studio';
    titleOfApp.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Art_Studio';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '13px';
    titleOfApp.style.color = 'rgb(120, 120, 120)';
    thePanel.append(titleOfApp);

    //-//

    let credits = ce('div');
    credits.textContent = 'All Rights Reserved (c) Copyright 2000-2026';
    credits.style.fontSize = '13px';
    credits.style.color = 'rgb(120, 120, 120)';
    thePanel.append(credits);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

