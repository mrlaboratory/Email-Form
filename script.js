var g = $(".eform.input");
for (var i = 0, len = g.length; i < len; i++)
{
    (function(index){
        g[i].onchange = function(){
         var llv =    $('.eform.input:eq('+index+')').val();
         localStorage.setItem(('emailform'+index),llv);
        
        }    
    })(i);

}
for(var i = 0, len = g.length; i < len; i++){
    var oov =window.localStorage.getItem(('emailform'+i))?window.localStorage.getItem(('emailform'+i)):"";
    $('.eform.input:eq('+i+')').val(oov);
}
document.querySelector(".eform.input.content").addEventListener("keyup", function countWord() {
		let res = [];
		let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
		str.map((s) => {
			let trimStr = s.trim();
			if (trimStr.length > 0) {
			res.push(trimStr);
			}
		});
		document.querySelector(".wordcounterr span").innerText = res.length;
		});
        $(".sbutton").on("click",function(){
            var adminemail = "admin@mrlaboratory.com";
            var eName = $(".eform.input.name").val();
            var eEmail = $(".eform.input.email").val();
            var eWebsite = $(".eform.input.website").val();
            var eTitle = $(".eform.input.title").val();
            var eContent = $(".eform.input.content").val();
        window.location.href = "mailto:admin@mrlaboratory.com?Subject="+eTitle+"&body="+eContent;
        })
        