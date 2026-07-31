# Alasan Desain Arsitektur Page Builder

## 1. Performa Skema
* Penggunaan flat json memberikan kecepatan akses O(1)
* Penggunaan ids agar menghemat memori dari filter, find, serta tidak perlu mnggunakan object.value untuk maping

## 2. Stabilitas Dan Skabilitas
* Penggunaan schemaVersion agar dapat mengidedintifikasi tipe model yang dipakai jika ada perubahan data, sekaligus memastikan data lama tetap aman
* sistem berbasis konfigurasi, agar mudah dikembangkan kedepannya jika koponen bertambah tanpa perlu mengubah kode yang sudah berjalan 
