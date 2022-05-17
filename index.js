'use strict';

{
    // 画像をフワッと表示する設定----------------------------------------------------------
    const targets = document.querySelectorAll('img');  //imgセレクタ全てを読み込み、定数に代入

    function callback(entries, obs) {
        // console.log(entries);
        entries.forEach(entry => {
            if (entry.isIntersecting) {           //もし要素が露出していなければ↓
                entry.target.classList.add('appear');    //targetにclass=appearを付けて↓
                // obs.unobserve(entry.target);                         //targetを監視から外す
            } else {                              //そうでない場合は↓
                entry.target.classList.remove('appear');   //targetのclass=appearを削除
            }
        });
    }
    const options = { threshold: [0.3], rootMargin: '0px 0px -10px', };  //露出30%, 初期位置-10px
    const observer = new IntersectionObserver(callback, options);        // Intersection ObserverAPI = 画面上のある要素が、ブラウザ上の表示されている領域（viewport）に対してどの位置にあるかを監視して教えてくれる機能

    targets.forEach(target => { observer.observe(target) });          //targetを監視する


    //スマホメニュー---------------------------------------------------------------------------
    function openhmg() {        //openボタン設定
        document.getElementById('hmg').classList.add('on');           //id=hmgにclass=onを付ける
        document.getElementById('op').classList.add('offhmg');        //id=opにclass=offhmgを付ける
        document.getElementById('cl').classList.remove('offhmg');     //id=clのclass=offhmgを削除
        document.getElementById('mask').classList.remove('offhmg');   //id=maskのclass=offhmgを削除
    }    //id=opのボタンをclickしたとき実行↓
    document.querySelector('#op').addEventListener('click', openhmg)

    function closehmg() {       //closeボタン設定
        document.getElementById('hmg').classList.remove('on');        //id=hmgのclass=onを削除
        document.getElementById('cl').classList.add('offhmg');        //id=clにclass=offhmgを付ける
        document.getElementById('op').classList.remove('offhmg');     //id=opのclass=offhmgを削除
        document.getElementById('mask').classList.add('offhmg');      //id=maskにclass=offhmg付ける
    }    //id=clのボタンをclickしたとき実行↓
    document.querySelector('#cl').addEventListener('click', closehmg)
    document.querySelector('#mask').addEventListener('click', closehmg)

    //PCメニュー-------------------------------------------------------------------------------
    function toggle() {
        if (document.getElementById('ddmenu').classList.contains('ddon') === true) { //もしddonが存在すれば
            document.getElementById('ddmenu').classList.remove('ddon');              //ddonを削除
            document.getElementById('maskpc').classList.add('offpc');                //offpcを付ける
        } else {                                                             //そうでなければ
            document.getElementById('ddmenu').classList.add('ddon');         //ddonを追加
            document.getElementById('maskpc').classList.remove('offpc');     //offpcを削除
        }
    }
    //id=tglのボタンをclickしたときtoggleを実行↓
    document.querySelector('#ddbtn').addEventListener('click', toggle);
    document.querySelector('#maskpc').addEventListener('click', toggle);

    //タブメニュー----------------------------------------------------------
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');

    menuItems.forEach(clickedItem => {
        clickedItem.addEventListener('click', e => {
            e.preventDefault();

            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            clickedItem.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(clickedItem.dataset.id).classList.add('active');
        });
    });

    // -----------------------------------------------------------------------------
    function about() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        contents.forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector('.about2').classList.add('active');
        document.querySelector('.about').classList.add('active');
    }
    document.querySelector('#about1').addEventListener('click', about);
    document.querySelector('#about2').addEventListener('click', about);

    // -------------------------------------------------------------------------------
    function service() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        contents.forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector('.service2').classList.add('active');
        document.querySelector('.service').classList.add('active');
    }
    document.querySelector('#service1').addEventListener('click', service);
    document.querySelector('#service2').addEventListener('click', service);

    // --------------------------------------------------------------------------------------
    function book() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        contents.forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector('.book2').classList.add('active');
        document.querySelector('.book').classList.add('active');
    }
    document.querySelector('#book1').addEventListener('click', book);
    document.querySelector('#book2').addEventListener('click', book);

    // -------------------------------------------------------------------------------
    function print() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        contents.forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector('.print2').classList.add('active');
        document.querySelector('.print').classList.add('active');
    }
    document.querySelector('#print1').addEventListener('click', print);
    document.querySelector('#print2').addEventListener('click', print);
}
