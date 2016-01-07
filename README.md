##Android & iOS Asset Workflow

####Introduction

The following details how to better automate your design workflow. simplify the generation of a full asset library to few clicks, while following standard iOS and Android naming conventions.

####Requirements 

1. Mac OSX  
2. Adobe Illustrator (CS6/CC)  
3. Adobe Photoshop (CS6/CC)  

####Installing Scripts and Services  

1. Download and open the zip file from our designer's [GitHub Page](https://github.com/murphyo/mobile-asset-generator)
2. Move the JSX files to Applications > Photoshop > Presets > Scripts  
3. Open the ATN files to install in Photoshop
4. Relaunch Photoshop 
5. Open the Services files to install them  

**Here are some brief descriptions of what these files are doing:**  

####Scripts
1. **Create Android Launcher Icons**  
Takes a 1024 x 1024 PNG and creates all associated app icons using Android's naming conventions  

2. **Create iOS Launcher Icons**  
Takes a 1024 x 1024 PNG and creates all associated app icons using iOS naming conventions

3. **PS Rename Layers**    
Renames the Photoshop layer based on the asset's filename

4. **Create Android Assets**  
Takes a XXXHDPI image and creates M/H/X/XX/XXXHDPI assets using Android naming conventions and file structure

5. **Create iOS Assets**  
Takes a 3x image and create 1/2/3x assets using iOS naming conventions

6. **AI MultiExporter**  
Adds ability to export Illustrator artboards as PDF files (for using vector assets on iOS)

####Actions  

**Mobile Asset Automator**  

1. Contains two actions which run the layer renaming script, then either one of the Android or iOS specific asset assembly scripts
2. Contains two actions that will create Android or iOS specific app/launcher icons

####Services  
1. **Remove Asset Prefix**  
Removes the 'assets_' prefix from the initial 3x assets created from Illustrator

2. **Remove Orignal Asset**  
Removes the original asset files from the directory

3. **iOS Consolidator**  
Moves all files from subdirectories into root directory  

4. **Android Consolidator**  
Merges the subdirectories within a directory that share the same name

####Initial Asset Setup & Automation

**In Illustrator**  

1. Create or merge your assets into a single Illustrator document using multiple Artboards
2. Save this file as 'assets.eps'
	- The name is actually important, as we will use a script to remove this prefix from the images 
2. Rename each Artboard based on the desire asset name
3. File > Export to a new directory named 'assets', using 'Format: PNG' and select 'Use Artboards' 
4. Select 'Resolution: Other'
	- For iOS set to '216 PPI' (3x 72dpi)
	- Android set to '288 PPI' (4x 72dpi)  

**In Finder**  

1. Right/Control click on the parent 'assets' directory and run Service > Strip Asset Prefix 
	- This will remove the 'assets_' prefix from all your images

**In Photoshop**  

1. File > Automate > Batch
2. Select 'Set: Asset Automator', 'Action: Create iOS Assets' or 'Create Android Assets', 'Source: Folder', select your 'assets' directory containing your assets
3. Press OK 
	- This will run the scripts on all your assets in your folder, creating a directory for each with the proper name associated to each

**In Finder**  

1. Right click on the parent directory and run Service > Cleanup Original Assets
	- With the original assets removed, the resized assets remain in the directory.

####Wrapping them up

Consolidating your assets into a single directory may be desirable. Developers can replace the whole asset directory instead of individual assets one by one.

**iOS**  

1. Right/Control click on the parent directory and run Service > iOS Consolidator
	- This moves all the assets into the root directory and removes the empty subdirectories

**Android**

1. Select allthe asset directories within the parent directory 
2. Right/Control click on the selected directories and run Service > Android Consolidator 
3. Select a destination for the consolidated files
4. Trash original directory

**And that's it, you now have a full set of assets ready for production.**


##Application Icons

To generate our home screen application assets, we need a single 1024px x 1024px PNG file named 'app-icon.png'.

**In Photoshop**  

1. Actions > Mobile Asset Automator > Create Android Launcher Icons or Create iOS App Icons
2. Select app-icon.png and click Open

**This will create and structure your application icons in the same location as your app-icon.png file.**

**Original Sources & Scripts**  
[Rename Photoshop Layer as Filename](http://polygonspixelsandpaint.tumblr.com/post/45209654643)  
[Export Layer as iOS 3x, 2x, 1x assets](https://github.com/UncorkedStudios/export-to-ios)  
[Export Layer as Android XXHDPI, XHDPI, HDPI, MDPI, and LDPI assets](https://github.com/UncorkedStudios/export-to-android)  
[Consolidate Images using Automator](http://www.macworld.com/article/1160660/automator_filesfromsubfolders.html)  
[Merge Folders AppleScript](https://gist.github.com/deadcoda/1995482)