import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import WhyChoose from './components/sections/WhyChoose';
import Contact from './components/sections/Contact';

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Stats />
                <WhyChoose />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
