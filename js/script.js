//Cara lain:
// function showSection(sectionId){
//     const sections = document.querySelectorAll('div[id^="luaspersegi"], div[id^="luasppanjang"], div[id^="kellpersegi"], div[id^="kellppanjang"]');
//     sections.forEach(section => {
//         section.classList.add('hidden');
//     });

//     const selectedSection = document.getElementById(sectionId);
//     if (selectedSection) {
//         selectedSection.classList.remove('hidden');
//     }
// }
function showSection(sectionId){
    document.getElementById('luaspersegi').classList.add('hidden');
    document.getElementById('luasppanjang').classList.add('hidden');
    document.getElementById('kellpersegi').classList.add('hidden');
    document.getElementById('kellppanjang').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}

//luas persegi
document.getElementById('hitungluaspersegi').addEventListener('click', function(){
    const sisi = parseFloat(document.getElementById('inputsisi').value);
    if (!isNaN(sisi) && sisi > 0){
        const luas = sisi * sisi;
        document.getElementById('hasilluaspersegi').innerText = `Luas Persegi = ${luas}`;
    }
    else{
        document.getElementById('hasilluaspersegi').innerText = 'Mohon masukan angka yang valid!';
    }
});
document.getElementById('resetluaspersegi').addEventListener('click', function(){
    document.getElementById('inputsisi').value = '';
    document.getElementById('hasilluaspersegi').innerText = '';
});

//keliling persegi
document.getElementById('hitungkellpersegi').addEventListener('click', function(){
    var sisi = parseFloat(document.getElementById('inputsisip').value);
    if (sisi){
        var keliling = 4 * sisi;
        document.getElementById('hasilkellpersegi').innerText = `Keliling Persegi = ` + keliling;
    }
    else{
        document.getElementById('hasilkellpersegi').innerText = 'Mohon masukan angka yang valid!';
    }
});
document.getElementById('resetkellpersegi').addEventListener('click', function(){
    document.getElementById('inputsisip').value = '';
    document.getElementById('hasilkellpersegi').innerText = '';
});

//luas persegi panjang
document.getElementById('luasppanjang').addEventListener('click', function(){
    var panjang = parseFloat(document.getElementById('panjanginput').value);
    var lebar = parseFloat(document.getElementById('lebarinput').value);
    if (panjang && lebar && panjang > 0 && lebar > 0){
        var luaspp = panjang * lebar;
        document.getElementById('hasilluaspp').innerText = `Luas Persegi Panjang = ${luaspp}`;
    }
});
document.getElementById('resetluaspp').addEventListener('click', function(){
    document.getElementById('panjanginput').value = '';
    document.getElementById('lebarinput').value = '';
    document.getElementById('hasilluaspp').innerText = '';
});

//keliling persegi panjang
document.getElementById('kellppanjang').addEventListener('click', function(){
    var panjang = parseFloat(document.getElementById('inputpan').value);
    var lebar = parseFloat(document.getElementById('inputleb').value);
    if (panjang && lebar && panjang > 0 && lebar > 0){
        var kellpp = 2 * (panjang + lebar);
        document.getElementById('hasilkellpp').innerText = `Luas Persegi Panjang = ` + kellpp ;
    }
});
document.getElementById('resetkellpp').addEventListener('click', function(){
    document.getElementById('inputpan').value = '';
    document.getElementById('inputleb').value = '';
    document.getElementById('hasilkellpp').innerText = '';
});
