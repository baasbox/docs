.. _rest-API:

Settings
========

Settings, or “App Configuration” are App related configuration options.
These settings are not intended to act at server configuration level,
such as, for example, listening port, or log location, but they are
intended to set up many APP specific parameters, like the App name, the
Push Certificate supplied by Apple, and so on. Settings are split in
different sections or topics. **Available sections are**:

-  **PasswordRecovery**: this section contains many settings that affect
   the password recovery workflow
-  **Application**: Application specific parameters, such as the App
   Name
-  **Push**: Push notifications related settings
-  **Images**: specific settings for images (Assets file) processing

PLEASE NOTE that only users belonging to administrator roles can call
these APIs

Retrieve current settings
-------------------------

GET /admin/configuration/dump.json **Headers**: Please see the [[General
Remarks\|General Remarks]] **Parameters**: None **Description**: Returns
a JSON representing the current configuration. The JSON has the
following format:

.. raw:: html

   <pre>
   {

       "result": "ok",

       "http_code": 200,

       "data": [

           {

               "section": "...the section name",

               "description": "... a brief description of the section....",

               "sub sections": {

                 "..a subsection ...": [

                       {

                           "...a key of a setting...": "...the value...",

                           "description": "...the key description...",

                           "type": "...the data type of the value..."

                       },

                       ....
   </pre>

**Returns**:

-  Code 500: the server cannot fulfill the request, an internal server
   error occurred
-  Code 400: the X-BAASBOX-APPCODE header is not valid or is empty
-  Code 401: The user is not authorized
-  Code 200: OK

Retrieve only one section
-----------------------

GET /admin/configuration/:section **Headers**: Please see the [[General
Remarks\|General Remarks]] **Parameters**\ 

-  **section**: one valid setting section

**Description**: Retrieves the settings of a specific section in a
key-value form. The returned JSON is:

.. raw:: html

   <pre>
   {

       "result": "ok",

       "http_code": 200,

       "data": [

           {

               "key": "...the key of the setting...",

               "value": "...its value...",

               "description": "...the setting description...",

               "type": "...the value data type..."

           },

           ....
   </pre>

Modify a value of a specific setting
-------------------------------------

PUT /admin/configuration/:section/:key/:value **Headers**: Please see
the [[General Remarks\|General Remarks]] **Parameters**\ 

-  **section**: one valid setting section
-  **key**: the key of the setting to modify
-  **value**: the new value

**Description**: Modifies the value of a specific setting. The new value
must be of the specific key data type.
