import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import "./App.css";

// Categories
const categories = [
  { name: "Apps List", image: "https://images.pexels.com/photos/979722/pexels-photo-979722.jpeg?auto=compress&cs=tinysrgb&w=600" },

  { name: "Slots Game", image: "https://casino.betmgm.com/en/blog/wp-content/uploads/2024/02/slots-header.jpg" },
  { name: "Casino Game", image: "https://www.telemediaonline.co.uk/wpsystem/wp-content/uploads/2021/04/SlotMachine-scaled-1.jpg" },
  { name: "Rummy Game", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy7qaZ6jLaq410tn1_xXb66J51MXqzkRYeiqalqWIKiekbOrG_OQQuD0aRaKN10Q57YQ&usqp=CAU" },
  { name: "High Bonus Game", image: "https://thumbs.dreamstime.com/b/bonus-game-text-sparkling-gold-effect-vibrant-colors-bonus-game-text-sparkling-gold-effect-vibrant-colors-high-346515593.jpg" },
  { name: "2025 Best", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-ZPp4BuDkWtQUeTyocXsZN-USScXEshXeQ&s" }, // New category
];

// List of games for each category
const games = { 
  
  "Apps List":[
    { 
      name: "Fiewin", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94canud-INKaW6gUXIrBhvdAoFcKrbygMww&s", 
      link: "https://fiewin.live//#/LR&RG?C=LK6TM32P"
    },
    { 
      name: "BharatClub", 
      image: "https://cdn6.aptoide.com/imgs/2/c/5/2c5a16c35c959c3957f619fd7a33157f_icon.png", 
      link: "https://bharatclub.bet/#/register?invitationCode=411673248004"
    },

    { 
      name: "GugoBet", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwG1fjerTCIR1IcARdLYrpkK861LwS5xV1Fg&s", 
      link: "https://www.gugobet.com/?invitation=bfb5836b&lang=en"
    },
    
    { 
      name: "Acewin", 
      image: "https://www.acewin.in/assets/acewin-fav-45863a2c.png", 
      link: "https://www.acewin.in/signup?referId=HE3Q5S"
    },
    { 
      name: "SpeedWin", 
      image: "https://yt3.googleusercontent.com/7y0qHcZIrPKgtQUmVi8bWKXeUF7M3WfW3-lkradXLsUZBYYIvVNbe1EtMamZbqjpCn22Bsa6yck=s900-c-k-c0x00ffffff-no-rj", 
      link: "https://speedwin.live/#/LR&RG?C=9E55A8K8"
    },

    { 
      name: "LCG", 
      image: "https://lcgbet.org/wp-content/uploads/2024/12/images-3.png", 
      link: "https://zzk0008.com/?dl=$c50rpi$INR$2"
    },
    { 
      name: "YosWin", 
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1688576427923/hNOUlNUg-.jpeg", 
      link: "https://ttyos567.top?invite=MJVSAT"
    },{ 
      name: "Bet213", 
      image: "https://play-lh.googleusercontent.com/FGeL7X9iQiJkpbNji4XFjTChSd5gdzH2RMKazpVU_FK0CQN4AZmDMVoYocgpozlVgt8", 
      link: "https://bet213.vip/?code=2QTF1C933JP&t=1738792570"
    },{ 
      name: "JungleeRummmy", 
      image: "https://play-lh.googleusercontent.com/h6dgqQYyGYmMQOV1lCAUXDM63iTYW1mZbKhX3oEBjv_F1syhUhpGjkKTp72QwI2IiBw", 
      link: "https://www.jungleerummy.com/friends/refer-friend?refid=107792925"
    },{ 
      name: "WinZo", 
      image: "https://play-lh.googleusercontent.com/CVeL-bbN-CUwF7eztLhqHHLyAhIj4sYdiMYBjO7b2duLDWtX04I9qe0dhBMNe_KiIQ", 
      link: "https://winzo.onelink.me/gu8K/1fmzmq9h"
    },
   

    { 
      name: "Rummy Ola", 
      image: "https://images.sftcdn.net/images/t_app-icon-m/p/ce2acfd7-3cfb-4171-b680-0709a578a079/4259388626/rummy-ola-mzf-logo", 
      link: "https://rummykg.com/?from_gameid=22934893&channelCode=100000"
    },
    { 
      name: "Teenpatti Joy", 
      image: "https://play-lh.googleusercontent.com/DwyZ8BAGvx4zWWAof-hy8s3kvLdXHKu7_gFp__DE7Cl_kIdmoV2uTwRQawkRBvcroXxL=w600-h300-pc0xffffff-pd", 
      link: "https://rummyjd.com/?from_gameid=37491358&channelCode=100000"
    },
    { 
      name: "Rainbow Rummy", 
      image: "https://rummyteenpattiapp.com/wp-content/uploads/2023/07/Ru-R.jpg", 
      link: "https://rainbowry.com/?from_gameid=12637278&channelCode=100000"
    },
    { 
      name: "Puzzle 3Patti", 
      image: "https://assets.apk.live/com.nar.DsD6DSD1.FSY--1-icon.png", 
      link: "https://puzzle3patti.com"
    },
    { 
      name: "Rummy Try", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDYOu7aDvmIH55m_3aJ3YuNUKqbJSy06-Jjj9KpCYT0Ta0jZ0SRp2n47Ft3H-e1DxYLY&usqp=CAU", 
      link: "https://rummytryag00.com/?from_gameid=10779552&channelCode=100000 "
    },
    { 
      name: "Rummy Guru", 
      image: "https://teenpattipure.com/wp-content/uploads/2024/02/rummy-guru-logo.webp", 
      link: "https://www.rummyguru.top/share/4Xf0Yxy"
    },
    { 
      name: "Rummy Pride", 
      image: "https://i0.wp.com/allbestrummyapp.com/rummy-pride/img/rummy-pride-apk-logo.webp?strip=all", 
      link: "https://rummypride.net/?from_gameid=13677055&channelCode=100000"
    },
    { 
      name: "SVIP3Patti", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeGMHVSF2yYQXL63E1fZT2a6dmKS9A-rhig&s", 
      link: "https://svip3pattiag00.com/?from_gameid=6587602&channelCode=10084553 "
    },
    { 
      name: "RummySE", 
      image: "https://rummyse.org.in/Assets/rummyse%20logo.webp", 
      link: "https://www.rummyse.com/share/4Xe_8xy "
    },
    { 
      name: "Rummy Most", 
      image: "https://rummymost.co.in/images/rummy-most-apk-logo.png", 
      link: "https://rummymost.net/?from_gameid=10084577&channelCode=100000"
    },
    { 
      name: "Royal Teenpatti", 
      image: "https://play-lh.googleusercontent.com/PFSrAa3Ham7NEQftK_th6WqsZUMmDZKFT5z5mhm74nW5jeWMKIvJc7jOm4E0sqQsLlE", 
      link: "https://royal.wawo3patti.com/?code=code_121423321 "
    },
    { 
      name: "Hobigames", 
      image: "https://api.duejge22.com/profile/upload/dc114778-03dc-41c5-a16a-9891b21d50d4.png", 
      link: "https://hobigames.app/?ch=1000000&uid=9261531"
    },
    { 
      name: "Rummy East", 
      image: "https://allrummy.tech/wp-content/uploads/2025/01/1000145101-removebg-preview.png", 
      link: "https://rummyeast1.com/?from_gameid=20200279&channelCode=100000"
    },
    { 
      name: "Rummy Apple", 
      image: "https://allrummy.tech/wp-content/uploads/2025/01/1000145959-removebg-preview.png", 
      link: "https://rummyapple.in/?from_gameid=13685732&channelCode=200000"
    },
    { 
      name: "666 Rummy", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XIHSeZ-OZWBVJ2tZEMt7ieDtEFgvBIlmNQ&s", 
      link: "https://666eaffiliate.com/?from_gameid=7589021&channelCode=100000"
    },
    { 
      name: "Rummy Golds", 
      image: "https://play-lh.googleusercontent.com/mCFa02ydsm1d7DTvUrANGrdHUaU1Q9udOHzO-2IsrWWnpc986Qlc26lniWPlKZRcxwI", 
      link: "https://rummyaf.com/?from_gameid=33504501&channelCode=23095483"
    },
    { 
      name: " Rummy Yono", 
      image: "https://play-lh.googleusercontent.com/uaAFuOTA-A-FYtZVs70Pa9jJD2QjEBmPV81fUhCgEp4Vi6jCcj4ShEZAKFNIIYf5pV4=w526-h296-rw", 
      link: "https://yonorummyo.com/?code=VIPENVCSVJD&t=1736607959"
    }
    ,
    { 
      name: " 3Patti Master", 
      image: "https://gnptimes.in/wp-content/uploads/2024/12/images-1-1.jpeg", 
      link: "https://www.earntp.com/m/e76r0z"
    },
    
    { 
      name: "Rummy Bharat", 
      image: "https://images.sftcdn.net/images/t_app-icon-m/p/b9a3efd0-0c99-439f-842e-d9854a4609b4/2278565573/bharatrummy-logo", 
      link: "https://www.rich-games.com/eWRud19xXUJ4dQ4="
    },
    
    
    { 
      name: "Rummy Good", 
      image: "https://rummycashgames.com/wp-content/uploads/2024/06/Rummy-Good-App.png", 
      link: "https://rummygooda.com/?from_gameid=12942565&channelCode=100000"
    },
    { 
      name: "Aviator 2025", 
      image: "https://obs32m-1218-ppp.oss-accelerate.aliyuncs.com/cocos/lg/appIconSkeleton.png", 
      link: "https://zzk.com/?dl=$c50rpi$INR$2"
    },
    { 
      name: "567 Slots", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYA4El9iEYczqOAVHek5pDrY3S8QjBE22YJQ&s", 
      link: " 567slotappagents.com?code=4NYJ94RE2ZP&t=1737277439"
    }
 
    
  ],




"Slots Game": [
  
  { 
    name: "Acewin", 
    image: "https://www.acewin.in/assets/acewin-fav-45863a2c.png", 
    link: "https://www.acewin.in/signup?referId=HE3Q5S"
  },
    { 
      name: "Fiewin", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94canud-INKaW6gUXIrBhvdAoFcKrbygMww&s", 
      link: "https://fiewin.live//#/LR&RG?C=LK6TM32P"
    },

    { 
      name: "Aviator Hack", 
      image: "https://cdn6.aptoide.com/imgs/2/c/5/2c5a16c35c959c3957f619fd7a33157f_icon.png", 
      link: "https://bharatclub.bet/#/register?invitationCode=411673248004"
    },

    { 
      name: "GugoBet", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMKr4p6Oxb72hcXUmaTfusAMCBgdx5erm6Q&s", 
      link: "https://www.gugobet.com/?invitation=bfb5836b&lang=en"
    },
    { 
      name: "LCG", 
      image: "https://lcgbet.org/wp-content/uploads/2024/12/images-3.png", 
      link: "https://zzk0008.com/?dl=$c50rpi$INR$2"
    },
    { 
      name: "Royal Jackpot", 
      image: "https://lh3.googleusercontent.com/My8liZdKWOjYSJ6tBJLd-cYYy1P7a1i01kt8rNgT9RThsL1Hgias4z4R4v7dCn-oJA", 
      link: "https://rummytryag00.com/?from_gameid=10779552&channelCode=100000"
    },
    { 
      name: "Mega Spin", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Qe8bSxzbKBtj5nQHN2z7bKhwV_IQl36UmA&s", 
      link: "https://www.rummyguru.top/share/4Xf0Yxy"
    },
    { 
      name: "Lucky Slots", 
      image: "https://thumbs.dreamstime.com/b/lucky-slots-casino-banner-slot-machine-online-advertising-76904726.jpg", 
      link: "https://svip3pattiag00.com/?from_gameid=6587602&channelCode=10084553"
    },
    { 
      name: "Super Jackpot", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-4fZ5NnqluK6NXOGsOi_pTEhDqPR-MFqvQ&s", 
      link: "https://rummypride.net/?from_gameid=13677055&channelCode=100000"
    },
    { 
      name: "Jackpot Spin", 
      image: "https://play-lh.googleusercontent.com/7PaYOyRNsLhrl3aYRC1R2Q5xRA8WGUsN8asLiiNM8BHQbl470KerxG4nUoElPCcfkQ", 
      link: "https://royal.wawo3patti.com/?code=code_121423321"
    },
    { 
      name: "Spin Master", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVi0-SMto1RQx6IhXziXgywWbvag81jxzWl-1xuHEuIrYy5nP6_qKJjiTvAnlxt28OKo&usqp=CAU", 
      link: "https://www.rummyse.com/share/4Xe_8xy"
    },
    { 
      name: "YosWin", 
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1688576427923/hNOUlNUg-.jpeg", 
      link: "https://ttyos567.top?invite=MJVSAT"
    },{ 
      name: "Bet213", 
      image: "https://play-lh.googleusercontent.com/FGeL7X9iQiJkpbNji4XFjTChSd5gdzH2RMKazpVU_FK0CQN4AZmDMVoYocgpozlVgt8", 
      link: "https://bet213.vip/?code=2QTF1C933JP&t=1738792570"
    },{ 
      name: "JungleeRummmy", 
      image: "https://play-lh.googleusercontent.com/h6dgqQYyGYmMQOV1lCAUXDM63iTYW1mZbKhX3oEBjv_F1syhUhpGjkKTp72QwI2IiBw", 
      link: "https://www.jungleerummy.com/friends/refer-friend?refid=107792925"
    },{ 
      name: "WinZo", 
      image: "https://play-lh.googleusercontent.com/CVeL-bbN-CUwF7eztLhqHHLyAhIj4sYdiMYBjO7b2duLDWtX04I9qe0dhBMNe_KiIQ", 
      link: "https://winzo.onelink.me/gu8K/1fmzmq9h"
    },
   
    { 
      name: "Golden Slots", 
      image: "https://cdn6.aptoide.com/imgs/3/2/b/32bec7ee28147fc2c3b8b68b07c3ef06_icon.png", 
      link: "https://hobigames.app/?ch=1000000&uid=9261531"
    },
    { 
      name: "Slot Mania", 
      image: "https://play-lh.googleusercontent.com/MUvY3UAe55qyZHc12UXn6WGUNFpc0eHSSjdqCVE91lnd7jlvFhC1ae7RCE6tblEmqJc", 
      link: "https://rummymost.net/?from_gameid=10084577&channelCode=100000"
    },
    { 
      name: "Win Spin", 
      image: "https://images.sftcdn.net/images/t_app-icon-m/p/a5212e76-b381-46ef-890f-9f4c1a1699e5/1048128205/spin-to-win-hb2-logo", 
      link: "https://fiewin.live//#/LR&RG?C=LK6TM32P"
    },
    { 
      name: "Treasure Spin", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0vFtlbwefqulUKzEDBUPDmXsFqzYukzsCQYhIkJKuD2QcYAOphxkJMir1rKRRx6GdO4&usqp=CAU", 
      link: "https://rummytryag00.com/?from_gameid=10779552&channelCode=100000"
    },
    { 
      name: "Spin to Win", 
      image: "https://play-lh.googleusercontent.com/HJ0qV5Xx5yl0tSmQpMwLPetDBLgio7DeivPUtkeuh7AJLkg6T0vjoZq7Q4nLMmL1i5U=w240-h480-rw", 
      link: "https://rummyguru.top/share/4Xf0Yxy"
    },
    { 
      name: "Lucky Reel", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPqqO1gAfEcZ7Jf0i_u1noEBsLg--nE2-pQ&s", 
      link: "https://svip3pattiag00.com/?from_gameid=6587602&channelCode=10084553"
    },
    
    { 
      name: "Acewin", 
      image: "https://www.acewin.in/assets/acewin-fav-45863a2c.png", 
      link: "https://www.acewin.in/signup?referId=HE3Q5S"
    },
]
,"Casino Game": [
    { 
      name: "LCG", 
      image: "https://lcgbet.org/wp-content/uploads/2024/12/images-3.png", 
      link: "https://zzk0008.com/?dl=$c50rpi$INR$2"
    },
    { 
      name: "Roulette", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3XK9eB3ASxtTH4hCAdSUWEBgc08l-dYLwWho4jUiqe2iN8a386CR8Rbx6lH0iP2a7W4&usqp=CAU", 
      link: "https://fiewin.live//#/LR&RG?C=LK6TM32P"
    },
    { 
      name: "Blackjack", 
      image: "https://play-lh.googleusercontent.com/009hpXoLRxULWBEF8VsHnNTjFrOQVFKfkQfIxZcDGWtVSZEU5mKtSJyy3Zv3pxVcZQ", 
      link: "https://rummypride.net/?from_gameid=13677055&channelCode=100000"
    },
    { 
      name: "Poker", 
      image: "https://www.publicdomainpictures.net/pictures/10000/velka/poker-game-1498063674pKA.jpg", 
      link: "https://www.gugobet.com/?invitation=bfb5836b&lang=en"
    },
    { 
      name: "Baccarat", 
      image: "https://a.storyblok.com/f/161938/1000x593/f06d548e43/baccarat-table-layout.png", 
      link: "https://rummytryag00.com/?from_gameid=10779552&channelCode=100000"
    },
    { 
      name: "Slots", 
      image: "https://res.cloudinary.com/jerrick/image/upload/v1730019758/671e01aedd76a3001d3bf2e1.jpg", 
      link: "https://rummymost.net/?from_gameid=10084577&channelCode=100000"
    },
    { 
      name: "Craps", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bqmsflspoRnDu39N_dK8rf8ONYBmGgOzkw&s", 
      link: "https://www.rummyguru.top/share/4Xf0Yxy"
    },
    { 
      name: "Keno", 
      image: "https://play-lh.googleusercontent.com/N4wmqXoa1smDCr8Iuc8SdZXJL7N3HJQbbB2bHe-DM4HGjMXX6fHnkJ6htuQAiOQRvQIy", 
      link: "https://royal.wawo3patti.com/?code=code_121423321"
    },
    { 
      name: "Pai Gow", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1H5eW1vy-jIV3DVz8OlDUBN2gF26oqUKPwRlS4jRkgbJxBIx-4eZ62ADzm9yZCRcUfU&usqp=CAU", 
      link: "https://svip3pattiag00.com/?from_gameid=6587602&channelCode=10084553"
    },
    { 
      name: "Scratch Cards", 
      image: "https://as1.ftcdn.net/v2/jpg/04/58/48/62/1000_F_458486214_7n8AH7TfZo6tytJBYgaPuADBlAOqWcYq.jpg", 
      link: "https://hobigames.app/?ch=1000000&uid=9261531"
    },
    { 
      name: "Video Poker", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Video_Poker%2C_Seven_Feathers_Resort.jpg/640px-Video_Poker%2C_Seven_Feathers_Resort.jpg", 
      link: "https://www.rummyse.com/share/4Xe_8xy"
    },
    { 
      name: "Bingo", 
      image: "https://store-images.s-microsoft.com/image/apps.34080.13510798887528624.ea88a7e6-557c-4ad5-99d7-c574f430c827.3c187ff1-754c-409a-9085-8e3aac2d97c5?h=1280", 
      link: "https://rummyguru.top/share/4Xf0Yxy"
    },
    { 
      name: "High Stakes", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK5k3xzkvzY97KorV4AUYzgQZleSrA0K1gQ&s", 
      link: "https://rummypride.net/?from_gameid=13677055&channelCode=100000"
    },
    { 
      name: "Super Jackpot", 
      image: "https://as1.ftcdn.net/v2/jpg/04/83/23/14/1000_F_483231410_deSa92CDIBZD9WheUNzAo00JXluW3RkK.jpg", 
      link: "https://rummymost.net/?from_gameid=10084577&channelCode=100000"
    },
    
    { 
      name: "Acewin", 
      image: "https://www.acewin.in/assets/acewin-fav-45863a2c.png", 
      link: "https://www.acewin.in/signup?referId=HE3Q5S"
    },
    { 
      name: "Lucky Spin", 
      image: "https://img.freepik.com/premium-vector/3d-mega-jackpot-winner-awards-with-star-ribbon-text-effect_278261-1324.jpg", 
      link: "https://svip3pattiag00.com/?from_gameid=6587602&channelCode=10084553"
    },
    { 
      name: "Mega Jackpot", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTA_LwNdHJ5mDHLEjOJ2dhEpWOgmg8tAbhKnee-AktqwZ9NUfDlJlc347eQ-27x4Eg8qM&usqp=CAU", 
      link: "https://rummytryag00.com/?from_gameid=10779552&channelCode=100000"
    }
]
,

  "Rummy Game": [
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtn0E5UOWrZPsCAgD5kYlmPuog0e899ge3p_Gdm3S83wwlM_bGMY64r5-Xh0A5-NIKhA&usqp=CAU",
      "link": "https://fiewin.live//#/LR&RG?C=LK6TM32P"
    },
    { 
      name: "Aviator Hack", 
      image: "https://cdn6.aptoide.com/imgs/2/c/5/2c5a16c35c959c3957f619fd7a33157f_icon.png", 
      link: "https://bharatclub.bet/#/register?invitationCode=411673248004"
    },
    
    { 
      name: "Acewin", 
      image: "https://www.acewin.in/assets/acewin-fav-45863a2c.png", 
      link: "https://www.acewin.in/signup?referId=HE3Q5S"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03wfUwTYlfAO2MMrzaxuxgjLE2H2NiQHnOXNKYTa3LczbrQcR6_LQUYPqNwrx3TAUYrM&usqp=CAU",
      "link": "https://www.gugobet.com/?invitation=bfb5836b&lang=en"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzW-6vOD2NhWdvWXREEqn5b3mr0RqHKZSXUIrI_T8rDKuXHwdhehtS_YCK82pFEOff_vQ&usqp=CAU",
      "link": "https://lcgvip.com/#?invite_code=942685730"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGDrlhvC0-hodN6oQfmZE5s-wkIi1lswEO7MexuDcPQJ62KKT42BpJELLnLpIpmFtN60&usqp=CAU",
      "link": "https://rummytryag00.com/?from_gameid=10779552&channelCode=100000"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHQ2gCvQQTArcbVhAhfniLf7UdKR2IhGXT6yBlZAHoxev2LzZBUWxTx78GmyFm3WL9X0&usqp=CAU",
      "link": "https://www.rummyguru.top/share/4Xf0Yxy"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-Xor5Ews0QsCNYl_8AyF3c0nMBzsU45G4njDi1uLRsc9L-H2Bxp2i69lzeVfBk9Q5yo&usqp=CAU",
      "link": "https://svip3pattiag00.com/?from_gameid=6587602&channelCode=10084553"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2ZYJxRdLiRjd7beSIqiuNaJmJXBqQkoQlIvuD-8EjSNL-VQs7d3aleJbCNr0Zv1_BAU&usqp=CAU",
      "link": "https://rummypride.net/?from_gameid=13677055&channelCode=100000"
    },
    {
      "name": "Omaha Rummy",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oeypxsRTtSVk6qLIZBQMxLioNtgdzC-Jwa8oUF8s-99McqEQJoNHu14SQYL65tie9p8&usqp=CAU",
      "link": "https://royal.wawo3patti.com/?code=code_121423321"
    },
    {
      "name": "Indian Rummy",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtn0E5UOWrZPsCAgD5kYlmPuog0e899ge3p_Gdm3S83wwlM_bGMY64r5-Xh0A5-NIKhA&usqp=CAU",
      "link": "https://www.rummyse.com/share/4Xe_8xy"
    },
    {
      "name": "Deal Rummy",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03wfUwTYlfAO2MMrzaxuxgjLE2H2NiQHnOXNKYTa3LczbrQcR6_LQUYPqNwrx3TAUYrM&usqp=CAU",
      "link": "https://hobigames.app/?ch=1000000&uid=9261531"
    },
    {
      "name": "Points Rummy",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzW-6vOD2NhWdvWXREEqn5b3mr0RqHKZSXUIrI_T8rDKuXHwdhehtS_YCK82pFEOff_vQ&usqp=CAU",
      "link": "https://rummymost.net/?from_gameid=10084577&channelCode=100000"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGDrlhvC0-hodN6oQfmZE5s-wkIi1lswEO7MexuDcPQJ62KKT42BpJELLnLpIpmFtN60&usqp=CAU",
      "link": "https://rummykg.com/?from_gameid=22934893&channelCode=100000"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHQ2gCvQQTArcbVhAhfniLf7UdKR2IhGXT6yBlZAHoxev2LzZBUWxTx78GmyFm3WL9X0&usqp=CAU",
      "link": "https://rummyjd.com/?from_gameid=37491358&channelCode=100000"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-Xor5Ews0QsCNYl_8AyF3c0nMBzsU45G4njDi1uLRsc9L-H2Bxp2i69lzeVfBk9Q5yo&usqp=CAU",
      "link": "https://rummyeast1.com/?from_gameid=20200279&channelCode=100000"
    },
    {
      "name": "Kalooki",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2ZYJxRdLiRjd7beSIqiuNaJmJXBqQkoQlIvuD-8EjSNL-VQs7d3aleJbCNr0Zv1_BAU&usqp=CAU",
      "link": "https://rainbowry.com?from_gameid=12637278&channelCode=100000"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oeypxsRTtSVk6qLIZBQMxLioNtgdzC-Jwa8oUF8s-99McqEQJoNHu14SQYL65tie9p8&usqp=CAU",
      "link": "https://www.earntp.com/m/e76r0z"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtn0E5UOWrZPsCAgD5kYlmPuog0e899ge3p_Gdm3S83wwlM_bGMY64r5-Xh0A5-NIKhA&usqp=CAU",
      "link": "https://rummyapple.in?from_gameid=13685732&channelCode=200000"
    },
    {
      "name": "Deal Rummy",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03wfUwTYlfAO2MMrzaxuxgjLE2H2NiQHnOXNKYTa3LczbrQcR6_LQUYPqNwrx3TAUYrM&usqp=CAU",
      "link": "https://666eaffiliate.com/?from_gameid=7589021&channelCode=100000"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzW-6vOD2NhWdvWXREEqn5b3mr0RqHKZSXUIrI_T8rDKuXHwdhehtS_YCK82pFEOff_vQ&usqp=CAU",
      "link": "https://yonorummyf.com?code=VIPUCFXAGZ5&t=1736667118"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGDrlhvC0-hodN6oQfmZE5s-wkIi1lswEO7MexuDcPQJ62KKT42BpJELLnLpIpmFtN60&usqp=CAU",
      "link": "https://rummyaf.com/?from_gameid=33504501&channelCode=23095483"
    },
    {
      "name": "",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHQ2gCvQQTArcbVhAhfniLf7UdKR2IhGXT6yBlZAHoxev2LzZBUWxTx78GmyFm3WL9X0&usqp=CAU",
      "link": "https://zzk0008.com/?dl=$c50rpi$INR$2"
    },
    { 
      name: "SpeedWin", 
      image: "https://yt3.googleusercontent.com/7y0qHcZIrPKgtQUmVi8bWKXeUF7M3WfW3-lkradXLsUZBYYIvVNbe1EtMamZbqjpCn22Bsa6yck=s900-c-k-c0x00ffffff-no-rj", 
      link: "https://speedwin.live/#/LR&RG?C=9E55A8K8"
    },
    {
      "name": "Rummy 500",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-Xor5Ews0QsCNYl_8AyF3c0nMBzsU45G4njDi1uLRsc9L-H2Bxp2i69lzeVfBk9Q5yo&usqp=CAU",
      "link": "567slotappagents.com?code=4NYJ94RE2ZP&t=1737277439"
    }
  ]


,
  "High Bonus Game": [
  { 
    name: "Dragon Tiger", 
    image: "https://play-lh.googleusercontent.com/R2ypJNpZ_8yQWIaE3zjidm74PEN9_iJMCBIh-aM71-5X9zmlKQN6n-OTPjzGJcL-7Jsd", 
    link: "https://svip3pattiag00.com/?from_gameid=6587602&channelCode=10084553"
  },

  { 
    name: "YosWin", 
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1688576427923/hNOUlNUg-.jpeg", 
    link: "https://ttyos567.top?invite=MJVSAT"
  },{ 
    name: "Bet213", 
    image: "https://play-lh.googleusercontent.com/FGeL7X9iQiJkpbNji4XFjTChSd5gdzH2RMKazpVU_FK0CQN4AZmDMVoYocgpozlVgt8", 
    link: "https://bet213.vip/?code=2QTF1C933JP&t=1738792570"
  },{ 
    name: "JungleeRummmy", 
    image: "https://play-lh.googleusercontent.com/h6dgqQYyGYmMQOV1lCAUXDM63iTYW1mZbKhX3oEBjv_F1syhUhpGjkKTp72QwI2IiBw", 
    link: "https://www.jungleerummy.com/friends/refer-friend?refid=107792925"
  },{ 
    name: "WinZo", 
    image: "https://play-lh.googleusercontent.com/CVeL-bbN-CUwF7eztLhqHHLyAhIj4sYdiMYBjO7b2duLDWtX04I9qe0dhBMNe_KiIQ", 
    link: "https://winzo.onelink.me/gu8K/1fmzmq9h"
  },
  { 
    name: "BharatClub", 
    image: "https://cdn6.aptoide.com/imgs/2/c/5/2c5a16c35c959c3957f619fd7a33157f_icon.png", 
    link: "https://bharatclub.bet/#/register?invitationCode=411673248004"
  },
  { 
    name: "SpeedWin", 
    image: "https://yt3.googleusercontent.com/7y0qHcZIrPKgtQUmVi8bWKXeUF7M3WfW3-lkradXLsUZBYYIvVNbe1EtMamZbqjpCn22Bsa6yck=s900-c-k-c0x00ffffff-no-rj", 
    link: "https://speedwin.live/#/LR&RG?C=9E55A8K8"
  },

  { 
    name: "Acewin", 
    image: "https://www.acewin.in/assets/acewin-fav-45863a2c.png", 
    link: "https://www.acewin.in/signup?referId=HE3Q5S"
  },
  { 
    name: "Teen Patti", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdDp4Zzy1j-NKAwnb9fIoHfU6D5D9xopTNw&s", 
    link: "https://www.rummyguru.top/share/4Xf0Yxy"
  },
  { 
    name: "Andar Bahar", 
    image: "https://images.sftcdn.net/images/t_app-cover-m,f_auto/p/806c43d1-b549-461f-bf0b-a6a44b40668a/1783726841/andar-bahar-king-screenshot", 
    link: "https://fiewin.live//#/LR&RG?C=LK6TM32P"
  },
  { 
    name: "Wheel of Fortune", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTSFFYmEjQ1-44bIAJFpLqjXnZW5fUHyPqg&s", 
    link: "https://rummypride.net/?from_gameid=13677055&channelCode=100000"
  },
  { 
    name: "Sic Bo", 
    image: "https://sec.solaireresort.com/sites/default/files/2023-11/SIC_BO_Mobile%20Banner_1080x1080.jpg", 
    link: "https://royal.wawo3patti.com/?code=code_121423321"
  },
  { 
    name: "Mahjong", 
    image: "https://www.shutterstock.com/image-vector/3d-illustration-cny-mahjong-tiles-260nw-2240172317.jpg", 
    link: "https://www.rummyse.com/share/4Xe_8xy"
  },
  { 
    name: "Rummy 500", 
    image: "https://play-lh.googleusercontent.com/AOC32gkCVrnlEUSh2gDgUGMcDJit7mMmkThCOXGfunSvtnpkQtRoKsi1MZ8U1f0MjnCr", 
    link: "https://hobigames.app/?ch=1000000&uid=9261531"
  },
  { 
    name: "Texas Hold'em", 
    image: "https://media.istockphoto.com/id/467497258/vector/holdem-poker-banner.jpg?s=612x612&w=0&k=20&c=3JbJ-sS8uTaSLQYnrn4x8YpAT_sxPPkeUpuEgGEWKZk=", 
    link: "https://rummymost.net/?from_gameid=10084577&channelCode=100000"
  },
  { 
    name: "Casino War", 
    image: "https://upload.wikimedia.org/wikipedia/en/b/be/Casino_War_Web_Logo.png", 
    link: "https://rummytryag00.com/?from_gameid=10779552&channelCode=100000"
  },
  { 
    name: "Punto Banco", 
    image: "https://www.casino.org/blog/wp-content/uploads/shutterstock_2475188289.jpg", 
    link: "https://www.rummyguru.top/share/4Xf0Yxy"
  }
],
 "2025 Best": [
  
  { 
    name: "Acewin", 
    image: "https://www.acewin.in/assets/acewin-fav-45863a2c.png", 
    link: "https://www.acewin.in/signup?referId=HE3Q5S"
  },
  { 
    name: "YosWin", 
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1688576427923/hNOUlNUg-.jpeg", 
    link: "https://ttyos567.top?invite=MJVSAT"
  },{ 
    name: "Bet213", 
    image: "https://play-lh.googleusercontent.com/FGeL7X9iQiJkpbNji4XFjTChSd5gdzH2RMKazpVU_FK0CQN4AZmDMVoYocgpozlVgt8", 
    link: "https://bet213.vip/?code=2QTF1C933JP&t=1738792570"
  },{ 
    name: "JungleeRummmy", 
    image: "https://play-lh.googleusercontent.com/h6dgqQYyGYmMQOV1lCAUXDM63iTYW1mZbKhX3oEBjv_F1syhUhpGjkKTp72QwI2IiBw", 
    link: "https://www.jungleerummy.com/friends/refer-friend?refid=107792925"
  },{ 
    name: "WinZo", 
    image: "https://play-lh.googleusercontent.com/CVeL-bbN-CUwF7eztLhqHHLyAhIj4sYdiMYBjO7b2duLDWtX04I9qe0dhBMNe_KiIQ", 
    link: "https://winzo.onelink.me/gu8K/1fmzmq9h"
  },
 
  { 
    name: "Poker", 
    image: "https://img.freepik.com/free-vector/poker-background-with-golden-cards-realistic-dice_1017-32739.jpg", 
    link: "https://rummypride.net/?from_gameid=13677055&channelCode=100000"
  },
  { 
    name: "Andar Bahar", 
    image: "https://play-lh.googleusercontent.com/YuPVFdbx2oc0dz0m8tEHWT1aPqkccJ4qZHIu4iH5fVsXnKbUJ-DyuUA1flhAuhI5TA", 
    link: "https://www.rummyguru.top/share/4Xf0Yxy"
  },
  { 
    name: "Fruit Party", 
    image: "https://www.shutterstock.com/image-illustration/creative-poker-template-background-design-260nw-1822713788.jpg", 
    link: "https://rummypride.net/?from_gameid=13677055&channelCode=100000"
  },
  { 
    name: "Sugarush", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHDHA2GzF_I0G7e8pqQntlgy1LqiHq85cCA&s", 
    link: "https://hobigames.app/?ch=1000000&uid=9261531"
  },
  { 
    name: "Dragon Spin", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ba0TTb3hzdV9i7ADHjSWDUW6TjNxdx8bdqvIIwEk6BmSWN53MsiNs7ObmGosZI-jcgY&usqp=CAU", 
    link: "https://royal.wawo3patti.com/?code=code_121423321"
  },
  { 
    name: "Treasure Hunt", 
    image: "https://a-treasure-hunt.com/wp-content/uploads/2017/12/ATH-logo-square-500.jpg", 
    link: "https://www.rummyse.com/share/4Xe_8xy"
  },
  { 
    name: "Lucky Charm", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cF7vy-UbfaZnQU_we-ZKpft6BApb1ZQQ9g&s", 
    link: "https://hobigames.app/?ch=1000000&uid=9261531"
  },
  { 
    name: "SpeedWin", 
    image: "https://yt3.googleusercontent.com/7y0qHcZIrPKgtQUmVi8bWKXeUF7M3WfW3-lkradXLsUZBYYIvVNbe1EtMamZbqjpCn22Bsa6yck=s900-c-k-c0x00ffffff-no-rj", 
    link: "https://speedwin.live/#/LR&RG?C=9E55A8K8"
  },
  { 
    name: "Golden Rush", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyclRMOKBbZLVAVlQTK1MxoMSrjasbn2Q8laKIU9ce4HGasCTNqIf52rU5OBxJ7GFaZ5M&usqp=CAU", 
    link: "https://rummymost.net/?from_gameid=10084577&channelCode=100000"
  },
  { 
    name: "Mystic Fortune", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdvrxChDHLuG3FzuT3wqtZjx_a1OmyzTq6A&s", 
    link: "https://rummytryag00.com/?from_gameid=10779552&channelCode=100000"
  },
  { 
    name: "Spin Palace", 
    image: "https://casino.betmgm.com/en/blog/wp-content/uploads/2024/02/slots-header.jpg", 
    link: "https://www.rummyguru.top/share/4Xf0Yxy"
  }
],
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Games");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Get the games for the selected category or show all games if "All Games" is selected
  const getGamesForCategory = (category) => {
    if (category === "All Games") {
      return Object.values(games).flat(); // Flatten all categories for "All Games"
    }
    return games[category] || [];
  };

  // Handle the click on a game card to open the game link
  const handleGameClick = (link) => {
    window.open(link, "_blank"); // Open the game link in a new tab
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
     <h1 className="navbar-title">
          <img 
            src="/logo1.png" 
            alt="Logo" 
            style={{ paddingTop:"10px",  height: '50px', width: '50px', borderRadius: '50%', marginRight: '10px' }} 
          />
          
        </h1>
                <a href="https://t.me/imptip1999" target="_blank" rel="noopener noreferrer" className="telegram-icon">
          <FaTelegramPlane size={30} />
        </a>
      </nav>

      {/* Main Content */}
      <header className="main-header">
        <div className="header-content">
          <h2 className="headline gradient-text">Welcome to the Ultimate Gaming Experience!</h2>
          <p className="description">
            Explore the most exciting games with amazing bonuses. Choose your category and dive into the action!
          </p>
        </div>
      </header>

      {/* Text Content Section with Image */}
      <section className="content-section" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.36)' }}>
  <div className="content-text text-bg" style={{ flex: 1, paddingRight: '20px' }}>
    <h3 className="gradient-text" style={{ fontSize: '24px', color: 'linear-gradient(45deg, #ff6b6b, #f8b400)' }}>
      Why Gambling Can Be an Exciting Escape
    </h3>
    <p className="gamep" style={{ fontSize: '16px', lineHeight: '1.6' }}>
      Gambling offers an exhilarating escape from the everyday grind, filled with the thrill of chance and risk. 
      Whether it's the rush of the roulette wheel or the strategy behind poker, the world of gambling offers high stakes excitement.
    </p>
    <p 
  style={{
    fontSize: '12px', 
    color: "white",
    marginTop: '20px', 
    textAlign:"left",
    flexWrap:"wrap",
    padding: '10px', 
    backgroundColor: '#f39c12', 
    borderLeft: '5px solid #e74c3c', 
    borderRadius: '5px', 
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    width: '100%',       // Ensures the paragraph takes up the full width
    display: 'block',    // Makes the paragraph behave like a block-level element
    wordWrap: 'break-word' // Ensures the text wraps appropriately within the width
  }}
>
  <strong style={{ color: 'red' }}>Disclaimer:</strong>  
  I do not own or operate the app. This website is just to share my referral link. 
  The app and app logo and other materials belong to the app owners. I do not claim to own them in any way. 
  I am not responsible for any actions, outcomes, or consequences resulting from the use of this service. 
  <span style={{ fontWeight: 'bold', color: 'brown' }}>Gambling can be addictive.</span> 
  Please play responsibly and only within your financial limits. 
  If you or someone you know is struggling with gambling addiction, seek help immediately.
  There are many support organizations available to provide assistance.
</p>

  </div>
  <div
  className="content-image"
  style={{
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Bluish background with opacity
    position: "relative", // Required for absolute positioning of content
  }}
>
  <video
    className="gamevideo"
    style={{
      height: "100%",
      borderRadius: "8px",
      opacity: 0.5, // 50% opacity
      objectFit: "cover", // Ensures the video covers the entire div while maintaining aspect ratio
      width: "99%", // Ensure the video takes the full width of the container
    }}
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src="https://videos.pexels.com/video-files/7607945/7607945-sd_640_360_25fps.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>


</section>


      {/* Categories Section */}
      <section className="category-section">
        <div className="category-title gradient-text ">Explore Categories</div>
        <div className="cards-container">
          {["All Games", ...categories.map(category => category.name)].map((categoryName, index) => (
            <div
              key={index}
              className="category-card"
              style={{
                backgroundImage: `url(${categoryName === "All Games" ? 'https://images.pexels.com/photos/17471057/pexels-photo-17471057/free-photo-of-group-of-diverse-friends-playing-game-on-mobile-phone.jpeg?auto=compress&cs=tinysrgb&w=600' : categories.find(cat => cat.name === categoryName).image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleCategoryClick(categoryName)}
            >
              <div className="card-overlay">
                <h3 className="card-title">{categoryName}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Games Section */}
      <section className="games-section">
        <div className="games-title">
          <h2 className="gradient-text myh">{selectedCategory} Click & Download! </h2>
        </div>
        <div className="cards-container">
          {getGamesForCategory(selectedCategory).map((game, index) => (
            <div
              key={index}
              className="category-card"
              style={{
                backgroundImage: `url(${game.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleGameClick(game.link)} // Handle click to open the game link
            >
              <div className="card-overlay">
                <h3 className="card-title">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="youtube-card-section">

      <div className="youtube-card">
  <div className="youtube-video-container">
    <iframe 
      src="https://www.youtube.com/embed/vcL223RQhro?si=u4FKqjA6KTgwXpY8" 
      title="Exciting Game Highlights!" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
      className="youtube-video"
    ></iframe>
  </div>
  <div className="youtube-card-title">
    <h3 className="gradient-text">Exciting Game Highlights!</h3>
  </div>
  <div className="youtube-card-description">
    <p>Watch the most thrilling moments from our latest gaming adventures! 🚀🎮</p>
  </div>
</div>

  <div className="youtube-card">
    <div className="youtube-video-container">
      <iframe 
        src="https://www.youtube.com/embed/tF8_-iS29ww?si=RamJqrEyW3yrdAka" 
        title="YouTube Video 1" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="youtube-video"
      ></iframe>
    </div>
    <div className="youtube-card-title">
      <h3 className="gradient-text">Slots Game Tricks $ Tips!</h3>
    </div>
    <div className="youtube-card-description">
      <p>Subscribe for more amazing gaming videos and tips! 🎮</p>
    </div>
  </div>

  {/* Second Video Card */}
  <div className="youtube-card">
    <div className="youtube-video-container">
      <iframe 
        src="https://www.youtube.com/embed/gerMoljSz8o" 
        title="YouTube Video 2" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="youtube-video"
      ></iframe>
    </div>
    <div className="youtube-card-title">
      <h3 className="gradient-text">Rummy Game Tricks $ Tips!</h3>
    </div>
    <div className="youtube-card-description">
      <p>Don't forget to subscribe for the latest updates on gaming! 🎮</p>
    </div>
  </div>

  <div className="youtube-card">
    <div className="youtube-video-container">
      <iframe 
        src="https://www.youtube.com/embed/AmKzZEEFH3o?si=GDlaZ8gIuNmLNjgp" 
        title="Rummy Game" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="youtube-video"
      ></iframe>
    </div>
    <div className="youtube-card-title">
      <h3 className="gradient-text">Balloon Game Tricks $ Tips!</h3>
    </div>
    <div className="youtube-card-description">
      <p>Don't forget to subscribe for the latest updates on gaming! 🎮</p>
    </div>
  </div>

  {/* Fourth Video Card (New link) */}
  <div className="youtube-card">
    <div className="youtube-video-container">
      <iframe 
        src="https://www.youtube.com/embed/djVleXJ9pgo?si=i09YrKWlGGXziUjz" 
        title="Another Gaming Video" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="youtube-video"
      ></iframe>
    </div>
    <div className="youtube-card-title">
      <h3 className="gradient-text">Aviator Game Tricks $ Tips!</h3>
    </div>
    <div className="youtube-card-description">
      <p>Join the fun with the latest gaming action! 🎮</p>
    </div>
  </div>
  <div className="youtube-card">
  <div className="youtube-video-container">
    <iframe 
      src="https://www.youtube.com/embed/6jhQ3HHUNsw?si=MHGzdiSD43d6Baoj" 
      title="Video 1" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
      className="youtube-video"
    ></iframe>
  </div>
  <div className="youtube-card-title">
    <h3 className="gradient-text">567 Slots Rummy</h3>
  </div>
  <div className="youtube-card-description">
    <p>Check out this amazing gaming adventure! 🎮</p>
  </div>
</div>

<div className="youtube-card">
  <div className="youtube-video-container">
    <iframe 
      src="https://www.youtube.com/embed/vcL223RQhro?si=u4FKqjA6KTgwXpY8" 
      title="Video 2" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
      className="youtube-video"
    ></iframe>
  </div>
  <div className="youtube-card-title">
    <h3 className="gradient-text">YONO Rummy</h3>
  </div>
  <div className="youtube-card-description">
    <p>Explore the newest trends in gaming! 🎮</p>
  </div>
</div>

<div className="youtube-card">
  <div className="youtube-video-container">
    <iframe 
      src="https://www.youtube.com/embed/f0Q8h_TGlXY?si=k8p20PYguTfiL_4c" 
      title="Video 3" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
      className="youtube-video"
    ></iframe>
  </div>
  <div className="youtube-card-title">
    <h3 className="gradient-text">All Rummy Link</h3>
  </div>
  <div className="youtube-card-description">
    <p>Learn new strategies for success in gaming! 🎮</p>
  </div>
</div>


</section>
<section class="footer-section">
  <footer class="footer-content">
    <div class="footer-left">
      <span className="mysdsds">MoneyMaker</span>
      <span>© 2025 All rights reserved.</span>
    </div>
  </footer>
</section>

    </div>

  );
}

export default App;
