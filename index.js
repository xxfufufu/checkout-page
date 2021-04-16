const plus = document.querySelectorAll('.increment');
const minus = document.querySelectorAll('.decrement');
const total = document.querySelector('.price-total');
const items = document.querySelectorAll('.items');

plus.forEach(item => item.addEventListener('click', function () {
    let nilai = item.parentElement.querySelector('.how-much');
    let inputNilai = nilai.value;
    let newNilai = parseInt(inputNilai) + 1;
    nilai.value = newNilai;
    jumlah();
}))

minus.forEach(item => item.addEventListener('click', function () {
    let nilai = item.parentElement.querySelector('.how-much');
    let inputNilai = nilai.value;
    let newNilai = parseInt(inputNilai) - 1;
    nilai.value = newNilai;
    newNilai >= 0 ? nilai.value = newNilai : nilai.value = 0;
    jumlah();
}))

function jumlah() {
    let items = document.getElementsByClassName('items');
    let itemlala = document.querySelectorAll('.item');
    let shippingElement = document.querySelector('.price-shipping')
    let shipping = parseFloat(shippingElement.innerText.replace('$',''))
    let jml = shipping
    for (let i = 0; i < itemlala.length; i++) {
        let item = itemlala[i]
        let priceElement = item.querySelector('.price-discount')
        let banyakElement = item.querySelector('.how-much')
        let price = parseFloat(priceElement.innerText.replace('$',''))
        let banyak = banyakElement.value
        jml = jml + (price*banyak)
        console.log(jml)
    }
    document.querySelector('.totalsemua').innerText = '$' + Math.round(jml*100)/100
}