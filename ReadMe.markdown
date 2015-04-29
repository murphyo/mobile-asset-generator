##Easy Asset Creation with Photoshop Scripts and Automator

**Requirements**  

- Mac  
- Photoshop CS6 or CC  


The following details how to better automate your design workflow in order to generate an asset library with a few clicks.  You will need to start with assets that are setup for 3x or XXHDPI, as these are being scaled down in order to achieve the best image quality. The process follows standard iOS and Android naming conventions and will use the current filename as the source. 

1. Download the attached Zip file
2. Place the JSX scripts into your Photoshop > Presets > Scripts folder  
3. Open the iOS Asset Creator.atn in Photoshop
4. Restart Photoshop  
5. Open an image
6. Run the 'Create iOS Assets' or 'Create Android Assets' action

This will create a folder, at the location of the file, with all of the assets.

_* Caveat_  
If you are using PNG files, the script will clip to the sive of the image and not the layer's dimensions, removing any padding you may have included.  

####Additional iOS Consolidation

If you prefer to keep your assets together in a single folder, This can be done two ways, using either the Asset Consolidator app or service. To use the app, drag the App Consolidator.app onto your desktop or somewhere you can easily access it. If you prefer to use a service, open the App Consolidator.workflow and install. 

1. Create a new folder called 'assets'
2. Drag all of the newly created iOS asset folders into 'assets'
3. Drag 'assets' into the Asset Consolidator app or control + click on the folder and select Services > Asset Consolidator

The Asset Consolidator moves all of the images into the root level of the 'asset' folder and deletes the remaining empty folders, leaving you with a single folder with all of your assets.

_* Warning_  
If you have assets with the same name, the Asset Consolidator will overwrite the duplicates.  

**Sources**  
[Rename Photoshop Layer as Filename](http://polygonspixelsandpaint.tumblr.com/post/45209654643)  
[Export Layer as iOS 3x, 2x, 1x assets](https://github.com/UncorkedStudios/export-to-ios)  
[Export Layer as Android XXHDPI, XHDPI, HDPI, MDPI, and LDPI assets](https://github.com/UncorkedStudios/export-to-android)  
[Consolidate Images using Automator](http://www.macworld.com/article/1160660/automator_filesfromsubfolders.html)  