var peer = new Peer('receiverID', {key: 'uoux7azk7sxg8pvi'});
peer.on('connection', function(conn){
  conn.on('data', function(data) {
    document.getElementById("message").innerHTML = data;
  });
});
