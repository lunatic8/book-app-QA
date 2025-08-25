# QA Testing — UI (Frontend)

## Deskripsi Pekerjaan
Pada bagian ini, saya hanya fokus pada pengujian UI (Frontend) dari aplikasi **Book Tracker** menggunakan **Cypress**.

## Fitur yang Diuji
1. **Membuka Menu Home**  
   - Memastikan bahwa menu home dapat diakses oleh user.
2. **Membuka Semua Menu/Fitur yang Ada**  
   - Memastikan bahwa seluruh menu/fitur yang tersedia dapat diakses oleh user.
3. **Mencari Buku**  
   - Memastikan bahwa buku dapat dicari oleh user dengan berbagai cara pencarian.

## Tools yang Digunakan
- **Cypress**: Untuk pengujian E2E (End-to-End) dan validasi UI.
- **Browser**: Chrome/Chromium.

## Konfigurasi
- **Cypress Config**: `frontend/cypress.config.js`
  - `baseUrl`: `http://localhost:8080`
  - **Spec Pattern**: `cypress/e2e/**/*.cy.{js,jsx,ts,tsx}`
  - **Support File**: `cypress/support/e2e.js`

## Bug yang Ditemukan
- Tidak ada bug yang ditemukan pada UI selama pengujian.
- Semua test case berjalan sesuai harapan.

## Instruksi untuk Menjalankan Test
1. **Jalankan Backend**: `python app.py` (di folder `backend/`)
2. **Jalankan Frontend**: `npm run dev` (di folder `frontend/`)
3. **Jalankan Cypress**:  
   - Untuk GUI: `npx cypress open`  

---

## Catatan Lain
- Fokus utama adalah memastikan aplikasi UI berfungsi dengan baik dalam hal interaksi pengguna (form input, tombol, responsivitas).
- Pembuatan Test Case juga dilakukan untuk sebagai pengujian manual yang ada pada file TestCase_booktracker_app.xlsx.

