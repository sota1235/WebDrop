/// utilを設定
var util = {
  stop: function(e) {
    e.preventDefault();
    e.stopPropagation();
  },
}

$(function() {
  /* peer setup */
  var peer = new Peer('senderID',{key: 'uoux7azk7sxg8pvi'});
  /* jquery setup */
  var $dropArea = $('#dropable');
  /* some param */
  var fn = "", fs = "", fv = "";

  $dropArea.on({
    'dragenter' : util.stop,
    'dragover' : util.stop,
    'dragleave' : util.stop,
    'drop': function(e) {
      util.stop(e);
      var conn = peer.connect('receiverID');
      var tmp = e.originalEvent.dataTransfer.files;
      var files = Array.prototype.slice.call(tmp, 0, tmp.length);
      files.forEach(function(file) {
        var reader = new FileReader();
        $(reader).one('load', function(e) {
          fn = file.name;
          fs = file.size;
          fv = e.target.result;
        });
        reader.readAsText(file);
        conn.on('open',function(){
          conn.send(fv);
        });
      });
    }
  });
});
