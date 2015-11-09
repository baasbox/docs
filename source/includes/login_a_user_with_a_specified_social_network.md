###Login a User with a specified social network

`POST /social/:socialNetwork`

Headers: X-BAASBOX-APPCODE = App code

URL parameters

:socialNetwork could be **facebook** or **google**

Parameters:

-  oauth\_token: the **oauth\_token** obtained after user authentication
and authorization with a client library (see example [here](http://www.baasbox.com/social-login/))

-  oauth\_secret: the **oauth\_secret** obtained after user
authentication and authorization with a client library (see example
[here](http://www.baasbox.com/social-login/))

This method allows to login into the BaasBox app using the tokens
obtained by a social network client library. If the user has already
logged in with the same tokens the server will simply return the
X-BB-SESSION token that will be used for further requests.

If the user does not exist it will be created and an X-BB-SESSION token
will be returned. Upon user creation some data will be extracted from
the social network profile and they will be stored inside the user
object. A username will be uniquely generated (to prevent username
collision). Therefore after a succesful login, if necessary, the client
app may ask for a username and update the user object accordingly.(See
the example [here](http://www.baasbox.com/social-login/))

Returns:

-  200 code with the user's X-BB-SESSION token
-  400 code if one of the oauth\_token or oauth\_secret was missing
-  401 code if the X-BAASBOX-APPCODE header was missing
-  500 code if something on the server went wrong (i.e. another user
with the same tokens already exists)

<div class="snippet-title">
<p>Example of a request to login with Facebook</p>
</div>

```shell
curl -X POST  http://localhost:9000/social/facebook  \
-d "oauth_token=OAUTH_TOKEN" \
-d "oauth_secret=OAUTH_SECRET" \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23 \
-H Content-Type: application/json

```

```objective_c
NSString *token = ... ; // Valid authentication token obtained by Facebook.
[BAAUser loginWithFacebookToken:token
completion:^(BOOL success, NSError *error) {

if (success) {

BAAClient *c = [BAAClient sharedClient];
NSLog(@"logged in with facebook %@", c.currentUser);

} else {

NSLog(@"error %@", error);

}

}];
```

```java
String token= ...;// a valid token from the provider
BaasUser.signupWithProvider(Social.FACEBOOK,token,token,new BaasHandler<BaasUser>(){
@Override
public void handler(BaasResult<BaasUser> res) {
if(res.isSuccess()){
BaasUser current = res.value(); 
}
});
```

```javascript
TO BE IMPLEMENTED
```

<div class="snippet-title">
<p>Example of a request to login with Google</p>
</div>

```shell
curl -X POST  http://localhost:9000/social/google  \
-d "oauth_token=OAUTH_TOKEN" \
-d "oauth_secret=OAUTH_SECRET" \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23 \
-H Content-Type: application/json
```

```objective_c
NSString *token = ... ; // Valid authentication token obtained by Google.
[BAAUser loginWithGoogleToken:token
completion:^(BOOL success, NSError *error) {

if (success) {

BAAClient *c = [BAAClient sharedClient];
NSLog(@"logged in with facebook %@", c.currentUser);

} else {

NSLog(@"error %@", error);

}

}];
```

```java
TO BE IMPLEMENTED
```

```javascript
TO BE IMPLEMENTED
```
