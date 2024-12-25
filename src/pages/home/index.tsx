import FlightSearch from "../../components/flight-search/flight-search";
import { Navbar } from "../../components/navbar/navbar";
import TravelCarousel from "../../components/cards/cards";
import DomesticAirlines from "../../components/domestic-airlines/domestic-airlines";
import InternationalAirline from "../../components/international-airlines/international-airlines";
import Flexible from "../../assets/images/Flexible booking.png";
import flight from "../../assets/images/No flight.png";
import Incredible from "../../assets/images/incredible deals.png";
import Help from "../../assets/images/help 24X7.png";
import FlightDeals from "../../components/flight-deals/flight-deals";
import { Button } from "../../components/ui/button";
import FAQSection from "../../components/accordian/accordian";
import Footer from "../../components/footer/footer";
import HeroBanner from "../../assets/images/heroBanner.png";

const Home = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div
        className="relative bg-cover bg-center h-[85vh] w-full pt-[110px]"
        style={{ backgroundImage: `url(${HeroBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
        <div className="relative z-10">
          <FlightSearch />
        </div>
      </div>

      <div className="px-[124px]">
        {/* <div className="flex-1 flex items-center justify-center">
          <ImageCarousel images={carouselImages} />
        </div> */}
        <div className="my-5">
          <TravelCarousel />
        </div>
        <div className="my-5">
          <DomesticAirlines />
        </div>
        <div>
          <InternationalAirline />
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">Why Book With Nixtour?</h2>
          <div className="grid grid-cols-4">
            <img className="object-cover" src={Flexible} alt="" />
            <img className="object-cover" src={flight} alt="" />
            <img className="object-cover" src={Incredible} alt="" />
            <img className="object-cover" src={Help} alt="" />
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-2xl font-semibold mb-4">Best Deals on Flight Tickets</h2>
          <FlightDeals />
        </div>

        <div className="mx-auto mb-8">
          <div className="pt-6">
            <h1 className="text-2xl font-semibold mb-4">
              Book Domestic & International Flights Online with NixTour
            </h1>

            <div className="space-y-4 text-base leading-relaxed">
              <p>
                NixTour is an IATA-accredited travel agency—the one-stop travel solution for all your needs. We are{" "}
                <span className="font-bold">India's fastest-emerging online travel</span> website and have a customer-centric
                Approach. We have been serving the field since 2015.
              </p>

              <p>
                We are experts in offering customers a wide array of seamless and convenient travel solutions.
                With our strategically developed services, we have served more than one million passengers to date.
              </p>

              <p>
                Our well-arranged services include easy and Convenient Air Ticket booking processes both online and offline.
                As the fastest-growing online travel portal, we ensure quick customer delivery and turnaround time.
              </p>

              <p>
                Customers enjoy a pure refund because our transparent refund procedure includes complimentary rescheduling
                and refunds adhering to transparent Airline & DGCA Protocol. Moreover, we proudly offer customers the most
                affordable services, such as online air ticket booking.
              </p>

              <p>
                We also specialize in <span className="font-bold">special Student Airfares</span>. Each Student is our
                top priority because we offer them an extra luggage allowance and discounted airfare up to 15%—20%;
                however, such offers depend on the airline's terms and conditions.
              </p>

              <p>
                Our service management department ensures that each customer is handled properly. The team's components
                include seamless access to services, easy checkout, <span className="font-bold">free rescheduling</span>,
                and easy refunds.
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                className="border-2 hover:bg-gray-100 hover:text-black"
              >
                Click Here To Know More About Us
              </Button>
            </div>
          </div>
        </div>

        <div>
          <FAQSection />
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
