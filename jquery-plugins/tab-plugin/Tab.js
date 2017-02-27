    function Tab($nodes){
        this.$tabs = $nodes.find('.tabs');
        this.$tabsItem = this.$tabs.find('li');
        this.$panel = $nodes.find('.panel');
    }

   Tab.prototype = {
       init:function(){
           this.bindEvent();
       },
       bindEvent:function(){
       var self = this;
        this.$tabs.on('click','li',function(){
            var idx = $(this).index();
            self.switchPanel(idx);
        })
       },
       switchPanel:function(index){
           this.$tabsItem.removeClass('active')
                   .eq(index).addClass('active')
           this.$panel.removeClass('active')
                   .eq(index).addClass('active')
       }
   }


