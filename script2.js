window.onload=function(){

    //csvファイルを読み込み，変数dataにデータを入れる
    $.get("https://www.googleapis.com/books/v1/volumes?q=title:",function(data){

        //csvファイルの中身を表示
        console.log(data);



        //csvファイルを"\n"（改行毎）で分割して配列にする
        var tmpArray=data.items;
        console.log(tmpArray);

        //データ格納用変数
        var csvArray=new Array();

        for(var i=0;i<tmpArray.length;i++){
            //","（データ毎）で分割して配列にする
            csvArray[i]=tmpArray[i].volumeInfo;
        }

        //csvファイルを読み込んだ最終結果を表示
        console.log(csvArray);
       
        // 表
     var output=document.getElementById("output");
     var ol =document.createElement("ol") ;
        //  table.border="1px";
     ol.style.textAlign="center";
    
     


     
     for(var n=0;n<10;n++){
        var li=document.createElement("ol") ;
        var title=document.createElement("h2") ;
        var img=document.createElement("img") ;
        var category=document.createElement("div") ;
        var publishdate=document.createElement("div") ;
    
        title.textContent=csvArray[n].title;
        img.src=csvArray[n].imageLinks.thumbnail;
        category.textContent="本の種類："+csvArray[n].categories;
        publishdate.textContent="出版年："+csvArray[n].publishedDate
   
        li.appendChild(title);
        li.appendChild(img);
        li.appendChild(category);
        li.appendChild(publishdate);
        ol.appendChild(li);
        output.appendChild(ol);
     }
     
     
    });
    
};