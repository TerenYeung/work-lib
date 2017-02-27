window.Util = {

		// 1.判断数据类型
			isNumber:function(el){
				return typeof el === "number";
			},
			isString:function(el){
				return typeof el === "string";
			},
			isBoolean:function(el){
				return typeof el === "boolean";
			},
			isObject:function(el){
				return Object.prototype.toString.call(el) === "[object Object]"
			},
			isArray:function(el){
				return Object.prototype.toString.call(el) === "[object Array]"
			},
			isFunction:function(el){
				return Object.prototype.toString.call(el) === "[object Function]"
			},
			isSimpleType:function(el){
				return this.isNumber(el) || this.isString(el) || this.isBoolean(el)
			},
			
		//2.对象或数组的拷贝
			shallowCopy:function(oldObj){
				var newObj = {};
				for(var key in oldObj){
					if(!this.isSimpleType(oldObj[key])){
						return "It doesn't match shallowCopy"
					}
					newObj[key] = oldObj[key]
				}
				return newObj;
			},
			cloneObject:function(oldObj){
				var newObj = {};
				for(var key in oldObj){
					if(this.isObject(oldObj[key])){
						newObj[key] = this.cloneObject(oldObj[key])
					}else if(this.isArray(oldObj[key])){
						newObj[key] = this.cloneArray(oldObj[key])
					}else if(this.isSimpleType(oldObj[key])){
						newObj[key] = oldObj[key]
					}
				}
				return newObj;
			},
			cloneArray:function(oldArr){
				var newArr = [];
				for(var i = 0;i<oldArr.length;i++){
					if(this.isArray(oldArr[i])){
						newArr.push(this.cloneArray(oldArr[i]))
					}else if(this.isObject(oldArr[i])){
						newArr.push(this.cloneObject(oldArr[i]))
					}else if(this.isSimpleType(oldArr[i])){
						newArr.push(oldArr[i])
					}
				}
				return newArr;
			},
			deepCopy:function(oldObj){
				var newObj = {};
				for(var key in oldObj){
					if(this.isSimpleType(oldObj[key])){
						newObj[key] = oldObj[key]
					}else if(this.isObject(oldObj[key])){
						newObj[key] = this.cloneObject(oldObj[key])
					}else if(this.isArray(oldObj[key])){
						newObj[key] = this.cloneArray(oldObj[key])
					}
				}
				return newObj;
			},

			//3.数学方法
			randomNum:function(min,max){
				if(min-max>0){
					var mid = min;
						min = max;
						max = mid;
				}
				var range = max - min + 1
				return Math.floor(Math.random()*range+min);
			},

			//4.表单验证方法
			trim:function(str){
				return str.replace(/^\s*|\s*$/g,"");
			},

			isPhoneNum:function(str){
				var regExp = /^0\d{2}[-]?\d{8}$|^0\d{3}[-]?\d{7}$|^1[358]\d{9}$/
				return regExp.test(str.toString());
			},

			isEmail:function(str){
				var regExp =  /^[a-zA-Z]\w*@[0-9a-zA-Z]+\.[a-zA-Z]+/;
				return regExp.test(str)
			},

			isValidUsername:function(str){
				//长度为6-20个字符，只能包括字母数字和下划线
				var regExp = /^[A-Za-z0-9_]{6,20}$/
				return regExp.test(str);
			},

			isValidPassword:function(str){
				//长度6-20个字符，包括大写字母、小写字母、数字、下划线至少两种
				if(/\W*/.test(str)){
					return false
				}else if(/\w{0,5}|\w{21,}/.test(str)){
					return false;
				}else if(/^\d+$|^[a-zA-Z]$|^_+$/.test(str)){
					return false
				}else{
					return true;
				}
			},

			//5.class操作方法
			hasClass:function(node,cls){
				var regex = new RegExp('\\b'+cls+'\\b','g')
				return regex.test(node.className)
			},
			addSingleClass:function(node,cls){
				if(!this.hasClass(node,cls)){
					node.className += (node.className===''?'':' ')+cls
				}
			},
			removeSingClass:function(node,cls){
				var regex = new RegExp('\\b'+cls+'\\b','g'),
					tmp = node.className.replace(regex,'').replace(/\s{2,}/g,' ')
					node.ClassName = this.trim(tmp)
			},
			addClass:function(nodes,cls){
				if(nodes.length){
					for(var i=0;i<nodes.length;i++){
						this.addSingleClass(nodes[i],cls)
					}
				}else{
					this.addSingleClass(nodes,cls)
				}
			},
			removeClass:function(nodes,cls){
				if(nodes.length){
					for(var i=0;i<nodes.length;i++){
						this.removeSingClass(nodes[i],cls)
					}
				}else{
					this.removeSingClass(nodes,cls)
				}
			},

			//6.ajax方法
			ajax:function(opts){
				opts.type = opts.type||'get'
				opts.url = opts.url||'/'
				otps.data = opts.data||{}
				opts.dateType = opts.data||'text'
				opts.success = opts.success||function(){}
				opts.error = opts.error||function(){}
				var dataStr=''
				for(var key in opts.data){
					dataStr += key+'='opts.data[key]+'&' 
				}
				dataStr.subString(0,dataStr.length-1)
				var xhr = new XMLHttpRequest()
				xhr.onreadystatechange=function(){
					if(xhr.readyState===4&&xhr.status===200){
						if(opts.dataType==='text'){
							opts.success(xhr.responseText)
						}else(opts.dataType==='json'){
							opts.success(JSON.parse(xhr.responseText))
						}
					}
				}else{
					opts.error()
				}

				if(opts.type.toLowerCase()==='post'){
					xhr.open(opts.type,opts.url,true)
					xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
					xhr.send(dataStr)
				}else if(opts.type.toLowerCase()==='get'){
					xhr.open(opts.type,opts.url+'?'+dataStr,true)
					xhr.send()
				}
			},

			//7.获取鼠标或触摸点坐标方法
			captureMouse:function(elem){
				var mouse = {x:0,y:0}
				elem.addEventListener('mousemove',function(e){
					var x,y
					if(e.pageX||e.pageY){
						x = e.pageX
						y = e.pageY
					}else{
						x = e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft
						y = e.clientY+document.body.scrollTop+document.documentElement.scrollTop
					}
					x -= elem.offsetLeft
					y -= elem.offsetTop
					mouse.x = x
					mouse.y = y
				},false)
				return mouse
			},
			captureTouch:function(elem){
				var touch = {
					x:null,
					y:null,
					isPressed:false,
					event:null
				}
				elem.addEventListener('touchstart',function(e){
					touch.isPressed = true
					touch.event = e
				},false)
				elem.addEventListener('touchend',function(e){
					touch.isPressed = false
					touch.event = e
				},false)
				elem.addEventListener('touchmove',function(e){
					var x,y
					var touch_event = e.touches[0]//多点触控的第一个触控点
					if(touch_event.pageX||touch_event.pageY){
						x = touch_event.pageX
						y = touch_event.pageY
					}else{
						x = touch_event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft
						y = touch_event.clientY+document.body.scrollTop+document.documentElement.scrollTop
					}
					x-=elem.offsetLeft
					y-=elem.offsetTop
					touch.x=x
					touch.y=y
					return touch
				})
			}



	}

