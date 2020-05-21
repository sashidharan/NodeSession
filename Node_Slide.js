Day 1
Slide 1
	This pattern is efficient because every request to the server takes time and resources(memory, CPU etc). So, it’s wiser to close a connection after serving the requested asset so the server could respond to other requests too.
	How do servers like these respond to millions of requests coming in at the same time.
	
	ex> Visiting Facebook and you were told to wait for 5 minutes, for thousands of people requesting before you.
	Good news!!. There’s a thing as Threads.
	
	Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project
	
	This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency
	Node.js has a unique advantage because millions of frontend developers that write JavaScript
	
	Portable Operating System Interface - posix
	read–eval–print loop - REPL
	
	
	single threaded application
	
	
	
Event Loop
	initate on node js starts
	FIFO queue
	timer - 
	poll - controls when the timer are executed
	
	
	
	
https://nodejs.org/en/download/



	standard structuring data that is inspired by object literals

Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.

Eval − Takes and evaluates the data structure.

Print − Prints the result.

Loop − Loops the above command until the user presses ctrl-c twice.

modules:
JavaScript doesn't have this before. by es6 it was  implemented.

prototypal inheritance & function constructor
	prototype is a another object. but it can attach the properties and method.

function Constructors
	a normal function that is used to construct object

by value is primitives and by referenece is object.

primitive - type of data that represents a single value, like a number r string, it word its not an object.

iife - immediately invoke function expression

module patterns
	revealing module patterns
		exposing only the properties and methods you want via an returned object
		very common and clean way to structure the protect the code on contents
		
		
module.exports vs exports
	mutate the object to change something
	
JSON which stands for JavaScript Object Notation


Events
	Something that has happend in out app that we can respond to it.
	
	In Node we having 2 different types of events
	
		As we're about to see, the JavaScript side

		is faking it, it's not real events.

		Well JavaScript doesn't have an eventing concept, there's no event object in JavaScript.
		
		we can create a own event library.
		
Magic String:
	A string that has some special meaning on our code
	//this a bad because it makes it easy for a typo to cause a bug and hard for tool to help us find it.
	
Streams
	Sequence of data made available over time, that pieces of data that eventually combine into a whole data.
	Readable, writeable, duplex. transform, passthrough are inherits the stream, and stream act as abstract class.
	Stream inherits the Event emitters.
	
	Memory efficiency: you don't need to load large amounts of data in memory before you are able to process it
	Time efficiency: it takes way less time to start processing data as soon as you have it, 
		rather than waiting till the whole data payload is available to start

Chunks - A piece of data being sent through a stream
	Data is split in 'chunks' and streamed
	

Pipes:
	Connnecting two streams by writing to one stream whatis being read from another
	In node you pipe from a readable stream to a writeable stream.

Method Chaining
	Method returns an object so we can keep calling more methods
	sometimes it returns the parent object (called cascading) and sometimes some other object
	
	
	UTF - Unicode Transformation Format 
	
HTTP:
	Set of rules for data being tansferred on the web
	Stands for Hypertext Transfer Protocol. It's a format defining data being transferred via TCP/IP
	
MIME Type:
	Standard for specifying the type of data being sent. Stand for Multipurpose Internet Mail Extension.
	For Eg. application/json, text/html, image/jpeg
	
	
JSON 
	serialize and deserialzing
	
	TCP/IP (Transmission Control Protocol/Internet Protocol)
	
	A protocol is really just a set of rules that two sides agree on to use when communicating.

	So both the client and the server are programmed to understand that particular set of rules.
	
Middleware:
	code that sits between two layers of software.
	in the case of express sitting between the request and the response.
	
Static Files
	not dynamic - in other word not processed by code in any way. For ex: html, css, & image files
	
	
Model is data part.
View is User Interface part.
Controller is request-response handler.

639445

express
methods verbs
querystring
post data
routes

middleswares


Create the method verbs (get, post, put, delete) using the express frameworks

Using the JSON document to store the information and retrieve in it.

Create the API apllication using the Express frameworka with error handlers

No-Sql
	A variety of Technologies that are alternatives to tables and sql.
	one of those type is a doucment database. Monodg
	
Relational Sql
	predefined schema
	rows & columns
	multi row transcation
	ACID (Atomicity, Consistency, Isolation & Durability).

mongoDB 
	dynamic schema
	CAP theorem (Consistency, Availability, and Partition tolerance).

Aggregate
	Aggregation operations process data records and return computed results
	All of these operations aggregate documents from a single collection
	multiple document to perform a variety of operations on the grouped data to return a single result
	
Replication
	A replica set in MongoDB is a group of mongod processes that maintain the same data set. 
	Replica sets provide redundancy and high availability and are the basis for all production deployments. 
	With multiple copies of data on different database servers, replication provides a level of fault tolerance against the loss of a single database server.

	
Sharding

	Sharding is a method for distributing data across multiple machines. 
	MongoDB uses sharding to support deployments with very large data sets and high throughput operations.
	Database systems with large data sets or high throughput applications can challenge the capacity of a single server.
	Vertical Scaling involves increasing the capacity of a single server, 
		such as using a more powerful CPU, adding more RAM, or increasing the amount of storage space. 
	Horizontal Scaling involves dividing the system dataset and load over multiple servers, 
		adding additional servers to increase capacity as required