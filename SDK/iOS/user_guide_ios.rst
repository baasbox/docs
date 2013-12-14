User Guide iOS
==============

The Baasbox iOS SDK is meant to get you quickly started in performing
CRUD operations on your custom data objects. The goal of guide is to
illustrate the essential steps to build your first application in five
minutes. Let's get started!

Download the latest version of iOS SDK
`here <http://www.baasbox.com/?wpdmact=process&did=OS5ob3RsaW5r/>`_

Authentication
--------------

The first step of each application is to login or signup a new user.
Once you have imported the SDK into your project, you can login using
the following code snippet.

.. code-block:: c

   BAAClient *client = [BAAClient sharedClient];   [client authenticateUsername:@"john" 
                   withPassword:@"supersecretpassword"	      completionHandler:^(BOOL success, NSError *error) { 
        if (success) {		NSLog(@"user authenticated %@", 
                      client.authenticatedUser);	} else {		NSLog(@"error in logging in %@", 
                      error.localizedDescription);	}
    }];

Notice that the information about the user (e.g. username and
authentication token) is automatically saved by the SDK. Once you get
into the success part of the block you are authenticated and you can
make other authenticated calls.

Sign up
-------

Using the SDK you can even allow the creation of new users. The pattern
is pretty similar to the login. Here is an example.

.. code-block:: c

	BAAClient *client = [BAAClient sharedClient];	[client createUserWithUsername:@"john" 
			   andPassword:@"supersecretpassword"	             completionHandler:^(BOOL success, NSError *error) { 
			if (success) {				NSLog(@"user created %@", client.authenticatedUser);			} else {				NSLog(@"error in creating user: %@", error); 
			}            }];



Notice that when this call is Whenever you need to know if you are
authenticated you can use the following code.

.. code-block:: c

	BAAClient *client = [BAAClient sharedClient]; 
	if (client.isAuthenticated) {		// authenticated } 
	else {		// not authenticated. Login or signup.
	}


Creating a Model
----------------

When you are building an application chances are you are saving data in
a custom model of yours. For example, a very simple model for a blog
post has a title and a body. To build a model in the iOS Baasbox SDK
there are two key steps:

-  inheriting from ``BAAObject``
-  implementing the ``initWithDictionary:`` and collectionName methods

To build a custom data model, say ``SMPost``, you have to simply extend the
``BAAObject`` class, as follows.

.. code-block:: c
	
	@interface SMPost : BAAObject	@property (copy) NSString *postTitle; @property (copy) NSString *postBody;	@end

By extending the ``BAAObject`` you will inherit functionalities like:

-  automatic serialization of custom objects in JSON format
-  helper methods for creating/updating/reading/deleting objects on the
   backend

The second step is to implement two methods, ``initWithDictionary:`` and
``collectionName``. The first method allows you to deserialize the JSON
returned by the server into your custom object. Here is an example for
our ``SMPost`` class.

.. code-block:: c

	(instancetype) initWithDictionary:(NSDictionary *)dictionary { 
          self = [super initWithDictionary:dictionary];	   if (self) {		_postTitle = dictionary[@"postTitle"]; 
		_postBody = dictionary[@"postBody"];	   }	   return self;

Finally you need to implement the ``collectionName`` method. This is the
name of the collection[LINK TO COLLECTION] on the server side, that will
hold all the instances of class ``SMPost``. Here is an example:

.. code-block:: c

	(NSString *)collectionName { 
		return @"document/posts";	}	@end

Once you have completed these two steps you are ready to start
interacting with the server, performing CRUD operations on posts.

Creating and saving objects
---------------------------

When you have your data classes extending ``BAAObject`` you can easily save
your instances on the server. For example this is a snippet that creates
an instance of post and saves it on the back end.

.. code-block:: c

	SMPost *p = [[SMPost alloc] init]; 
	p.postTitle = @"Title"; 
	p.postBody = @"Body";	[SMPost saveObject:p		completion:^(SMPost *post, NSError *error) {		    if (error == nil) {			NSLog(@"created post on server %@", post);		    } else {			NSLog(@"error in saving %@", error);		    }
		 }];

In the completion block you can either check for the error to be nil or
the object to be not nil. The ``saveObject:completion:`` method can be also
used to update an existing object. 

Deleting objects
----------------

To delete an existing object on the back end you can use the
``deleteObject:completion:`` like this.

.. code-block:: c

	// p is an instance of post	[SMPost deleteObject:p withCompletion:^(BOOL success, NSError *error) { 
	   if (success) {		NSLog(@"Post deleted"); } 
	   else {		NSLog(@"Post not deleted %@", error.localizedDescription); 
           }	}];

Loading objects
---------------

To load a collection of objects you just call the class methods
``getObjectsWithCompletion:``

.. code-block:: c

	[SMPost getObjectsWithCompletion:^(NSArray *objects, NSError *error) {	}];


This method will return an array of instances of ``SMPost``. When loading
lists of objects this way all the results are paginated. This call will
return the first page of results using the default page length parameter
set in the SDK. If you want to tweak it look for ``BAAPageLength``. If you
need to specify page number and size look at the following section. 

Pagination 
----------

To allow you loading objects in a paginated way you can
use the following method

.. code-block:: c

	[SMPost getObjectsWithParams:@{kPageNumber : @0, kPageSize : @10} 		     	
	                  completion:^(NSArray *objects, NSError *error) {	     if (error == nil) {		_posts = [objects mutableCopy]; 
                [self.tableView reloadData];	     } else {		 NSLog(@"error %@", error.localizedDescription);	     } 
	 }];

Page number and size will be injected in the http call that retrieves
the elements. As the previous example the result is an array of ``SMPost``
instances.

Getting Started Tutorial
------------------------

:doc:`Build an App now! <getting_started_ios>` Go to our :doc:`Getting Started Tutorial <getting_started_ios>` to learn how to integrate BaasBox into
an existing application. The application is called DearDiary and it’s a
personal diary. :doc:`Go to Tutorial <getting_started_ios>`
