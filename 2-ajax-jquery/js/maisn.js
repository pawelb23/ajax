'use strict';

$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" ,   function (data) {   
    console.log(data);
    console.log(data.userId);// console logi z linijek czwartej  i piątej są tylko pomocnicze
});
