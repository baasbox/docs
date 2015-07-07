## iOS SDK

The SDK is distributed in two ways: 

* as a [Cocoapod](http://cocoapods.org/?q=baasBox)
* as a zip file 

We recommend to install it using Cocoapods. Just add the following line to your Podfile.

`pod 'BaasBoxSDK', '~> 0.9.0'`

If you prefer the good old way, download the SDK from the [download section](http://www.baasbox.com/download) of the website, and drag and drop the whole folder into your Xcode project.

Finally insert the following statement wherever you need BaasBox functionalities

`#import "BAAClient.h"`

and you are good to go. 

Note for **Swift** projects. As of Xcode 6.1 you need to drag .h and .m files (and not the enclosing folder), otherwise you are not asked to create a bridging header. 


#### Initialization

You need to initialize the SDK before making any API call. The best place to do it is in the ```application:didFinishLaunchingWithOptions`` method of your app. All you need to provide is the base URL and the app code, as in the example on the right.

```objective_c
[BaasBox setBaseURL:@"http://localhost:9000"
appCode:@"1234567890"];
```

```shell
NOTHING HERE. See the 'iOS' Tab
```

```java
NOTHING HERE. See the 'iOS' Tab
```

```javascript
NOTHING HERE. See the 'iOS' Tab
```

#### Architecture and pass-through

The iOS SDK is structured following an onion-skin model. Most of the APIs are available through classes like ``BAAUser`` or ``BAAObject``, which respectively contains methods for user management (login, signup, etc.) and documents (create, update, etc.). We suggest you use these methods when available. Should you see "TO BE IMPLEMENTED" in the iOS section, you can resort to use the ``BAAClient`` class. 
On the right there is an example of a GET request.

There are four methods, one for each HTTP verb.

``- (void)getPath:(NSString *)path
parameters:(NSDictionary *)parameters
success:(void (^)(id responseObject))success
failure:(void (^)(NSError *error))failure;``


``- (void)postPath:(NSString *)path
parameters:(NSDictionary *)parameters
success:(void (^)(id responseObject))success
failure:(void (^)(NSError *error))failure;``

``- (void)putPath:(NSString *)path
parameters:(NSDictionary *)parameters
success:(void (^)(id responseObject))success
failure:(void (^)(NSError *error))failure;``

``- (void)deletePath:(NSString *)path
parameters:(NSDictionary *)parameters
success:(void (^)(id responseObject))success
failure:(void (^)(NSError *error))failure;``


As stated above, we strongly suggest you use higher level methods available in the classes ``BAAFile``, ``BAAObject`` and ``BAAUser`` and to resort to the ``BAAClient`` methods only if you can't do otherwise. We will soon finish the implementation of the SDK so that you won't neeed to use ``BAAClient`` methods at all in your app.

```objective_c
// Assumes there is a logged in user
BAAClient *client = [BAAClient sharedClient];
[client getPath:@"/file/details"
parameters:parameters
success:^(id responseObject) {

NSLog(@"response is %@", responseObject);         

} failure:^(NSError *error) {

NSLog(@"error is %@", error); 

}];
```

```shell
NOTHING HERE. See the 'iOS' Tab
```

```java
NOTHING HERE. See the 'iOS' Tab
```

```javascript
NOTHING HERE. See the 'iOS' Tab
```
