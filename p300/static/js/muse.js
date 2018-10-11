var anchors = $('a');

function toggleNthElementColor(n) {
	$("a:eq("+n+")").toggleClass('turnRed')
}


var i = 1

function blink() {
	var n = i % anchors.length;
	var d = new Date
	console.log(n + "," + d + ","+ d.getMilliseconds())
    toggleNthElementColor(n);
    if(i > 1){
    	toggleNthElementColor(n - 1);
    }
    i++;
    setTimeout(blink,100);
}

blink();








