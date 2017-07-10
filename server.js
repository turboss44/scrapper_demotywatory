var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

var img=[];
var  url='http://demotywatory.pl';
    request(url,function(error, response, html){
      if(!error){
        var $ = cheerio.load(html);
        $('.demot_pic').each(function(){
          var data = $(this);
          var one_img = data.children().first().children().first().attr('src')
          img.push(one_img);

        });
        console.log(img);
        for(var i = 0; i < img.length; i++){
          if(img[i]!==undefined){
            console.log('siemanko');
          request(img[i]).pipe(fs.createWriteStream('demot'+(i+1)+'.jpg'));
      }
    }

    }
    })

    app.listen('7676')

    console.log('Scrapping on 7676')
