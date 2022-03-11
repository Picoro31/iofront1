
<!-- Create Project in New ionic Project Folder with cmd
-ionic start myFirstApp blank --type=angular

Create Cordova Plugin Run on CMD Project Folder
-npm install cordova-plugin-geolocation 
-npm install @awesome-cordova-plugins/geolocation 
-ionic cap sync -->

<!-- CMD run Cordova Android app
ionic cordona run android --livereload -->
<!-- $ ionic cordova emulate android
$ ionic cordova emulate android --buildConfig=build.json
$ ionic cordova emulate android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
$ ionic cordova emulate android --prod --release -- -- --keystore=filename.keystore --alias=myalias
$ ionic cordova emulate android --prod --release -- -- --minSdkVersion=21
$ ionic cordova emulate android --prod --release -- -- --versionCode=55
$ ionic cordova emulate android --prod --release --buildConfig=build.json
$ ionic cordova emulate android -l
$ ionic cordova emulate ios
$ ionic cordova emulate ios --buildConfig=build.json
$ ionic cordova emulate ios --livereload --external
$ ionic cordova emulate ios --livereload-url=http://localhost:8100
$ ionic cordova emulate ios --prod --release
$ ionic cordova emulate ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
$ ionic cordova emulate ios --prod --release --buildConfig=build.json -->

<!-- Check Cordova Plugin List
-cordova plugin list

Add Cordova Camera Plugin
-ionic cordova plugin add cordova-plugin-camera -->

<!-- Remove Cordova Plugin
-cordova plugin remove cordova-plugin-camera -->

<!-- CMD Show Console-log Android Device
-ionic cordova run android --livereload --consolelogs --serverlogs -->

<!-- Adjust Script fetch(http) in network_security_config.xml.
Link: "https://stackoverflow.com/questions/59116787/failed-to-load-resource-neterr-cleartext-not-permitted" -->
<!-- <?xml version="1.0" encoding="utf-8"?>
<network-security-config> -->

  <!-- <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
  </base-config> -->
    <!-- <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">192.168.43.147:3000</domain>
        <domain includeSubdomains="true">192.168.43.147:3000/products</domain>
        <domain includeSubdomains="true">10.0.2.2 </domain>
    </domain-config> -->

<!-- Ionic Create Code
$ ionic generate 
$ ionic generate page
$ ionic generate page contact
$ ionic generate component contact/form
$ ionic generate component login-form --change-detection=OnPush
$ ionic generate directive ripple --skip-import
$ ionic generate service api/user -->

