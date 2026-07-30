**Alasan Desain**

* Penggunakan pencatatan seperti ids dapat menghemat biaya dari filter, find, serta dapat menghandle urutan array, maupun membuat json ini tidak perlu melewati object.key untuk di maping karna dapat langsung memaping daftar array tersebut lalu mengambil datanya di json secara o(1), sementara json sendiri memberi kemudahan akses o(1)

* Penggunakan schema version agar dapat mengidentifikasi versi model data dan dapat menangani sesuai versi dengan tepat jika ada perubahan data kedepannya, ini memastikan data lama di penyipanan tidak rusak saat ada perubahan model kedepannya, serta membuat data mudah di rawat dan dikembangkan

* Pemisahkan komponen edge case seperti table agar sistem tetap tetap user friendly, alasan tidak mencampur di store karna komponen dapat bertambah dan pasti ada edge case baru, jika di store maka store akan penuh, oleh sebab itu penempatannya di tempatkan di helper

* Penggunakan flat json agar memudahkan serta mendapatkan keringanan dalam mengakses data, apalagi di kombnasikan dengan array pencatatan, ini jauh di sarankan ketimbang menggunakan metode array tree yang dapat menimbulkan biaya o(n)

* Penggunaan component allowed di konfigurasi sebagai logika utama penambahan komponen didalam komponen, jadi sistem ini berbasis konfigurasi, setiap ada komponen baru pengembang hanya perlu menambahkan beberapa settingan di konfigurasi tanpa perlu merubah kode sistem yang sudah berjalan
