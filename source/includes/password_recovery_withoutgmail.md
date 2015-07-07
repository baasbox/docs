## Password Recovery

BaasBox has a function for Password Recovery that allows the users of your App to reset their password in case they forgot it.

In order to make use of this function it is important that upon signup the App sends to BaasBox the email address of the user in the *email* field of the *visibleByTheUser* object, as you will see in the following example.



`PUT /me `
<div class="snippet-title">
<p>Example of a request</p>
</div>

```json
{
	"visibleByTheUser":{"email":"email_of_the_user@email.com"}
}
```
<div class="snippet-title">
<p>Example of a response</p>
</div>

```json
{
    "result": "ok",
    "data": {
        "visibleByTheUser": {
            "email": "email_of_the_user@email.com"
        },
        ...
		...
		...
    },
    "http_code": 200
}
```

By the way it is possible to create a user with email address

`POST /user `
<div class="snippet-title">
<p>Example of a request</p>
</div>

```json
{
  "username":"user",
  "password":"user",
  "visibleByTheUser":{
      "email":"email_of_the_user@email.com"
    }
}
```
<div class="snippet-title">
<p>Example of a response</p>
</div>

```json
{
    "result": "ok",
    "data": {
        ...
		...
		...
        "visibleByTheUser": {
            "email": "email_of_the_user@email.com"
        ...
		...
		...
    },
    "http_code": 201
}
```

Finally, the App has to call the reset password API whenever requested. This is

`GET user/:username/password/reset`

If you get the following response:

```json
{
    "result": "error",
    "message": "Cannot send mail to reset the password:  Could not reach the mail server. Please contact the server administrator",
    "resource": "/user/test/password/reset",
    "method": "GET",
    "request_header": {
       ...
       ...
       ...
    },
}
```

this means that you got something wrong in the set up.

The fields you need to set up in order to have the Password Recovery service function are the following:

+  email.from: the sender of the Password Recovery email (your email address);
+  network.smtp.authentication: to be set to TRUE if the server requires authentication;
+  network.smtp.host: IP ADDRESS or fully qualified name of the SMTP server;
+  network.smtp.password: the password of the sender's email account;
+  network.smtp.port: the port used by the SMTP server: SSL or TLS;
+  network.smtp.ssl:TRUE/FALSE according to the use of SSL or TLS;
+  network.smtp.tls:TRUE/FALSE a seconda della volontà di usare SSL o TLS;
+  network.smtp.user: MUST be the same account in the email.from field (INCLUDING THE DOMAIN i.e. @email.com);

**N.B. IT IS NOT POSSIBLE TO HAVE BOTH THE NETWORK.SMTP.SSL AND NETWORK.SMTP.TLS FIELDS SET TO TRUE, ONE OF THEM HAS TO BE SET TO FALSE.**
