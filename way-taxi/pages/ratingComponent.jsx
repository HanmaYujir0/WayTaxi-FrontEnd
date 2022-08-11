import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import styles from "../styles/RatingComponent.module.css";
import { getRating, ratingPost } from "../features/ratingAndComment";
import { FetchOrders } from "../features/ordersSlice";

const ratingComponent = () => {
  const [star, setStar] = useState(1);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders.orders);
  const rating = useSelector((state) => state.raitAndCom.rating);
  
  // const handleAddRating = () => {
  //   const taxi = orders[orders.length - 1];
  //   dispatch(ratingPost({ taxi, star }));  
  // };


  useEffect(() => {
    dispatch(FetchOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRating())
  },[dispatch])


  const handleComments = (e) => {
    setComment(e.target.value);
  };

  const starsConfig = {
    size: 40,
    count: 5,
    isHalf: false,
    color: "lightGray",
    value: star,
    activeColor: "orange",
    onChange: (newValue) => {
      setStar(newValue);
    },
  };
  return (
    <div className={styles.raiting_main}>
      <div className={styles.raiting_block}>
        <div className={styles.title}>
          <h1>Оцените поездку ⭐️</h1>
        </div>
        <div className={styles.stars_block}>
          <ReactStars {...starsConfig}/>
          <span>{star}</span>
        </div>
        <div className={styles.btn}>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
};
export default ratingComponent;
