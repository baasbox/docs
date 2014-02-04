DB Management
=============

Export database
---------------

``POST /admin/db/export`` 

**Headers**: See the :doc:`/RestAPI/general_remarks`

**Description**: Generate a full dump of the db in an asynchronous task.

P.S. The async nature of the method DOES NOT ensure the creation of the file.

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 404: file not created
-  Code 202: ACCEPTED and returns the filename of the file that will be generated
         

Retrieve all backup files
-------------------------
``GET /admin/db/export``

**Headers**: See the :doc:`/RestAPI/general_remarks`

**Description**: Returns the list as a JSON array of all the export files stored into the db export folder

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 200: OK and returns a JSON representation containing the list of files stored in the db backup folder

Retrieve a backup file
---------------
``GET /admin/db/export/:filename``

**Headers**: See the :doc:`/RestAPI/general_remarks`

**Description**: Returns a file in the backup folder

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 404: file not present
-  Code 200: OK and returns the stream of the file

Drop a database
---------------
``DELETE /admin/db/:timeout``

**Headers**: See the :doc:`/RestAPI/general_remarks`

**Description**: Drop database with a timeout (if specified) and creates a new clean one (returns to initial stage)

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 200: OK



Delete a backup file
--------------------
``DELETE /admin/db/export/:filename``

**Headers**: See the :doc:`/RestAPI/general_remarks`

**Description**: Deletes an export file from the db backup folder, if it exists

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 404: file not found
-  Code 200: OK: the file was correctly deleted 

Import database
---------------
``POST /admin/db/import``

**Headers**: See the :doc:`/RestAPI/general_remarks`

**Description**: Uploads a JSON export file and applies it to the db.

**WARNING:** all data on the db will be wiped out before importing

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 200: OK


