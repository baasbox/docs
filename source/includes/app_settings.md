## App Settings
These are the settings relating to your App. They are stored into the embedded DB and because of this, once they are set, they are read from the DB and you do not have to specify them every time you start BaasBox.
The App Settings can be configured via the [Administration Console](#console).
The settings are split in five sections:

- Application

- Password Recovery

- Images

- Push Notifications

- Social Login

These settings can be modified at runtime.

The available options for each section are described below.

### Application

General options for the App(lication)

Key | Description | Default
--------- | ----------- | -------------
**application.name** | The name of your App |  `BaasBox`
**network.http.port** | The TCP port used by the App to contact BaasBox. Please note: when behind a reverse proxy, this could be different from the port used by BaasBox | 9000
**network.http.ssl**  | Set to `true` if the BaasBox server is reached via SSL through a reverse proxy. | false
**network.http.url**  | The public URL of the BaasBox server. I.e. the URL used by the App to contact BaasBox, without the protocol prefix (i.e. http://) and PORT |  localhost
**session_tokens.timeout**  | The expiration time of the session tokens (in minutes). WARNING: the admin console refreshes the session token every 5 minutes, if you set a value lower than 5, you may experience disconnection from the console. To disable expiration set it to 0. | 0

### Password Recovery

Options for the Password Recovery feature

<span style="color:#F9F9F9;">(snippetcode)__</span><br/>Key | <span style="color:#F9F9F9;">(snippetcode)__</span><br/>Description |<span style="color:#F9F9F9;">(snippetcode)__<br/></span>Default
--------- | ----------- | -------------
**email.expiration.time** | Minutes before the reset code expires |  `15`
**email.from** | The name and address to be specified in the 'from' field of the email to send |  `info@example.com`
**email.subject** | The subject of the email to send |  `BaasBox: reset password`
**email.template.html** | The template (html format) of the email to send to the user when they request a password reset. Please ensure that you have written the keyword $link$ inside the text. This keyword will be replaced with the link that the user has to click on to start the password recovery process. |  `The text of the email`
**network.smtp.authentication** | Set to `true` if the SMTP server requires authentication |  `true`
**network.smtp.host** | IP address or fully qualified name of the SMTP server |  `mail.example.com`
**network.smtp.password** | The password required by the SMTP server if it requires authentication. Used only if network.smtp.authentication is set to `true |  `password`
**network.smtp.port** | the TCP port of the SMTP server |  `25`
**network.smtp.ssl** | Enable or disable the SSL protocol for the SMTP server |  `false`

### Images

Options for the server-side images resizing feature

Key | Description | Default
--------- | ----------- | -------------
**image.allows.automatic.resize** | Enable or disable automatic resizing of images | `true`
**image.allowed.automatic.resize.formats**  | A space-separated-value list of image size, both in px or in % | `25% 50% 75% <=80px`

### Push Notifications

Since version 0.8.4, with BaasBox is possible to manage at most three apps for sending push notifications. <br/>
i.e. an administration app and a customer app for a store, or it's possible to distribute one app for free and one app not for free. In this example the apps share the same backend.

New section on console, Push Settings available directly in leftmenu.

**N.B.: Apps must be turned on after being configured**

Options for the Push Notifications feature

Key | Description | Default
--------- | ----------- | -------------
**profile1.push.sandbox.enable** | The value to verify if BaasBox needs to contact the SANDBOX server or the PRODUCTION server for the first app| `true` i.e. it is in SANDBOX mode
**profile1.push.apple.timeout**  | The timeout for push notifications on Apple devices for the first app| `0` - no timeout
**profile1.sandbox.android.api.key** | The key to send push notifications to Android devices in SANDBOX mode for the first app |
**profile1.sandbox.ios.certificate** | The Apple certificate in SANDBOX mode for the first app  | 
**profile1.sandbox.ios.certificate.password**  | The password of the Apple certificate in SANDBOX mode for the first app  |
**profile1.production.ios.certificate**  | The Apple certificate in PRODUCTION mode for the first app  |
**profile1.production.ios.certificate.password**  | The password of the Apple certificate in PRODUCTION mode for the first app |
**profile1.push.profile.enable** | Enable this profile | `false`
**profile2.push.sandbox.enable** | The value to verify if BaasBox needs to contact the SANDBOX server or the PRODUCTION server for the second app| `true` i.e. it is in SANDBOX mode
**profile2.push.apple.timeout**  | The timeout for push notifications on Apple devices for the second app| `0` - no timeout
**profile2.sandbox.android.api.key** | The key to send push notifications to Android devices in SANDBOX mode for the second app |
**profile2.sandbox.ios.certificate** | The Apple certificate in SANDBOX mode for the second app  | 
**profile2.sandbox.ios.certificate.password**  | The password of the Apple certificate in SANDBOX mode for the second app  |
**profile2.production.ios.certificate**  | The Apple certificate in PRODUCTION mode for the second app  |
**profile2.production.ios.certificate.password**  | The password of the Apple certificate in PRODUCTION mode for the second app |
**profile2.push.profile.enable** | Enable this profile | `false`
**profile3.push.sandbox.enable** | The value to verify if BaasBox needs to contact the SANDBOX server or the PRODUCTION server for the third app| `true` i.e. it is in SANDBOX mode
**profile3.push.apple.timeout**  | The timeout for push notifications on Apple devices for the third app| `0` - no timeout
**profile3.sandbox.android.api.key** | The key to send push notifications to Android devices in SANDBOX mode for the third app |
**profile3.sandbox.ios.certificate** | The Apple certificate in SANDBOX mode for the third app  | 
**profile3.sandbox.ios.certificate.password**  | The password of the Apple certificate in SANDBOX mode for the third app  |
**profile3.production.ios.certificate**  | The Apple certificate in PRODUCTION mode for the third app  |
**profile3.production.ios.certificate.password**  | The password of the Apple certificate in PRODUCTION mode for the third app |
**profile3.push.profile.enable** | Enable this profile | `false`




### Social Login

Options to use the Social Networks as user authenticators

Key | Description | Default
--------- | ----------- | -------------
**social.facebook.enabled** | Activate the Facebook authenticator  |  `false`
**social.facebook.token** | Application Token for the Facebook app  | 
**social.facebook.secret**  | Application secret for the Facebook app | 
**social.google.enabled** | Activate the Google+ authenticator  |  `false`
**social.google.token** | Application Token for Google+ |
**social.google.secret**  | Application secret for Google+ |

### Override App Settings ###
```shell
./start -Dbaasbox.settings.Application.session_tokens.timeout.value=30
```

The options and settings defined into the database can be overridden providing new values through CLI parameters.

The stored values are not modified.

To override a specific setting:

`
baasbox.settings.<section>.<key>.value=<new value>
`

Where 

- _section_ is one of:

  - Application

  - PasswordRecovery

  - Push

  - Social

  - Images

- _key_ is one of the keys listed above

Both sections and key names are case-sensitive.
<aside class="notice"> 
Note that the Apple certificate for push notifications cannot be supplied via _start_ command.
</aside>
