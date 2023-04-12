document.write("Масив1"+"</br>");
let mas1=[];
for (let i=0; i<10; i++) {
mas1[i]= Math.random();
document.write(mas1[i]+'</br> ');
}
document.write("Масив2"+"</br>");
let mas2=[];
for (let i=0; i<10; i++) {
mas2[i]= Math.random()*10;
document.write(mas2[i]+'</br> ');
}
let mas3=[];
document.write("Масив3.1"+"</br>");
for (let i=0; i<10; i++) {
mas3[i]=Math.floor(Math.random()*10);
document.write(mas3[i]+'</br> ');
}
document.write("Масив3.2"+"</br>");
for (let i=0; i<10; i++) {
mas3[i]=Math.round(Math.random()*10);
document.write(mas3[i]+'</br> ');
}
document.write("Масив3.3"+"</br>");
for (let i=0; i<10; i++) {
mas3[i]=Math.ceil(Math.random()*10);
document.write(mas3[i]+'</br> ');
}