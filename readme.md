Hymnal Node Server
==================
This site serves as the backend for an Android app that would serve hymns to client smartphones. It provides a way to use API calls to retrieve lightweight JSON songs from http://hymnal.net.

API Usage
------------------
Queries for hymns can be made via standard RESTful queries. 

For an example of a JSON hymn, try http://hymn.aws.af.cm/hymn?type=ns&hymn=100. For an explanation of this query structure, [view the HymnalParse project readme](https://github.com/billyeh/HymnalParse/blob/master/readme.md). This returns a JSON array consisting of the lyrics.
Expect a format that will include tags as the first word of each item of the array. For example, a typical response will appear like

	["1 lyrics lyrics", "chorus lyrics lyrics", "2 lyrics lyrics", "3 lyrics lyrics"]

Other possible inital tags include 'nonum', 'copyright', 'note', and other verse numbers.

Search will soon be implemented. Direct queries to http://hymn.aws.af.cm/search?search=[QUERY], and expect a JSON object of category-formatted results. For example, a response might appear like

	{"ns10: lyrics snippet", "h12: lyrics snippet", "h1003: lyrics snippet"}

Finally, client applications that wish to use the database offline will find a query to https://hymn.aws.af.cm/res/db/songdb.db useful. It returns the FTS-enabled SQLite3 database of all hymns and sheet music mappings.

For possible queries to that database download, see the documentation below, in the section "Adding Search".

I've documented the creation of this site, along with the rest of the app, at [hymn.aws.af.cm](http://hymn.aws.af.cm).

Code Usage
------------------
The barebones Node.js and Javascript code in this project is highly reusable. I've developed a simple, easily scalable model for automatically serving files to GET requests, recreating some of the basic functionality of popular npm modules such as [Express](http://expressjs.com). 

- Clone the code
- Place files to be served into directory
- cd into directory, and run node app.js
- See localhost://1337 for running server
