import MainLayout from '@/components/Layout/MainLayout';
import Card from '@/components/UI/Card';

const makalahData = [
  {
    id: 1,
    title: 'Pengaruh Teknologi Terhadap Pendidikan',
    description: 'Makalah ini membahas bagaimana perkembangan teknologi mempengaruhi sistem pendidikan modern.',
    tags: ['Pendidikan', 'Teknologi'],
    date: '2023-05-15',
    image: '/images/makalah1.jpg'
  },
  {
    id: 2,
    title: 'Dampak Media Sosial pada Kesehatan Mental',
    description: 'Analisis mendalam tentang hubungan antara penggunaan media sosial dan kesehatan mental remaja.',
    tags: ['Kesehatan', 'Psikologi'],
    date: '2023-06-22',
    image: '/images/makalah2.jpg'
  },
  {
    id: 3,
    title: 'Perubahan Iklim dan Ekonomi Global',
    description: 'Studi tentang dampak perubahan iklim terhadap stabilitas ekonomi global dalam dekade terakhir.',
    tags: ['Ekonomi', 'Lingkungan'],
    date: '2023-07-10',
    image: '/images/makalah3.jpg'
  },
  {
    id: 4,
    title: 'Inovasi dalam Teknologi Blockchain',
    description: 'Eksplorasi inovasi terbaru dalam teknologi blockchain dan aplikasinya di berbagai sektor.',
    tags: ['Teknologi', 'Blockchain'],
    date: '2023-08-05',
    image: '/images/makalah4.jpg'
  },
];

export default function Makalah() {
  return (
    <MainLayout title="Daftar Makalah - MakalahKu">
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h1 className="section-title">Daftar Makalah</h1>
            
            <div className="flex gap-4">
              <select className="bg-bg-secondary px-4 py-2 rounded-lg border border-bg-tertiary">
                <option>Filter Kategori</option>
                <option>Teknologi</option>
                <option>Pendidikan</option>
                <option>Kesehatan</option>
                <option>Ekonomi</option>
              </select>
              
              <select className="bg-bg-secondary px-4 py-2 rounded-lg border border-bg-tertiary">
                <option>Urutkan</option>
                <option>Terbaru</option>
                <option>Terlama</option>
                <option>Populer</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {makalahData.map((makalah) => (
              <Card
                key={makalah.id}
                title={makalah.title}
                description={makalah.description}
                tags={makalah.tags}
                date={makalah.date}
                image={makalah.image}
                href={`/makalah/${makalah.id}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="px-6 py-3 bg-bg-secondary hover:bg-bg-tertiary rounded-lg transition-colors">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}