import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Card from '../Cards/Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import { Pagination, Navigation } from "swiper";

function SwiperModule() {
  return (
    <div>
      <Box as="h1" fontSize="3xl">Featured Products</Box>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Card heading={"ICEWAYS"} description={"City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."} /></SwiperSlide>
        <SwiperSlide><Card heading={"Driveways Sport"} description={"Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."} /></SwiperSlide>
        <SwiperSlide><Card heading={"Driveways COMPETUS H/P"} description={"City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."} /></SwiperSlide>
        <SwiperSlide><Card heading={"Driveways Sport"} description={"Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."} /></SwiperSlide>
        <SwiperSlide><Card heading={"ICEWAYS"} description={"City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."} /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperModule;
