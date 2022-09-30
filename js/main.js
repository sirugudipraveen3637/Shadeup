function randompickerbtn() {
    let val = "0123456789ABCDEF";
    let cons = "#";
  
    for (let i = 0; i < 6; i++) {
      cons = cons + val[Math.floor(Math.random() * 16)];
    }
    document.getElementById("randomValuePara").textContent= cons;
     document.getElementById("randomPicker").style.backgroundColor= cons;
    

}

function hexFindbtn() {
    try {
        let hexvalue=document.getElementById("hexInput").value;
        if(hexvalue.search("#")==-1)
            throw "Please provide # symbol";
        if(hexvalue.split("#")[1].length != 6){
            throw "Only six-digit hex colors are allowed.";
        }
        let hexarray=[...hexvalue.split("#")[1]];

        for (const element of hexarray) {
            let val = "0123456789ABCDEF";
           if(val.search(element.toUpperCase())==-1){ 
               throw "Provide valid hex color code.";
           }
        }
        document.getElementById("color-box").style.backgroundColor=hexvalue;
    } catch (error) {
        alert(error);
    }

}

function RGBFindbtn() {
    try {
        let RCInput= ColorToHex(parseInt(document.getElementById("RInput").value));
        let GCInput= ColorToHex(parseInt(document.getElementById("GInput").value));
        let BCInput= ColorToHex(parseInt(document.getElementById("BInput").value));
        alert(RCInput+"@@"+GCInput+"###"+BCInput)
        document.getElementById("rgb-color-box").style.backgroundColor= "#"+RCInput+GCInput+BCInput;
    } catch (error) {
        alert(error);
    }
}

function RangeSelector() {
    try {
        let RCInput= ColorToHex(parseInt(this.RrInput.value));
        let GCInput= ColorToHex(parseInt(this.GrInput.value));
        let BCInput= ColorToHex(parseInt(this.BrInput.value));
        document.getElementById("range-color-box").style.backgroundColor= "#"+RCInput+GCInput+BCInput;
    } catch (error) {
        alert(error);
    }
 
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
    if(this.length != 6){
        throw "Only six-digit hex colors are allowed.";
    }
     
    let hexarray=[...this];

    for (const element of hexarray) {
        let val = "0123456789ABCDEF";
       if(val.search(element.toUpperCase())==-1){ 
           throw "Provide valid hex color code.";
       }
    }
 

    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;

};

function hexConvbtn() {
    try {
        let inputvalue= document.getElementById("hexCInp").value;
        document.getElementById("hexCOut").textContent= inputvalue.convertToRGB();
    } catch (error) {
        alert(error);
    }

}

function rgbConvbtn() {
    try {
        let RCInput= ColorToHex(parseInt(document.getElementById("RCInput").value));
        let GCInput= ColorToHex(parseInt(document.getElementById("GCInput").value));
        let BCInput= ColorToHex(parseInt(document.getElementById("BCInput").value));
        document.getElementById("rgbCOut").textContent= "#"+RCInput+GCInput+BCInput;
    } catch (error) {
        alert(error);
    }
}

function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }
  