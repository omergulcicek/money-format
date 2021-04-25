# Money Format

Parametre olarak aldığı değeri para formatına çevirir.

## Kullanımı

Tam sayı yada noktalı değeri parametre olarak alıp, TR para formatında çıktı verir.

Parametre integer yada string olarak gelebilir. Küsüratlı değerleri noktalı şekilde gönderin.

Virgülden sonraki 2 basamağı gösterir; küsürata göre değeri üste yuvarlayabilir.

```js
moneyFormat(100000)     => "100.000"

moneyFormat(123456789)  => "123.456.789"

moneyFormat(123.456)    => "123,46"

moneyFormat(123456.789) => "123.456,79"
```

## Kaynak Kod Açıklaması

```js
function moneyFormat(n) {
  //Parametre aldığı para değerini 1.000.000,50 formatına çevirir
  //Genel kontroller
  if (n == null || n === "" || typeof n == "object") { return "" }
  else if (typeof n == "number") { n = n.toString() }

  //Değişken tanımlamaları
  var a, x, reverseTemp = "", reverse = "";

  //Her 3 rakamdan sonra nokta koyup, parametre küsüratlı değil ise sonuna .00 ekler. (123456 => 123.456.00 yada 12345,67 => 12.345.67)
  a = parseFloat(n.replace(",", ".")).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.');

  //x değişkeni sondaki küsüratı alır. (123.456.78 => x = ,78)
  x = a.substr(a.length - 3).replace(".", ",");

  //Rakamı ters şekilde temp değişkenine atar. (123.456.00 => 00.654.321)
  for (i = a.length - 1; i >= 0; i--) { reverseTemp += a[i]; }

  //İlk noktayı virgül yapar. (00.654.321 => 00,654.321)
  reverseTemp = reverseTemp.replace(".", ",");

  //Rakamı tekrardan terse çevirerek, son haline getirir. (00,654.321 => 123.456,00)
  for (i = reverseTemp.length - 1; i >= 0; i--) { reverse += reverseTemp[i]; }

  //Eğer küsürat ,00 ise kaldırır
  if (x == ",00") {
      reverse = reverse.slice(0, a.length-3)
  }
  return reverse;
}
```
