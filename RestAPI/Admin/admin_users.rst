Users
=====

Admin APIs to manage users 

**Retrieve all the registered users**: ``GET
/admin/user`` 

**Headers**: See the :doc:`general_remarks`

**QueryString**: See the :doc:`general_remarks`

**Description**: Returns a JSON list of all current registered users

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 400: an attempt of potential sql-injection attack has detected.
   Check the query string parameters
-  Code 200: OK: Retrieve the list of all users but the default admin
   user