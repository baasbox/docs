### Disable push notifications

`PUT /push/disable/:pushToken`

**Group**: [baasbox.notifications.receive](#list-groups)

Disable a specific user (logged using a specific device) to unreceive push notifications.

Parameter | Description
--------- | -----------
**pushToken** | The token returned by either Apple or Google to disable push notifications. Mandatory.

<div class="snippet-title">
<p>Example of a request to disable push notifications</p>
</div>

```shell
curl -X PUT  http://localhost:9000/push/disable/123  \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23
```

```objective_c
// Assumes there is a logged in user
BAAClient *client = [BAAClient sharedClient];
[client disablePushNotificationsWithCompletion:^(BOOL success, NSError *error) {

if (success) {
NSLog(@"push notifications disabled");
} else {
NSLog(@"error %@", error);
}

}];
```

```java
BaasCloudMessagingService client = BaasBox.messagingService();
client.disable(new BaasHandler<Void>(){
@Override
public void handle(BaasResult<Void> res){
if(res.isSuccess()){
// successfully unregistered
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
