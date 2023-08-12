import { Helmet } from "react-helmet";
import Course from "./Course";
import Hero from "./Hero";
import KeepOnOpenMind from "./KeepOnOpenMind";
import Location from "./Location";
import PricingAndDates from "./PricingAndDates";
import Topteacheer from "./Topteacheer";
import WhyBest from "./WhyBest";
import Testimonial from "./testimonial";
import Counter from "../../Shares/Counter";

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home | Lingify</title>
        </Helmet>
            <Hero />
            <div className="-mt-48">
            <Counter />
            </div>
            <Course />
            <WhyBest />
            <Testimonial />
            <PricingAndDates />
            <KeepOnOpenMind />
            <Topteacheer />
            <Location />
        </>
    );
};

export default Home;