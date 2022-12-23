$(function() {
    config = {
        inputSelector: '.simp',
        fileNamesMustBeShown: true,
        // Not needed for this demo, but you can use them if you have only one place to show all preview images and file names
        // previewContainerSelector: '#images-previews',
        // namesContainerSelector: '#file-names',
    };

    loadSimp(config);
});