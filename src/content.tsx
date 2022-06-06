import React from "react";
import { Content } from "./types";

import { VscCode } from "react-icons/vsc";
import {
  GiBrain,
  GiSparkles,
  GiKeyboard,
  GiAirplaneDeparture,
  GiCat,
  GiGamepad,
  GiWalk,
} from "react-icons/gi";
import { TbDeviceDesktop, TbMathFunction } from "react-icons/tb";
import {
  SiC,
  SiElectron,
  SiKotlin,
  SiPython,
  SiPytorch,
  SiReact,
  SiRust,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

const content: Content = {
  using: [
    { icon: <SiTypescript />, text: "TypeScript" },
    { icon: <SiReact />, text: "React" },
    { icon: <SiElectron />, text: "Electron" },
    { icon: <SiRust />, text: "Rust" },
    { icon: <SiPython />, text: "Python" },
    { icon: <SiTensorflow />, text: "TensorFlow" },
    { icon: <SiPytorch />, text: "PyTorch" },
    { icon: <SiC />, text: "C/C++" },
    { icon: <SiKotlin />, text: "Kotlin" },
  ],
  interested: [
    { icon: <GiBrain />, text: "ML" },
    { icon: <VscCode />, text: "Competitive" },
    { icon: <TbMathFunction />, text: "FP" },
    { icon: <GiSparkles />, text: "Clean Code" },
  ],
  like: [
    { icon: <GiAirplaneDeparture />, text: "Travelling" },
    { icon: <GiWalk />, text: "Walking" },
    { icon: <GiCat />, text: "Cats" },
    { icon: <GiKeyboard />, text: "Typing" },
    { icon: <GiGamepad />, text: "Gaming" },
    { icon: <TbDeviceDesktop />, text: "Anime" },
  ],
  activities: [
    {
      year: 2019,
      month: 10,
      title: "基本情報技術者試験 合格",
    },
    {
      year: 2020,
      month: 10,
      title: "応用情報技術者試験 合格",
    },
    {
      year: 2020,
      month: 11,
      title: "数学検定 準1級 取得",
    },
    {
      year: 2022,
      month: 1,
      title: "第2回セキュリティ・フォレンジック・ワークショップ 優勝",
      description:
        "東北管内の大学生・高専生を対象にした，東北管区警察局主催の CTF コンテストで優勝しました．",
      links: [
        {
          text: "一関高専 学生情報ページ",
          url: "https://www.ichinoseki.ac.jp/news/gakuseijoho.html?id=1701",
        },
      ],
    },
    {
      year: 2022,
      month: 3,
      title: "情報処理学会 第84回全国大会 学生セッション 発表",
      description:
        "「モーフィング画像生成による説明可能性を有した画像分類モデルの提案」について，査読なしの口頭発表を行いました．" +
        "モデルの動作を手軽に試せるよう，デモWebページも作成しました．",
      links: [
        {
          text: "発表概要",
          url: "https://www.ipsj.or.jp/event/taikai/84/ipsj_web2022/data/pdf/2P-02.html",
        },
        {
          text: "Web デモ",
          url: "https://quietsato.github.io/explanation-by-image-morphing-demo/",
        },
      ],
    },
    {
      year: 2022,
      month: 4,
      title: "高専DCON2022 優勝",
      description:
        "一関高専 Team MJ の一員として，認知症の早期発見サービスである「D-walk」を開発しました．" +
        "認知症判定を行う機械学習モデルの開発とデプロイ，歩行計測用スマートフォンアプリの開発を行いました．",
      links: [
        {
          text: "作品紹介",
          url: "https://dcon.ai/2022/products/%e4%b8%80%e9%96%a2%e5%b7%a5%e6%a5%ad%e9%ab%98%e7%ad%89%e5%b0%82%e9%96%80%e5%ad%a6%e6%a0%a1-d-walk/",
        },
      ],
    },
  ],
  socialLinks: [
    {
      site: "github",
      username: "quietsato",
    },
    {
      site: "facebook",
      username: "quietsato",
    },
    {
      site: "atcoder",
      username: "quietsato",
    },
    {
      site: "note",
      username: "quietsato",
    },
  ],
};

export default content;
