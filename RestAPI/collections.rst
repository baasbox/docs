Collections
===========

A collection is a sort of bucket where you can store documents.

Documents, also known as records, are schema-less, which means that
there are no constraints on their fields definition or data type.

Soon BaasBox will provide methods to set up a sort of constraint at
schema level.

Another very important feature to know about collections is that the
records stored in them have a per-user-record-security-level. I.e. each
record can be accessed only by the user who created them. Of course
there are APIs to grant or revoke privileges to other users.

**Create a new Collection**: ``POST /admin/collection/{collection name}``

**Headers**: See the :doc:`general_remarks`

**Description**: Creates a new collection with the name specified in
URL. A Collection is a way to classify the Documents. User must belong
to the Admin Role

**Returns**:

Code 400: the X-BAASBOX-APPCODE contains an invalid application code

Code 500: the servers cannot fulfill the request, an internal server
error occurred

Code 400: collection name is invalid

Code 403: the user is not an Admin

Code 201: collection created
