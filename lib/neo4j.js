/* Allow client query execution */
Meteor.neo4j.allowClientQuery = true;
/* Custom URL to Neo4j should be here */
//Meteor.neo4j.connectionURL = 'http://neo4j:456901@localhost:7474';
Meteor.neo4j.connectionURL = 'http://leaderboard:JboDn5xZuWw2ruatAT0b@leaderboard.sb02.stations.graphenedb.com:24789';
/* But deny all writing actions on client */
Meteor.neo4j.set.deny(Meteor.neo4j.rules.write);