


$(".sbutton").on("click",function(){
    var adminemail = "admin@mrlaboratory.com";
    var eName = $("input.input.name").val();
    var eEmail = $("input.input.email").val();
    var eWebsite = $("input.input.website").val();
    var eTitle = $("input.input.title").val();
    var eContent = $("input.input.content").val();
    var aemail =eName + eEmail+eWebsite+eTitle+eContent;
var posttitleLink ="mailto:"+adminemail+"?Subject="+eTitle+"&body="+eContent;
link = posttitleLink.toString();
window.location.href = posttitleLink;
})

