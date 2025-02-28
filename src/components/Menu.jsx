import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/menu1.jpg";
import img2 from "../assets/menu2.jpg";
import img3 from "../assets/menu3.jpg";
import img4 from "../assets/menu4.jpg";
const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Delicious Dish" price="$ 16.99" />
        <DishesCard img={img2} title="Delicious Dish" price="$ 18.99" />
        <DishesCard img={img3} title="Delicious Dish" price="$ 14.99" />
        <DishesCard img={img4} title="Delicious Dish" price="$ 15.99" />
      </div>
    </div>
  );
};

export default Menu;
