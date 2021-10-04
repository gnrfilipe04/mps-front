export function hex2a(hexx: string) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 3)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  }