function setImagePreview(file,img,imgrongqi) {
var docObj=document.getElementById(file);
var imgObjPreview=document.getElementById(img);
if(docObj.files &&docObj.files[0])
{
imgObjPreview.style.display = 'block';
imgObjPreview.style.width = '240px';
imgObjPreview.style.height = '100px'; 
imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
}
else
{
docObj.select();
var imgSrc = document.selection.createRange().text;
var localImagId = document.getElementById(imgrongqi);
localImagId.style.width = "240px";
localImagId.style.height = "100px";
try{
localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
}
catch(e)
{
alert("您上传的图片格式不正确，请重新选择!");
return false;
}
imgObjPreview.style.display = 'none';
document.selection.empty();
}
return true;
}