General Overview
----------------

BaasBox is a server that makes available a set of functions for the
backend of mobile applications. All you need is a **Java Virtual Machine
1.6 or above**. BaasBox already has everything you need
for it to work: an application server and a DB server. 
BaasBox was born to be simple to use and manage. To migrate a BaasBox instance from a
server to another, you just have to zip the database folder and copy it
in the server target folder. Moreover, it is ready to use without
changing the configuration parameters. You just have to
launch the command ``./start`` (or ``start.bat`` on Windows) and BaasBox will
run. Shoud you need it, you can apply customize configuration parameters.

Available Functions
===================

Available functions are:

-  Administration console:

   -  A convenient web based administration console is provided, through
      which the administrator can manage several aspects of BaasBox

-  Content management:

   -  Definition of "objects collection (AKA documents)"
   -  Creation, modification and deletion of objects
   -  Granting and revoking reading/modification/cancellation
      authorization on single objects
   -  Queries that allow specifying selection and
      ordering criteria
   -  Management of "special" contents called Assets, which may be files of any kind, 
      to which you can associate arbitrary JSON data

-  Users management:

   -  Signup, Login, Logout, profiles management (private, public
      features and so on), forgotten password recovery, link and log-in
      through Facebook and Google+
   -  Roles management: administrators, registered users, back-office
      users, creation of new roles.

-  Push notifications:

   -  Push notifications for iOS and Android devices

-  DB management:

   -  Backup/restore and reset of the integrated database
   

Applied Technology
==================

BaasBox is written mostly in Java, with some code in `Scala <http://www.scala-lang.org/>`_. It uses the `Play! Framework <http://www.playframework.com/>`_ and it incorporates the core of the `OrientDB database <http://www.orientechnologies.com/orientdb/>`_.
This will allow BaasBox to natively manage the relations between JSON objects and to link
objects and queries without using specific abstractions or having to
simulate them on the applicative level. OrientDB was recently surveyed
and entered Gartner's Magic Quadrant.
