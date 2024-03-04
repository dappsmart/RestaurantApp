import img from "../assets/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />
      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          Gourmet Restaurant, serving every day of the week, with the utmost
          care and attention to the tastes of both Mediterranean and Turkish
          cuisine.
        </p>
        <p>
          The Ottoman cuisine presents an original Turkish atmosphere with
          classical Ottoman food that is prepared by our culinary chefs with
          over 30+ years of experience. Our restaurant promotes a delightful
          experience through all our dishes and new tasty flavours. From salads,
          appetizers to pitas and our best grilled meat, we want to ensure that
          you experience the finest flavours of Turkish and Mediterranean
          cuisine. At our restaurant, we handle fresh halal meat, organic
          vegetables and all of our ingredients of our cuisine are non-GMO
          products specially cultivated in our ecological farmland.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
