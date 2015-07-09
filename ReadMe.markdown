##iOS and Android Asset Workflow

The following details how to better automate your design workflow in order to generate full assets catalogs following standard iOS and Android naming conventions.

_Requires:_  
- Mac  
- Adobe Photoshop CS6 / CC  

####Installation and Background  

**Installing Actions, Scripts, and Services**  

1. Download and open the attached zip file  
2. Move the JSX files to Applications > Photoshop > Presets > Scripts (restart Photoshop)  
3. Open the ATN file to install in Photoshop  
4. Open the Services and install each  


Brief description of what these files are doing:  

**Scripts**  
_create-android-launcher-icons_  
Takes a 1024 x 1024 PNG and creates M/H/X/XX/XXXHDPI assets using Android naming conventions  

_create-ios-app-icons_  
Takes a 1024 x 1024 PNG and creates 1/2/3x assets using iOS naming conventions  

_docNameToLayerName_  
Renames the layer based on the filename  

_us-android-export-padding_  
Takes a XXXHDPI image and creates M/H/XH/XXH/XXXHDPI assets using Android naming conventions  

_us-ios-export-padding_  
Takes a 3x image and create 1/2/3x assets using iOS naming conventions    

**Actions**  
_Asset Automator_  
Contains two actions which run the layer renaming script, then either one of the OS specific asset assembly scripts  
Contains two actions that will create OS specific application icons from a PNG file  

**Services**  
_Strip Asset Prefix_  
This service removes the 'assets_' prefix from the initial 3x assets created from Illustrator  

_Cleanup Orignal Assets_  
Removes the original asset files from the directory  

_Asset Consolidator_  
This service moves all files from subdirectories into root directory  

####Automating Your Workflow  

**Initial Asset Setup**  
This method allows supplies a single file to update dimensions and colors easily, while also creating those 3x graphics with a few clicks.

1. Consolidate your assets into a single Illustrator document using multiple artboards, saving this file as 'assets.eps'  
2. Rename each Artboard what you want that asset to be named  
3. File > Export to a new directory named 'assets', using 'Format: PNG' and select 'Use Artboards'  
4. Select 'Resolution: Other' and set to '216 PPI', which is three times the standard 72  

**Creating Assets**  
Once your assets are in a common directory, you will be able to use the Photoshop actions and scripts to get them ready for production.

1. Right click on the initial 'assets' directory and run Service > Strip Asset Prefix (This will remove the 'assets_' prefix from all of your files)
2. Open Photoshop
3. File > Automate > Batch
4. Select 'Set: Asset Automator', 'Action: Create iOS Assets' or 'Create Android Assets', 'Source: Folder', select your initial setup directory with your 3x assets
5. Press OK (This will run the scripts on all of your assets in your folder, creating a directory for each with the properly name assets in each)  
6. Right click on the parent directory and run Service > Cleanup Orignal Assets

_For iOS you may want all of your assets combined into a single directory instead of separated into their own sub-directories_  

1. Right click on the parent directory and run Service > Asset Consolidator

**Creating App Icons**  

1. Create a 1024px x 1024px PNG version of the application icon
2. Open Photoshop
3. Actions > Asset Automator > 'Create iOS App Icons' or 'Create Android Launcher Icons'
4. Select your app icon file


**Sources**  
[Export Layer as iOS 3x, 2x, 1x assets](https://github.com/UncorkedStudios/export-to-ios) _*edited_  
[Export Layer as Android XXHDPI, XHDPI, HDPI, MDPI, and LDPI assets](https://github.com/UncorkedStudios/export-to-android) _*edited_  
[Output iOS Icons](https://gist.github.com/tlinkner/3723395) _*edited_  
[Output Android Icons](https://gist.github.com/tlinkner/0a0090895b631f855cd3) _*edited_  
[Rename Photoshop Layer as Filename](http://polygonspixelsandpaint.tumblr.com/post/45209654643)  
[Consolidate Images using Automator](http://www.macworld.com/article/1160660/automator_filesfromsubfolders.html)  