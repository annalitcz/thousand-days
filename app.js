document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputDate = document.getElementById('inputDate').value;
    if (inputDate) {
        const startDate = new Date(inputDate);

        // Fungsi untuk menghitung hari dalam penanggalan Jawa
        function hitunghari(_tanggal) {
            _hari = _tanggal.getDay();
            switch (_hari) {
                case 0: return "Minggu";
                case 1: return "Senin";
                case 2: return "Selasa";
                case 3: return "Rabu";
                case 4: return "Kamis";
                case 5: return "Jumat";
                case 6: return "Sabtu";
                default: return "";
            }
        }

        // Fungsi untuk menghitung pasaran dalam penanggalan Jawa
        function hitungpasaran(_tanggal) {
            var awal = new Date(1970, 0, 2);
            var pembagian = (_tanggal.getTime() - awal.getTime() + 86400000) / 432000000;
            var sisa = Math.round((pembagian - Math.floor(pembagian)) * 10) / 2;
            switch (sisa) {
                case 0: return "Wage";
                case 1: return "Kliwon";
                case 2: return "Legi";
                case 3: return "Pahing";
                case 4: return "Pon";
                default: return "wrong";
            }
        }

        // Menghitung 40 hari
        const date40 = new Date(startDate);
        date40.setDate(date40.getDate() + 40 - 1);
        const result40 = date40.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const weton40 = `${hitunghari(date40)} ${hitungpasaran(date40)}`;

        // Menghitung 100 hari
        const date100 = new Date(startDate);
        date100.setDate(date100.getDate() + 100 - 1);
        const result100 = date100.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const weton100 = `${hitunghari(date100)} ${hitungpasaran(date100)}`;

        // Menghitung 1000 hari
        const date1000 = new Date(startDate);
        date1000.setDate(date1000.getDate() + 1000 - 1);
        const result1000 = date1000.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const weton1000 = `${hitunghari(date1000)} ${hitungpasaran(date1000)}`;

        // Menampilkan hasil dalam tabel
        const resultTable = document.getElementById('result');
        resultTable.innerHTML = `
            <tr>
                <td>40 hari</td>
                <td>${result40}</td>
                <td>${weton40}</td>
            </tr>
            <tr>
                <td>100 hari</td>
                <td>${result100}</td>
                <td>${weton100}</td>
            </tr>
            <tr>
                <td>1000 hari</td>
                <td>${result1000}</td>
                <td>${weton1000}</td>
            </tr>
        `;
    } else {
        document.getElementById('result').textContent = 'Silakan masukkan tanggal yang valid.';
    }
});
