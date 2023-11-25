function imageEdit(){
    var blurValue=document.getElementById("blur").value
    var brightnessValue=document.getElementById("brightness").value
    var contrastValue=document.getElementById("contrast").value
    var grayscaleValue=document.getElementById("grayscale").value
    var hueValue=document.getElementById("hue").value
    var invertValue=document.getElementById("invert").value
    var opacityValue=document.getElementById("opacity").value
    var saturateValue=document.getElementById("saturate").value
    var sepiaValue=document.getElementById("sepia").value
     
   // cosole.log(blurValue,brightnessValue,contrastValue,grayscaleValue, hueValue,invertValue, opacityValue,
     //   saturateValue,sepiaValue);
    
    document.getElementById("image").style.filter=`blur(${blurValue}px) brightness(${brightnessValue}%)  contrast(${ contrastValue}%)
    grayscale(${grayscaleValue}%) hue-rotate(${hueValue}deg) invert(${invertValue}%) opacity(${opacityValue}%)
    saturate(${saturateValue}%) sepia(${sepiaValue}%)`
    //for transform
    var rotateX=document.getElementById("rotateX").value
    var rotateY=document.getElementById("rotateY").value
    var rotateZ=document.getElementById("rotateZ").value
    var scaleX=document.getElementById("scaleX").value
    var scaleY=document.getElementById("scaleY").value
    var skewX=document.getElementById("skewX").value
    var skewY=document.getElementById("skewY").value
    var translateX=document.getElementById("translateX").value
    var translateY=document.getElementById("translateY").value
     document.getElementById("image").style.transform=`rotateZ(${rotateZ}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
    scaleX(${scaleX}) scaleY(${scaleY}) skewX(${skewX}deg) skewY(${skewY}deg) translateX(${translateX}px) translateY(${translateY}px)`

}