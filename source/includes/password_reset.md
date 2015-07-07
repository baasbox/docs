### Password reset

(_Forgotten password_ workflow)

``GET /user/:username/password/reset``

**Group**: [baasbox.account.lost_password](#list-groups)

Allows to reset a user's password. This API is useful when users forget their password and need to reset it. This is the workflow: 

- the server checks if the email address exists within the `visibleByTheUser` fields in the user profile 
- the server sends an email to that address with a generated link to follow in order to reset the password 
- the user opens the email and opens the given link in a web browser. That will show a form with two html password fields 
- the user fills in the two fields and submits the form 
- a confirmation message is shown by the server 
- the settings (SMTP configuration, email message to be sent, html form, confirmation and error web page) can be set up by the administrator via the [Settings](#settings) menu in the admin console

Parameter | Description
--------- | -----------
**username** | Username of the user who wants to reset the password. Mandatory.

<div class="snippet-title">
<p>Example of a request for password reset</p>
</div>

```shell
curl http://localhost:9000/user/cesare/password/reset \
-H X-BAASBOX-APPCODE:1234567890
```

```objective_c
BAAUser *user = ... ; // Some user
[user resetPasswordWithCompletion:^(BOOL success, NSError *error) {

if (success) {
NSLog(@"password reset OK");
} else {
NSLog(@"error %@", error);
}

}];
```

```java
BaasUser.requestPasswordReset("cesare",new BaasHandler<Void>() {
@Override
public void handle(BaasResult<Void> res) {
if(res.isSuccess()) {
Log.d("LOG","Password reset has been requested");
} else{
Log.e("LOG","Error",res.error());
}
}
};
```

```javascript
BaasBox.resetPassword()
.done(function(res) {
console.log("res ", res);
})
.fail(function(error) {
console.log("error ", error);
})
```

<div class="snippet-title">
<p>Example of an error</p>
</div>


```json
{
"result": "error",
"message": "Cannot reset password, the \"email\" attribute is not defined into the user's private profile",
"resource": "/user/cesare/password/reset",
"method": "GET",
"request_header": {
"Accept": [
"*/*"
],
"Host": [
"localhost:9000"
],
"X-BAASBOX-APPCODE": [
"1234567890"
]
},
"API_version": "<BaasBox version>"
}
```

<aside class="warning">
This API works only if there is an `email` field (populated with a valid email address) in the `visibleByTheUser` field of the user profile
</aside>