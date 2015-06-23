### Enable push notifications

`PUT /push/enable/:os/:pushToken`

**Group**: [baasbox.notifications.receive](#list-groups)

Enables a specific user (logged using a specific device) to receive push notifications.

Parameter | Description
--------- | -----------
**os** | The operative system. One of: `ios`, `android`. Mandatory.
**pushToken** | The token returned by either Apple or Google to enable push notifications. Mandatory.

<div class="snippet-title">
<p>Example of a request to enable push notifications</p>
</div>

```shell
curl -X PUT  http://localhost:9000/push/enable/ios/123  \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23
```

```objective_c
// Call this method only AFTER a successful login or signup.
BAAClient *client = [BAAClient sharedClient];
[client askToEnablePushNotifications];

// implement these delegate methods in the app delegate.
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    
    BAAClient *client = [BAAClient sharedClient];
    [client enablePushNotifications:deviceToken completion:^(BOOL success, NSError *error) {
        if (error) {
            // handle the error
        }
    }];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    // handle the error
}
```

```java
// given you have provided one or more sender ids to the initial configuration
BaasCloudMessagingService box=BaasBox.messagingService();
box.enable(new BaasHandler<Void>() {
@Override
public void handle(BaasResult<Void> res){
if(res.isSuccess()){
// registrationid saved on the server
}
}
});

```

```javascript
TO BE IMPLEMENTED
```

<div class="snippet-title">
<p>Example of a response</p>
</div>

```json
{
"result": "ok",
"data": "",
"http_code": 200
}
```
