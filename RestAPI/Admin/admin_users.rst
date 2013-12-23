Users
=====

Admin APIs to manage users 

**Retrieve all the registered users**: ``GET
/admin/user`` 

**Headers**: See the :doc:`/RestAPI/general_remarks`

**QueryString**: See the :doc:`/RestAPI/general_remarks`

**Description**: Returns a JSON list of all current registered users

**Returns**:

-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 400: an attempt of potential sql-injection attack has been detected. Check the query string parameters
-  Code 200: OK: Retrieve the list of all users but the default admin user
   
Admin APIs to manage follow/unfollow
====================================

**Create a follow relationship **: ``POST /admin/Fw/:follower/to/:tofollow``

**Headers**: See the :doc:`/RestAPI/general_remarks`

**Description**: Create a follow relationship between user follower and user to follow

**Parameters**:

  -  follower: user follower 
  -  tofollow: user to follow
  
**Returns**:

-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 404: both or either users do not exist
-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 400: user :follow is already a friend of :tofollow
-  Code 400: cannot create followship relationship with internal users
-  Code 200: OK
   
**Delete a follow relationship **: ``DELETE /admin/Fw/:follower/to/:tofollow``

**Headers**: See the :doc:`/RestAPI/general_remarks`

**Description**: Delete a follow relationship between user follower and user to follow

**Parameters**:

  -  follower: user follower
  -  tofollow: user to follow
  
**Returns**:

-  Code 500: the servers cannot fulfill the request, an internal server error occurred
-  Code 404: user :follower is not a friend of :tofollow
-  Code 404: both or either users do not exist
-  Code 400: the X-BAASBOX-APPCODE contains an invalid application code
-  Code 200: OK