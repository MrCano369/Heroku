/*Array.prototype.mix = function () {
    return this.map( e => e*e);
}
var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.mix());*/
const os=require('os');

console.log('Sistema operativo:'+os.platform());
console.log('Versión del sistema operativo:'+os.release());
console.log('Memoria total:'+os.totalmem()+' bytes');
console.log('Memoria libre:'+os.freemem()+' bytes');