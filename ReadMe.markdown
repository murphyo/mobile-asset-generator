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
Takes a XXXHDPI image and creates M/H/X/XX/XXXHDPI assets using Android naming conventions  

_us-ios-export-padding_  
Takes a 3x image and create 1/2/3x assets using iOS naming conventions 

_AI-MultiExporter_  
Adds ability to export Illustrator artboards as PDFs    

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

_Merge Folders_  
Merges the contents of folders with the same name  


####Automating Your Workflow  

**Initial Asset Setup**  
This method utilizes a single file to control dimensions, colors, and naming easily, while also generating 3x/4x graphics.

1. Consolidate your assets into a single Illustrator document using multiple artboards, saving this file as 'assets.eps'  
2. Name each Artboard as desired  
3. File > Export to a new directory named 'assets'
	- 'Format: PNG' 
	- Select 'Use Artboards'  
4. Select 'Resolution: Other'
	- Set to '216 PPI' for iOS (3x 72dpi)   
	- Set to '288 PPI' for Android (4x 72dpi)   

**Creating Assets**  
Once your assets are in a common directory, the Photoshop actions and scripts will generate the assets for production.

1. Command click on the initial 'assets' directory and run Service > Strip Asset Prefix, which will remove the 'assets_' prefix from all of your files.
2. Open Photoshop.
3. File > Automate > Batch
	1. 'Set: Asset Automator'.  
	2. 'Action: Create iOS Assets' or 'Create Android Assets'.
	3. 'Source: Folder' - Select your initial setup directory with your assets.
	4. 'Destination' - Select the same 'Source' directory.
	5. Press OK, which will run the scripts on all of your assets in your folder, creating a directory for each with the properly name assets in each.
5. Command click on the parent directory and run Service > Cleanup Orignal Assets, which will remove the original assets.

_For iOS you may want all of your assets combined into a single directory instead of separated into their own sub-directories_  

1. Right click on the parent directory and run Services > Asset Consolidator.

_For Android you may want all of your assets combined into a single set of the size class directories instead of separated into their own sub-directories_   

1. Create a new directory for the consolidated assets.
2. Select all of the auto-generated directories in the assets directory and run Services > Merge Directories.
3. Select the newly created directory as the destination.

**Creating App Icons**  

1. Create a 1024px x 1024px PNG version of the application icon
2. Open Photoshop
3. Actions > Asset Automator > 'Create iOS App Icons' or 'Create Android Launcher Icons'
4. Select your app icon file


**Sources**  
[Consolidate Images using Automator](http://www.macworld.com/article/1160660/automator_filesfromsubfolders.html)  
[Export Layer for iOS](https://github.com/UncorkedStudios/export-to-ios) _*edited_  
[Export Layers for Android](https://github.com/UncorkedStudios/export-to-android) _*edited_  
[Merge Folders](https://gist.github.com/c0der78/1995482)  
[Output iOS Icons](https://gist.github.com/tlinkner/3723395) _*edited_  
[Output Android Icons](https://gist.github.com/tlinkner/0a0090895b631f855cd3) _*edited_  
[Rename Photoshop Layer as Filename](http://polygonspixelsandpaint.tumblr.com/post/45209654643)  