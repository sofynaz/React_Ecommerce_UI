import Header from './Component/Header';
import Slider from './Component/Slider';
import Footer from './Component/Footer'
import HomeCover from './Component/HomeCover'


function Home() {
    return (

        <div class="m-0 ">
            <Header />
            <HomeCover />
            <Slider />
            <Footer />
        </div>
    );
}
export default Home;