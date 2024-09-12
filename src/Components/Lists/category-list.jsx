import React from "react";
import Slider from "react-slick";
import CategoryItem from "../Cards/category-item";
import categorias from "../../datas/categorias.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CategoryList({ onCategoryClick }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {categorias.map((category) => (
          <CategoryItem key={category.id} nomeCategoria={category.nome_da_categoria} onClick={() => onCategoryClick(category.id)} />
        ))}
      </Slider>
    </div>
  );
}
