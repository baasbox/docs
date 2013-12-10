Rest API
--------

Push Notifications
==================

Push notifications are messages that a user can send to another user,
using an APP that has BaasBox as back-end. Supported platforms are
Android and iOS. There are some limitations about sent messages. These
limitations are imposed by the operating system vendor. To enable the
Push Notification system, please read the tutorial and see the Setting
API

**Enable push notifications for a device**: PUT
/push/device/:os/:deviceId **Headers**: See authorization header in the
[[General Remarks\|General Remarks]] **Parameters**\ 

-  **os**: the device operating system. This can be both ios or android.
   Other platforms are not supported yet
-  **deviceId:** the unique identifier of the device. This identifier is
   released by Google and Apple. Please read the tutorial to know how to
   obtain it.

**Description**: This API allows to associate an user to a device, this
means that from now on the user will be able to receive push
notifications by the App. Both parameters are mandatory. **Returns**:

-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 200: OK. The device is successfully registered

**Send a push notification**: POST /push/message/:username **Headers**:
See authorization header in the [[General Remarks\|General Remarks]]
**Parameters**\ 

-  **username**: mandatory. The recipient of the message

**Description**: This API allows to send a push notification to another
user. **Body payload**\  A JSON object like this:

.. raw:: html

   <pre>
   {
   “message”:”hi guy”
   }
   </pre>

message field must contain the message to deliver. Please read the Push
Notification tutorial to know how to handle push notifications and how
to setup the BaasBox server. **Note**\  In order to work, the Push
Notification system within BaasBox needs to be configured supplying some
mandatory information like an API Key released by Google (for Android
devices), or Push Certificates released by Apple (for iOS devices). A
push notification can be delivered only if the recipient has sent its
device and operating system info through the login API or the
register\_device API. If a user performs a login using more than a
device, a push notification will be sent for each of them. **Returns**:

-  Code 503: push notifications not properly configured
-  Code 500: the server cannot fulfill the request, an internal server
   error occurred
-  Code 401: authentication info not valid or not provided
-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
   or Content-Type not set to application/json
-  Code 200: push notification was sent
