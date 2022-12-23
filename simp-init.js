window.onload = () => {
    config = {
        inputSelector: '.simp',
        fileNamesMustBeShown: true,
        // If you are using data attributes, you can remove these:
        // previewContainerSelector: '#images-previews',
        // namesContainerSelector: '#file-names'
    };
    
    loadSimp(config);
};