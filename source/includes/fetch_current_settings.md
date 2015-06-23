### Fetch current settings

`GET /admin/configuration/dump.json`

Returns a JSON representing the current configuration.

```shell
curl http://localhost:9000/admin/configuration/dump.json  \
	 -H X-BB-SESSION:4efcd048-8865-4047-94c9-8ac58e511b4b \
	 -H X-BAASBOX-APPCODE:1234567890
```

```objective_c
BAAClient *client = [BAAClient sharedClient];
[client loadSettingsWithCompletion:^(NSDictionary *settings, NSError *error) {
    
    if (error == nil) {
        NSLog(@"settings are %@", settings);
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
	<p>Example of a response</p>
</div>  

```json
{
  "result": "ok",
  "data": [
    {
      "section": "PasswordRecovery",
      "description": "Configurations for password recovery related properties",
      "sub sections": {
        "email": [
          {
            "email.template.text": "Hi ...",
            "type": "String"
          }

        ],
        "network": [ ]
      }
    },
    {
      "section": "Application",
      "description": "Configurations for general App(lication) related properties",
      "sub sections": { }
    },
    {
      "section": "Push",
      "description": "Configurations for push related properties",
      "sub sections": { }
    },
    {
      "section": "Images",
      "description": "Configurations for Images related stuffs",
      "sub sections": { }
    },
    {
      "section": "Social",
      "description": "Configurations for Social Login related stuffs",
      "sub sections": { }
    }
  ],
  "http_code": 200
}
```