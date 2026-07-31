# Alasan Desain

## 1. Normalisasi Data
Penggunakan pencatatan seperti ids dapat menghemat dari biaya filter, find, serta dapat menghandle urutan json, maupun membuat json ini tidak perlu melewati object.key untuk di maping karna bisa langsung memapingnya dari daftar array tersebut lalu mengambil datanya di json secara o(1), sementara json sendiri memberikan kemudahan akses o(1)

## 2. Pengelolaan Versi Skema
Penggunakan schema version agar dapat mengidentifikasi versi model data dan sistem dapat menangani sesuai versi dengan tepat, jika ada perubahan data dimasa depan, ini memastikan data lama di penyimpanan tidak rusak saat ada perubahan model kedepannya, serta membuat data tetap mudah di rawat dan dikembangkan kedepannya

## 3. Arsitektur Store Terpisah
Pemisahkan komponen edge case seperti table agar sistem tetap tetap user friendly, alasan tidak mencampur di dalam store karna komponen dapat bertambah dan pasti ada edge case baru, jika ditempatkan di store maka store akan penuh, oleh sebab itu penempatannya di pindah ke helper

## 4. Struktur Data Datar
Penggunakan flat json agar memudahkan serta mendapatkan keringanan dalam mengakses data, apalagi di kombnasikan dengan array pencatatan, ini jauh di sarankan ketimbang menggunakan metode array tree yang dapat menimbulkan biaya o(n)

## 5. Arsitektur Berbasis Konfigurasi
Penggunaan component allowed di konfigurasi sebagai logika utama penambahan komponen didalam komponen, jadi sistem ini berbasis konfigurasi, setiap ada komponen baru pengembang hanya perlu menambahkan beberapa settingan di konfigurasi tanpa perlu merubah kode sistem yang sudah berjalan
