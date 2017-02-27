

	function DatePicker($target){
		this.init($target);
		this.render();
		this.setDate();
		this.bind();
	}

	DatePicker.prototype = {
		init:function($target){
			this.$target = $target;
			this.date = new Date();
			this.watchDate = new Date();
		},

		render:function(){
			var tpl =  '<div class="date-header"> \
			<span class="prev">Prev</span> \
			<span class="date-title"></span>\
			<span class="next">Next</span>\
			</div>                    \
			<div class="date-body">   \
			<table class="date-panel">\
			<thead>               \
			<tr>                \
			<th>Sun</th>      \
			<th>Mon</th>      \
			<th>Tue</th>      \
			<th>Wed</th>      \
			<th>Thu</th>      \
			<th>Fri</th>      \
			<th>Sat</th>      \
			</tr>               \
			</thead>              \
			<tbody>               \
					                  \
			</tbody>              \
			</table>                \
			</div>                    \
			<div class="date-footer"> \
			</div>                    \
			'					
			this.$datepicker = $(tpl);
			this.$datepicker.appendTo(this.$target);
			var month = this.date.getMonth()
            this.$target.find('.date-footer').text(this.toFix(month)+" "+this.date.getDate()+" "+this.date.getFullYear());

		},

		setDate:function(){


			this.$datepicker.find('tbody').html('');

			var firstDay = this.getFirstDay(this.watchDate),
				lastDay = this.getLastDay(this.watchDate);

			var dateArr = [];

			for(var i = firstDay.getDay();i>0;i--){

				var d = new Date(firstDay.getTime()-i*24*60*60*1000);
				dateArr.push({
					type:'pre',
					date:d
				});
			}

			for(var j = 0;j<lastDay.getDate()-firstDay.getDate()+1;j++){

				var d = new Date(firstDay.getTime()+j*24*60*60*1000);

				dateArr.push({
					type:'cur',
					date:d
				});
			}

			for(var k =1;k<7-lastDay.getDay();k++){

				var d = new Date(lastDay.getTime()+k*24*60*60*1000);

				dateArr.push({
					type:'next',
					date:d
				})
			}

			this.$datepicker.find('.date-title')
					.text(this.toFix(this.watchDate.getMonth())+" "+this.watchDate.getFullYear());

			var tpl = '';
			for(var i=0;i<dateArr.length;i++){
				if(i%7 === 0){
					tpl = '<tr>' + tpl;
				}

				tpl += '<td class="';

				if(dateArr[i].type === 'pre'){
					tpl += 'pre-month';
				}else if(dateArr[i].type === 'cur'){
					tpl += 'cur-month';
				}else{
					tpl += 'next-month'
				}

				if(this.date.toDateString() === dateArr[i].date.toDateString()){
					tpl += ' cur-date';
				}
				tpl += '">';

				tpl += dateArr[i].date.getDate() + '</td>';


				if(i%7===6){
					tpl = tpl + '</tr>'
				}

			}
			this.$datepicker.find('tbody').html(tpl)
							.find('.cur-date').css({fontWeight:800})
		},

		bind:function(){
			var self = this;
			this.$datepicker.find('.prev').on('click',function(){
				console.log(1)
				self.watchDate = self.getPreMonth(self.watchDate);
				self.setDate();
				console.log(1)
			});

			this.$datepicker.find('.next').on('click',function(){
				self.watchDate = self.getNextMonth(self.watchDate);
				self.setDate();
			});

		},

		getFirstDay:function(date){
			var year = date.getFullYear(),
				month = date.getMonth();
			return new Date(year,month,1)
		},

		getLastDay:function(date){
			var year = date.getFullYear(),
				month = date.getMonth();
				month++;
			if(month>11){
				month = 0;
				year++;
			}
			var newDate = new Date(year,month,1);
			return new Date(newDate.getTime()-24*60*60*1000);
		},

		getPreMonth:function(date){
			var year = date.getFullYear(),
				month = date.getMonth();
				month--;
			if(month<0){
				month = 11;
				year--;
			}
			return new Date(year,month,1);
		},

		getNextMonth:function(date){
			var year = date.getFullYear(),
				month = date.getMonth();
				month++;
			if(month>11){
				month = 0;
				year++;
			}
			return new Date(year,month,1)
		},

		toFix:function(month){
			var dict = ['January','Febubary','March','April','May','June','July','August','September','October','November','December'];
			var outer = '';
			dict.map(function(elem,idx,arr){
				if(month == idx){
					 outer = elem;
				}
			})
			return outer;
		}
	}


	$.fn.datepicker = function(){
		this.each(function(){
			new DatePicker($(this));
		})
	}