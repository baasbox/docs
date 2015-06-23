### Send a push notification

For information about additional data check the following links

- [iOS](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html)
- [Android](https://developer.android.com/google/gcm/server.html)

`POST /push/message/`

**Group**: [baasbox.notifications.send](#list-groups)

Allows to send a push notification. This will be sent to every device, registered with the respective app, on which users have enabled push notifications.

Parameter | Description | Type
--------- | ----------- | ------
**message** | The message for the users. **Mandatory**. | String
**users** | The username of the users who have to receive the notification. **Mandatory** | Array of String
**profiles** | The app used for sending push notifications (only allow Array of Integer i.e. [1,2,3]). If empty, app #1 will be used | Array of Integer
**sound**| A sound to play for iOS | String
**badge**| The number to display as the badge of the application icon for iOS | Integer
**actionLocalizedKey** | The string is used as a key to get a localized string in the current localization to be used for the right button’s title instead of “View” for iOS | String
**localizedKey** | A key to an alert-message string in a Localizable.strings file for the current localization for iOS| String
**localizedArguments** | Variable string values to appear in place of the format specifiers in localizedKey for iOS| Array of String
**custom** | Custom data Android & iOS | Value, JSONArray or JSONObject
**collapse_key** | An arbitrary string (such as "Updates Available") that is used to collapse a group of like messages when the device is offline for Android | String
**time_to_live** | How long (in seconds) the message should be kept on the GCM storage if the device is offline for Android. If empty, it will be set to 4 weeks | Integer, max value allow 2419200
**content-available** | (Available from BaasBox 0.9.0) Provide this key with a value of 1 to indicate that new content is available. Including this key and value means that when your app is launched in the background or resumed for iOS 7 | Integer
**category** | (Available from BaasBox 0.9.0) Sets the category of the notification for iOS8 notification actions | String


<div class="snippet-title">
<p>Example of a request to send a push notification</p>
</div>

```shell
curl -X POST  http://localhost:9000/push/message  \
-d '{"message" : "hi", "users" :  ["cesare"]}' \
-H Content-type:application/json \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23
```

```objective_c
BAAClient *client = [BAAClient sharedClient];
[client postPath:@"/push/message"
      parameters:@{@"message" : @"hi", @"users" : @[@"cesare"]}
         success:^(id responseObject) {

           NSLog(@"Notification sent");

         } 
         failure:^(NSError *error) {

           NSLog(@"error %@", error);

}];
```

```java
BaasBox.messagingService()
       .newMessage()
       .profiles(BaasCloudMessagingService.PROFILE2)
       .extra(new JsonObject().put("key","value"))
       .text("message")
       .to(user,user2)
       .send(new BaasHandler<Void>() {
            @Override
            public void handle(BaasResult<Void> result) {
              // handle the result          
            }
        });
```

```javascript
BaasBox.sendPushNotification({"message" : "hi", "users" : ["cesare"]})
  .done(function(res) {
    console.log("res ", res);
  })
  .fail(function(error) {
    console.log("error ", error);
  })
```

<div class="snippet-title">
<p>Example of a request</p>
</div>
```json
{
	"message":"test".
	"profiles":[1],   
	"sound":"sound.wav",
  	"actionLocalizedKey":"Play",
  	"localizedKey":"GAME_PLAY_REQUEST_FORMAT",
  	"localizedArguments":["Jenna","Frank"],
  	"badge":10,
  	"custom": {
        		"data": "text",
        		"title": "Titletext",
      		},
	"category":"invite",
	"collapse_key":"update_match_15",
	"time_to_live":106,
	"users":["X","Y","Z"]
}
```
Following an example for the content-available field  (available since iOS 7.0)

<div class="snippet-title">
<p>Example of a request for content-available field</p>
</div>
```json
{
	"message":"test",
	"profiles":[1],   
	"content-available":1
}
```

<div class="snippet-title">
<p>Example of a response</p>
</div>

```json
// if all OK
{
  "result": "ok",
  "data": "",
  "http_code": 200
}

//or (in case of errors in settings i.e. push sent to Android & iOS devices but only Android settings are configured)
{
  "result": "ok",
  "data": "Push notifications were sent but they may be subject to loss of data. HINT: check push settings in console",
  "http_code": 200,
  "bb_code": "20001"
}
```

##### DEPRECATED
`POST /push/message/:username`

**Group**: [baasbox.notifications.send](#list-groups)

Allows to send a push notification. This will be sent to every device, registered with the respective app, on which the user has enabled push notifications.

Parameter | Description | Type
--------- | ----------- | ------
**message** | The message for the user. **Mandatory**. | String
**username** | The username of the user who has to receive the notification. **Mandatory**.
**profiles** | The app used for sending push notifications (only allow Array of Integer i.e. [1,2,3]). If empty, app #1 will be used | Array of Integer
**sound**| A sound to play for iOS | String
**badge**| The number to display as the badge of the application icon for iOS | Integer
**actionLocalizedKey** | The string is used as a key to get a localized string in the current localization to be used for the right button’s title instead of “View” for iOS | String
**localizedKey** | A key to an alert-message string in a Localizable.strings file for the current localization for iOS| String
**localizedArguments** | Variable string values to appear in place of the format specifiers in localizedKey for iOS| Array of String
**custom** | Custom data Android & iOS | Value, JSONArray or JSONObject
**collapse_key** | An arbitrary string (such as "Updates Available") that is used to collapse a group of like messages when the device is offline for Android | String
**time_to_live** | How long (in seconds) the message should be kept on the GCM storage if the device is offline for Android. If empty, it will be set to 4 weeks | Integer, max value allowed 2419200
**content-available** | (Available from BaasBox 0.9.0) Provide this key with a value of 1 to indicate that new content is available. Including this key and value means that when your app is launched in the background or resumed for iOS 7 | Integer
**category** | (Available from BaasBox 0.9.0) Sets the category of the notification for iOS8 notification actions | String

```shell
curl -X POST  http://localhost:9000/push/message/cesare  \
-d '{"message" : "hi"}' \
-H Content-type:application/json \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23
```

```objective_c
BAAClient *client = [BAAClient sharedClient];
[client postPath:@"/push/message/cesare"
parameters:@{@"message" : @"Hi there"}
success:^(id responseObject) {

NSLog(@"Notification sent");

} failure:^(NSError *error) {

NSLog(@"error %@", error);

}];
```

```java
JsonObject message = new JsonObject()
.putString("greeting","Hello World!")
.putString("from","BaasBox");

BaasUser user = BaasUser.withUserName("Cesare");
user.send(message,new BaasHandler<Void>(){
@Override
public void handle(BaasResult<Void> res){
if(res.isFailed()){
Log.e("LOG","Something went wrong",res.error());
}
}
});
```

```javascript
TO BE IMPLEMENTED
```

<div class="snippet-title">
<p>Example of a request</p>
</div>

```json
{
	"message":"test".
	"profiles":[1],   
	"sound":"sound.wav",
  	"actionLocalizedKey":"Play",
  	"localizedKey":"GAME_PLAY_REQUEST_FORMAT",
  	"localizedArguments":["Jenna","Frank"],
  	"badge":10,
  	"custom": {
        		"data": "text",
        		"title": "Titletext",
      		},
	"collapse_key":"update_match_15",
	"time_to_live":106
}

```

<div class="snippet-title">
<p>Example of a response</p>
</div>

```json
// if all OK
{
"result": "ok",
"data": "",
"http_code": 200
}

//or (in case of errors in settings i.e. push sent to Android & iOS devices but only Android settings are configured)
{
"result": "ok",
"data": "Push notifications were sent but they may be subject to loss of data. HINT: check push settings in console",
"http_code": 200,
"bb_code": "20001"
}
```
