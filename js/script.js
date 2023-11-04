const swiper = new Swiper('.swiper', {
    //オプションの設定
    loop: true, //最後までスライドしたら最初の画像に戻る
    
    //ページネーション表示の設定
    pagination: {
        el: '.swiper-pagination', //ページネーションの要素
    },
    
    //ナビゲージョンボタン（矢印）表示の設定
    navigation: {
    nextEl: '.swiper-button-next', //「次ボタン要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
    }
});