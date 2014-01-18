General Overview
----------------

BaasBox is a server that makes available a set of functions for the
backend of mobile applications. All you need is a **Java Virtual Machine
1.6 or higher**. Dependencies from or installation of other software are
not required. This is because BaasBox already has everything you need
for it to work: an Application Server and a DB server NoSQL through
which the services are supplied. BaasBox was born to be simple to use
and manage as its main requirement. To migrate a BaasBox instance from a
server to another, you just have to zip the database folder and copy it
in the server target folder. Moreover, it is ready to use without
applying any alteration to configuration parameters. You just have to
launch the command ``./start`` (or ``start.bat`` on Windows) and BaasBox will
run. Of course, if you wish or should it be necessary, you can apply
suitable configuration parameters.

Available Functions
===================

Available functions are currently:

-  Integrated administration console:

   -  A convenient WEB based administration console is provided, through
      which the administrator may manage several aspects of BaasBox

-  Content management:

   -  Definition of "objects collection (AKA documents)"
   -  Input. modification, cancellation of JSON objects
   -  Granting and Revoking of reading/modification/cancellation
      authorization on single objects
   -  Collection query with the possibility to specify selection and
      ordering criteria
   -  Management of "special" content called Assets: assets may also be
      files of any kind, which you can associate to an arbitrary JSON
      object

-  Users management:

   -  SignUp, Login, Logout, profiles management (private, public
      features and so on), forgotten password recovery, link and log-in
      through Facebook and Google+
   -  Roles management: administrators, registered users, back-office
      users, creation of new roles.

-  PUSH notifications:

   -  Push notifications sending to registered users who have iOS and/or
      Android devices

-  DB management:

   -  Backup/Restore and Reset of the database integrated within
      BaasBox.

Custom Error Codes
==================

These are custom error codes specific to BaasBox

-  40001: You are attempting to update a database object with older
   data. Versions is not the same
-  40101: Authentication info not valid or not provided. HINT: is your
   session expired?
-  50301: Push settings are not properly configured. HINT: go to
   administration console and check the settings
-  50302: The server cannot resolve the host name. HINT: check your
   internet connection

Applied Technology
==================

BaasBox is written in Java with some classes in SCALA. It uses **Play!
Framework** and it incorporates the core of **NoSQL OrientDB database**.
OrientDB is a powerful graph-oriented DB NoSQL. This will allow BaasBox
to manage the relations between JSON objects in a native way and to link
objects and queries without using specific abstractions or having to
simulate them on the applicative level. OrientDB was recently surveyed
and entered Gartner's Magic Quadrant. BaasBox does not use up many
system resources: it was also tested on a Raspberry PI rev.B, and it
proved to be up to expectations, all things considered.