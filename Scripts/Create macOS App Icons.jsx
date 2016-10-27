// Output iOS Icons.jsx
// 2014 Todd Linkner
// License: none (public domain)
// v1.2
//
// This script is for Photoshop CS6. It outputs iOS icons of the following
// sizes from a source 1024px x 1024px PSD
//
// [name]-16.png
// [name]-32.png
// [name]-64.png
// [name]-128.png
// [name]-256.png
// [name]-512.png
// [name]-1024.png

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

    // iOS 8 Icons

    resize(16,1);
    resize(32,1);
    resize(64,1);
    resize(128,1);
    resize(256,1);
    resize(512,1);
    resize(1024,1);

    // Clean up
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

function resize(size,scaleFactor) {
     // Setup file name
    var pname = app.activeDocument.path + "/";
    var fname = app.activeDocument.name;
    var append = "";
    var fsize = size * scaleFactor;
    if (scaleFactor > 1) {
    append =  "@" + scaleFactor + "x";
    }
    n = fname.lastIndexOf(".");
    if (n > 0) {
        var basename = fname.substring(0,n);
        fname = basename+"-"+size+append+".png";
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