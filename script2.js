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
     var table =document.createElement("table") ;
        //  table.border="1px";
     table.style.textAlign="center";
    
     


     
     for(var n=0;n<csvArray.length;n++){
        var tr=document.createElement("tr");
        for(var x=0;x<csvArray[n].length;x++){
            var td=document.createElement("td");
            td.textContent=csvArray[n][x];
            tr.appendChild(td);
            table.appendChild(tr);
            
        }
     
     }
     output.appendChild(table);
     
    });
    
};