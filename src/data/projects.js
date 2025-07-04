// src/data/projects.js
const projects = [
  {
    id: '1',
    title: 'Desain Aplikasi Kopi Modern',
    category: 'uiux',
    tags: ['UI/UX Design', 'Mobile App', 'Branding'],
    imageUrl: '/src/assets/images/project-coffee.jpg', // Pastikan path ini benar!
    description: 'Desain UI/UX untuk aplikasi mobile kedai kopi modern dengan fokus pada user experience yang intuitif dan visual yang menarik.',
    fullDescription: 'Proyek ini melibatkan riset pengguna ekstensif, pembuatan wireframe, prototyping interaktif, dan desain visual akhir untuk aplikasi pemesanan kopi. Tujuannya adalah menyederhanakan proses pemesanan dan meningkatkan keterlibatan pelanggan. Fokus utama pada visual yang bersih, navigasi yang mudah, dan integrasi fitur loyalitas.',
    tools: ['Figma', 'Adobe Illustrator', 'Miro'],
    // ... bisa tambahkan detail lain seperti link live demo, galeri gambar tambahan
  },
  {
    id: '2',
    title: 'Rebranding Perusahaan Teknologi',
    category: 'branding',
    tags: ['Branding', 'Logo Design', 'Corporate Identity'],
    imageUrl: '/src/assets/images/project-techbrand.jpg',
    description: 'Proses rebranding menyeluruh untuk startup teknologi, menciptakan identitas visual yang segar dan profesional.',
    fullDescription: 'Proses rebranding ini dimulai dari analisis brand lama, riset kompetitor, hingga pengembangan persona brand baru. Outputnya meliputi logo, panduan merek komprehensif, desain stationery, dan template presentasi. Tujuan utamanya adalah mereposisi brand sebagai pemimpin pasar yang inovatif dan terpercaya.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
  },
  {
    id: '3',
    title: 'Ilustrasi Editorial Majalah',
    category: 'illustration',
    tags: ['Illustration', 'Digital Art', 'Editorial'],
    imageUrl: '/src/assets/images/project-magazine.jpg',
    description: 'Serangkaian ilustrasi digital untuk artikel majalah tentang masa depan pekerjaan.',
    fullDescription: 'Kami menciptakan enam ilustrasi unik untuk majalah digital, masing-masing merepresentasikan aspek berbeda dari perubahan lanskap pekerjaan. Gaya visual yang dipilih adalah flat design modern dengan palet warna yang cerah untuk menarik perhatian pembaca muda.',
    tools: ['Procreate', 'Adobe Photoshop'],
  },
  {
    id: '4',
    title: 'Website Portofolio Desainer',
    category: 'webdesign',
    tags: ['Web Design', 'UI Design', 'Frontend'],
    imageUrl: '/src/assets/images/project-portfolio.jpg',
    description: 'Desain responsif untuk website portofolio desainer grafis dengan fokus pada kecepatan dan visual yang minimalis.',
    fullDescription: 'Proyek ini berfokus pada pembuatan website portofolio yang bersih, modern, dan sangat responsif. Meliputi wireframing, mockup desain di Figma, hingga slicing desain menjadi komponen React. Prioritas utama adalah pengalaman pengguna yang lancar dan waktu muat halaman yang cepat.',
    tools: ['Figma', 'HTML', 'CSS', 'React'],
  },
  {
    id: '5',
    title: 'Desain Kemasan Makanan Organik',
    category: 'branding',
    tags: ['Packaging', 'Branding', 'Product Design'],
    imageUrl: '/src/assets/images/project-packaging.jpg',
    description: 'Desain kemasan yang ramah lingkungan dan menarik untuk lini produk makanan organik baru.',
    fullDescription: 'Kami mengembangkan konsep desain kemasan yang menonjolkan nilai-nilai organik dan keberlanjutan produk. Desainnya menggunakan ilustrasi tangan dan tipografi yang hangat untuk menciptakan koneksi emosional dengan konsumen. Mencakup berbagai SKU produk dan varian rasa.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
  },
  {
    id: '6',
    title: 'Animasi Pembuka Video',
    category: 'motion',
    tags: ['Motion Graphics', 'Animation', 'Video Editing'],
    imageUrl: '/src/assets/images/project-motion.jpg',
    description: 'Membuat animasi pembuka video singkat untuk kanal YouTube edukasi.',
    fullDescription: 'Animasi pembuka ini dirancang untuk memperkenalkan topik-topik edukasi secara menarik dan dinamis. Menggabungkan elemen motion graphic, tipografi animasi, dan efek suara untuk menciptakan branding yang kuat dan mudah diingat bagi channel tersebut.',
    tools: ['Adobe After Effects', 'Adobe Premiere Pro'],
  },
];

export default projects;