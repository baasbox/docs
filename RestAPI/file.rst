File
====

Available since version 0.7.3
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

BaasBox has been able to store and manage files since its 0.7.3 version.
Every registered user can store files of any kind and associate an
arbitrary JSON object to them, as Assets already can. Unlike them,
however, only the user who created them, administrators and users who
have the role of "BackOffice" can access such files, as well as the
documents. Moreover, it is possible to enter queries through selection
and ordering criteria on the JSON data associated to the files.

The maximum size of a file is 2GB, but we do not recommend reaching such
size, since BaasBox is software that provides backend services for
mobile Apps. Currently we do not support resume functions for upload and
download.

Create a file
-------------

``POST /file`` 

**Headers**: See the :doc:`general_remarks` 
and:

  -  content-type: multipart/form-data

**Description**: This API store a new file into the BaasBox embedded DB.

**Body payload** The body can contain the following fields:.

-  file: **MANDATORY**. The file itself
-  attachedData: optional. A string representing a valid JSON string.
   Here you can store any data associated to the file.

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 400: the "file" field is not present in the received request
-  Code 401: user unauthorized.
-  Code 201: file created
-  Code 200: OK and unique ID will be returned.

If BaasBox stores a file, it will return a JSON string with all the data
representing the file itself, including the unique identifier (ID) to
retrieve it later.

Delete a file
-------------

``DELETE /file/:id``

**Headers**:

-  See the :doc:`general_remarks` 
-  User must have the right to delete the file

**Description**: This API deletes a given file

**Parameters**

-  id: the unique identifier of the file

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 401: user unauthorized
-  Code 404: file not found
-  Code 200: OK. The file has been deleted.

Stream a file
-------------

``GET /file/:id``

**Headers**:

-  See the :doc:`general_remarks` 

-  User must have the right to read the file

**Description**: Stream the content of the file to the client

**Parameters**:

-  id: the unique identifier of the file

**QueryString**:

- download: when true the **"Content-Disposition"** header with the **attachment; filename="<filename>"** value is sent. This allows the browsers to download the file instead of trying to manage it themselves (as it happens with images for example)
- resize: same as assets (whose explanation you can look at) it tells the server that the image you want to retrieve has to be resized. Allowed values are those defined in the image settings.
- sizeId: same as assets. Instead of specifying a value for resizing, it refers to the list of allowed formats. This value is a zero-based array index relating to the list of those values allowed in the image settings.

**Image settings**
The value list for allowed formats is not comma-separated, as wrongly stated so far, but it is space-separated. 
A new format was added:
<=nnpx
where nn is the number of pixels.
With this format we want the size of the returned image to be no more than nn pixels both in height and in width. Basically, should one of the two exceed the value of nn, it automatically gets resized to nn and the other parameter scales, keeping the same aspect ratio.

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 401: user unauthorized
-  Code 404: file not found
-  Code 200: OK. The file content is returned

Retrieve a file details
-----------------------

``GET /file/details/:id``

**Headers**:

-  See the :doc:`general_remarks` 
-  User must have the right to read the file

**Description**: Returns revenant data about a stored file:

-  the original file name
-  its content type
-  its content length
-  its attached data
-  the user that stored the ID
-  the storage data

**Parameters**

-  id: the unique identifier of the file

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 401: user unauthorized
-  Code 404: file not found
-  Code 204: Document deleted

Retrieve only the attached data for a given file:
-------------------------------------------------

``GET /file/attachedData/:id``

**Headers**:

-  See the :doc:`general_remarks` 
-  User must have the right to read the file

**Description**: Returns the attached data related to a given file. IE:
returns the JSON object sent when the file was been created.

**Parameters**:

-  id: the unique identifier of the file

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 401: user unauthorized
-  Code 200: OK. The data are returned

Retrieves details of all the stored files
-----------------------------------------

``GET /file/details``

**Headers**:

-  See the :doc:`general_remarks` 
-  User must have the right to read the files

**Description**: Returns relevant data about all the stored files.
Please note that only the files that can actually be read from the user
are returned.

For each file the following data are returned: \* the original file name
\* its content type \* its content length \* its attached data \* the
user that stored id \* the storage date

NOTE: this API supports QueryStrings selection and sort criteria. Please
refer to the Query Criteria section in the [[General Remarks\|General
Remarks]] page.

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 401: user unauthorized
-  Code 404: file not found
-  Code 200: OK. The data are returned.

Grant/revoke user/role
----------------------

``PUT /file/:id/:action/user/:username`` or ``PUT
/file/:id/:action/role/:rolename``

**Headers**: See authorization header in the :doc:`general_remarks` 
**Description**: Grant a user (o an entire role) specific permission on
a file.

**Parameters:**

-  :id is the unique id of the file
-  :action is the kind of grant you want to give: "read", "update",
   "delete", "all"
-  :username is the user to give the grant
-  :rolename is the name of a role. in this case every user belonging to
   that role will have the specified grant.

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 404: the id does not exist
-  Code 500: the servers cannot fulfill the request, an internal server
   error occurred
-  Code 200: OK

**To revoke a permission just use DELETE instead of PUT**
