console.log("Merhaba Kodlama :)")
// js type safe değildir. yani başta ne tanımladıysan onunla devam etmelisin

let dolarDun = 9.20
let dolarBugun = 9.30

console.log(dolarDun)

//sıklıkla kullanılan bir diğer veri tipi const (sabit) tir

const euroDun = 11.21
// euroDun = 11  --> bu bir hatadır.

console.log(euroDun)

 
// array(dizi)
let konutKredileri = ["Konut Kredisi","Emlak Kredisi","Araç Kredisi","İhtiyaç Kredisi"]
// isimlendirme çok önemlidir. değişken tanımlanırken özellikle bir array (dizi) ise
//camelCasing kullanılır. (ikinci kelimenin ilk harfi büyük)

console.log("<ul>")
//react js kullanarak ekrana baskı yapan bir kütüphane

for(let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")     
}
console.log("</ul>")
console.log(konutKredileri)