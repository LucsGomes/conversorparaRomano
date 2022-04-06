let numeroseNumerais = [
    {numero: 1000, romano: 'M'}, //0
    {numero: 900, romano: 'CM'}, //1
    {numero: 500, romano: 'D'},  //2
    {numero: 400, romano: 'CD'}, //3
    {numero: 100, romano: 'C'},  //4
    {numero: 90, romano: 'XC'},  //5
    {numero: 50, romano: 'L'},   //6
    {numero: 40, romano: 'XL'},  //7
    {numero: 10, romano: 'X'},   //8
    {numero: 9, romano: 'IX'},   //9
    {numero: 5, romano: 'V'},    //10
    {numero: 4, romano: 'IV'},   //11
    {numero: 1, romano: 'I'}     //12
];

function convert(arabicNumber){
    let letraromana = '';
    let numero = arabicNumber;
    for(let i=0; i < numeroseNumerais.length; i++){
        if(numeroseNumerais[i].numero <= numero){    // 18 - 10 = 8
            numero = numero - numeroseNumerais[i].numero;
                            //10        -   10
            letraromana = letraromana + numeroseNumerais[i].romano;
                            //''      + 'X'
            i--
        }
    }

    console.log(`O número ${arabicNumber} é ${letraromana} em Letra Romana`);

}

convert(512);