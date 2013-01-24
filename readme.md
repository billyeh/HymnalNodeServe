Hymnal Node Server
==================
This site was originally intended to serve as the backend for an Android app that would serve hymns to client smartphones.

API Usage
------------------
Queries for hymns can be made via standard RESTful queries. 

For an example of a JSON hymn, try http://hymn.aws.af.cm/hymn?type=ns&hymn=100 (For an explanation of this categorization scheme, view the HymnalParse readme). This returns a JSON array consisting of the lyrics.
Expect a format that will include tags as the first word of each item of the array. For example, a typical response will appear like <br><br>
["1 lyrics lyrics", "chorus lyrics lyrics", "2 lyrics lyrics", "3 lyrics lyrics"]<br><br>
Other possible inital tags include 'nonum', 'copyright', 'note', and other numbers.

Search will soon be implemented. Direct queries to http://hymn.aws.af.cm/search?search=[QUERY], and expect a JSON object of category-formatted results. For example, a response might appear like <br><br>
{"ns10: lyrics snippet", "h12: lyrics snippet", "h1003: lyrics snippet"}

Finally, client applications that wish to use the database will find a query to https://hymn.aws.af.cm/res/db/songdb.db will return the FTS-enabled SQLite3 database of all hymns and sheet music mappings.

I've documented the creation of this site, along with the rest of the app, at [hymn.aws.af.cm](http://hymn.aws.af.cm).
