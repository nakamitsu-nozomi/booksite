window.onload = function() {

    //サーチボタンをクリックしたとき
    $("#search").click(function() {
        var query = document.getElementById("subject").value;
        //console.log(query)
        $.get("https://www.googleapis.com/books/v1/volumes?q=title:" + query, function(data) {
            //データ格納用変数
            var itemList = data.items
                //console.log(itemList);
            var arrangement = document.getElementById("inputList");
            var r1 = arrangement.r1.value;
            var r2 = arrangement.r2.value;

            //ソート
            if (r1 == 1) {
                itemList.sort((a, b) => r2 * (a.volumeInfo.pageCount - b.volumeInfo.pageCount))
            } else { //r1==-1の時
                itemList.sort((a, b) => r2 * (a.volumeInfo.publishedDate.split('-')[0] - b.volumeInfo.publishedDate.split('-')[0]))
            }

            //前の検索結果の消去
            $('#output').children('ul').remove();

            //検索結果の追加
            $('#output').append('<ul class="book-list"></ul>');
            for (var i = 0; i < 10; i++) {
                var text = '<li class="book-item">';
                text = text + '<img src="' + itemList[i].volumeInfo.imageLinks.thumbnail + '" class="book-image">';
                text = text + '<div class="book-description">'
                text = text + '<h2 class="book-title">' + itemList[i].volumeInfo.title + '</h2>';
                text = text + '<p class="book-pageCount">ページ数：' + itemList[i].volumeInfo.pageCount + '</p>';
                text = text + '<p class="book-publishDate">発行年月：' + itemList[i].volumeInfo.publishedDate + '</p>';
                text = text + '</div><div class="clear"></div>'
                text = text + '</li>';
                $('#output').children('ul').append(text);
            }
        })
    })


};