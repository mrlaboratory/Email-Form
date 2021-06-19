$(".sbutton").on("click",function(){
    var adminemail = "admin@mrlaboratory.com";
    var eName = $("input.input.name").val();
    var eEmail = $("input.input.email").val();
    var eWebsite = $("input.input.website").val();
    var eTitle = $("textarea.input.title").val();
    var eContent = $("textarea.input.content").val();
    var aemail =eName + eEmail+eWebsite+eTitle+eContent;
var adminemail = "admin@mrlaboratory.com";
var emailformmr ="mailto:"+adminemail+"?Subject="+eTitle+"&body="+eContent;
window.location.href = emailformmr;
})


