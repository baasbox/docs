## Database Management

The item **DB Management** allows you to perform some operations on the
database. 

![Dashboard image](images/Console_0.8.1/baasbox-db-management.png)

1. Restore a previously created backup file
2. Create a new backup
3. View the list of generated backups
4. Reinitialize the database at its initial state. It deletes all the
database content.

To create a new backup, you have to click on the "Create a new
backup..." button. This operation is asynchronous. BaasBox will freeze
the database and it will stop responding to the clients. When the backup
is ready you will find it in the list. From that list you can download
it or delete it.

To restore a database you have to download a backup file locally, and
then use the restore feature.
