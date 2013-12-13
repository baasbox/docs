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
                   withPassword:@"supersecretpassword"	completionHandler:^(BOOL success, NSError *error) { 
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

.. raw:: html

   <pre>
   <html>
   <!-- Sign Up-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:230px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                               <br>
                               9
                               <br>
                               10
                               <br>
                               11
                               <br/>
                               12
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="class">BAAClient</span> *client = [BAAClient sharedClient];
                               <br/>
                               [client createUserWithUsername:<span class="string">@"john"</span>
                               <br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">andPassword:</span><span class="string">@"supersecretpassword"</span>
                               <br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completionHandler:^</span>(<span class="specialoperator">BOOL</span> success, NSError *error) {                           <br/>
                               <span class="tab1"></span><span class="specialoperator">if</span> (success) {
                               <br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"user created %@",</span>
                               <br/>
                               <span class="tab3"></span> client.authenticatedUser); <span class="tab1"></span>
                               <br />
                               <span class="tab1"></span>}
                               <br />
                               <span class="tab1"></span><span class="specialoperator">else</span>{
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"error in creating user: %@"</span>, error);
                               <br/>
                               <span class="tab1"></span>}
                               </br />
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

Notice that when this call is Whenever you need to know if you are
authenticated you can use the following code.

.. raw:: html

   <pre>
   <html>
   <!-- Notice Sign Up-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:120px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="class">BAAClient</span> *client = [BAAClient sharedClient];
                               <br/>
                               <span class="specialoperator">if</span> (client.isAuthenticated) {
                               <br />
                               <span class="tab1"></span>// authenticated
                               <br/>
                               } <span class="specialoperator">else</span> {
                               <br />
                               <span class="tab1"></span>// not authenticated. Login or signup.
                               <br/>
                               }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

Creating a Model
----------------

When you are building an application chances are you are saving data in
a custom model of yours. For example, a very simple model for a blog
post has a title and a body. To build a model in the iOS Baasbox SDK
there are two key steps:

-  inheriting from BAAObject
-  implementing the initWithDictionary: and collectionName methods

To build a custom data model, say SMPost, you have to simply extend the
BAAObject class, as follows.

.. raw:: html

   <pre>
   <!-- Creating a Model-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:85px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="annotation">@interface</span> SMPost : BAAObject
                               <br />
                               <span class="annotation">@property</span> (copy) NSString *postTitle;
                               <br />
                               <span class="annotation">@property</span> (copy) NSString *postBody;
                               <br />
                               <span class="annotation">@end</span>
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

By extending the BAAObject you will inherit functionalities like:

-  automatic serialization of custom objects in JSON format
-  helper methods for creating/updating/reading/deleting objects on the
   backend

The second step is to implement two methods, initWithDictionary: and
collectionName. The first method allows you to deserialize the JSON
returned by the server into your custom object. Here is an example for
our SMPost class.

.. raw:: html

   <pre>
   <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:155px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               - (<span class="specialoperator">instancetype</span> *) initWithDictionary:(<span class="class">NSDictionary</span> *)dictionary {
                               <br />
                               <span class="tab1"></span>self = [super initWithDictionary:dictionary];
                               <br />
                               <span class="tab1"></span><span class="specialoperator">if</span> (self) {
                               <br />
                               <span class="tab2"></span>_postTitle = dictionary[<span class="string">@"postTitle"</span>];
                               <br />
                               <span class="tab2"></span>_postBody = dictionary[<span class="string">@"postBody"</span>];
                               <br />
                               <span class="tab1"></span>}
                               <br />
                               <span class="tab1"></span><span class="specialoperator">return</span> self;
                               <br />
                               }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

Finally you need to implement the collectionName method. This is the
name of the collection[LINK TO COLLECTION] on the server side, that will
hold all the instances of class SMPost. Here is an example:

.. raw:: html

   <pre>
   <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:85px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               - (<span class="specialoperator">NSString</span> *) collectionName {
                               <br />
                               &nbsp;&nbsp;<span class="specialoperator">return</span> <span class="string">@"document/posts"</span>;
                               <br />
                               }
                               <br />
                               <span class="annotation">@end</span>
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

Once you have completed these two steps you are ready to start
interacting with the server, performing CRUD operations on posts.

Creating and saving objects
---------------------------

When you have your data classes extending BAAObject you can easily save
your instances on the server. For example this is a snippet that creates
an instance of post and saves it on the back end.

.. raw:: html

   <pre>
   <!-- Creating and saving objects-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:210px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                               <br>
                               9
                               <br>
                               10
                               <br>
                               11
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="class">SMPost</span> *p = [[SMPost alloc] init];
                               <br />
                               p.postTitle = <span class="string">@"Title"</span>;
                               <br />
                               p.postBody = <span class="string">@"Body"</span>;
                               <br />
                               [SMPost saveObject:p
                               <br />
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completion:^</span>(SMPost *post, NSError *error) {
                               <br />
                               <span class="tab1"></span><span class="specialoperator">if</span> (error == <span class="specialcharacter">nil</span>) {
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"created post on server %@</span>", post);
                               <br />
                               <span class="tab1"></span>} <span class="specialoperator">else</span> {
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"error in saving %@</span>", error);
                               <br />
                               <span class="tab1"></span>}
                               <br />
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

In the completion block you can either check for the error to be nil or
the object to be not nil. The saveObject:completion: method can be also
used to update an existing object. 

Deleting objects
----------------

To delete an existing object on the back end you can use the
deleteObject:completion: like this.

.. raw:: html

   <pre>
   <!-- Deleting Objects-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:155px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="comment">// p is an instance of post</span>
                               <br />
                               [SMPost deleteObject:p <span class="field">withCompletion:^</span>(<span class="specialcharacter">BOOL</span> success, NSError *error) {
                               <br />
                               <span class="tab1"></span><span class="specialoperator">if</span> (success) {
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"Post deleted"</span>);
                               <br />
                               <span class="tab1"></span>} <span class="specialoperator">else</span> {
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"Post not deleted %@"</span>, error.localizedDescription);
                               <br />
                               <span class="tab1"></span>}
                               <br />
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

Loading objects
---------------

To load a collection of objects you just call the class methods
getObjectsWithCompletion:

.. raw:: html

   <pre>
   <!-- Loading Objects-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:50px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               [SMPost getObjectsWithCompletion:^(<span class="class">NSArray</span> *objects, <span class="class">NSError</span> *error) {
                               <br />
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

This method will return an array of instances of SMPost. When loading
lists of objects this way all the results are paginated. This call will
return the first page of results using the default page length parameter
set in the SDK. If you want to tweak it look for BAAPageLength. If you
need to specify page number and size look at the following section. 

Pagination 
----------

To allow you loading objects in a paginated way you can
use the following method

.. raw:: html

   <pre>
   <html>
   <!-- Pagination -->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:175px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                               <br/>
                               9
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               [SMPost getObjectsWithParams:@{kPageNumber : @0, kPageSize : @10}
                               <br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completion:^</span>(<span class="class">NSArray</span> *objects,<span class="class">NSError</span> *error) {
                               <br/>
                               <span class="tab1"></span><span class="specialoperator">if</span> (error == <span class="specialcharacter">nil</span>) {
                               <br/>
                               <span class="tab2"></span>_posts = [objects mutableCopy];
                               <br/>
                               <span class="tab2"></span>[self.tableView reloadData];
                               <br/>
                               <span class="tab1"></span>} <span class="specialoperator">else</span> {
                               <br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"error %@</span>", error.localizedDescription);
                               <br/>
                               <span class="tab1"></span>}
                               <br/>
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

Page number and size will be injected in the http call that retrieves
the elements. As the previous example the result is an array of SMPost
instances.

Getting Started Tutorial
------------------------

:doc:`Build an App now! <getting_started_ios>` Go to our :doc:`Getting Started Tutorial <getting_started_ios>` to learn how to integrate BaasBox into
an existing application. The application is called DearDiary and it’s a
personal diary. :doc:`Go to Tutorial <getting_started_ios>`
=======
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

    BAAClient *client = [BAAClient sharedClient];
    [client authenticateUsername:@"john" 
			withPassword:@"supersecretpassword"
		   completionHandler:^(BOOL success, NSError *error) { 
	if (success) {
		NSLog(@"user authenticated %@", 
		      client.authenticatedUser);
	} else {
		NSLog(@"error in logging in %@", 
		      error.localizedDescription);
	} 
    }];

Notice that the information about the user (e.g. username and
authentication token) is automatically saved by the SDK. Once you get
into the success part of the block you are authenticated and you can
make other authenticated calls.

Sign up
-------

Using the SDK you can even allow the creation of new users. The pattern
is pretty similar to the login. Here is an example.

.. raw:: html

   <pre>
   <html>
   <!-- Sign Up-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:230px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                               <br>
                               9
                               <br>
                               10
                               <br>
                               11
                               <br/>
                               12
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="class">BAAClient</span> *client = [BAAClient sharedClient];
                               <br/>
                               [client createUserWithUsername:<span class="string">@"john"</span>
                               <br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">andPassword:</span><span class="string">@"supersecretpassword"</span>
                               <br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completionHandler:^</span>(<span class="specialoperator">BOOL</span> success, NSError *error) {                           <br/>
                               <span class="tab1"></span><span class="specialoperator">if</span> (success) {
                               <br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"user created %@",</span>
                               <br/>
                               <span class="tab3"></span> client.authenticatedUser); <span class="tab1"></span>
                               <br />
                               <span class="tab1"></span>}
                               <br />
                               <span class="tab1"></span><span class="specialoperator">else</span>{
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"error in creating user: %@"</span>, error);
                               <br/>
                               <span class="tab1"></span>}
                               </br />
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

Notice that when this call is Whenever you need to know if you are
authenticated you can use the following code.

.. raw:: html

   <pre>
   <html>
   <!-- Notice Sign Up-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:120px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="class">BAAClient</span> *client = [BAAClient sharedClient];
                               <br/>
                               <span class="specialoperator">if</span> (client.isAuthenticated) {
                               <br />
                               <span class="tab1"></span>// authenticated
                               <br/>
                               } <span class="specialoperator">else</span> {
                               <br />
                               <span class="tab1"></span>// not authenticated. Login or signup.
                               <br/>
                               }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

Creating a Model
----------------

When you are building an application chances are you are saving data in
a custom model of yours. For example, a very simple model for a blog
post has a title and a body. To build a model in the iOS Baasbox SDK
there are two key steps:

-  inheriting from BAAObject
-  implementing the initWithDictionary: and collectionName methods

To build a custom data model, say SMPost, you have to simply extend the
BAAObject class, as follows.

.. raw:: html

   <pre>
   <!-- Creating a Model-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:85px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="annotation">@interface</span> SMPost : BAAObject
                               <br />
                               <span class="annotation">@property</span> (copy) NSString *postTitle;
                               <br />
                               <span class="annotation">@property</span> (copy) NSString *postBody;
                               <br />
                               <span class="annotation">@end</span>
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

By extending the BAAObject you will inherit functionalities like:

-  automatic serialization of custom objects in JSON format
-  helper methods for creating/updating/reading/deleting objects on the
   backend

The second step is to implement two methods, initWithDictionary: and
collectionName. The first method allows you to deserialize the JSON
returned by the server into your custom object. Here is an example for
our SMPost class.

.. raw:: html

   <pre>
   <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:155px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               - (<span class="specialoperator">instancetype</span> *) initWithDictionary:(<span class="class">NSDictionary</span> *)dictionary {
                               <br />
                               <span class="tab1"></span>self = [super initWithDictionary:dictionary];
                               <br />
                               <span class="tab1"></span><span class="specialoperator">if</span> (self) {
                               <br />
                               <span class="tab2"></span>_postTitle = dictionary[<span class="string">@"postTitle"</span>];
                               <br />
                               <span class="tab2"></span>_postBody = dictionary[<span class="string">@"postBody"</span>];
                               <br />
                               <span class="tab1"></span>}
                               <br />
                               <span class="tab1"></span><span class="specialoperator">return</span> self;
                               <br />
                               }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

Finally you need to implement the collectionName method. This is the
name of the collection[LINK TO COLLECTION] on the server side, that will
hold all the instances of class SMPost. Here is an example:

.. raw:: html

   <pre>
   <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:85px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               - (<span class="specialoperator">NSString</span> *) collectionName {
                               <br />
                               &nbsp;&nbsp;<span class="specialoperator">return</span> <span class="string">@"document/posts"</span>;
                               <br />
                               }
                               <br />
                               <span class="annotation">@end</span>
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

Once you have completed these two steps you are ready to start
interacting with the server, performing CRUD operations on posts.

Creating and saving objects
---------------------------

When you have your data classes extending BAAObject you can easily save
your instances on the server. For example this is a snippet that creates
an instance of post and saves it on the back end.

.. raw:: html

   <pre>
   <!-- Creating and saving objects-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:210px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                               <br>
                               9
                               <br>
                               10
                               <br>
                               11
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="class">SMPost</span> *p = [[SMPost alloc] init];
                               <br />
                               p.postTitle = <span class="string">@"Title"</span>;
                               <br />
                               p.postBody = <span class="string">@"Body"</span>;
                               <br />
                               [SMPost saveObject:p
                               <br />
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completion:^</span>(SMPost *post, NSError *error) {
                               <br />
                               <span class="tab1"></span><span class="specialoperator">if</span> (error == <span class="specialcharacter">nil</span>) {
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"created post on server %@</span>", post);
                               <br />
                               <span class="tab1"></span>} <span class="specialoperator">else</span> {
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"error in saving %@</span>", error);
                               <br />
                               <span class="tab1"></span>}
                               <br />
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

In the completion block you can either check for the error to be nil or
the object to be not nil. The saveObject:completion: method can be also
used to update an existing object. 

Deleting objects
----------------

To delete an existing object on the back end you can use the
deleteObject:completion: like this.

.. raw:: html

   <pre>
   <!-- Deleting Objects-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:155px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               <span class="comment">// p is an instance of post</span>
                               <br />
                               [SMPost deleteObject:p <span class="field">withCompletion:^</span>(<span class="specialcharacter">BOOL</span> success, NSError *error) {
                               <br />
                               <span class="tab1"></span><span class="specialoperator">if</span> (success) {
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"Post deleted"</span>);
                               <br />
                               <span class="tab1"></span>} <span class="specialoperator">else</span> {
                               <br />
                               <span class="tab2"></span>NSLog(<span class="string">@"Post not deleted %@"</span>, error.localizedDescription);
                               <br />
                               <span class="tab1"></span>}
                               <br />
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

Loading objects
---------------

To load a collection of objects you just call the class methods
getObjectsWithCompletion:

.. raw:: html

   <pre>
   <!-- Loading Objects-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:50px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               [SMPost getObjectsWithCompletion:^(<span class="class">NSArray</span> *objects, <span class="class">NSError</span> *error) {
                               <br />
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </pre>

This method will return an array of instances of SMPost. When loading
lists of objects this way all the results are paginated. This call will
return the first page of results using the default page length parameter
set in the SDK. If you want to tweak it look for BAAPageLength. If you
need to specify page number and size look at the following section. 

Pagination 
----------

To allow you loading objects in a paginated way you can
use the following method

.. raw:: html

   <pre>
   <html>
   <!-- Pagination -->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:175px;">
               <table cellpadding="0" cellspacing="0">
                   <tbody>
                       <tr>
                           <td class="line-numbers">
                           <div>
                               1
                               <br>
                               2
                               <br>
                               3
                               <br>
                               4
                               <br>
                               5
                               <br>
                               6
                               <br>
                               7
                               <br>
                               8
                               <br/>
                               9
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap">
                               [SMPost getObjectsWithParams:@{kPageNumber : @0, kPageSize : @10}
                               <br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completion:^</span>(<span class="class">NSArray</span> *objects,<span class="class">NSError</span> *error) {
                               <br/>
                               <span class="tab1"></span><span class="specialoperator">if</span> (error == <span class="specialcharacter">nil</span>) {
                               <br/>
                               <span class="tab2"></span>_posts = [objects mutableCopy];
                               <br/>
                               <span class="tab2"></span>[self.tableView reloadData];
                               <br/>
                               <span class="tab1"></span>} <span class="specialoperator">else</span> {
                               <br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"error %@</span>", error.localizedDescription);
                               <br/>
                               <span class="tab1"></span>}
                               <br/>
                               }];
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

Page number and size will be injected in the http call that retrieves
the elements. As the previous example the result is an array of SMPost
instances.

Getting Started Tutorial
------------------------

:doc:`Build an App now! <getting_started_ios>` Go to our :doc:`Getting Started Tutorial <getting_started_ios>` to learn how to integrate BaasBox into
an existing application. The application is called DearDiary and it’s a
personal diary. :doc:`Go to Tutorial <getting_started_ios>`


