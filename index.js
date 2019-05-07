var CopyObj = (function(window){
  function CopyObj(val, ele){
    /**
     * val 复制的value值 
     * ele 复制的节点
    */ 
    this.val = val
    this.ele = ele
  }

  CopyObj.prototype = {
    constructor: CopyObj,
    copy: function() {
      // 区分iPhone设备
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        // 这段代码必须放在前面否则无效
        window.getSelection().removeAllRanges();
        var range = document.createRange();
        // 选中需要复制的节点
        range.selectNode(this.ele);
        // 执行选中元素
        window.getSelection().addRange(range);
        // 执行 copy 操作
        var successful = document.execCommand('copy');
        alert(`复制成功：${this.val}`)
        // 移除选中的元素
        window.getSelection().removeAllRanges();
      } else {
        // body中追加一个input
        var input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', this.val);
        input.select();
        if (document.execCommand('copy')) {
          document.execCommand('copy');
          alert(`复制成功：${this.val}`)
        }
        // 移除input节点
        document.body.removeChild(input);
      }
    }
  }
  return CopyObj

})(window)
