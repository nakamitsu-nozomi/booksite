window.onload=function(){
 // 検索ボタンが押された時
 $("#search").click(function(){
   
    //テキストボックスの内容を読み込む
    var text=document.getElementById("textbox").value;   
    //csvファイルを読み込み，変数dataにデータを入れる
    $.get("https://www.googleapis.com/books/v1/volumes?q=title:"+text,function(data){
     //csvファイルの中身を表示
     console.log(data);
     var tmpArray=data.items;
     console.log(tmpArray);
    //データ格納用変数
    var csvArray=new Array();
    for(var i=0;i<tmpArray.length;i++){
        //","（データ毎）で分割して配列にする
        csvArray[i]=tmpArray[i].volumeInfo;
    }
    console.log(csvArray);

    var output=document.getElementById("output");
    var ul =document.createElement("ul") ;  
    var arrangement=document.getElementById("inputlist");
    var b1=arrangement.b1.value;
 
    // 検索履歴を削除 
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
    //検索結果を表示

    for(var n=0;n<10;n++){
       var li=document.createElement("li") ;
       var title=document.createElement("h2") ;
       var img=document.createElement("img") ;
       var category=document.createElement("div") ;
       var publishdate=document.createElement("div") ;
   
       title.textContent=csvArray[n].title;
       try {
        img.src=csvArray[n].imageLinks.thumbnail;
        category.textContent="本の種類："+csvArray[n].categories;
        } catch (error) {
        
        }
        publishdate.textContent="出版年："+csvArray[n].publishedDate;
  
       li.appendChild(title);
       li.appendChild(img);
       li.appendChild(category);
       li.appendChild(publishdate);
       ul.appendChild(li);
       output.appendChild(ul);
    }
//  本の種類で分類する
    var business_books=csvArray.filter(function(item,index){
     if(item.categories=="Business & Economics")return true; 
    });

    for(var x=0;x<business_books.length;x++){
         console.log(business_books.title);
      }




        
    



  
   

   
  





 });
    

        
       

    




});



};