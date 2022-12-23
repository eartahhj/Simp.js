# Simp.js - Simple Image Preview Javascript Plugin
Do you need to easily **show previews for the images** you are selecting with your file inputs?
Then this is the right plugin for you.

I have tried other plugins before creating my own, like *Filepond, dropzone, file-upload-with-preview*, but all of them where not doing what I wanted, or at least not easily enough. I also needed to be able to **actually upload the images with PHP**, not just show them, and keep the "name" attribute for my inputs. This was not the case for most of the plugins I tried.
In a few words, since I was not able to find an easy solution, I created one.

## Why should you use Simp.js?
Because it is very **easy, lightweight, free and open source**. In case you want to customize it, you will just need some Javascript knowledge, the code is very readable and consists of just a few lines in total.

## Less than 100 lines of code!
And it is not even minified!

## Demo
See the demo here: [Simpjs demo](https://differentdev.it/demo/simpjs/index.html)

## Installation
Clone the repo or download the raw files you need. Actually, you might want to download **only the main simp.js file**, then use your own stylesheet and init javascript.

For a basic usage, just include these 3 files in the head:
```
<head>
<link href="/js/simpjs/simp.css" rel="stylesheet">
<script src="/js/simpjs/simp.js"></script>
<script src="/js/simpjs/simp-init.js"></script>
</head>
```

The simp-init.js just loads the plugin with some options on "window load". You might even just load it like this:

```
<head>
<script src="/js/simpjs/simp.js"></script>
<script>
window.onload = () => {
    config = {
        inputSelector: '.simp',
        fileNamesMustBeShown: true,
        // Not needed for this demo, but you can use them if you have only one place to show all preview images and file names
        // previewContainerSelector: '#images-previews',
        // namesContainerSelector: '#file-names'
    };
    
    loadSimp(config);
};
</script>
</head>
```

### jQuery
You can load it with jQuery if you want, like this:
```
$(function() {
    config = {
        inputSelector: '.simp',
        previewContainerSelector: '#images-previews',
        namesContainerSelector: '#file-names',
        fileNamesMustBeShown: true,
    };

    loadSimp(config);
});
```

Or just include simp-init.jquery.js instead of the normal simp-init.js:

```
<head>
<link href="/js/simpjs/simp.css" rel="stylesheet">
<script src="/js/jquery/jquery.min.js"></script>
<script src="/js/simpjs/simp.js"></script>
<script src="/js/simpjs/simp-init.jquery.js"></script>
</head>
```

Of course, use the jQuery code or the jQuery init only after you have loaded jQuery itself.

## Customization
Customize it as you wish, this is a very basic plugin for simple use cases.
It uses modern Javascript but you might want to change the way it works, minify it, change variable names... all fine, my goal was just to provide a simple solution to a common problem.

## Usage
Some quick instructions on how to use Simp.js:

### Multiple file inputs
This plugin supports **single and multiple file inputs**.
You can cover all these situations together:
- Only one file input with single image upload
- Only one file input with multiple image upload
- Multiple file inputs with single image upload
- Multiple file inputs with multiple image upload
- Mixed cases defined above

Just use the **same selector** for all the inputs (recommended: use `class="simp"`) and then define the **data attributes** (recommended), or alternatively the `options` (which works well if you have only one preview container and one filenames container)

### Preview container
It will look something like this:

![Simp.js images preview demo](https://differentdev.it/demo/simpjs/simpjs-demo.png)

### Filenames container
This is the place where the file names will be added into. You might prefer to keep the browser default, so it is just optional.

In the example screenshot and in the demo you can see that I have styled a file input with Bulma, that is how the filenames container can work.

### Options
These are the current supported options:
```
config = {
    inputSelector: '.simp',
    fileNamesMustBeShown: true,
    previewContainerSelector: '#images-previews',
    namesContainerSelector: '#file-names',
};
```

Options:
- `inputSelector` (mandatory) [string] - you can mark all your file inputs with this selector, like class="simp"
- `fileNamesMustBeShown` (mandatory) [bool] - if true, it will throw a warning in the console whenever namesContainerSelector has not been defined, either in the options or in the data attributes
- `previewContainerSelector` (optional) [string] - where to show the previews of the images being uploaded
- `namesContainerSelector` (optional) [string] - where to show the file names of the images being uploaded

Please note that using `previewContainerSelector` or `namesContainerSelector` in the options is good **only if you have one single place where to show previews or file names**. If, let's say, you have 3 different file inputs, and each of them has a different place (like a div element) where to show previews or file names, then **please use the data attributes** as described below.

### Data attributes
This plugin **will automatically look for the following data-attributes**, which are useful expecially if you are using **multiple file inputs with multiple places** (html elements) where to show the previews or the file names:
- `data-preview-container-selector`, which will set "previewContainerSelector" per each file input
- `data-names-container-selector`, which will set "namesContainerSelector" per each file input

## License and credits
You can use this freely, but:
If you use it for **commercial purposes**, i.e. you are *getting money* thanks to this plugin (be it from donations, purchases, ads, or anything of the like) please **put a link in your website to Simp.js Github repository** (in your credits page, footer, or whatever).
So basically, just give an **attribution** like you should do with images from *Unsplash* (you do it, right?).