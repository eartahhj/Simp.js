/*
* Plugin: Simp.js -> Simple Image Preview Javascript Plugin
* Description: A very simple, lightweight and easy Vanilla JS plugin for showing image previews on your file inputs
* Author: eartahhj -> https://github.com/eartahhj/
* Version: 1.0.0
* 
*/

const loadSimp = (options = {}) => {
    let inputSelector = options.inputSelector ?? '';
    let fileNamesMustBeShown = options.fileNamesMustBeShown ? true : false;
    let previewContainerSelector, namesContainerSelector;

    const inputs = document.querySelectorAll(inputSelector);

    inputs.forEach((input) => {
        input.addEventListener('change', () => {
            if (previewContainerSelector in options) {
                previewContainerSelector =  options.previewContainerSelector;
            } else {
                previewContainerSelector = '';
            }

            if (namesContainerSelector in options) {
                namesContainerSelector = options.namesContainerSelector;
            } else {
                namesContainerSelector = '';
            }

            // If the preview container has not been set in the options, try taking it from data attributes
            if (!previewContainerSelector) {
                try {
                    if (typeof input.dataset.previewContainerSelector == 'undefined' || input.dataset.previewContainerSelector == '') {
                        throw new Error(`The preview container for ${input.name} is required but has not been defined`);
                    } else {
                        previewContainerSelector = input.dataset.previewContainerSelector;
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
        
            // If the file names container has not been set in the options, try taking it from data attributes
            if (!namesContainerSelector) {
                try {
                    if (typeof input.dataset.namesContainerSelector == 'undefined' || input.dataset.namesContainerSelector == '') {
                        if (fileNamesMustBeShown) {
                            console.warn(`Simp.js: There is no file name container selector defined for ${input.name}. This is optional, but you might want to configure it, or set fileNamesMustBeShown to false.`);
                        }
                    } else {
                        namesContainerSelector = input.dataset.namesContainerSelector;
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            let previewContainer = document.querySelector(previewContainerSelector);
            let images = input.files;
            let namesContainer = '';
    
            if (images.length == 0) {
                return;
            }
    
            if (namesContainerSelector) {
                namesContainer = document.querySelector(namesContainerSelector);
            }
            
            previewContainer.innerHTML = '';
    
            const imagesList = document.createElement('ol');
            const fileNames = [];
            
            for (let image of images) {
                let li = document.createElement('li');
                let img = document.createElement('img');
                img.src = URL.createObjectURL(image);
                img.onload = () => {
                    URL.revokeObjectURL(image);
                }
                li.append(img);
                imagesList.append(li);
                
                if (namesContainer) {
                    fileNames.push(image.name);
                }
            }
    
            if (fileNames.length > 0) {
                let fileNamesString = fileNames.join(', ');
                
                if (namesContainer) {
                    namesContainer.textContent = fileNamesString;
                }
            }
            
            previewContainer.append(imagesList);
        });
    });
};