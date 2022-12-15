//Tabela ze znakami UTF8
var UTF8 = {A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90}
var input = "ADSBRWS\nHDFSWETS\nAGDFSDFS\n^fs8" //Ustalone z góry dane wejściowe \n to odpowiednik ENTER
var segregated = []; //Posegreguj dane zgodnie z liniami
var result = ""; //Chwilowe przechowanie danych z pętli for
for(let i=0;i<input.length;i++){
    let data = input.substring(i,i+1);
    if(data!='\n'){
        result=result+data;
    } else {
        segregated[segregated.length]=result;
        result=""; //Wyczyść result dla następnej iteracji
    };
    if(i==input.length-1){
        segregated[segregated.length]=result;
        result=undefined; //Wyczyść result na koniec pętli (nie wymagane)
    };
};
segregated.forEach(sector=>{ //Dla każdego rekordu z tabeli segregated || iteracji tabeli segregated
    let min=100; //min musi być większa niż tabela UTF-8 aby porównać poprawnie znaki
    let max=0; //max musi być niższa niż tabela UTF-8 aby porównać poprawnie znaki
    for(let i=0;i<sector.length;i++){
        let data = sector.substring(i,i+1); //0sector1
        if(!data||!UTF8[data])continue; //Jeżeli nie ma znaku w UTF8 pomiń tą iteracje
        if(min>UTF8[data])min=UTF8[data]; // Jeżeli min większe od UTF8 to nadpisz min
        if(max<UTF8[data])max=UTF8[data]; // Jeżeli max mniejsze od UTF8 to nadpisz max
    };
    if(min!=100){ // Jeżeli min nie jest 100 to z góry wiadomo że max nie jest 0
        console.log('W ciągu znaków: '+sector+'\nNajwiększym znakiem jest: '+max+' UTF-8: '+String.fromCharCode(max)+'\nNajmniejszym znakiem jest: '+min+' UTF-8: '+String.fromCharCode(min));
        //Ta sama wiadomość innym sposobem
        console.log(`W ciągu znaków: ${sector}\nNajwiększym znakiem jest: ${max} UTF-8: ${String.fromCharCode(max)}\nNajmniejszym znakiem jest: ${min} UTF-8: ${String.fromCharCode(min)}`);
    } else {
        console.log('W ciągu znaków: '+sector+'\nNie znaleziono żadnych poprawnych znaków!');
        //Ta sama wiadomość innym sposobem
        console.log(`W ciągu znaków: ${sector}\nNie znaleziono żadnych poprawnych znaków!`)
    };
});
