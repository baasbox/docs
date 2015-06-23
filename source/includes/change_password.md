### Change password


``PUT /me/password`` 

**Group**: [baasbox.account](#list-groups)

To change the password of the logged in user.

Parameter | Description
--------- | -----------
**old** | The old password. Mandatory.
**new** | The new password. Mandatory.

<aside class="warning">
After you call this API the authentication token is not valid anymore and should call [Login](#login) again.
</aside>

<div class="snippet-title">
<p>Example of request</p>
</div>

```shell
curl -X PUT http://localhost:9000/me/password \
-d '{"old" : "oldpass", "new" : "newpass"}' \
-H Content-type:application/json \
-H X-BB-SESSION:a30e8f43-4d90-4324-91d2-6065fa6ca63c
```

```objective_c
BAAUser *user = ...; // Some user
[user changeOldPassword:@"oldpass"
toNewPassword:@"newpass"
completionBlock:^(BOOL success, NSError *error) {

if (success) {
NSLog(@"pass updared");
} else {
NSLog(@"err %@", error);
}

}];
```

```java
BaasUser current = BaasUser.current();
current.changePassword("newpassword",new BaasHandler<Void>() {
public Void handle(BaasHandler<Void> res) {
if(res.isSuccess()) {
Log.d("LOG", "New password updated, you should relogin");
} else {
Log.e("LOG","error",res.error());
}
}
});
```

```javascript
BaasBox.changePassword("oldpass", "newpass")
.done(function(res) {
console.log("res ", res);
})
.fail(function(error) {
console.log("error ", error);
})
```


<div class="snippet-title">
<p>Example of response</p>
</div>

```json
{
"result": "ok",
"data": "",
"http_code": 200
}
```

