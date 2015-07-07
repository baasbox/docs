# Introduction

BaasBox is a complete solution to implement the back end of your applications.

It is available as a product released under the Apache 2 license, or as a [cloud service](http://beta.baasbox.com)
	
The latest version is **0.9.4**

You can access all sections using the sidebar on the left. The
documentation explains:

*  the BaasBox features (server side)
   *  [how to install BaasBox](?shell#installation)
   *  [how to use the admin console and a detailed section about the REST API that you can use](?shell#console)
   *  [REST API](?shell#api)
   *  [Plugin Engine (Server Side Scripts)](https://github.com/baasbox/baasbox/wiki/PluginApi)

*  the SDK features

   *  [iOS SDK](?objective_c#ios-sdk)
   *  [Android SDK](?java#android-sdk)
   *  [JavaScript](?javascript#javascript-sdk)


For a complete list of changes and new features, see the [changelog](http://www.baasbox.com/baasbox-0-9-1-released/)

FAQs are available on our [support site](http://support.baasbox.com/)

The Android SDK JavaDoc is [here](http://baasbox.github.io/Android-SDK/docs/)

Our [tutorials](http://www.baasbox.com/tutorial/) will allow you to rapidly have a first
result of what BaasBox can give you. 
Enjoy!


```shell
In this section you can find code examples for every platform we address.
Click on any tab above to choose the platform of your interest.
```

```objective_c
You have two ways to install the iOS SDK.
We suggest cocoapods: just add "pod 'BaasBoxSDK', '~> 0.9.0'" to your pod file.
As an alternative you can download this repo (https://github.com/baasbox/iOS-SDK) and drag and drop the BaasBox-iOS-SDK folder on Xcode.

Finally insert the following statement wherever you need BaasBox functionalities
#import "BAAClient.h" 
and you are good to go. 

Note for Swift projects. As of Xcode 6.1 you need to drag .h and .m files (and not the enclosing folder), otherwise you are not asked to create a bridging header. Once you have created one, add the following statement and you are good to go: #import "BAAClient.h" 
```

```java
/*
The Android SDK is distributed as a jar. 
To get started download it from the download section of the website 
(http://www.bassbox.com/download/), and put it in your libs folder.

To initialize the client, add the following code to your application
class.
*/

public class MyApp extends Application{
  private BaasBox client;
  
  @Override
  public void onCreate() {
    BaasBox.Builder builder = new BaasBox.Builder(this);
    client =builder.setApiDomain("127.0.0.1")
                   .setAppCode("YOUR-APP-CODE")
                   .init();
  }
}
```

```javascript
/*
You can download the SDK from the [download page](http://www.baasbox.com/download/).
To use the SDK just import jQuery and the `baasbox.js` in the head section of your page like this.
*/

<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>	
<script src="../baasbox.js"></script>

/*
The jQuery cookie plugin, needed to save authentication tokens, is already included at the top of the `baasbox.js` file.
The SDK also supports [Zepto](http://zeptojs.com/).
*/
```
