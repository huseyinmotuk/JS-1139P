let teamOne = 0;

function arttir1() {
    console.log("teamOne için bir skor artırıldı")
    teamOne++;
    document.getElementById("numberOne").innerHTML = teamOne;

}


let teamOneAzalt = teamOne;

function azalt1() {

    if (teamOne > 0) {
        console.log("teamOne için bir skor azaltıldı")
        teamOne--;
        document.getElementById("numberOne").innerHTML = teamOne;

    } else {
        teamOne === 0;
    }

}


let teamTwo = 0;

function arttir2() {
    console.log("teamTwo için bir skor artırıldı")
    teamTwo++;
    document.getElementById("numberTwo").innerHTML = teamTwo;

}

let teamTwoAzalt = teamTwo;

function azalt2() {
    if (teamTwo > 0) {
        console.log("teamTwo için bir skor azaltıldı")
        teamTwo--;
        document.getElementById("numberTwo").innerHTML = teamTwo;
    } else {
        teamTwo === 0;
    }

}




function teamNickA() {
    let teamA = prompt("Yeni Takım Adı Giriniz");
    console.log("Team A Nick Name Değiştirildi")
    document.getElementById("teamA").innerText = teamA;
}

function teamNickB() {
    let teamB = prompt("Yeni Takım Adı Giriniz");
    console.log("Team B Nick Name Değiştirildi")
    document.getElementById("teamB").innerText = teamB;
}


function skorGir1() {
    let skor1 = prompt("Yalnızca Sayı Girişi Yapınız");
    if (skor1 !== null && !isNaN(skor1) && skor1.trim() !== '') {
        document.getElementById("numberOne").innerHTML = skor1;
        console.log("Skor 1. Takım için direkt değer verildi.")
    } else {
        alert("Yalnızca Sayı Giriniz")
    }
}

function skorGir2() {
    let skor2 = prompt("Yalnızca Sayı Girişi Yapınız");
    if (skor2 !== null && !isNaN(skor2) && skor2.trim() !== '') {
        document.getElementById("numberTwo").innerHTML = skor2;
        console.log("Skor 2. Takım için direkt değer verildi.")
    } else {
        alert("Yalnızca Sayı Giriniz")
    }
}