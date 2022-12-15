//Polecenie
/* 
    Znajdź największy znak w tabeli n-elementowej, gdzie wszystkie elementy do znaki a-z i A-Z
    a-z mające niższą wartość niż A-Z, gdzie ciąg a-z i A-Z jest nieprzerwana
    Wypisz wartość znaku i jego literę

    Dodatkowo:
    Policz występowanie każdego znaku w ciągu znaków
*/

//tabela ze znakami a-z i A-Z z wartościami idącymi od 1-52
var chars = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26,A:27,B:28,C:29,D:30,E:31,F:32,G:33,H:34,I:35,J:36,K:37,L:38,M:39,N:40,O:41,P:42,Q:43,R:44,S:45,T:46,U:47,V:48,W:49,X:50,Y:51,Z:52}
//tabela ze znakami a-z i A-Z na pozycjach od 0-51
var intchars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var input = "AGESDXCZadwerFDSFSfds" //Z góry ustalone dane wejściowe
var max = 0;
for(let i=0;i<input.length;i++){
    let data=input.substring(i,i+1);
    if(!data||!chars[data])continue;//Jeżeli brak jest wartości data albo nie ma chars[na pozycji data] to pomiń pętle
    if(max<chars[data])max=chars[data]; //Jeżeli max mniejsze od chars[data], nadpisz
};
if(max!=0){
    console.log('Największa litera w ciągu znaków to: '+max+' UTF-8: '+intchars[max-1]);
    console.log(`Największa litera w ciągu znaków to: ${max} UTF-8: ${intchars[max-1]}`);
} else {
    console.log('Brak poprawnej litery w ciągu znaków!');
};
//Policzenie każdego znaku

for(let key in chars){
    chars[key]=0; //Ustaw każdy znak w tabeli chars na wartość 0
};
for(let i=0;i<input.length;i++){
    let data=input.substring(i,i+1);
    if(!data||chars[data]==undefined)continue;//Jeżeli nie ma wartości albo chars[na pozycji data] jest niewiadoma, pomiń pętle
    chars[data]++;//Zwiększ o 1 chars[na pozycji data]
};
//Wypisz kolejno wszystkie znaki
for(let i=0;i<intchars.length;i++){
    console.log("Znak: "+intchars[i]+' Występuje: '+chars[intchars[i]]);
    console.log(`Znak: ${intchars[i]} Występuje: ${chars[intchars[i]]}`);
};
