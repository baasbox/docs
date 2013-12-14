User Guide Android
==================

The Baasbox Android SDK is meant to get you quickly started in
performing CRUD operations on your custom data objects. The goal of
guide is to illustrate the essential steps to build your first
application in five minutes. Let's get started!

Download the latest version of Android SDK
`here <http://www.baasbox.com/?wpdmact=process&did=MTAuaG90bGluaw==/>`_

Authentication
--------------

The first step of each application is to login or signup a new user.
Once you have imported the SDK into your project, you can login using
the following code snippet.

.. raw:: html

   <pre>
   LoginTask loginTask = new LoginTask();
   loginTask.execute(username, password);

   // Login task definition
   public class LoginTask extends AsyncTask<String, Void, BAASBoxResult<Void>> {
       
       @Override
       protected void onPreExecute() {
           // update UI if needed, e.g. disable login button
       }
       
       @Override
       protected BAASBoxResult<Void> doInBackground(String... params) {
           return App.bbox.login(params[0], params[1]);
       }

       @Override
       protected void onPostExecute(BAASBoxResult<Void> result) {
           // update UI if needed
           onLogin(result);
       }
   }
   </pre>

Notice that the information about the user (e.g. username and
authentication token) is automatically saved by the SDK. After this call
is successful you are good to make authenticated calls, like loading or
creating new items.

Sign up
-------

Using the SDK you can even allow the creation of new users. The pattern
is pretty similar to the login. Here is an example.

.. raw:: html

   <pre>
   SignupTask signupTask = new SignupTask();
           
   JSONObject user = new JSONObject();

   try {
       user.put("username", username);
       user.put("password", password);
   } catch (JSONException e) {
       throw new Error(e);
   }

   signupTask.execute(user);

   // SignupTask definition
   public class SignupTask extends AsyncTask<JSONObject, Void, BAASBoxResult<Void>> {
       
       @Override
       protected void onPreExecute() {
           //Update UI before execution
       }
       
       @Override
       protected BAASBoxResult<Void> doInBackground(JSONObject... params) {
           return App.bbox.signup(params[0]);
       }

       @Override
       protected void onPostExecute(BAASBoxResult<Void> result) {
           //Update UI after execution
       }
   }
   </pre>


Whenever you need to know if you are authenticated you can use the
following code.

App.bbox.isUserLoggedIn();

Creating and saving objects
---------------------------

To save instances on the server you use the createDocument method of
App.bbox, For example, this code snippet adds an entry to an address
book.

.. raw:: html

   <pre>
   AddTask addTask = new AddTask();
   addTask.execute(name, phone);

   // AddTask definition
   public class AddTask extends
           AsyncTask<String, Void, BAASBoxResult<JSONObject>> {

       @Override
       protected BAASBoxResult<JSONObject> doInBackground(String... params) {
           JSONObject person = new JSONObject();

           try {
               person.put("name", params[0]);
               person.put("phone", params[1]);
           } catch (JSONException e) {
               throw new Error(e);
           }

           return App.bbox.createDocument("address-book", person);
       }

       @Override
       protected void onPostExecute(BAASBoxResult<JSONObject> result) {
           // refresh UI to show newly added person
       }
   }
   </pre>

Notice that “address-book” in this example has to match the name of the
colleciton that you have set up on the back end.

Deleting objects
----------------

To delete an existing object on the back end you can use the following
snippet.

.. raw:: html

   <pre>
   // entry is a json object representing an entry in the address book
   adapter.remove(entry);
   new DeleteTask().execute(entry);

   // Delete task definition
   public class DeleteTask extends
           AsyncTask<JSONObject, Void, BAASBoxResult<Void>> {
       
       @Override
       protected BAASBoxResult<Void> doInBackground(JSONObject... params) {
           return App.bbox.deleteDocument("address-book", params[0].optString("id"));
       }
       
       @Override
       protected void onPostExecute(BAASBoxResult<Void> result) {
           onPersonDeleted(result);
       }
   }
   </pre>

Loading objects
---------------

To load a collection of objects you just getAllDocuments() as follows.

.. raw:: html

   <pre>
   LoadTask loadTask = new LoadTask();
   loadTask.execute();

   public class LoadTask extends
           AsyncTask<Void, Void, BAASBoxResult<JSONArray>> {

       @Override
       protected void onPreExecute() {
           // update UI before loading
       }

       @Override
       protected BAASBoxResult<JSONArray> doInBackground(Void... params) {
           return App.bbox.getAllDocuments("address-book", "name ASC", -1, -1);
       }

       @Override
       protected void onPostExecute(BAASBoxResult<JSONArray> result) {
           // update UI after loading
       }
   }
   </pre>

The first parameter of getAllDocuments is again the exact name of the
collection set up on the server. The second is the sorting parameters.
The third is the number of the page you’d like to load (-1 to not
specify any) and the fourth is the number of results per page.
