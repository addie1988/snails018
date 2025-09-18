import React, { useState, useEffect } from 'react'
import game_1_content_video_1 from "./images/game_1_content_video_1.webp";
import game_1_content_video_2 from "./images/game_1_content_video_2.webp";
import game_1_content_video_3 from "./images/game_1_content_video_3.webp";
import game_3_content_video_1 from "./images/game_3_content_video_1.webp";
import game_3_content_video_2 from "./images/game_3_content_video_2.webp";
import game_3_content_video_3 from "./images/game_3_content_video_3.webp";
import game_3_content_video_4 from "./images/game_3_content_video_4.webp";
import game_3_content_video_5 from "./images/game_3_content_video_5.webp";

// 輪播圖片資料
const carouselData = {
  images: [
    { src: game_1_content_video_1, alt: "game_1_content_video_1" },
    { src: game_1_content_video_2, alt: "game_1_content_video_2" },
    { src: game_1_content_video_3, alt: "game_1_content_video_3" },
  ],
  images_3: [
    { src: game_3_content_video_1, alt: "game_3_content_video_1" },
    { src: game_3_content_video_2, alt: "game_3_content_video_2" },
    { src: game_3_content_video_3, alt: "game_3_content_video_3" },
    { src: game_3_content_video_4, alt: "game_3_content_video_4" },
    { src: game_3_content_video_5, alt: "game_3_content_video_5" },
  ],
  videos: [
    "./src/images/game_1_content_video_1_1.mp4",
    "./src/images/game_1_content_video_2_1.mp4",
    "./src/images/game_1_content_video_3_1.mp4",
  ],
};

// 遊戲內容資料
const gameContent = {
  title: "RAID: Shadow Legends",

  stats: [
    { value: "4.7", label: "rating" },
    { value: "100M", label: "players" },
    { value: "150+", label: "employees on the project" }
  ],
  stats_2: [
    { value: "4.7", label: "rating" },
    { value: "50M", label: "players" },
    { value: "80+", label: "employees on the project" }
  ],
  stats_4: [
    { value: "4.9", label: "rating" },
    { value: "16M", label: "players" },
    { value: "60+", label: "employees on the project" }
  ],
  description: {
    headline: "The most popular Plarium game is among the 3 top- grossing RPGs in the USA, and it was nominated for a Google Play Award in the \"Users' Choice\" category.",
    mainText: "There are more than 900 heroes in the RAID universe, from sword-wielding elves to multi-armed giants. More than 1600 animations and 750 dazzling visual effects are implemented to bring characters to life, and there are more than a million combinations for players to take as they develop their heroes.",
    detailedText: "RAID has been promoted through marketing campaigns with celebrities, including Jeff Goldblum, Ronda Rousey, Ninja, and many more. 2023 saw the release of the animated limited series, RAID: Call of The Arbiter!"
  },
  Game_1: "https://cdn-company.plarium.com/meet/production/media/assets/videos/raid.mp4",
  Game_2: "https://cdn-company.plarium.com/meet/production/media/assets/videos/arena.mp4",
  Game_3: "https://cdn-company.plarium.com/meet/production/media/assets/videos/unnoun.mp4",
  Game_4: "https://cdn-company.plarium.com/meet/production/media/assets/videos/mergeGardens.mp4"
};

const Game_mods = {
  carouselData,
  gameContent
};

export default Game_mods;