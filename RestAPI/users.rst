Create a user
=======================

POST /user **Headers**: See authorization header in the [[General
Section\|General Remarks]] **Description**: This API allows a user to
sign up to the App. Users will belong to the registereduser role and
they will post new content, will retrieve their own content, will change
their password. **Body payload**\  A JSON object like this:

.. raw:: html

   <pre>
   {

       "username":"{username}",

       "password":"{password}",

       "visibleByTheUser": {...},

       "visibleByFriend": {...},

       "visibleByRegisteredUsers": {..},

       "visibleByAnonymousUsers": {...}

   }
   </pre>

-  **username** and **password** fields are mandatory but password may
   be empty.
-  **visibleByTheUser** is an object whose fields are private and
   visible only by the user
-  **visibleByFriend** is an object whose fields are visible by the user
   and his/her friends (for future friendship management)
-  **visibleByRegisteredUsers** is an object whose fields are visible by
   the user, his/her friends, any registered user
-  **visibleByAnonymousUsers** is an object whose fields are public and
   visible by everyone, even anonymous users **Returns**: Username and
   password are mandatory.

-  Code 400: ‘username’ or ‘password’ fields are missing
-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 201: user created

User Login (Sign in)
--------------------

POST /login **Headers**: Content-Type: application/x-www-form-urlencoded
**Description**: Checks username/password and grants the user the right
to execute other calls. This API returns a session token that must be
provided into subsequent calls. **Body payload**\ 
username={username}&password={password}&appcode={appcode}&login\_data={“os”:”{ios\|android}”,
“deviceId”:”{……..}”}

-  **username**: mandatory. The username of the user
-  **password**: mandatory. The user’s password
-  **appcode**: mandatory. The APP CODE (by default it is 1234567890)
-  **login\_data**: optional. It may contain relevant information about
   user device, used to send him push notification. The login\_data
   field, if present, must be a valid JSON object containing two fields:
   os to specify the device operating system, and deviceId which is the
   device id provided by Apple or Google when the App requires to handle
   their push notification (see tutorials to know how to request it). os
   could be both ios for ios (Apple) devices, or android for Android
   (Google) devices.

**Example of valid login\_data content is**:

.. raw:: html

   <pre>
   {

     "os":"android",

     "deviceId":"xxxxxxxxxxxxxx"

   }
   </pre>

Note that in this way a user could login from different devices at the
same time. **Returns**:

-  Code 500: the server cannot fulfill the request, an internal server
   error occurred
-  Code 401: user unauthorized to perform the operation
-  Code 400: ‘username’, ‘password’ or ‘appcode’ field is missing
-  Code 200: OK. The server replies with a JSON object containing the
   X-BB-SESSION field which is the session token to use in subsequent
   requests as a request header

.. raw:: html

   <pre>
   {

       "result": "ok",

       "http_code": 200,

       "data": {

           "X-BB-SESSION": "9b3c7234-e0eb-4861-8a25-6874d232efd0"

       }

   }
   </pre>

Note that if not used the token will expire in 15 minutes. In that case
a new login must be performed. The token expiration does not delete the
device ID info so the user may continue to receive push notifications.

POST /logout/:deviceId **Headers**: X-BB-SESSION: The Session Token \*
X-BB-SESSION must contain the session token provided by the login API
**Parameters**\  \* deviceId: the deviceId used in the login API
**Description**: This API allows a user to logout from the App on a
specific device. Push notification will not be sent to the user through
the specified device. **Returns**:

-  Code 500: the server cannot fulfill the request, an internal server
   error occurred
-  Code 400: The session token is malformed or expired, the server
   cannot retrieve the App Code associated
-  Code 204: NO CONTENT. the user has successfully logged out. The
   associated device has been removed.

Password Reset
--------------

GET /user/:username/password/reset **Headers**: X-BAASBPX-APPCODE: The
App Code **Parameters**\ 

-  **username**: the username of the user who wants to reset the
   password

**Description**: Allows to reset a user password. This API is useful
when a user forgot their password and needs to reset it. In order to
work, this function needs an email field to be present with a valid
email addressthat in the visibleByTheUser field of the user profile.
**This is the workflow of this function**: A user needs to reset their
forgotten password. The App must call the /user/:username/password/reset
API where :username is the placeholder to substitute with the username.
The server checks if the email address is present within the
visibleByTheUser fields in the user profile The server sends an email to
that address with a generated link to follow to reset the password The
user opens the email and opens the given link in a web browser A form is
shown with two html password fields. The user fills in the two fields
and submits the form A confirmation message is shown by the server Many
settings can be setup by the administrator via the Settings menu in the
admin console, or via the Settings API **Some of them are**: The SMTP
Server configuration The email message to be sent The HTML Form to show
in order to reset the password The confirmation and the error web page
**Returns**:

-  Code 500: the server cannot fulfill the request, an internal server
   error occurred
-  Code 400: the X-BAASBOX-APPCODE header is not valid or it is empty or
   the email address is not configured for the given user
-  Code 200: OK. The reset email was sent

Retrieve a user profile
-----------------------

GET /user **Headers**: See the [[General Section\|General Remarks]] for
authentication hints. **Description**: Retrieves the information about
the user. Specifically the following JSON is returned:

.. raw:: html

   <pre>
   {

       "visibleByTheUser": {...},

       "visibleByFriend": {...},

       "visibleByRegisteredUsers": {...},

       "visibleByAnonymousUsers": {...}

   }
   </pre>

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 401: Credentials supplied in the ‘authorization’ header are
   invalid or missing
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 200: OK: retrieves he JSON object representing the current user

Update a user
-------------

PUT /user **Headers**: See the [[General Section\|General Remarks]]
**Body payload**\  A JSON object like this:

.. raw:: html

   <pre>
   {

       "visibleByTheUser": {...},

       "visibleByFriend": {...},

       "visibleByRegisteredUsers": {..},

       "visibleByAnonymousUsers": {...}

   }
   </pre>

-  **visibleByTheUser** is an object whose fields are private and
   visible only by the user
-  **visibleByFriend** is an object whose fields are visible by the user
   and their friends (for future friendship management)
-  **visibleByRegisteredUsers** is an object whose fields are visible by
   the user, their friends, any registered user
-  **visibleByAnonymousUsers** is an object whose fields are public and
   visible by everyone, even anonymous users **Description**: Update an
   user profile information. WARNING: the sent data will overwrite
   pre-existent **Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 401: Credentials supplied in the ‘authorization’ header are
   invalid or missing
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 200: OK: retrieves the JSON object representing the current user

Change password
---------------

PUT /user/password **Headers**: See the [[General Section\|General
Remarks]] **Body payload**\  A JSON object like this:

.. raw:: html

   <pre>
   {

   "old": "the old password",

   "new": "the new password"

   }
   </pre>

both old and new fields are mandatory. **Description**: Changes the
password of a user. **Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 401: Credentials supplied in the ‘authorization’ header are
   invalid or missing
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 400: the old password is invalid
-  Code 200: OK

Test if a username already exists
---------------------------------

**Not yet implemented**\  GET /user/:username/exists **Headers**: See
the [[General Section\|General Remarks]] **Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 401: Credentials supplied in the ‘authorization’ header are
   invalid or missing
