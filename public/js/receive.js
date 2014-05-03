var peer = new Peer('receiverID', {key: 'uoux7azk7sxg8pvi'});
peer.on('data', function(data) {
    document.getElementById("message").innerHTML = data;
});
