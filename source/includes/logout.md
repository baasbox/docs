### Logout


``POST /logout[/:pushToken]`` 

**Group**: [baasbox.account](#list-groups)

Allows a user to logout from the app on a specific device. A push notification will not be sent to the user through the specified device.

Parameter | Description
--------- | -----------
**pushToken** | Optional. The push notification token that you have used to activate push notifications.

<div class="snippet-title">
	<p>Example of a logout request</p>
</div> 

```shell
curl -X POST http://localhost:9000/logout \
	-H X-BB-SESSION:da506029-4512-45a9-9606-43fcdda4121a -H X-BAASBOX-APPCODE:1234567890
```

```objective_c
[BAAUser logoutWithCompletion:^(BOOL success, NSError *error) {
           
	if (success) {
	    // user logged out
	} else {
	    // error logging out
	}
            
}];
```

```java
BaasUser.current().logout(new BaasHandler<Void>() {
  @Override
  public void handle(BaasResult<Void> result) {
    if(result.isSuccess()) {
      Log.d("LOG", "Logged out: "+(BaasUser.current() == null));
    } else{
      Log.e("LOG","Show error",result.error());
    }
  };
});
```

```javascript
BaasBox.logout()
  .done(function (res) {
  	console.log(res);
  })
  .fail(function (error) {
  	console.log("error ", error);
  })
```

<div class="snippet-title">
	<p>Sample response when a user logs out</p>
</div> 

```json
{
 "result":"ok",
 "data":"user logged out",
 "http_code":200
}
```
