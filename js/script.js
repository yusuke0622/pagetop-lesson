$(function() {
    $('#back a').on('click', function(event){   //#back内のaタグがクリックされたときの処理
        $('body, html').animate({  //body要素またはhtml要素(ユーザの利用環境によって指定対象の要素が変化するため)
            scrollTop:0   //最上部に移動する
        }, 800);   //800ミリ秒間（0.8秒間）かけてページの最上部まで移動する
        event.preventDefault();  
    });
});