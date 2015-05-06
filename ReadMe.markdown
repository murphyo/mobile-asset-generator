##iOS and Android Asset Workflow

The following details how to better automate your design workflow in order to generate a full asset library following standard iOS and Android naming conventions.

_Requires:_  
- Mac  
- Adobe Photoshop CS6 / CC  

**Initial Asset Setup**  

1. Consolidate your assets into a single Illustrator document using multiple artboards, saving this file as 'assets.eps'  
2. Rename each Artboard what you want that asset to be named  
3. File > Export to a new directory named 'assets', using 'Format: PNG' and select 'Use Artboards'  
4. Select 'Resolution: Other' and set to '216 PPI', which is three times the standard 72  

This method allows you a single file to update dimensions and colors easily, while also creating those 3x graphics with a few clicks.

**Installing Scripts and Services**  

1. Download and open the attached zip file  
2. Move the JSX files to Applications > Photoshop > Presets > Scripts (restart Photoshop)  
3. Open the ATN files to install in Photoshop  
4. Open the Services and Install them  

A brief description of what these files are doing:  

**Scripts**  
_docNameToLayerName_  
This script  renames the layer based on the filename  
_us-android-export-padding_  
This script scales the original 3x asset, and saves them at each resolution with standard Android naming conventions  
_us-ios-export-padding_  
his script This script scales the original 3x asset, and saves them at each resolution with standard iOS naming conventions  

**Actions**  
_Asset Automator_  
Contains two actions which run the layer renaming script, then either one of the OS specific scripts  

**Services**  
_Strip Asset Prefix_  
This service removes the 'assets_' prefix from the initial 3x assets created from Illustrator  
_Cleanup Orignal Assets_  
Removes the original asset files from the directory  
_Asset Consolidator_  
This service moves all files from subdirectories into root directory  

Once these scripts and services are are installed, you can follow the next few steps to generate your full sets od assets.

1. Right click on the initial 'asset' directory and run Service > Strip Asset Prefix (This will remove the 'assets_'prefix from all of your files)
2. Open Photoshop
3. File > Automate > Batch
4. Select 'Set: Asset Automator', 'Action: Create iOS Assets' or 'Create Android Assets', 'Source: Folder', select your initial setup directory with your 3x assets
5. Press OK (This will run the scripts on all of your assets in your folder, creating a directory for each with the properly name assets in each)  
6. Right click on the parent directory and run Service > Cleanup Orignal Assets

This will remove the original assets and leave you all of your asset directories. For iOS you may want all of your assets combined into a single directory instead of separated into their own sub-directories. If that is the case:

- Right click on the parent directory and run Service > Asset Consolidator

This moves all the images into the root directory, and deletes the remaining empty sub-directories.

And that's it, you now have a full set of assets ready for production.


**Sources**  
[Rename Photoshop Layer as Filename](http://polygonspixelsandpaint.tumblr.com/post/45209654643)  
[Export Layer as iOS 3x, 2x, 1x assets](https://github.com/UncorkedStudios/export-to-ios)  
[Export Layer as Android XXHDPI, XHDPI, HDPI, MDPI, and LDPI assets](https://github.com/UncorkedStudios/export-to-android)  
[Consolidate Images using Automator](http://www.macworld.com/article/1160660/automator_filesfromsubfolders.html)  
