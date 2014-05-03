var peer = new Peer('senderID',{key: 'uoux7azk7sxg8pvi'});
var conn = peer.connect('receiverID');
conn.on('open',function(){
  conn.send('hi');
});
