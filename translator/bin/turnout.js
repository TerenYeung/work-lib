#! /usr/bin/env node

//业务逻辑
//1.turnout命令+中英文[args,--read,-r]
//捕获参数，使用yargs.argv对象；
//2.将捕获到的用户的输入参数传入有道云api的q（key）中，使用字符串拼接；
//3.使用http模块发送请求；
//4.成功接收数据后，对数据进行格式化处理；

var colors = require('colors');
var argv = require('yargs').argv,
	queryStr = encodeURI((argv._).join(" ")),
	read = argv.r || argv.read; 

if(!queryStr){
	console.log('word or sentence required...')
}else {
	sendInfo(queryStr)
}

if(read){
	console.log('waiting for the new function...')
}


function format(json){
	console.log('\n')
	
	var data = JSON.parse(json),
		pronTitle = "发音：",
		pron = data.basic.phonetic || "无",
		mainTitle = "翻译：",
		mainTrans = "",
		webTitle = "网络释义：",
		webTrans = "",
		template = "";

	var basic = data.basic,web = data.web;

	if(basic?basic:""){
		for(var i = 0 ; i< basic.explains.length ; i++){
			mainTrans += "\n\n"+basic.explains[i];
		}
	}
	
	if(web?web:""){
		for(var i = 0 ; i< web.length ; i++){
			 webTrans += "\n\n"+(i+1)+": "+web[i].key.red.bold+"\n\n"
			 		  +  web[i].value.join(',');
		}
	}

	template = pronTitle.red.bold+pron+ "\n\n"
			 + mainTitle.green.bold+mainTrans+"\n\n"
			 + webTitle.blue.bold+webTrans;

	console.log(template);

}

function sendInfo(query){
		//发送翻译请求
	var http = require('http');

	// 1.用于请求的选项
	var options = {
	   host: 'fanyi.youdao.com',
	   port: '80',
	   path: '/openapi.do?keyfrom=translation-tool&key=1730699468&type=data&doctype=json&version=1.1&q='+query	  
	};

	// 处理响应的回调函数
	var callback = function(response){
	   // 不断更新数据
	   response.on('data', function(data) {
	      format(data)
	   });
	   
	   response.on('end', function() {
	      // 数据接收完成
	      console.log('\n')
	      console.log("---------------");
	   });
	}
	// 向服务端发送请求
	var req = http.request(options, callback);
	req.end();
}



