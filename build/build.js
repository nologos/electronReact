const path = require("path");
const packager = require("@electron/packager");
const convertToWindowsStore = require("electron-windows-store");

const rimraf = require("rimraf");
const asar = require("@electron/asar");
const projectRoot = process.cwd();
const asarlock = path.join(projectRoot, "build", "out", "appx", "pre-appx", "app", "resources", "app.asar");
const folder = path.join(projectRoot, "build", "out", "asarcontent");

const APPNAME_ = process.env.npm_package_name;
const VERSION_ = process.env.npm_package_version;

async function packer() {
  const everythingexpectapp = await function getdesiredfiles() {
    // getallfilesinroot

    // return ["node_modules", "build", "out", "appx", "files", "sample-dev.pfx"];
    return filearay;
  };
  options = {
    dir: path.resolve("."),
    overwrite: true,
    platform: "win32",
    arch: "x64",
    electronVersion: "25.9.8",
    asar: true,
    out: path.resolve(__dirname, "out"),
    name: APPNAME_,
    appVersion: VERSION_,
    ignore: everythingexpectapp(),
  };
  console.log("===================options");
  console.log(options);

  const appPaths = await packager(options);
  console.log(`Electron app bundles created:\n${appPaths.join("\n")}`);
  return appPaths;
}

async function bundleElectronApp(appPaths) {
  storeoptions = {
    containerVirtualization: false,
    inputDirectory: appPaths[0],
    outputDirectory: path.resolve(__dirname, "out\\appx"),
    packageVersion: VERSION_,
    packageName: APPNAME_,
    packageDisplayName: `${APPNAME_} Desktop`,
    packageDescription: `${APPNAME_} for Desktops`,
    packageExecutable: `app/${APPNAME_}.exe`,
    deploy: false,
    devCert: "build\\files\\sample-dev.pfx",
    certPass: "",
    finalSay: function () {
      return new Promise((resolve, reject) => resolve());
    },
  };

  console.log("===================storeoptions");
  console.log(storeoptions);

  async function WindowsStore1(storeoptions) {
    const ctwsoutput = await convertToWindowsStore(storeoptions);
    console.log(`exe build completed :\n${ctwsoutput}`);
  }
  await WindowsStore1(storeoptions);
}

async function asarextract() {
  async function clearOutputFolder() {
    const foderToDelete = folder;
    try {
      await rimraf.nativeSync(foderToDelete);
      console.log(`Cleared output folder: ${foderToDelete}`);
    } catch (err) {
      console.error(`Error clearing output folder: ${err}`);
    }
  }
  await clearOutputFolder();
  const src = asarlock;
  const dest = folder;

  await asar.extractAll(src, dest);
  console.log("done.");
}

async function piii() {
  const appPaths = await packer(); // \build\out\exampleapplication-win32-x64
  // await bundleElectronApp(appPaths);
  // await asarextract();
}

piii();
