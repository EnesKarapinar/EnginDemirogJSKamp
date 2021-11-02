//1.Soru

console.log("------------Asal Sayılar------------")
function PrimeNumber(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let sayac = 0;
        for (let j = 2; j < numbers[i]; j++) { 

            if (numbers[i] % j == 0) {
                sayac++;
            }

        }

        if (sayac == 0 && numbers[i] != 1) {
            console.log(numbers[i] + " Asal")
        }
        
    }
}

PrimeNumber(2,5,8,21,13,3)










//2.Soru
console.log("------------Arkadaş Sayılar------------")


function FriendsNumbers(number1,number2) {
    let toplam1 = 0
    let toplam2 = 0
    if (number1 > number2) {
        for (let i = 1; i < number2; i++) {
            if (number1 % i == 0) {
                toplam1 += i
            }
            if (number2 % i == 0) {
                toplam2 += i
            }
        }
        if (toplam1 == number2 && toplam2 == number1) {
            console.log(number1 + " ve " + number2 + " Arkadaş Sayılardır")
        }
        else{
            console.log(number1 + " ve " + number2 + " Arkadaş Sayılar Değildir!!")
        }
    }
    else{
        for (let i = 1; i < number1; i++) {
            if (number1 % i == 0) {
                toplam1 += i
            }
            if (number2 % i == 0) {
                toplam2 += i
            }
        }
        if (toplam1 == number2 && toplam2 == number1) {
            console.log(number1 + " ve " + number2 + " Arkadaş Sayılardır")
        }
        else{
            console.log(number1 + " ve " + number2 + " Arkadaş Sayılar Değildir!!")
        }
    }
}

FriendsNumbers(1184,1210)










//3.Soru
console.log("------------Mükemmel Sayılar------------")
let PerfectNumber = 1

while(PerfectNumber < 1000){

    let PNTotal = 0

    for (let i = 1; i < PerfectNumber; i++) {
        if (PerfectNumber % i == 0) {
            PNTotal += i
        }
    }

    if (PerfectNumber == PNTotal) {
        console.log(PerfectNumber + " Mükemmel Sayıdır")
    }
    PerfectNumber++

}










//4.Soru

console.log("------------Asal Sayılar------------")
let PrimeNumber2 = 1

while (PrimeNumber2 < 1000) {
    let sayac = 0;
    for (let i = 2; i < PrimeNumber2; i++) { 

        if (PrimeNumber2 % i == 0) {
            sayac++;
        }

    }

    if (sayac == 0 && PrimeNumber2 != 1) {
        console.log(PrimeNumber2 + " Asal")
    }
    PrimeNumber2++
}
