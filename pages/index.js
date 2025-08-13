import MainLayout from '@/components/Layout/MainLayout';
import Button from '@/components/UI/Button';
import Card from '@/components/UI/Card';
import MorphEffect from '@/components/UI/MorphEffect';

export default function Home() {
  const featuredMakalah = [
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
    }
  ];

  return (
    <MainLayout title="Beranda - MakalahKu">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-bg-primary to-transparent z-10"></div>
        
        <MorphEffect className="absolute -top-20 -right-20 w-64 h-64 bg-accent opacity-20"></MorphEffect>
        <MorphEffect className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent opacity-10"></MorphEffect>
        
        <div className="container relative z-20 py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Temukan dan Bagikan <span className="text-accent">Makalah</span> Berkualitas
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Platform kolaboratif untuk akademisi dan peneliti dalam berbagi pengetahuan melalui makalah ilmiah.
            </p>
            <div className="flex gap-4">
              <Button href="/makalah" variant="primary">
                Jelajahi Makalah
              </Button>
              <Button href="/tentang" variant="outline">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">Makalah Unggulan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredMakalah.map((makalah) => (
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
        </div>
      </section>
      
      <section className="section bg-bg-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <MorphEffect className="w-full h-80 bg-bg-tertiary overflow-hidden">
                <img 
                  src="/images/research.jpg" 
                  alt="Research" 
                  className="w-full h-full object-cover"
                />
              </MorphEffect>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="section-title">Tentang Platform Kami</h2>
              <p className="text-text-secondary mb-6">
                MakalahKu adalah platform yang didedikasikan untuk memudahkan proses berbagi dan menemukan makalah ilmiah 
                dari berbagai disiplin ilmu. Kami percaya bahwa pengetahuan harus dapat diakses oleh semua orang.
              </p>
              <p className="text-text-secondary mb-8">
                Dengan antarmuka yang sederhana namun powerful, Anda dapat mengunggah, mengelola, dan menemukan makalah 
                dengan mudah. Bergabunglah dengan komunitas akademik kami sekarang!
              </p>
              <Button href="/tentang" variant="primary">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}