# Alasan Desain Arsitektur

## 1. Normalisasi Data
* **Akses $O(1)$ & Performa:** Menggunakan pola *Normalized Data* (kombinasi `ids: string[]` dan `byId: Record<string, T>`).
* **Efisiensi Rerender:** Mencegah operasi array yang mahal seperti `.find()` atau `.filter()` berbiaya $O(n)$. Urutan node/komponen dikendalikan oleh array ID, sementara pengambilan dan pembaruan data berjalan dalam $O(1)$.

## 2. Pengelolaan Versi Skema
* **Kompatibilitas Versi (*Backward Compatibility*):** Metadata menyertakan atribut `schemaVersion` untuk mengidentifikasi versi struktur data yang digunakan.
* **Mencegah Data Rusak:** Memastikan data lama di penyimpanan (*storage*) tetap aman dan tidak rusak (*corrupt*) ketika terjadi pembaruan arsitektur model data di masa depan.

## 3. Arsitektur Store Terpisah
* **Mencegah *Fat Store*:** Logika *edge-case* untuk komponen kompleks (seperti `TABLE` dan `PARAGRAPH`) dipisahkan ke dalam *action helper* khusus, alih-alih ditumpuk di *main store*.
* **Skalabilitas:** Menjaga *core store* tetap ringkas dan *clean*. Penambahan fitur atau komponen baru di masa mendatang tidak akan mengotori logika utama *state management*.

## 4. Struktur Data Datar
* **Mencegah Rekursi Berlebih:** Menerapkan arsitektur *Flat JSON* di mana hubungan *parent-child* dihubungkan melalui referensi ID (`parentId`, `childIds`, `depth`).
* **Mengurangi Biaya Traversal:** Menghindari manipulasi *nested array/tree* yang kompleks dan memakan biaya komputasi tinggi $O(n)$ saat melakukan pembaruan data pada node di tingkat kedalaman tertentu.

## 5. Arsitektur Berbasis Konfigurasi
* **Prinsip *Open/Closed* (SOLID):** Aturan hirarki dan relasi antar komponen (seperti `AllowedComponent`) dikendalikan sepenuhnya melalui konfigurasi.
* **Pengembangan Fleksibel:** Saat menambah jenis komponen baru, pengembang hanya perlu memperbarui skema konfigurasi tanpa perlu merusak atau mengubah kode utama (*core logic*) yang sedang berjalan.
