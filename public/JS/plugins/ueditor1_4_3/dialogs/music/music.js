$(document).ready(function () {
    $("#sure").click(function () {
        var url = document.getElementById("J_searchName").value;
        if(url.trim() == ""){
            $("#path").replaceWith('<span id="path" style="display: block;margin-left: -50px;margin-top: 12px;color:red;">音乐路径不能为空</span>');
            return false;
        }
        var innerHTML = '<p><a hidden>1</a><audio controls="controls" loop="loop" src="' +url + '" style="margin: 5px 0;width:100%"><source type="audio/mpeg" src="' +url + '"></audio><br></p>';
        editor.execCommand("inserthtml",innerHTML);
        editor.getDialog("music").close()
    });
    // $("#edui135_body").click(function () {
    //     $("#sure").trigger("click");
    // })
});



