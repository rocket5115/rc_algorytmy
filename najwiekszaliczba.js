//Polecenie
/* 
    Znajdź największą liczbę w tabeli n-elementowej, gdzie wszystkie elementy > -1
*/

var nelement = [1,7,3,6,9,4,6,3,8]; // tabela z liczbami
var max = -1; // max jako -1, gdyż tabela ma elementy >= 0
for(let i=0;i<nelement.length;i++){ //iteracja
    if(max<nelement[i]){//jeżeli max mniejsze od nelement[pozycja i]
        max=nelement[i];//nadpisz
    };
};
if(max!=-1){//Zobacz czy max jest większe od 0
    console.log('Największa liczba w tabeli to '+max);
    console.log(`Największa liczba w tabeli to ${max}`);
} else {//Inaczej
    console.log('Brak danych w tabeli, albo złe dane!');
};
