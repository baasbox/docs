### Fetch a section of the Settings

`GET /admin/configuration/:section`

Returns a JSON representing a section of the configuration.

Parameter | Description
--------- | -----------
**section** | The name of a section. One of: `PasswordRecovery`, `Application`, `Push`, `Images`. Mandatory.

<div class="snippet-title">
	<p>Example of a request to retrieve the `Application` section</p>
</div>  

```shell
curl http://localhost:9000/admin/configuration/Application  \
	 -H X-BB-SESSION:4efcd048-8865-4047-94c9-8ac58e511b4b \
	 -H X-BAASBOX-APPCODE:1234567890
```

```objective_c
BAAClient *client = [BAAClient sharedClient];
[client loadSettingsSection:@"Application"
                 completion:^(NSDictionary *settings, NSError *e) {
                     
                     if (error == nil) {
                         NSLog(@"apps settings %@", settings);
                     } else {
                         NSLog(@"error %@", e);
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
	<p>Example of a response</p>
</div>  

```json
{
  "result": "ok",
  "data": [
    {
      "key": "application.name",
      "value": "BaasBox",
      "description": "The App name",
      "type": "String"
    },
    {
      "key": "session_tokens.timeout",
      "value": "0",
      "description": "The expiration time of the session tokens (in minutes). WARNING: the admin console refreshes the session token every 5 minutes, if you set a value lower than 5, you may experience disconnection from the console. To disable expiration set it to 0.",
      "type": "Integer"
    },
    {
      "key": "network.http.ssl",
      "value": "false",
      "description": "Set to TRUE if the BaasBox server is reached via SSL through a reverse proxy.",
      "type": "Boolean"
    },
    {
      "key": "network.http.url",
      "value": "localhost",
      "description": "The public url of the BaasBox server. I.e. the url used by the App to contact BaasBox, without the protocol prefix (i.e. http://) and PORT",
      "type": "String"
    },
    {
      "key": "network.http.port",
      "value": "9000",
      "description": "The public TCP port used by the App to contact BaasBox. Please note: when behind a reverse proxy, this could be different from the port used by BaasBox.",
      "type": "Integer"
    }
  ],
  "http_code": 200
}
```
