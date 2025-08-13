import MainLayout from '@/components/Layout/MainLayout';
import MorphEffect from '@/components/UI/MorphEffect';

export default function Tentang() {
  return (
    <MainLayout title="Tentang - MakalahKu">
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="section-title">Tentang Kami</h1>
            <p className="text-text-secondary text-lg">
              MakalahKu adalah platform berbagi pengetahuan yang bertujuan memudahkan akses terhadap makalah ilmiah 
              berkualitas dari berbagai disiplin ilmu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-bg-secondary p-8 rounded-lg text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-accent bg-opacity-10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Koleksi Lengkap</h3>
              <p className="text-text-secondary">
                Ribuan makalah dari berbagai bidang ilmu tersedia dalam satu platform.
              </p>
            </div>
            
            <div className="bg-bg-secondary p-8 rounded-lg text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-accent bg-opacity-10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Akses Terjamin</h3>
              <p className="text-text-secondary">
                Sistem keamanan terbaik untuk melindungi data dan privasi pengguna.
              </p>
            </div>
            
            <div className="bg-bg-secondary p-8 rounded-lg text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-accent bg-opacity-10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Kualitas Terjamin</h3>
              <p className="text-text-secondary">
                Setiap makalah melalui proses kurasi untuk memastikan kualitas konten.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 bg-bg-secondary p-12 rounded-lg">
            <div className="md:w-1/2">
              <MorphEffect className="w-full h-64 bg-accent bg-opacity-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </MorphEffect>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
              <p className="text-text-secondary mb-6">
                Kami percaya bahwa pengetahuan harus dapat diakses oleh semua orang tanpa hambatan. 
                Dengan teknologi terkini, kami berkomitmen untuk menghubungkan para akademisi, peneliti, 
                dan pembelajar di seluruh dunia.
              </p>
              <p className="text-text-secondary">
                Platform kami terus berkembang dengan fitur-fitur inovatif untuk mendukung kolaborasi 
                dan pertukaran ide dalam komunitas akademik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}