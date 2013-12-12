System Metrics
==============

By calling these APIs it is possible to retrieve information about the
system and its resources usage 

**Retrieve some system statistics**: ``GET
/admin/dbStatistics`` 

**Headers**: See the :doc:`/RestAPI/general_remarks`

**Description**: Returns a set of statistics about DB and
memory usage. User must belong to the Admin Role 

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 403: the user is not an Admin
-  Code 200: OK: JSON object and statistics
