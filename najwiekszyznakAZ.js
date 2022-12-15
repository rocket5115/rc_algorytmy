//Polecenie
/*
    znajdź najwyższy znak z ciągu znaków od A-Z wielkością ASCII(UTF-8)
*/

//Tabela z wartościami od A-Z od 65-90 kolejno
var UTF8 = {A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90}
var input = "AGDVXHFS" //Ustalone z góry dane wejściowe
//Pętla for(dla), przyjmuje 3 warunki, wartość wejściową,warunek kontynuacji pętli, iteracja wartości wejściowej || i++,i--
var max = 0;
for(let i=0;i<input.length;i++){
    let string = input.substring(i,i+1); //Weź znak na pozycji od i do i+1 0a1
    if(!string||!UTF8[string])continue; //Jeżeli nie ma znaku w naszej tabeli, pomiń dalszy kod
    if(max<UTF8[string])max=UTF8[string]; //Jeżeli zmienna max jest mniejsza od wartości w tabeli, nadpisz max
};
if(max==0){ //Jeżeli nie ma znaku w naszej tabeli, zwróć wiadomość
    console.log('Złe wprowadzone dane!');
} else { //Inaczej
    console.log('Najwyższa liczba w ciągu znaków to: '+max+' UTF-8: '+String.fromCharCode(max));
    console.log(`Najwyższa liczba w ciągu znaków to: ${max} UTF-8: ${String.fromCharCode(max)}`); // Ta sama wiadomość inną metodą
};
