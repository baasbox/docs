iOS SDK
=======

Blocks format
-------------

There are three block types used throughout the iOS SDK. Each contains an ``NSError`` as the second parameter.
The first parameter is the result of the HTTP operation. There are three types of results:

* Object: single object already populated by parsing the JSON
* Array: array of objects of the same type you have requested.
* Boolean: boolean value returned by a ``YES`` or ``NO`` query

Here is the ``typedef`` definition

.. code-block:: objective-c

	typedef void (^BAAArrayResultBlock)(NSArray *objects, NSError *error);
	typedef void (^BAAObjectResultBlock)(id object, NSError *error);
	typedef void (^BAABooleanResultBlock)(BOOL success, NSError *error);

This is a quick example to load a set of files.

.. code-block:: objective-c

	[BAAFile getFilesWithCompletion:^(NSArray *objects, NSError *error) {

		if (error == nil) {
			// deal with returned pictures
		} else {
			// deal with error
		}

	}];

This returns an array of objects of class ``BAAFile`` and an error.
The suggested pattern within the block is to manipulate returned data if 
the error is ``nil``, and to deal with the error otherwise.

Authentication
--------------

Login
^^^^^

To login you need an instance of BAAClient as follows

.. code-block:: objective-c

    BAAClient *client = [BAAClient sharedClient];
    [client authenticateUser:@"user"
                    password:@"password"
                  completion:^(BOOL success, NSError *error) {
                      
				if (success) {
					// login successfull
				} else {
					// show error
				}
				
    }];

Notice that the authentication token for the logged in user is parsed and stored automatically.
To access the currently logged user you can use this code snippet.

.. code-block:: objective-c

	BAAClient *client = [BAAClient sharedClient];
	client.currentUser

This will return an instance of ``BAAUser``.

Signup
^^^^^^

If you want to create a new account this is the way.

.. code-block:: objective-c

	BAAClient *client = [BAAClient sharedClient];
	[client createUserWithUsername:@"user"
	                      password:@"password"
	                    completion:^(BOOL success, NSError *error) {
                       
					if (success) {
						// signed up
					} else {
						// display error
					}
                        
	 }];

Like in the login API, data related to the currently logged users are available
as a property of the ``BAAClient`` class.

.. code-block:: objective-c

	BAAClient *client = [BAAClient sharedClient];
	client.currentUser



	
Users
=====

On the backend each user has by default four fields: ``visibleByTheUser``, ``visibleByFriends``, ``visibleByRegisteredUsers``, ``visibleByAnonymousUsers``. These fields are automatically populated by the SDK when the JSON is retrieved.



Fetch users
-----------

You can load a list of registered users on the backend using the following method.

.. code-block:: objective-c

	[BAAUser loadUsersWithParameters:nil
	                     completion:^(NSArray *objects, NSError *error) {

				if (error == nil) {
					// deal with users array
				} else {
					// show error
				}
                         
	}];

The block will include an array of ``BAAUser`` instances or an error. You can provide parameters for pagination. Here is an example that fetches the first 20 users.

.. code-block:: objective-c

	[BAAUser loadUsersWithParameters:@{kPageNumber : @0, kPageSize :@20} 
	                      completion:^(NSArray *objects, NSError *error) {
	
							// ...						
							
						}];

Fetch user details
------------------

To retrieve the details of a single user you can use the following method

.. code-block:: objective-c

	[BAAUser loadUserDetails:@"cesare" 
	              completion:^(BAAUser *user, NSError *error)completion {

				if (error == nil) {
					// deal with user
				} else {
					// show error
				}
                      
	 }];
	
	
Fetch users the logged in user is following
-------------------------------------------

BaasBox has the follow/unfollow functionality built in. To retrieve the list of people followed by the logged in user you can use this method.

.. code-block:: objective-c

	BAAUser *user = ...;
	[user loadFollowingWithCompletion:^(NSArray *following, NSError *error) {
		if (error) {
			// deal with retrieved list
		} else {
			// show error
		}
	}];
	
The array is populated with instances of ``BAAUser``.



Fetch the followers of the logged in user
-----------------------------------------

To retrieve the followers the logged in user you can use this method.

.. code-block:: objective-c

	BAAUser *user = ...;
	[user loadFollowersWithCompletion:^(NSArray *following, NSError *error) {
		if (error) {
			// deal with retrieved list
		} else {
			// show error
		}
	}];
	

Follow
------

The currently logged user can follow another user via this method.

.. code-block:: objective-c

	BAAUser *userToBeFollowed = ...;
	[BAAUser followUser:userToBeFollowed 
	         completion:^(BAAUser *user, NSError *error) {
           
				if (error == nil) {
					// deal with user
				} else {
					// show error
				}
            
	        }];

Unfollow
--------

The currently logged in user can unfollow another user via this method.

.. code-block:: objective-c

	BAAUser *userToBeUnfollowed = ...;
	[BAAUser unfollowUser:userToBeUnfollowed 
	           completion:^(BOOL success, NSError *error) {

				if (success) {
					// update UI
				} else {
					// show error
				}

	        }];
	
Objects
=======

Subclassing BAAObject
---------------------

You can create custom object in your app by subclassing ``BAAObject``. Here is an example of a custom class representing a post with two custom properties: a title and a body.

.. code-block:: objective-c

	// SMPost.h
	@interface SMPost : BAAObject

	@property (nonatomic, copy) NSString *postTitle;
	@property (nonatomic, copy) NSString *postBody;

	@end
	
	// SMPost.m
	#import "SMPost.h"

	@implementation SMPost

	- (instancetype) initWithDictionary:(NSDictionary *)dictionary {

	    self = [super initWithDictionary:dictionary];

	    if (self) {

	        _postTitle = dictionary[@"postTitle"];
	        _postBody = dictionary[@"postBody"];

	    }

	    return self;

	}

	- (NSString *)collectionName {

	    return @"document/posts";

	}

	@end

There are two key methods to override. The first is ``initWithDictionary:``, in which you should populate the object with the properties you have added in the header. The second is ``collectionName`` and should return the path that points to the collection on the back end. The SDK takes care of JSON serialization and deserialization of your custom class.

**Note**: when the SDK serializes a custom class to JSON it will use the same property name that you have specified in the code. For example the ``SMPost`` class will be serialized like this:

.. code-block:: objective-c

	{
	  "postBody": "Body of post",
	  "postTitle": "My title"
	}
	

Fetching objects
----------------

You can retrieve a list of custom objects this way.

.. code-block:: objective-c

	[SMPost getObjectsWithCompletion:^(NSArray *objects, NSError *error) {
                      
	                      if (error == nil) {
	                          // show objects                          
	                      } else {
	                         // show error                          
	                      }
                      
	                  }];
	

As you can see this is a method of a custom class inherited from ``BAAObject``. This means that the instances in the objects array are of the same class (``SMPost`` in the example). This call uses default parameters for pagination. If you want to specify parameters in the query you can use the following method

.. code-block:: objective-c

	[SMPost getObjectsWithParams:@{kPageNumber : @0, kPageSize : @20}
	                  completion:^(NSArray *objects, NSError *error) {

	                      if (error == nil) {
	                      	// show objects
	                      } else {
	                        // show error
	                      }

	                  }];
	
This retrieves the first 20 objects of class SMPost stored on the back end.

Saving an object
----------------

Once you have an instance of a custom object you can save it this way.

.. code-block:: objective-c

	SMPost *post = ...;
	[SMPost saveObject:post
	        completion:^(SMPost *savedPost, NSError *error) {
            
	            if (error == nil) {
					// deal with savedPost
				} else {
					// show error
				}
	        }];

The ``saveObject:completion:`` automatically manages if an object is "new" (non yet saved on the back end) or simply needs to be updated. In both cases in will return a new instance that you can manipulate within the block.

Deleting an object
------------------

To delete an object you can use the following method.

.. code-block:: objective-c

	SMPost *postToBeDeleted = ... ;
	[SMPost deleteObject:postToBeDeleted
	          completion:^(BOOL success, NSError *error) {
				
					if (success) {
						// post deleted
					} else {
						// show error
					}

	          }];
	
Files
=====

Initializing a BAAFile instance
-------------------------------

The BaasBox SDK supports file upload and download. To manipulate a file you use the ``BAAFile`` class.
To initialize an instance you need ``NSData``. For example, if you want a ``BAAFile`` to represent an image
you can do it as follows.

.. code-block:: objective-c

	UIImage *image = ...;
	NSData *data = UIImageJPEGRepresentation(image, 1.0);
	BAAFile *file = [[BAAFile alloc] initWithData:data];
	file.contentType = @"image/jpeg";
	
Both data and content type are fundamental for the upload to succeed.


Uploading a file
----------------

To upload a file you can use this method.

.. code-block:: objective-c

	[file uploadFileWithCompletion:^(BAAFile *picture, NSError *error) {
		if (error == nil) {
			// upload successful
		} else {
			// show error
		}
	}];

You can attach metadata to a file before uploading it. Each instance of ``BAAFile`` has a handy property named attachedData (it's an ``NSMutableDictionary``) that allows you to store whatever you like. Here is a short example.

.. code-block:: objective-c

	[file.attachedData setObject:@"My title"
	                      forKey:@"title"];
	[file.attachedData setObject:@[@"spring", @"outdoor"] 
	                      forKey:@"tags"];
	[file.attachedData setObject:@{@"key" : @"value"} 
				          forKey:@"dict"];
			
The data in this property will be retrieved whenever you load the file from the back end.

Downloading a file
------------------

To load a file you can use this method.

.. code-block:: objective-c

	BAAFile *file = ...;
	[file loadFileWithCompletion:^(NSData *data, NSError *error) {

	    	if (error == nil) {
				// deal with data
			} else {
				// show error
			}
    
	}];
	
ACL on files
------------

When you have uploaded a file you can grant access to other users. Here is the method.

.. code-block:: objective-c

	BAAFile *file = ...;
	[uploadedPicture grantAccessToRole:kAclRegisteredRole
	                            ofType:kAclReadPermission
	                        completion:^(id object, NSError *error) {

			            if (error == nil) {
			                // ok
			            } else {
			               // error
			            }
	}];

You can specify one of the following types of roles:

* ``kAclAnonymousRole``, publicly visible
* ``kAclRegisteredRole``, visible by whoever has an account on the back end
* ``kAclAdministratorRole``, visible only by the administrator


Permissions are represented by the following constants:

* ``kAclReadPermission``, permission to read a file
* ``kAclDeletePermission``, permission to delete a file
* ``kAclUpdatePermission``, permission to update a file

