# Alasan Desain Arsitektur Page Builder

## 1. Performa Skema
* Penggunaan flat json memberikan kecepatan akses O(1)
* Penggunaan ids supaya dapat menghemat memori dari filter, find, serta menghindari penggunaan object.value untuk maping, sekaligus menghandle urutan json

## 2. Stabilitas Skema
* Penggunaan schemaVersion agar dapat mengidedintifikasi tipe model yang dipakai jika ada perubahan data, sekaligus memastikan data lama tetap aman
* sistem berbasis konfigurasi, agar mudah dikembangkan kedepannya jika koponen bertambah tanpa perlu mengubah kode yang sudah berjalan 
