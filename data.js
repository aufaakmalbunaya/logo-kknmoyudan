// Data from Google Form Responses
const formData = [
    {
        timestamp: "05/02/2026 10:08:03",
        impression: "kayak logo karang taruna",
        chosenLogo: "Logo B",
        reason: "yang paling sreg aja sih. logo A terlalu \"sad\" gitu vibesnya. logo C kurang applicable dan kurang fleksibel. logo D ngerasa kurang aja",
        meaning: "semangat, cerah, \"peradaban\" bgt gitu",
        ratings: [4, 3, 2, 4],
        notes: "berikan kontras warna yang lebih baik antara logo utama dan background. kurang suka sama background pattern. better polos"
    },
    {
        timestamp: "05/02/2026 10:09:04",
        impression: "seger",
        chosenLogo: "Logo C",
        reason: "nyambung",
        meaning: "desa",
        ratings: [5, 5, 5, 5],
        notes: "aman, tidak"
    },
    {
        timestamp: "05/02/2026 10:18:46",
        impression: "bagus",
        chosenLogo: "Logo B",
        reason: "logonya unik dan sekilas mempresentasikan tentang gambaran moyudan dalam bidang pertanian",
        meaning: "peradaban",
        ratings: [4, 4, 5, 3],
        notes: "-"
    },
    {
        timestamp: "05/02/2026 10:46:47",
        impression: "Bagus",
        chosenLogo: "Logo D",
        reason: "Kelihatan simple dan 'clean'",
        meaning: "Huruf 'P' di situ udah sangat mewakili identitas kita secara langsung. Pola daun di dalamnya identik dengan alam dan kehidupan, mewakili lingkungan dan kesehatan, yang secara langsung mendukung penguatan ekonomi",
        ratings: [4, 5, 4, 5],
        notes: "-"
    },
    {
        timestamp: "05/02/2026 10:56:17",
        impression: "Elegan, simple, namun tetap berwibawa",
        chosenLogo: "Logo D",
        reason: "Membentuk letter P dan m dan juga modelnya sederhana tidak banyak gambar. Hanya sekadar geometri sederhana",
        meaning: "Letter p dan m dari dark spot mempresentasikan tema kkn kita: peradaban moyudan. Huruf p terbagi menjadi 4 bagian: boleh dimaknai apapun, misalnya 4 kluster, 4 sub unit, 4 kelurahan di Moyudan yang masing masing bersinergi. Di tengah tengah p ada lingkaran di tengah: menunjukkan persatuan atau apalah yang jelas 4 bagian itu mengitari 1 lingkaran. Kalau disadari, bagian Gap antara geometri geometri nya di daerah lingkaran membentuk target mark: menunjukkan tujuan/target yang ingin dicapai 🎯",
        ratings: [5, 3, 5, 5],
        notes: "Alangkah sebaiknya gambar padi ornamen pada logo dihilangkan, karena menghapus kesan simple. Lihatlah logo logo geometri sederhana serupa seperti logo pertamina, google, Microsoft, dll. Pada tiap geometri hanya ada 1 warna dasar tanpa ornamen tambahan namun tetap memberi kesan ekslusif. Sekadar saran"
    },
    {
        timestamp: "05/02/2026 11:08:33",
        impression: "Beragam... logo B paling aestetic menurutku",
        chosenLogo: "Logo B",
        reason: "Aestetic",
        meaning: "Kelapa, tanaman 1000 manfaat",
        ratings: [4, 4, 5, 5],
        notes: "Backgroundny jadiin polos aja atau gradasi"
    },
    {
        timestamp: "05/02/2026 12:25:27",
        impression: "A) Hampa karena bunganya rontok, B) energik tapi kurang ramai, C) energik, ramai, dan kuat karena ada mataharinya, 4) kayak patung ini kesannya 🗿",
        chosenLogo: "Logo C",
        reason: "Kesan yang ditimbulkan mendalam dan energik",
        meaning: "Inovasi baru",
        ratings: [5, 5, 3, 4],
        notes: "-"
    },
    {
        timestamp: "05/02/2026 16:26:15",
        impression: "logo-logo ini menurutku lucu dan simple",
        chosenLogo: "Logo C",
        reason: "menurutku logo C karena dari segi visual kelihatan cerah dan lebih ada unsur \"desa\" nya",
        meaning: "mungkin bisa dimaknai melalui kkn ini kita bisa mewujudkan desa moyudan yg lebih cerah",
        ratings: [4, 3, 4, 4],
        notes: "-"
    },
    {
        timestamp: "05/02/2026 16:44:01",
        impression: "keren tapi kurang suka karena warnanya terlalu terang dan kurang netral [terutama di backgorundnya], karena background dengan warna yang kurang netral takut menyulitkan dalam aplikasi ke berbagai media visual",
        chosenLogo: "Logo B",
        reason: "menurut saya paling mudah digunakan. yang A maknanya terkesan negatif karena seperti bunga layu [patah semangat, dst, tidak mencerminkan 'membangun peradaban'], sedangkan yang C menurut saya terlalu rame ilustrasinya sehingga kurang mudah untuk dijadikan sebagai logo. yang D cukup bagus tetapi kurang menggambarkan keunikan desa moyudan, sehingga overall saya memilih logo B",
        meaning: "saya belum memiliki interpretasi khusus",
        ratings: [3, 3, 2, 3],
        notes: "menurut saya warna yang digunakan terlalu banyak sehingga menyulitkan untuk fokus pada objek yang ingin ditonjolkan. mungkin bisa dipertimbangkan untuk menggunakan warna background yang netral saja seperti putih"
    },
    {
        timestamp: "05/02/2026 16:47:35",
        impression: "baguss idenya macam macam aku cukup suka yg b",
        chosenLogo: "Logo B",
        reason: "lebih simpel warnanya dan elemennya terfokus",
        meaning: "interpretasi memberi manfaat pada sesama? matahari ada pohon jg",
        ratings: [4, 3, 2, 3],
        notes: "udah bagusss kalo boleh warna mungkin bisa disesuaikan agak netral supaya bagus dikombinasikan untuk bbrp warna lain untuk pamflet dkk"
    },
    {
        timestamp: "05/02/2026 16:49:33",
        impression: "suka dengan pemilihan warnanya, hampir semua warnanya jelas",
        chosenLogo: "Logo D",
        reason: "1. Makna: menampilkan huruf P yang mencerminkan \"Peradaban\" dan titik kotak dua mencerminkan huruf M yang bermakna \"Moyudan\" sesuai dengan nama tim KKN kita. Lalu ada gambar rumput-rumput kecil yang mencerminkan Moyudan itu merupakan wilayah persawahan. Lalu, yang warna kuning itu ada garis bergelombang yang mencerminkan ombak. 2. Lalu, desainnya juga simple gitu. 3. Pemilihan warna juga sudah cukup baik, apalagi warna hijaunya hampir menyeluruh.",
        meaning: "Huruf P mencerminkan \"Peradaban\" dan titik kotak mencerminkan huruf M bermakna \"Moyudan\". Huruf P berbentuk lingkaran melambangkan kolaborasi, kerja sama antar klaster. Ada gambar rumput-rumput mencerminkan persawahan. Warna kuning dengan garis bergelombang mencerminkan ombak untuk sektor perikanan. Warna hijau bermakna kedamaian, sabar, ikhlas, selalu berpikiran positif.",
        ratings: [5, 5, 5, 5],
        notes: "Semisal, jika ada pilihan logo yang imbang (poin terbanyak/terbesar), saran saya divoting lagi saja. Dan hasil rekap voting ini, dibagikan di grup juga. Terima kasih."
    },
    {
        timestamp: "05/02/2026 16:52:48",
        impression: "wangun mass",
        chosenLogo: "Logo C",
        reason: "Lebih bagus secara visual dibanding dengan 3 logo lainnya",
        meaning: "Kalo menurutku logo ini mencerminkan perjalanan menuju masa depan yang lebih baik, dengan dukungan alam, keseimbangan, dan harapan baru. Nuansanya sangat kuat ke arah pertumbuhan dan keberlanjutan. Selain itu, logo ini gampang banget dikaitkan ke tema besar kita yaitu pendidikan.",
        ratings: [4, 2, 3, 5],
        notes: "-----"
    },
    {
        timestamp: "05/02/2026 17:07:38",
        impression: "Mantep (dah buat capek2 soalnya wkwk)",
        chosenLogo: "Logo C",
        reason: "Terlihat lebih aman dan sesuai template tim kkn pada umumnya",
        meaning: "Mencerminkan daerah moyudan yang kaya akan alam dan suasana yang cerah dan hangat bagi orang yang mengunjunginya",
        ratings: [5, 3, 2, 4],
        notes: "Tidak ada"
    },
    {
        timestamp: "05/02/2026 17:22:50",
        impression: "no 1 seperti emote, no 2 pulau?, no 3 pohon palem/sawit, no 4 style kufi",
        chosenLogo: "Logo D",
        reason: "lebih netral dan bolehlah simbol dengan padi, sebenarnya lebih karena saya bingung kenapa banyak pohon palem utk logo lain",
        meaning: "no 1 kayak emote, tapi kenapa layu. no 2 bagus tapi kurang paham itu matahari dan pulau kah? no3 bagus tapi kenapa palem juga. no4 tersusun dari beragam modul kotak menyimbolkan modularisme dan kerjasama",
        ratings: [5, 3, 5, 5],
        notes: "kalau mau simbol ilmu mungkin bisa semacam padi dan buku sebagai pelengkap"
    },
    {
        timestamp: "05/02/2026 17:31:25",
        impression: "kelas semua bang",
        chosenLogo: "Logo B",
        reason: "milih logo b krn serasi dengan moyudan, alam yang menyejukkan~ terlihat cerah juga seperti harapan kkn kita. designnya simple dan mantep",
        meaning: "meningkatkan keasrian lingkungan moyudan dan membawa perubahan yang mencerahkan",
        ratings: [5, 5, 5, 5],
        notes: "no komen"
    },
    {
        timestamp: "05/02/2026 19:07:04",
        impression: "Bagus, mengesankan",
        chosenLogo: "Logo C",
        reason: "Cukup sesuai dengan kondisi geografis moyudan, tidak seperti B yang terkesan di pantai, dan A yang terkesan malah jenuh dan berguguran, serta D yang monoton berupa huruf",
        meaning: "Membawa amanah untuk mengantarkan masyarakat pada jalan dan semangat peradaban",
        ratings: [4, 4, 5, 5],
        notes: "-"
    },
    {
        timestamp: "05/02/2026 20:11:42",
        impression: "Afwan, tapi bagi saya pribadi kurang tampak seperti logo.",
        chosenLogo: "Logo C",
        reason: "Lebih tampak hidup.",
        meaning: "Suasana yang tergambar pada logo tersebut menggambar lokasi desa yang akan digunakan ketika kkn, yakni asri.",
        ratings: [3, 3, 2, 2],
        notes: "-"
    },
    {
        timestamp: "05/02/2026 21:17:07",
        impression: "Secara umum, logo logo yang sudah ditampilkan memiliki nuansa alam dan kebersamaan. Setiap logo mencoba merepresentasikan identitas desa dengan pendekatan visual yang beda beda.",
        chosenLogo: "Logo C",
        reason: "Logo C kuat secara visual. Logo ini memiliki banyak elemen yang memberikan banyak 'kesan' seperti pertumbuhan, harapan, dan tbh rasanya punya tujuan yang jelas.",
        meaning: "Logo C mencerminkan semangat kebersamaan antara mahasiswa dan masyarakat desa dalam membangun masa depan yang lebih baik. Pohon melambangkan kehidupan dan pertumbuhan, matahari as a hope dan positive energy, serta jalan sebagai proses dan perjalanan selama KKN yang sesuai dengan visi misi.",
        ratings: [5, 5, 5, 5],
        notes: "-"
    },
    {
        timestamp: "06/02/2026 6:28:03",
        impression: "Sangat energik sekali warnanya",
        chosenLogo: "Logo D",
        reason: "Hmm, lebih ngga general sih, jadinya bisa dibikin makna filosofi logonya",
        meaning: "Alam dan pertanian sesuai ciri khas desa moyudan",
        ratings: [4, 3, 4, 4],
        notes: "Kalau bisa untuk logo 4 dibikin lebih kuat kontrasnya misal hijaunya lebih tua, tapi ini menurut preferensi saya sih"
    },
    {
        timestamp: "06/02/2026 6:32:54",
        impression: "desain sudah bagus, namun rasanya masih ada yang kurang di beberapa logo",
        chosenLogo: "Logo D",
        reason: "dari visual huruf p melambangkan tema yaitu peradaban, dan motif hijau melambangkan pertumbuhan dan pertanian serta berkaitan dengan desa juga. logo ini juga lebih mudah dipakai di semua situasi baik formal maupun informal",
        meaning: "logo tersebut melambangkan peradaban desa yang terus bertumbuh",
        ratings: [3, 3, 4, 5],
        notes: "kurang lebih desain logo yang ditawarkan sudah sangat baik"
    },
    {
        timestamp: "06/02/2026 7:41:04",
        impression: "Yang A mawar yg berguguran klo sepemahaman filosofi yg ku pahami makananya semangat yang telah pudar. B seperti ada optikal ilusi yg buat fokus. Untuk C centraling style dan balance, punya makba fokus akan tujuan dan seimbang di segala aspek. Yang D kenapa kayak huruf P?",
        chosenLogo: "Logo C",
        reason: "Masih bisa diterima dan masih ada keterkaitannya",
        meaning: "Fokus, seimbang, nyaman, dan saling terkait yang menunjukkan dedikasikan kita akan tujuan yg ada dengan tetap menyeimbangkan dengan berbagai hal",
        ratings: [4, 4, 3, 4],
        notes: "Seperti yg di atas, sebelumnya"
    },
    {
        timestamp: "06/02/2026 8:27:36",
        impression: "Logo D terkesan paling rapi dan bagus. Logo A seperti emot🥀.",
        chosenLogo: "Logo D",
        reason: "Simple, mudah diingat, rapi.",
        meaning: "Cuma inisial dari KKN dan dikasih kesan hijau menunjukkan pedesaan.",
        ratings: [3, 3, 2, 5],
        notes: "Saya suka logo yang simple dan mudah diingat"
    },
    {
        timestamp: "06/02/2026 9:25:41",
        impression: "A -> seperti bunga mawar di beauty and the beast, B -> aneh, posenya aneh, C -> pantai atau sawah sih?, D -> seperti jendela atau pintu",
        chosenLogo: "Logo D",
        reason: "Bermakna",
        meaning: "Seperti jendela atau pintu, membentuk huruf P (peradaban)",
        ratings: [4, 3, 2, 4],
        notes: "Warnanya jangan ijo neon"
    },
    {
        timestamp: "08/02/2026 1:27:04",
        impression: "iconic",
        chosenLogo: "Logo A",
        reason: "mawar alum pride",
        meaning: "iconic",
        ratings: [5, 5, 5, 5],
        notes: "-"
    },
    {
        timestamp: "08/02/2026 1:53:09",
        impression: "Keren. semua punya filosofi masing-masing.",
        chosenLogo: "Logo C",
        reason: "Terlihat lebih banyak objek daripada yang lain.",
        meaning: "Pohon, jalan, tanah hijau merupakan simbol khas moyudan.",
        ratings: [4, 4, 4, 4],
        notes: "Sudah cukup"
    }
];

// Calculate statistics
function getStatistics() {
    const logoVotes = { 'Logo A': 0, 'Logo B': 0, 'Logo C': 0, 'Logo D': 0 };
    let totalRatings = [0, 0, 0, 0];

    formData.forEach(response => {
        logoVotes[response.chosenLogo]++;
        response.ratings.forEach((rating, index) => {
            totalRatings[index] += rating;
        });
    });

    const avgRatings = totalRatings.map(total => (total / formData.length).toFixed(2));
    const overallAvg = (avgRatings.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / 4).toFixed(1);

    const winningLogo = Object.entries(logoVotes).reduce((a, b) => a[1] > b[1] ? a : b)[0];

    return {
        totalResponses: formData.length,
        logoVotes,
        avgRatings,
        overallAvg,
        winningLogo
    };
}

// Get emoji based on rating
function getRatingEmoji(rating) {
    if (rating >= 4.5) return '🥳';
    if (rating >= 4) return '😍';
    if (rating >= 3.5) return '😄';
    if (rating >= 3) return '🙂';
    if (rating >= 2.5) return '😐';
    return '😕';
}

// Get sentiment emoji based on text analysis
function getSentimentEmoji(text) {
    const positiveWords = ['bagus', 'keren', 'suka', 'mantep', 'elegan', 'simple', 'iconic', 'aestetic', 'wangun', 'energik', 'seger', 'cerah'];
    const negativeWords = ['kurang', 'tidak', 'layu', 'aneh', 'rontok', 'hampa'];

    const lowerText = text.toLowerCase();
    let positiveCount = 0;
    let negativeCount = 0;

    positiveWords.forEach(word => {
        if (lowerText.includes(word)) positiveCount++;
    });

    negativeWords.forEach(word => {
        if (lowerText.includes(word)) negativeCount++;
    });

    if (positiveCount > negativeCount + 1) return '😊';
    if (positiveCount > negativeCount) return '🙂';
    if (negativeCount > positiveCount) return '😐';
    return '🤔';
}

// Export for use in other files
window.formData = formData;
window.getStatistics = getStatistics;
window.getRatingEmoji = getRatingEmoji;
window.getSentimentEmoji = getSentimentEmoji;
