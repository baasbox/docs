Documents
================

Create a document
-------

POST /document/:collection **Headers**: See authorization header in the
[[General Remarks\|General Remarks]] **Description**: Create a new
document into the specified collection. The collection must exist and
must have been previously created by the admin. **Body payload**\  Any
valid JSON string. **Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 404: the collection specified does not exist
-  Code 200: OK and unique ID will be returned.

The @ID field is the unique ID of the document. **NOTE on Record
Security Level**\  By default documents are private and visible only to
the user who has created them. The owner can update and delete
documents. Their friends (feature not fully implemented) can only see
the documents. All other users but the admins cannot have any kind of
access to the documents.

Modify a document
-------

PUT /document/:collection/ID **Headers**: See authorization header in
the [[General Remarks\|General Remarks]] **Description**: Updates the
document content. WARNING: the content is replaced, neither added nor
merged. Only the owner of the document and the admin, or backoffice
users, can modify it. **Body payload**\  Any valid JSON string.
**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 403: FORBIDDEN, the user does not have the necessary privilege
   to update the document
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 404: the collection specified does not exist
-  Code 200: OK and the internal JSON document representation.

The @ID field is the unique ID of the document.

Retrieve a document
-------

GET /document/:collection/ID **Headers**: See authorization header in
the [[General Remarks\|General Remarks]] **Description**: Retrieves the
specified document Only the owner of the document and the admin or
backoffice users can retrieve it.

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 403: FORBIDDEN, the user does not have the necessary privilege
   to update the document
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 404: the collection specified does not exist
-  Code 200: OK and the internal JSON document representation.

The @ID field is the unique ID of the document.

Retrieve a document only by its ID
-------

GET /document/ID **Headers**: See authorization header in the [[General
Remarks\|General Remarks]] **Description**: Retrieves the specified
document **Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 403: FORBIDDEN, the user does not have the necessary privilege
   to update the document
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 404: the collection specified does not exist
-  Code 200: OK and the internal JSON document representation.

The @ID field is the unique ID of the document.

Delete a document
-------

DELETE /document/:collection/ID **Headers**: See authorization header in
the [[General Remarks\|General Remarks]] **Description**: Delete a
document in the specified collection Only the owner of the document and
the admin or backoffice users can delete it. **Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 204: Document deleted
-  Code 404: Document not found, or collection not found or document
   doesn’t belong to the collection

Count the number of documents in a collection
-------

GET /document/:collection/count **Headers**: See authorization header in
the [[General Remarks\|General Remarks]] **Description**: Returns the
number of documents that the USER COULD READ in a collection. Pay
attention because there could be documents that the user cannot read,
and therefore are not included **Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 404: the collection does not exist
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 200: OK, and a JSON list of documents

Retrieves a list of Documents
-------

GET /document/:collection **Headers**: See authorization header in the
[[General Remarks\|General Remarks]] **Description**: Returns the
documents that the USER CAN READ in a collection. Pay attention because
there could be documents that the user cannot read, and therefore will
not be retrieved **Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 404: the collection does not exist
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 200: OK, and a JSON list of documents
