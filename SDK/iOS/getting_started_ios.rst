Introduction
------------

BaasBox is a tool that allows you to quickly build a back end for you
application. You can install it on your local machine (ideal for
development and testing) or your own server. It comes with an SDK that
simplifies the integration of your mobile with BaasBox. To complete this
tutorial you need a Mac with the following tools installed:

-  Xcode 4.6.3
-  JVM 1.6+

In this tutorial you will learn how to integrate BaasBox into an
existing application. The application is called DearDiary and it’s a
personal diary. You can download the starter project from here:
[[http://www.baasbox.com/doc/tutorial/DearDiary-starter.zip\|DearDiary-starter.zip]].

Unzip and run the project to check it works as expected. It’s made of
two components: a table view and a detail view. The first shows a list
of memos. Tap the “+” button to add a new one.

.. raw:: html

   <html>
   <p>

.. raw:: html

   </p>
   <p>

You will see the updated note in the list. Feel free to add further
notes. The app is pretty simple and works as expected. It has a problem
though. When you delete it (e.g. reset the simulator or uninstall it
from the device) all the memos that you have saved are gone and there is
no way to restore them. Wouldn’t it be cool if we could save them on a
back end? That’s exactly what we are going to do in this tutorial.

.. raw:: html

   </p>
   </html>

Installing BaasBox
------------------

The first step is to install BaasBox. For sake of simplicity we will
show how to install it on a local machine. You will see that’s very
easy. Download the latest version of BaasBox from here: [[Download
here\|Downloads]]. Unzip the file, open Terminal, go to the directory
unzipped, type “./start” and hit return. BaasBox is now running on your
local machine. To test visit the following link:
[[http://localhost:9000/\|http://localhost:9000/]] and you should see
the following screen.

.. raw:: html

   <html>
   <p>

.. raw:: html

   </p>
   </html>

This means BaasBox is correctly running. If you are working on a BaasBox
running on a remote server, ask your system administrator which is the
URL of the console. Tap the administrator login button. This will show
the following.

.. raw:: html

   <html>
   <p>

.. raw:: html

   </p>
   </html>

If you are running BaasBox on a local machine the default the admin
credentials are:

-  username: admin
-  password: admin
-  app code: 1234567890

If you have testing against an instance running on a server, contact the
system administrator to get these credentials. Once you are logged in as
administrator you you will see the BaasBox console like this.

.. raw:: html

   <html>
   <p>

.. raw:: html

   </p>
   </html>

The next step is to create a collection. ## Creating a collection ## A
collection is a bucket to hold objects of the same class. We are going
to create a new one to hold the posts of the DearDiary app. Click the
“Collections” button on the left side menu, tap the “New Collection”
button, enter “posts” and click the Save button. You will end up in this
situation.

.. raw:: html

   <html>
   <p>

.. raw:: html

   </p>
   </html>

Now the back end is ready to store custom objects in the newly created
collection. Let’s move on to integrate the SDK in your project. ##
Importing the iOS SDK ##

.. raw:: html

   <html>
   <p>

Download the SDK from here, and unzip the file. Drag the extracted
folder onto the root of the starter project.

.. raw:: html

   </p>
   <p>

<== The project navigator should now look like this.

.. raw:: html

   </p>

Since we are going to use the BaasBox SDK in different files we suggest
to import it globally. Open the DearDiary-Prefix.pch file and import the
BAAClient header as follows.

.. raw:: html

   <pre>
   <!-- BAAClient header-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:237px;">
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
                               <br>
                               12
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                               <span class="import">#import &ltAvailability.h></span><br/>
                                   <span class="tab1"></span><span class="import">#ifndef __IPHONE_4_0</span><br/>
                                   <span class="tab1"></span><span class="import">#warning "This project uses features only available in iOS SDK<br/>
                                   <span class="tab1"></span>4.0 and later."</span><br/>
                                   <span class="tab1"></span><span class="import">#endif</span><br/>
                                   <span class="tab1"></span><span class="import">#ifdef __OBJC__</span><br/>
                                   <span class="tab1"></span><span class="import">#import <UIKit/UIKit.h></span><br/>
                                   <span class="tab1"></span><span class="import">#import <Foundation/Foundation.h></span><br/>
                                   <span class="tab1"></span><span class="import">#import <SystemConfiguration/SystemConfiguration.h></span><br/>
                                   <span class="tab1"></span><span class="import">#import <MobileCoreServices/MobileCoreServices.h></span><br/>
                                   <span class="tab1"></span><span class="import">#import "BAAClient.h"</span> // <added<br/>
                                   <span class="comment">import statement</span><br/>
                                   <span class="import">#endif</span>
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

After this the BaasBox methods will be available throughout the project,
with no need of further import statements. Now let’s review the current
data model. ## Reviewing the Model ##

.. raw:: html

   <html>

The current data model is pretty simple. It’s made of a class SMPost
which had two fields: title and body. Those hold the data for each
instance of an entry in the application. In this step we need to
“BaasBoxify” the data model, meaning that the current model (SMPost) has
to adhere to the generic model class of the BaasBox SDK. This will allow
CRUD operations on every instance of SMPost. Open SMPost.h and make the
class extend BAAObject like this.

.. raw:: html

   <pre>
   <!-- extend BAAObject-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:64px;">
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
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                               <span class="annotation">@interface</span> SMPost : BAAObject<br/>
                               ...;<br/>
                               <span class="annotation">@end</span>
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   <br/>
   </pre>

Next, open SMPost.m and implement initWithDictionary: as follows.

.. raw:: html

   <pre>
   <!-- BAAClient header-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:173px;">
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
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                                   - (<span class="specialoperator">instancetype</span>) initWithDictionary:(<span class="class">NSDictionary</span> *)dictionary<br/>
                                   {<br/>
                                   <span class="tab1"></span>self = [super initWithDictionary:dictionary];<br/>
                                   <span class="tab1"></span><span class="specialoperator">if</span> (self) {<br/>
                                   <span class="tab2"></span>_postTitle = dictionary[<span class="string">@"postTitle"</span>];<br/>
                                   <span class="tab2"></span>_postBody = dictionary[<span class="string">@"postBody"</span>];<br/>
                                   <span class="tab1"></span>}<br/>
                                   <span class="tab1"></span><span class="specialoperator">return</span> self;<br/>
                                   }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   <br/>
   <p>
   </pre>

This is the method that initializes an instance of post given a
dictionary. We suggest to name the keys of the dictionary exactly with
the same names of the properties of SMPost. Finally you have to
implement the collectionName method as follows.

.. raw:: html

   </p>
   <pre>
   <!-- implement the collectionName-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:64px;">
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
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                               - (<span class="specialoperator">NSString</span> *)collectionName {<br/>
                                   <span class="specialoperator">return</span> <span class="string">@"document/posts"</span>;</br>
                                   }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   <br/>
   </pre>

This is the path to the method called on the server side. Under the hood
the iOS SDK will make a call to localhost:9000/document/posts to execute
CRUD operations on posts. After these two steps the old data model is
now BaasBox-compliant, so let’s move on to authentication.

.. raw:: html

   </html>

Authentication
--------------

.. raw:: html

   <html>

The started project already includes the class SMLoginViewController.
This is a component that allows both login and signup. Let’s integrate
is in the application. First make sure the end point and the app code
are correct. Open BAAClient.m and update the value BAAEndPointUrl and
BAAAppCode with the appropriate values. Open SMMasterViewController.m
and change viewWillAppear: as follows.

.. raw:: html

   <pre>
   <!-- change viewWillAppear-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:287px;">
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
                               <br>
                               12
                               <br>
                               13
                               <br>
                               14
                               <br>
                               15
                               <br>
                               16
                               <br>
                               17
                               <br>
                               18
                               <br>
                               19
                               <br>
                               20
                               <br>
                               21
                               <br>
                               22
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                                   - (<span class="specialoperator">void</span>)viewWillAppear:(<span class="specialcharacter">BOOL</span>)animated {<br/>
                                   <span class="tab1"></span>[super <span class="field">viewWillAppear</span>:animated];<br/>
                                   <span class="tab1"></span><span class="class">BAAClient</span> *client = [BAAClient sharedClient];<br/>
                                   <span class="tab1"></span><span class="specialoperator">if</span> (client.isAuthenticated) {<br/>
                                   <span class="tab2"></span>NSLog(<span class="string">@"Logged in"</span>);<br/>
                                   <span class="tab2"></span>[SMPost <span class="field">getObjectsWithCompletion:<br/>
                                   <span class="tab3"></span>&nbsp;&nbsp;&nbsp;&nbsp;^</span>(NSArray *objects, NSError *error) {<br/>
                                   <span class="tab2"></span>&nbsp;&nbsp;&nbsp;&nbsp;_posts = [objects mutableCopy];<br/>
                                   <span class="tab2"></span>&nbsp;&nbsp;&nbsp;&nbsp;[self.tableView reloadData];<br/>
                                   <span class="tab2"></span>}];<br/>
                                   <span class="tab1"></span>} <span class="specialoperator">else</span> {<br/>
                                   <span class="tab2"></span>NSLog(<span class="string">@"need to login"</span>);<br/>
                                   <span class="tab2"></span><span class="class">SMLoginViewController</span> *loginViewController =<br/>
                                   <span class="tab3"></span>[[SMLoginViewController alloc]<br/>
                                   <span class="tab3"></span>&nbsp;initWithNibName:<span class="string">@"SMLoginViewController"</span><br/>
                                   <span class="tab3"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bundle:<span class="specialoperator">nil</span>];<br/>
                                   <span class="tab2"></span>[self.navigationController<br/>
                                   <span class="tab3"></span>presentViewController:loginViewController<br/>
                                   <span class="tab3"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;animated:YES<br/>
                                   <span class="tab3"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;completion:<span class="specialoperator">nil</span>];<br/>
                                   <span class="tab1"></span>}<br/>
                                   }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   <br/>   
   </pre>

This piece of code will load posts stored on the server when the user is
logged in or show the login view controller when if user has been
authenticated. To load objects from the back end you can call
getObjectsWithCompletion: on any class extending BAAObject, as SMPost
does. This will return an array of objects of the same class. In our
example we store the returned value and we reload data in the table
view. If no user has logged in we display the login view controller.
Whenever you need to find out if somebody is logged in on a device you
can use the following code.

.. raw:: html

   <pre>
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:46px;">
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
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                               <span class="class">BAAClient</span> *client = [BAAClient sharedClient];<br/>
                               client.isAuthenticated
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   <br/>
   </pre>

The method isAuthenticated will return a boolean value that you can use
to update the user interface accordingly. The class
SMLoginViewController includes just graphic elements like the following.

.. raw:: html

   <p>

.. raw:: html

   </p>

We will now hook them up with BaasBox actions. Open
SMLoginViewController.m and change the login method like this.

.. raw:: html

   <pre>
   <!-- change the login method-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:287px;">
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
                               <br>
                               12
                               <br>
                               13
                               <br>
                               14
                               <br>
                               15
                               <br>
                               16
                               <br>
                               17
                               <br>
                               18
                               <br>
                               19
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                               - (<span class="specialoperator">IBAction</span>) login {<br/>
                               &nbsp;&nbsp;NSLog(<span class="string">@"login"</span>);<br/>
                               &nbsp;&nbsp;<span class="class">BAAClient</span> *client = [BAAClient sharedClient];<br/>
                               &nbsp;&nbsp;[client<br/>
                               &nbsp;&nbsp;&nbsp;<span class="field">authenticateUsername</span>:self.loginUsernameField.text<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">withPassword</span>:self.loginPasswordField.text<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completionHandler:^</span>(<span class="specialcharacter">BOOL</span> success, NSError *e) {<br/>
                               <span class="tab1"></span><span class="specialoperator">if</span> (success) {<br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"user authenticated %@"</span>,<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tab2"></span>client.authenticatedUser);<br/>
                               <span class="tab2"></span>[self<br/>
                               <span class="tab2"></span>dismissViewControllerAnimated:YES<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tab2"></span>completion:<span class="specialoperator">nil</span>];<br/>
                               <span class="tab1">} <span class="specialoperator">else</span> {<br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"error in logging in %@"</span>,<br/>
                               <span class="tab2"></span>e.localizedDescription);<br/>
                               <span class="tab1"></span>}<br/>
                               &nbsp;&nbsp;&nbsp;}];<br/>
                               }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

This shows how to authenticate a user against the BaasBox back end. Now
implement the signup method like this.

.. raw:: html

   <pre>
   <html>
   <!-- implement the signup method-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:287px;">
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
                               <br>
                               12
                               <br>
                               13
                               <br>
                               14
                               <br>
                               15
                               <br>
                               16
                               <br>
                               17
                               <br>
                               18
                               <br>
                               19
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                               - (<span class="specialoperator">IBAction</span>) signup {<br/>
                               &nbsp;&nbsp;NSLog(<span class="string">@"signup"</span>);<br/>
                               &nbsp;&nbsp;<span class="class">BAAClient</span> *client = [BAAClient sharedClient];<br/>
                               &nbsp;&nbsp;[client<br/>
                               &nbsp;&nbsp;<span class="field">createUserWithUsername</span>:self.signupUsernameField.text<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">andPassword</span>:self.signupPasswordField.text<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completionHandler:^</span><span class="specialcharacter">BOOL</span> success, NSError *e) {<br/>
                               <span class="tab1"></span><span class="specialoperator">if</span> (success) {<br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"user created %@"</span>,<br/>
                               <span class="tab2"></span>&nbsp;&nbsp;&nbsp;&nbsp;client.authenticatedUser);<br/>
                               <span class="tab2"></span>[self<br/>
                               <span class="tab2"></span>&nbsp;&nbsp;&nbsp;&nbsp;dismissViewControllerAnimated:YES<br/>
                               <span class="tab2"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;completion:<span class="specialoperator">nil</span>]<br/>
                               <span class="tab1"></span>}<br/>
                               <span class="tab1"></span><span class="specialoperator">else</span> {<br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"error: %@"</span>, e);<br/>
                               <span class="tab1"></span>}<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}];<br/>
                               }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   </html>
   </pre>

Notice that in both cases you will need a username and a password. The
back end will return an authentication token that is automatically
stored by the SDK and will be used for subsequent API calls that need
authentication. The SDK will NOT store in any form the password entered
by the user. Now it’s time to store newly created posts on the server.
## Storing data on the server ##

.. raw:: html

   <html>

The application does not store data on the server yet. Let’s fix it now.
Open SMMasterViewController.m and change the implementation of
createNewPost: like this.

.. raw:: html

   <pre>
   <!-- implementation of createNewPost:-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:287px;">
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
                               <br>
                               12
                               <br>
                               13
                               <br>
                               14
                               <br>
                               15
                               <br>
                               16
                               <br>
                               17
                               <br>
                               18
                               <br>
                               19
                               <br>
                               20
                               <br>
                               21
                               <br>
                               22
                               <br>
                               23
                               <br>
                               24
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                               - (<span class="specialoperator">void</span>)createNewPost:(id)sender {<br/>
                               &nbsp;&nbsp;<span class="specialoperato">if</span> (!_posts) {<br/>
                               <span class="tab1"></span>_posts = [[NSMutableArray alloc] init];<br/>
                               &nbsp;&nbsp;}<br/>
                               &nbsp;&nbsp;<span class="class">SMPost</span> *p = [[SMPost alloc] init];<br/>
                               &nbsp;&nbsp;p.postTitle = [NSString stringWithFormat:<span class="string">@"No title %i"</span>,<br/>
                               _posts.count ];<br/>
                               &nbsp;&nbsp;p.postBody = <span class="string">@"No body"</span>;<br/>
                               &nbsp;&nbsp;[<span class="class">SMPost</span> saveObject:p<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completion:^</span>(SMPost *post, NSError *error) {<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="specialoperato">if</span> (error == <span class="specialoperator">nil</span>) {<br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"created post on server %@"</span>, post);<br/>
                               <span class="tab2"></span>[_posts insertObject:post atIndex:0];<br/>
                               <span class="tab2"></span>NSIndexPath *indexPath =<br/>
                               <span class="tab2"></span>&nbsp;&nbsp;&nbsp;&nbsp;[NSIndexPath indexPathForRow:0<br/>
                               <span class="tab2"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inSection:0];<br/>
                               <span class="tab2"></span>[self.tableView<br/>
                               <span class="tab2"></span>&nbsp;&nbsp;&nbsp;insertRowsAtIndexPaths:@[indexPath]<br/>
                               &nbsp;&nbsp;withRowAnimation:UITableViewRowAnimationAutomatic];<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <span class="specialoperator">else</span> {<br/>
                               <span class="tab2"></span>NSLog(<span class="string">@"error in saving %@"</span>, error);<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                               &nbsp;&nbsp;}];<br/>
                               }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   <br/>
   </pre>

Every time the user taps the “+” button a new note will be created and
sent to the back end. You can call saveObject:withCompletion: on every
object extending the BAAObject class. In the block you just check out
for the presence of an error and update the UI accordingly. In out case,
when the save is successful we insert the new element in the list
populating the table view. When the user taps a post on the iPhone he
can change it by means of the detail view controller. Let’s modify it to
store updates on the server.

.. raw:: html

   </html>

Updating data on the server
---------------------------

.. raw:: html

   <html>

Open SMDetailViewController.m and change the savePost: method as
follows.

.. raw:: html

   <pre>
   <!-- change the savePost: method-->
           <div class="codecolorer-container text geshi" style="overflow:auto;white-space:nowrap;width:700px;height:287px;">
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
                               <br>
                               12
                               <br>
                               13
                               <br>
                               14
                               <br>
                               15
                               <br>
                               16
                               <br>
                               17
                               <br>
                               18
                               <br>
                               19
                           </div></td>
                           <td>
                           <div class="text codecolorer" style="white-space:nowrap;border-width:0px;">
                               - (<span class="specialoperator">void</span>) savePost:(id)sender {<br/>
                               &nbsp;&nbsp;self.post.postTitle = self.titleField.text;<br/>
                               &nbsp;&nbsp;self.post.postBody = self.bodyTextView.text;<br/>
                               &nbsp;&nbsp;[<span class="class">SMPost</span> saveObject:self.post<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="field">completion:^</span>(id object, NSError *error) {<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="specialoperator">if</span> (error == <span class="specialoperator">nil</span>) {<br/>
                               <span class="tab1"></span>NSLog(<span class="string">@"object saved"</span>);<br/>
                               <span class="tab1"></span>self.post = object;<br/>
                               <span class="tab1"></span>[[NSNotificationCenter defaultCenter]<br/>
                               <span class="tab1"></span>postNotificationName:@"POST_UPDATED"<br/>
                               <span class="tab1"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;object:nil];<br/>
                               <span class="tab1"></span>[self.navigationController<br/>
                               <span class="tab1"></span>popViewControllerAnimated:YES];<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;}<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;<span class="specialoperator">else</span> {<br/>
                               <span class="tab1"></span>NSLog(<span class="string">@"error in updating %@"</span>, error);<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;}<br/>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}];<br/>
                               }
                           </div></td>
                       </tr>
                   </tbody>
               </table>
           </div>
   <br/>
   </pre>

Notice that we are using the same saveObject:completion: method as
before, even if the object has already been created and store on the
server. The SDK will internally handle the right API call. It does not
matter if the object is created for the first time or is already stored
on the back end: whenever you want to save it just call
saveObject:completion: and handle the response.

.. raw:: html

   </html>

Test the application
--------------------

.. raw:: html

   <html>

Now you are ready to test the new version of DearDiary. Build and run as
usual and you will see the login screen, because no user has been
authenticated previously. Moreover, besides admin, there is no user on
the back end so tap the “Signup” tab, enter a new username and password
and tap the button. Notice that after the signup is successful the newly
created user is already logged in and you can start creating new posts
right away. Tap on the “+” button to add a new note. It will have the
default values “No title” and “No body”. Now open the console in the
browser
([[http://localhost:9000/console\|http://localhost:9000/console]] if you
are running on a local machine) and click the “Documents” button on the
left menu. Select the “posts” collection from the dropdown menu and you
will see the new note created as follows.

.. raw:: html

   <p>

.. raw:: html

   </p>
   </html>

Great, you have saved your first post on the back end! Feel free to play
with new notes or by changing titles and contents check how they are
stored on the back end. Assuming that so far you have run the example on
the simulator you could run it on a real device and see how the posts
created by a given users are correctly loaded on that as well. ## Where
to go from here ## There are a few ways in which you can continue this
tutorial. Here are some suggestions:

-  allow the deletion of a post
-  load posts in a paginated way

To find out more about additional methods available in the SDK check out
the [["User Guide" here\|User Guide iOS]].
