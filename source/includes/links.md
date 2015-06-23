## Links

Available since 0.8.0

Links allow to connect documents, files and users (since v.0.9.4) to each other. They are similar to the relations in a relational database.
Of course there are differences between relations and links. First of all, links have versus, secondly they have a label.

Links are implemented using the graph capabilities of OrientDB that is the database engine embedded in BaasBox.

As an example please see the code aside.

```
                             customer
Document A          (out) -------------> (in)   Document B
Invoices										Customers

                               item
Document A     		(out) -------------> (in)	Document C
Invoices              							Items

```


Basically you can imagine documents and files like nodes in a graph. Each of them is a node that can be connected with others.
Nodes are connected by links (or edges). Links have a versus, a label, and a source/destination pair of nodes.
For further information on graph databases, nodes, links and how these are managed by OrientDB, please see the official [OrientDB WIKI site](http://orientdb.com/docs/1.7.8/index.html)

You can query links by label and/or use filters to select linked documents (or file). 
At the moment it is possible to execute query only on links, there are not APIs to traverse them or to query linked documents from a given one.
