import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/pic1.png";
import img2 from "../assets/pic2.jpg";
import img3 from "../assets/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Our Customers' Reviews
      </h1>
      <div className=" flex flex-col md:flex-row justify-center gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura" />
        <ReviewCard img={img2} name="John Deo" />
        <ReviewCard img={img3} name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Review;
