Collections
===========

A collection is a sort of bucket where you can store documents.
Documents, also known as records, are schema-less, which means that
there are no constraints on their fields definition or data type.

Soon BaasBox will provide methods to set up a sort of constraint at
schema level.

The records stored in a collection have a per-user-record-security-level. I.e. each
record can be accessed only by the user who created them. Of course
there are APIs to grant or revoke privileges to other users.

Create a new collection
-----------------------

``POST /admin/collection/{collection name}``

**Headers**: See :doc:`general_remarks`

**Description**: Creates a new collection with the name specified in
URL. User must belong
to the Admin Role. The name of a collection MUST start with an alphabetic character,
CAN contain any alphanumeric character (latin letter and arabic digits). 
Underscore and dash are also allowed. The name of a collection is treated as case-insensitive.

**Returns**:

Code 400: the X-BAASBOX-APPCODE contains an invalid application code

Code 500: the servers cannot fulfill the request, an internal server
error occurred

Code 400: collection name is invalid

Code 403: the user is not an Admin

Code 201: collection created


Delete a collection
-------------------

``DELETE /admin/collection/{collection name}``

**Headers**: See :doc:`general_remarks`

**Description**: Deletes an existing new collection with the name specified in the
URL. The user calling this API must belong to the Admin Role. 

**Warning**: When you delete a collection all the objects store in it are deleted as well.

**Returns**:

Code 400: the X-BAASBOX-APPCODE contains an invalid application code

Code 500: the servers cannot fulfill the request, an internal server
error occurred

Code 400: collection name is invalid

Code 403: the user is not an Admin

Code 201: collection deleted