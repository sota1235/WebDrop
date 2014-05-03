var peer = new Peer('receiverID', {key: '7kov9dhv87fa8aor'});
peer.on('connection', function(conn){
  conn.on('data', function(data) {
    document.getElementById("message").innerHTML = data.replace('/n', '<br />');
  });
});
