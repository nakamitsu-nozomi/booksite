
window .onload=function(){
// google 読みこんで変数dataに代入
$.get("https://www.googleapis.com/books/v1/volumes?q=title:",function(data){
    // dataの中身を表示
    console.log(data);
    
    // dataのitemを取り出す
    var  jsonArray=new Array(data.items) ;

    console.log(jsonArray);




    // 必要な部分だけを取り出す
   function redisplay(){
    var out=document.getElementById("output");

    var ol=document.createElement("ol");
    var li=document.createElement("li");
    var photo=document.createElement("img");
    var price=document.createElement("div");
    var titles=document.createElement("div");
    var page=document.createElement("div");


    titles.textContent=jsonArray[0].volumeInfo.title;


   }



   
console.log(jsonArray[0].volumeInfo.title);






    });











    
  
    

   



}






