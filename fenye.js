/**
 * 分页函数
 * pno--页数
 * psize--每页显示记录数
 * 分页部分是从真实数据行开始，因而存在加减某个常数，以确定真正的记录数
 * 纯js分页实质是数据行全部加载，通过是否显示属性完成分页功能
 **/
  
 //创建列表
window.onload = function() {
    createList();
	onload=goPage(1,10)
}
    function createList() {//列表内容部分
        var itable = document.getElementById("idData");
       
        for (var i = 0; i < ojson.data.length; i++) {
            var tuwen = '<li>' + ojson.data[i].text + i + '</li>';
            //console.log(tuwen);
            itable.innerHTML += tuwen;
        }
       // console.log(itable + "呵呵");
    }

//分页
function goPage(pno, psize) { //分页区域
    var itable = document.getElementById("idData");
    var oLi = itable.getElementsByTagName("li");
    var num = oLi.length; //所有行数(所有记录数)
    var totalPage = 0; //总页数
    var pageSize = psize; //每页显示行数
    var currentPage = pno; //当前页数
    var startRow = (currentPage - 1) * pageSize + 1; //开始显示的行 
    var endRow = currentPage * pageSize; //结束显示的行
    //endRow = (endRow > num) ? num: endRow;
    //console.log(endRow);
    //遍历显示数据实现分页
    for (var i = 1; i < (num + 1); i++) {
        var irow = oLi[i - 1];
        if (i >= startRow && i <= endRow) {
            irow.style.display = "block";
        } else {
            irow.style.display = "none";
        }
    }
//
    //总共分几页 
    if (num / pageSize >= parseInt(num / pageSize)) {
        totalPage = parseInt(num / pageSize) + 1;
    } else {
        totalPage = parseInt(num / pageSize);
    }

//
    var tempStr = "共" + num + "条记录 分" + totalPage + "页 当前第" + currentPage + "页";
    if (currentPage > 1) {
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (1) + "," + psize + ")\">首页</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (currentPage - 1) + "," + psize + ")\"><上一页</a>"
    } else {
        tempStr += "首页";
        tempStr += "<上一页";
    }

    if (currentPage < totalPage) {
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (currentPage + 1) + "," + psize + ")\">下一页></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (totalPage) + "," + psize + ")\">尾页</a>";
    } else {
        tempStr += "下一页>";
        tempStr += "尾页";
    }
    document.getElementById("barcon").innerHTML = tempStr;
}
