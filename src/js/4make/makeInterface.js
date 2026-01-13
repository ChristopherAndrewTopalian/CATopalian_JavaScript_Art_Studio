// makeInterface.js

function makeInterface()
{
    let theTitle = ce('a');
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Art_Studio';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian JavaScript Art Studio';
    theTitle.style.position = 'absolute';
    theTitle.style.right = 12 + 'px';
    theTitle.style.bottom = 6 + 'px';
    theTitle.style.fontFamily = 'Arial';
    theTitle.style.fontSize = '15px';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.textAlign = 'right';
    theTitle.style.lineHeight = 15 + 'px';
    theTitle.style.textDecoration = 'none';
    theTitle.style.color = 'rgb(0, 200, 200)';
    theTitle.style.textShadow = '0px 1px 1px rgb(0, 0, 0)';
    theTitle.style.zIndex = 10000;
    ba(theTitle);

    // we make a mainDiv container
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = 0 + 'px';
    mainDiv.style.top = 0 + 'px';
    mainDiv.style.width = '100%';
    mainDiv.style.height = '100%';
    ba(mainDiv);

    //-//

    // we make a subDiv container
    let subDiv = ce('div');
    subDiv.id = 'subDiv';
    subDiv.style.display = 'flex';
    subDiv.style.flexDirection = 'row';
    mainDiv.append(subDiv);

    //-//

    // we make a menuLeft
    let menuLeft = ce('div');
    menuLeft.id = 'menuLeft';
    menuLeft.style.width = '200px';
    menuLeft.style.height = '96vh';
    menuLeft.style.border = 'solid 1px rgb(255, 255, 255)';
    menuLeft.style.padding = '4px';
    menuLeft.style.overflowY = 'scroll';
    menuLeft.style.display = 'flex';
    menuLeft.style.flexDirection = 'column';
    menuLeft.style.zIndex = 100;
    menuLeft.style.resize = 'both';
    subDiv.append(menuLeft);

    //-//

    // we make an input button to choose multiple files  
    let inputLeftButton = ce('button');
    inputLeftButton.textContent = 'Load';
    inputLeftButton.style.zIndex = 100;

    inputLeftButton.onclick = function()
    {
        clickSound();

        // create input element dynamically
        let theInput = ce('input');
        theInput.id = 'imageInputLeft';
        theInput.type = 'file';
        theInput.accept = 'image/*';
        theInput.multiple = true;
        theInput.style.display = 'none'; // hide it from view

        theInput.onchange = function()
        {
            clickSound();

            let files = theInput.files;

            if (files.length > 0)
            {
                for (let i = 0; i < files.length; i++)
                {
                    let imgElement = ce('img');
                    imgElement.id = files[i].name;
                    imgElement.src = URL.createObjectURL(files[i]);
                    imgElement.style.width = '200px';

                    // when clicked
                    imgElement.onclick = function()
                    { 
                        // let randomSound = sounds[Math.floor(Math.random() * sounds.length)]; 

                        ge('sfx_blip_001').play();

                        let theImage = ce('img');

                        theImage.id = URL.createObjectURL(files[i]);

                        theImage.src = URL.createObjectURL(files[i]);
                        theImage.style.position = 'absolute';
                        theImage.style.left = 100 + 'px';
                        theImage.style.top = 50 + 'px';
                        theImage.style.width = 150 + 'px';
                        theImage.style.zIndex = 1;
                        theImage.oncontextmenu = function()
                        {
                            ge('sfx_blip_001').play();

                            actor = theImage.id;

                            actorName = files[i].name;

                            menuOptions(actor);

                            getObjectInfo();

                            updateAllValues();
                        };
                        ge('output').append(theImage);

                        makeElementDraggable(theImage);

                        ge(imgElement.id).style.width = '200px';

                        // ge('infoDiv').textContent = files[i].name;

                        cl(files[i].name);
                    };

                    menuLeft.append(imgElement);
                }
            }
            else
            {
                alert('Select a folder of images.');
            }

            // cleanup for efficiency
            theInput.remove();
        };

        // add input to DOM temporarily so click works
        ba(theInput);

        // trigger file selection dialog
        theInput.click();
    };
    menuLeft.append(inputLeftButton);

    //-//

    let outputDiv = ce('div');
    outputDiv.id = 'output';
    outputDiv.style.border = 'solid 1px rgb(255, 255, 255)';
    outputDiv.style.width = '90vw';
    outputDiv.style.height = '98vh';
    outputDiv.style.color = 'rgb(255, 255, 255)';
    outputDiv.style.overflowY = 'scroll';
    // relative keeps img's inside the div
    outputDiv.style.position = 'relative';
    subDiv.append(outputDiv);

    //-//

    let menuRight = ce('div');
    menuRight.id = 'menuRight';
    menuRight.style.width = '200px';
    menuRight.style.height = '96vh';
    menuRight.style.border = 'solid 1px rgb(255, 255, 255)';
    menuRight.style.padding = '4px';
    menuRight.style.overflowY = 'scroll';
    menuRight.style.display = 'flex';
    menuRight.style.flexDirection = 'column';
    menuRight.style.zIndex = 100;
    menuRight.style.resize = 'both';
    subDiv.append(menuRight);

    //-//

    let inputRightButton = ce('button');
    inputRightButton.textContent = 'Load';
    inputRightButton.style.zIndex = 100;

    inputRightButton.onclick = function()
    {
        clickSound();

        // create input element dynamically
        let theInput = ce('input');
        theInput.id = 'imageInputRight';
        theInput.type = 'file';
        theInput.accept = 'image/*';
        theInput.multiple = true;
        theInput.style.display = 'none'; // hide it from view

        theInput.onchange = function()
        {
            clickSound();

            let files = theInput.files;

            if (files.length > 0)
            {
                for (let i = 0; i < files.length; i++)
                {
                    let imgElement = ce('img');
                    imgElement.id = files[i].name;
                    imgElement.src = URL.createObjectURL(files[i]);
                    imgElement.style.width = '200px';

                    imgElement.onclick = function()
                    {
                        // let randomSound = sounds[Math.floor(Math.random() * sounds.length)]; 

                        ge('sfx_blip_001').play();

                        let theImage = ce('img');
                        theImage.id = URL.createObjectURL(files[i]);
                        theImage.src = URL.createObjectURL(files[i]);
                        theImage.style.position = 'absolute';
                        theImage.style.left = 100 + 'px';
                        theImage.style.top = 50 + 'px';
                        theImage.style.width = 150 + 'px';
                        theImage.style.zIndex = 1;
                        theImage.oncontextmenu = function()
                        {
                            ge('sfx_blip_001').play();

                            actor = theImage.id;

                            actorName = files[i].name;

                            menuOptions(actor);

                            getObjectInfo();

                            updateAllValues();
                        };

                        ge('output').append(theImage);

                        makeElementDraggable(theImage);
                        
                        ge(imgElement.id).style.width = '200px';

                        // ge('infoDiv').textContent = files[i].name;
                    };

                    menuRight.append(imgElement);
                }
            }
            else
            {
                alert('Select a folder of images.');
            }

            // cleanup for efficiency
            theInput.remove();
        };

        // add input to DOM temporarily so click works
        ba(theInput);

        // trigger file selection dialog
        theInput.click();
    };
    menuRight.append(inputRightButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

