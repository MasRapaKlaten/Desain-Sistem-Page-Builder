Alasan Desain

* saya menggunakan pencatatan seperti ids untuk menghemat biaya filter, find, menghandle urutan array, maupun membuat json ini tidak perlu melewati object.key untuk di maping karna anda dapat langsung memaping daftar array tersebut dan mengambil datanya secara o(1), sementara json sendiri memberi kemudahan akses o(1)

* saya menggunakan schame version agar dapat mengidentifikasi versi model data dan dapat menangani sesuai versi dengan tepat jika ada perubahan data, ini memastikan data tidak rusak saat ada perubahan model kedepannya, serta membuat data mudah di rawat

* saya memisahkan komponen edge case seperti table agar tetap user friendly namun saya sadar jika komponen bertambah dan ada edge case baru store akan penuh, oleh sebab itu saya menempatkannya di helper

* saya menggunakan flat json agar memudahkan serta mendapatkan keringanan dalam mengakses data, ini jauh di sarankan ketimbang menggunakan metode array tree yang dapat menimbulkan biaya o(n)

* saya memakai component allowed di konfigurasi sebagai logika utama penambahan komponen didalam komponen, jadi sistem berbasis konfigurasi, setiap ada komponen baru saya hanya perlu menseting beberapa konfigurasi tanpa perlu merubah kode sistem yang sudah berjalan

* saya sendiri  menggunakan library seperti zustand dan immer untuk membuat ini serta pengambilan komponen didalam komponen menggunakan metode rekursi karna basisnya yang flat
