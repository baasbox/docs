###Link a user to a specified social network

`PUT /social/:socialNetwork`

Headers:

-  X-BAASBOX-APPCODE = App code
-  X-BB-SESSION = Session token for the current user

URL parameters

:socialNetwork could be **facebook** or **google**

Parameters: oauth\_token: the **oauth\_token** obtained after user
authentication and authorization with a client library (see example [here](http://www.baasbox.com/social-login/))

oauth\_secret: the **oauth\_secret** obtained after user authentication
and authorization with a client library (see example [here](http://www.baasbox.com/social-login/))

This method allows an existing user to connect their account to a
specified social network.

This procedure is very similar to the Login method with a difference:
this is a PUT request and it must be invoked with the X-BB-SESSION
header.

Returns: 
-  200 code with an empty response if the linking was succesful, 
-  401 code if any of the mandatory headers was missing, 
-  500 code if something on the server went wrong (i.e. another user with the same tokens already exists)

<div class="snippet-title">
<p>Example of a request to link an account to Facebook</p>
</div>

```shell
curl -X PUT http://localhost:9000/social/facebook  \
-d "oauth_token=OAUTH_TOKEN" \
-d "oauth_secret=OAUTH_SECRET" \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23
```

```objective_c
// Assumes a user is already logged in
NSString *token = ...; // Token obtained by Facebook
BAAClient *client = [BAAClient sharedClient];
[client.currentUser linkToFacebookWithToken:token
completion:^(BOOL success, NSError *error) {

if (success) {
NSLog(@"user linked to FB");                                                                                         
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

<div class="snippet-title">
<p>Example of a request to link an account to Google</p>
</div>

```shell
curl -X PUT http://localhost:9000/social/google  \
-d "oauth_token=OAUTH_TOKEN" \
-d "oauth_secret=OAUTH_SECRET" \
-H X-BB-SESSION:2605d809-03f0-4751-8f8e-5f658e179a23
```

```objective_c
// Assumes a user is already logged in
NSString *token = ...; // Token obtained by Google
BAAClient *client = [BAAClient sharedClient];
[client.currentUser linkToGoogleWithToken:token
completion:^(BOOL success, NSError *error) {

if (success) {
NSLog(@"user linked to FB");                                                                                         
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
