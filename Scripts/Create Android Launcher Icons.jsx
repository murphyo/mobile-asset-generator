// Output iOS Icons.jsx
// 2014 Todd Linkner
// License: none (public domain)
// v1.2
//
// This script is for Photoshop CS6. It outputs iOS icons of the following
// sizes from a source 1024px x 1024px PSD
//
// [name]-44.png
// [name]-72.png
// [name]-96.png
// [name]-144.png
// [name]-192.png

// bring Photoshop into focus
#target Photoshop

main();

function main() {

    // Ask user for input folder
  var inputFile = File.openDialog("Select an App Icon");
  if (inputFile == null) throw "No file selected. Exting script.";

  // Open file
  open(inputFile);

    // Set ruler untis to pixels
    app.preferences.typeUnits = TypeUnits.PIXELS

    // Android Icons
    resize(48,0.75);
    resize(48,1);
    resize(48,1.5);
    resize(48,2);
    resize(48,3);
    resize(48,4);
    resize(48,10.6666667);

    // Clean up
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

function resize(size,scaleFactor) {

    var docRef = app.activeDocument,
        Path = docRef.path,
        ldpifolder = Folder(Path + '/' + 'mipmap-' + 'ldpi'),
        mdpifolder = Folder(Path + '/' + 'mipmap-' + 'mdpi'),
        hdpifolder = Folder(Path + '/' + 'mipmap-' + 'hdpi'),
        xhdpifolder = Folder(Path + '/' + 'mipmap-' + 'xhdpi'),
        xxhdpifolder = Folder(Path + '/' + 'mipmap-' + 'xxhdpi'),
        xxxhdpifolder = Folder(Path + '/' + 'mipmap-' + 'xxxhdpi');
        highresfolder = Folder(Path + '/' + 'mipmap-' + 'high-res');

    ldpifolder.create();
    mdpifolder.create();
    hdpifolder.create();
    xhdpifolder.create();
    xxhdpifolder.create();
    xxxhdpifolder.create();
    highresfolder.create();

     // Setup file name
    if (scaleFactor == 0.75) {
        var pname = app.activeDocument.path + "/mipmap-ldpi/";
    } else if (scaleFactor == 1) {
        var pname = app.activeDocument.path + "/mipmap-mdpi/";
    } else if (scaleFactor == 1.5) {
        var pname = app.activeDocument.path + "/mipmap-hdpi/";
    } else if (scaleFactor == 2) {
        var pname = app.activeDocument.path + "/mipmap-xhdpi/";
    } else if (scaleFactor == 3) {
        var pname = app.activeDocument.path + "/mipmap-xxhdpi/";
    } else if (scaleFactor == 4) {
        var pname = app.activeDocument.path + "/mipmap-xxxhdpi/";
    } else if (scaleFactor == 10.6666667) {
        var pname = app.activeDocument.path + "/mipmap-high-res/";
    } else {
        var pname = app.activeDocument.path + "/";
    }
    var fname = app.activeDocument.name;
    var append = "";
    var fsize = size * scaleFactor;
    n = fname.lastIndexOf(".");
    if (n > 0) {
        var basename = fname.substring(0,n);
        fname = "ic_launcher.png";
   }

   // Set export options
    var opts, file;
    opts = new ExportOptionsSaveForWeb();
    opts.format = SaveDocumentType.PNG;
    opts.PNG8 = false;
    opts.transparency = true;
    opts.interlaced = 0;
    opts.includeProfile = false;
    opts.optimized = true;

    // Duplicate, resize and export
    var tempfile = app.activeDocument.duplicate();
    tempfile.resizeImage(fsize+"px",fsize+"px");
    file = new File(pname+fname);
    tempfile.exportDocument(file, ExportType.SAVEFORWEB, opts);
    tempfile.close(SaveOptions.DONOTSAVECHANGES);
}