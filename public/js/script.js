(function(global, $) {
  "use strict";

  var util = {
    // ブラウザのデフォルトの動作と、イベントの伝播をキャンセルする
    stop: function(e) {
      e.preventDefault();
      e.stopPropagation();
    },
// strを指定の長さで切り取る
cutoff: function(str, len, tail) {
  tail = tail || "";
  return str.slice(0, len) + tail;
}
}


$(function() {
  var $dropArea = $("#dropable");

  // ドラッグ関連のイベントをすべてキャンセルして、ドロップイベントを設定
  $dropArea.on({
    "dragenter": util.stop,
    "dragover": util.stop,
    "dragleave": util.stop,
    "drop": function(e) {
      util.stop(e);

      // filesはargumentsのようなオブジェクトなので配列に変換
      var tmp = e.originalEvent.dataTransfer.files,
    files = Array.prototype.slice.call(tmp, 0, tmp.length);

  files.forEach(function(file) {

    var reader = new FileReader();

    // 読み込みが完了した時のイベントを設定
    $(reader).one('load', function(e) {
      var fn = "ドロップされたファイル名：" + file.name,
      ft = "ファイルの形式：" + file.type,
      fs = "ファイルサイズ：" + file.size + " Byte",
      fv = "内容：" + util.cutoff(e.target.result, 80, "...[略]"),
      msg = [fn, ft, fs, fv].join("\n");

    $dropArea.append( $("<pre></pre>").text(msg) );
    });

    // ファイルをテキストとして読み込む
    reader.readAsText(file);
  });
    }
  });
});
}(this, jQuery));
