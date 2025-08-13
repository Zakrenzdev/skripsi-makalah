import MainLayout from '@/components/Layout/MainLayout';
import MorphEffect from '@/components/UI/MorphEffect';

export default function Kontak() {
  return (
    <MainLayout title="Kontak - MakalahKu">
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title">Hubungi Kami</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-bg-secondary border border-bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-bg-secondary border border-bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2">Subjek</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 bg-bg-secondary border border-bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2">Pesan</label>
                    <textarea 
                      id="message" 
                      rows="5"
                      className="w-full px-4 py-3 bg-bg-secondary border border-bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors w-full"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent bg-opacity-10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Alamat</h3>
                      <p className="text-text-secondary">Jl. Akademik No. 123, Kota Pendidikan, Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent bg-opacity-10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telepon</h3>
                      <p className="text-text-secondary">+62 123 4567 890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent bg-opacity-10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-text-secondary">info@makalahku.id</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <MorphEffect className="w-full h-48 bg-bg-tertiary overflow-hidden rounded-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.800350272271!2d107.61879831431736!3d-6.907160395007843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e639b2078f0d%3A0x301e8f1fc28b9b0!2sUniversitas%20Pendidikan%20Indonesia!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }}
                      allowFullScreen="" 
                      loading="lazy"
                    ></iframe>
                  </MorphEffect>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}