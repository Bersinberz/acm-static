import React, { useState, useEffect } from 'react';
import { motion as m } from "framer-motion";
import Tilt from 'react-vanilla-tilt';
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../../components/transitions';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

interface Member {
  _id: { $oid: string };
  name: string;
  designation: string;
  batch: string;
  imageUrl: string;
  imagePublicId: string;
  social: {
    linkedin: string;
    instagram: string;
    facebook: string;
  };
  createdAt: { $date: string };
  updatedAt: { $date: string };
  __v: number;
}

interface FrontendMember {
  id: string;
  name: string;
  designation: string;
  img: string;
  social?: Array<{
    type: "instagram" | "linkedin" | "twitter" | "facebook";
    link: string;
  }>;
}

interface AboutProps { }

const About: React.FC<AboutProps> = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>('volunteers');
  const location = useLocation();
  const [selectedYear, setSelectedYear] = useState<string>('2025-2026');
  const [members, setMembers] = useState<Member[]>([]);

  const membersData: Member[] = [
    {
      "_id": { "$oid": "695d4da56945b94ece0d1a0e" },
      "name": "Joyclyn Immanuel J",
      "designation": "Volunteer Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722406/members/qftj0q3l9jzsxbxwe3dr.jpg",
      "imagePublicId": "members/qftj0q3l9jzsxbxwe3dr",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:00:05.574Z" },
      "updatedAt": { "$date": "2026-01-06T18:00:05.574Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4dbb6945b94ece0d1a10" },
      "name": "H.HADLINS PRICE",
      "designation": "Volunteer Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722429/members/uhyleubd7zd9uhqklahz.jpg",
      "imagePublicId": "members/uhyleubd7zd9uhqklahz",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:00:27.891Z" },
      "updatedAt": { "$date": "2026-01-06T18:00:27.891Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4dcf6945b94ece0d1a12" },
      "name": "Harismitha",
      "designation": "Volunteer Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722448/members/yt0sy7g8vsroiebiwjmn.jpg",
      "imagePublicId": "members/yt0sy7g8vsroiebiwjmn",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:00:47.054Z" },
      "updatedAt": { "$date": "2026-01-06T18:00:47.054Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4de46945b94ece0d1a14" },
      "name": "Hema S",
      "designation": "Volunteer Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722470/members/bwn9cdmumlzklsexkbqq.jpg",
      "imagePublicId": "members/bwn9cdmumlzklsexkbqq",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:01:08.909Z" },
      "updatedAt": { "$date": "2026-01-06T18:01:08.909Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4dfc6945b94ece0d1a16" },
      "name": "Jangala Sri Vaishnavi",
      "designation": "Volunteer Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722493/members/jgnhf79prpigusro3zdi.jpg",
      "imagePublicId": "members/jgnhf79prpigusro3zdi",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:01:32.201Z" },
      "updatedAt": { "$date": "2026-01-06T18:01:32.201Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4e166945b94ece0d1a18" },
      "name": "Katepalli PavaniPriya",
      "designation": "Volunteer Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722519/members/p24ax1kkday6hzuluj41.jpg",
      "imagePublicId": "members/p24ax1kkday6hzuluj41",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:01:58.743Z" },
      "updatedAt": { "$date": "2026-01-06T18:01:58.743Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4e2c6945b94ece0d1a1a" },
      "name": "Nirbhay",
      "designation": "Volunteer Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722541/members/h4oe3chtyjsxagqeujcj.jpg",
      "imagePublicId": "members/h4oe3chtyjsxagqeujcj",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:02:20.044Z" },
      "updatedAt": { "$date": "2026-01-06T18:02:20.044Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4e466945b94ece0d1a1c" },
      "name": "Shreyas S",
      "designation": "Volunteer Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722567/members/xohrghio1j9tlhtx93tm.jpg",
      "imagePublicId": "members/xohrghio1j9tlhtx93tm",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:02:46.452Z" },
      "updatedAt": { "$date": "2026-01-06T18:02:46.452Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4e636945b94ece0d1a1e" },
      "name": "Subin VM",
      "designation": "Media Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722596/members/gtsh4fb8xyjowz9ynxtu.jpg",
      "imagePublicId": "members/gtsh4fb8xyjowz9ynxtu",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:03:15.144Z" },
      "updatedAt": { "$date": "2026-01-06T18:03:15.144Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4e8e6945b94ece0d1a20" },
      "name": "Dharsan L",
      "designation": "Media Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722640/members/cig0swymt66hyzhbshda.jpg",
      "imagePublicId": "members/cig0swymt66hyzhbshda",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:03:58.919Z" },
      "updatedAt": { "$date": "2026-01-06T18:03:58.919Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4eaa6945b94ece0d1a22" },
      "name": "T K Vishal",
      "designation": "Media Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722667/members/x1u9afk8a1uitvkyvson.jpg",
      "imagePublicId": "members/x1u9afk8a1uitvkyvson",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:04:26.893Z" },
      "updatedAt": { "$date": "2026-01-06T18:04:26.893Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4ece6945b94ece0d1a24" },
      "name": "Ukenthiran A",
      "designation": "Media Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722704/members/twtggx93eagsr5zuzxlc.jpg",
      "imagePublicId": "members/twtggx93eagsr5zuzxlc",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:05:02.920Z" },
      "updatedAt": { "$date": "2026-01-06T18:05:02.920Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4ee26945b94ece0d1a26" },
      "name": "Lokesh R",
      "designation": "Media Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722723/members/ssv4p1g6w4kxvjw1wxnu.jpg",
      "imagePublicId": "members/ssv4p1g6w4kxvjw1wxnu",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:05:22.177Z" },
      "updatedAt": { "$date": "2026-01-06T18:05:22.177Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4efa6945b94ece0d1a28" },
      "name": "Shahul Hameed A",
      "designation": "Media Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722747/members/gayikbv1zgrpgr6wfpkx.jpg",
      "imagePublicId": "members/gayikbv1zgrpgr6wfpkx",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:05:46.763Z" },
      "updatedAt": { "$date": "2026-01-06T18:05:46.763Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4f176945b94ece0d1a2a" },
      "name": "Nakka Purna Durga Trimurthulu",
      "designation": "Media Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722776/members/rbmsu0hf9y4pslpmjshn.jpg",
      "imagePublicId": "members/rbmsu0hf9y4pslpmjshn",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:06:15.174Z" },
      "updatedAt": { "$date": "2026-01-06T18:06:15.174Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4f776945b94ece0d1a2c" },
      "name": "Konduru Navya Sree",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722872/members/fpv3bfok3vatdo7nfn48.jpg",
      "imagePublicId": "members/fpv3bfok3vatdo7nfn48",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:07:51.457Z" },
      "updatedAt": { "$date": "2026-01-06T18:07:51.457Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d4fbe6945b94ece0d1a2e" },
      "name": "MANDA LIKHIL MADHAV",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767722944/members/jmelacvodjyix2ml7tch.jpg",
      "imagePublicId": "members/jmelacvodjyix2ml7tch",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:09:02.724Z" },
      "updatedAt": { "$date": "2026-01-06T18:09:02.724Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d533de0baffbc25f780b9" },
      "name": "Aafiya Afsheen N",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767723838/members/ynd1hvhplkayhpntuq7q.jpg",
      "imagePublicId": "members/ynd1hvhplkayhpntuq7q",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:23:57.499Z" },
      "updatedAt": { "$date": "2026-01-06T18:23:57.499Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d535ce0baffbc25f780bb" },
      "name": "Hariharan V",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767723869/members/sqjsbyvga9yrdzxwea7o.jpg",
      "imagePublicId": "members/sqjsbyvga9yrdzxwea7o",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:24:28.637Z" },
      "updatedAt": { "$date": "2026-01-06T18:24:28.637Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d5375e0baffbc25f780bd" },
      "name": "Bargav Krishna Gali",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767723894/members/u7qf7stntyhbwk5fnlyr.jpg",
      "imagePublicId": "members/u7qf7stntyhbwk5fnlyr",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:24:53.360Z" },
      "updatedAt": { "$date": "2026-01-06T18:24:53.360Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d538be0baffbc25f780bf" },
      "name": "Dumpa Dhruva Kumar",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767723916/members/ibdk03n0jhk0vnbtkdis.jpg",
      "imagePublicId": "members/ibdk03n0jhk0vnbtkdis",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:25:15.400Z" },
      "updatedAt": { "$date": "2026-01-06T18:25:15.400Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d53c4e0baffbc25f780c1" },
      "name": "Sanjesh RG",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767723973/members/zufabkqys08rw8l5tyoj.jpg",
      "imagePublicId": "members/zufabkqys08rw8l5tyoj",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:26:12.168Z" },
      "updatedAt": { "$date": "2026-01-06T18:26:12.168Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d5406e0baffbc25f780c3" },
      "name": "Kanduri Sai Krishna Kaushik",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767724040/members/qgxgbt8jxpbbbqtck1jm.jpg",
      "imagePublicId": "members/qgxgbt8jxpbbbqtck1jm",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:27:18.994Z" },
      "updatedAt": { "$date": "2026-01-06T18:27:18.994Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d541ee0baffbc25f780c5" },
      "name": "Geo Sovi",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767724064/members/ryxozk2wvnxanik31mf5.jpg",
      "imagePublicId": "members/ryxozk2wvnxanik31mf5",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:27:42.780Z" },
      "updatedAt": { "$date": "2026-01-06T18:27:42.780Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d5436e0baffbc25f780c7" },
      "name": "Annangi Mokshini Yadav",
      "designation": "Research Unit",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767724088/members/zp4uxgdux7kzmvwqbtxu.jpg",
      "imagePublicId": "members/zp4uxgdux7kzmvwqbtxu",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:28:06.940Z" },
      "updatedAt": { "$date": "2026-01-06T18:28:06.940Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d5475e0baffbc25f780c9" },
      "name": "GOWTHAM S",
      "designation": "Chairperson",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767724150/members/j9iwkhdedgbeabexunqb.jpg",
      "imagePublicId": "members/j9iwkhdedgbeabexunqb",
      "social": {
        "linkedin": "https://www.linkedin.com/in/gowtham--s/",
        "instagram": "https://www.instagram.com/_iam_._gowtham_/",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:29:09.865Z" },
      "updatedAt": { "$date": "2026-01-14T17:26:01.687Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d548be0baffbc25f780cb" },
      "name": "KODIDASU BHARATH",
      "designation": "Vice Chairperson",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767724172/members/t5b8gkiypbgcf5qqksbg.jpg",
      "imagePublicId": "members/t5b8gkiypbgcf5qqksbg",
      "social": {
        "linkedin": "https://www.linkedin.com/in/bharathkodidasu/",
        "instagram": "https://www.instagram.com/b.h.a.r.a.t.h_1410/",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:29:31.103Z" },
      "updatedAt": { "$date": "2026-01-14T17:26:21.062Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d549fe0baffbc25f780cd" },
      "name": "DEEKSHITHA",
      "designation": "Treasurer",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767724193/members/mj2vvsf1fjwqcdgq3edy.jpg",
      "imagePublicId": "members/mj2vvsf1fjwqcdgq3edy",
      "social": {
        "linkedin": "https://www.linkedin.com/in/deekshitha-uppu-571b122b8/",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:29:51.922Z" },
      "updatedAt": { "$date": "2026-01-14T17:33:55.438Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "695d54b8e0baffbc25f780cf" },
      "name": "SRI SOUNDHARYA",
      "designation": "Secretary",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1767724217/members/bpsrril6bw0y3tv5vnji.jpg",
      "imagePublicId": "members/bpsrril6bw0y3tv5vnji",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-06T18:30:16.745Z" },
      "updatedAt": { "$date": "2026-01-06T18:30:16.745Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c0ef06cedad2e68d6306" },
      "name": "DR.VIGNESHWARI S",
      "designation": "HOD CSE",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407280/members/opz6utpyfygkxi8quyoj.jpg",
      "imagePublicId": "members/opz6utpyfygkxi8quyoj",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:14:39.789Z" },
      "updatedAt": { "$date": "2026-01-14T16:14:39.789Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c12906cedad2e68d6308" },
      "name": "SIVA KRISHNA ADIMULAM",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407338/members/hhcrcyglxfvamzgmod2u.jpg",
      "imagePublicId": "members/hhcrcyglxfvamzgmod2u",
      "social": {
        "linkedin": "https://www.linkedin.com/in/siva-krishna-adimulam-08100422b/",
        "instagram": "https://www.instagram.com/literally.vibe/",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:15:37.601Z" },
      "updatedAt": { "$date": "2026-01-14T16:26:42.995Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c14b06cedad2e68d630a" },
      "name": "ADITYA SAI TEJA B",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407372/members/sgzd5exlq3qr4tas2kng.jpg",
      "imagePublicId": "members/sgzd5exlq3qr4tas2kng",
      "social": {
        "linkedin": "https://www.linkedin.com/in/aditya-sai-teja-b-013a98251",
        "instagram": "https://www.instagram.com/_aditya_teja?igsh=MWpocDdpdG8yMmpvOA==",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:16:11.553Z" },
      "updatedAt": { "$date": "2026-01-14T16:27:04.543Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c17106cedad2e68d630c" },
      "name": "D MANISRI VENKATESH",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407410/members/rcbagajei850gdambq8g.jpg",
      "imagePublicId": "members/rcbagajei850gdambq8g",
      "social": {
        "linkedin": "http://linkedin.com/in/manisri-venkatesh-93021b299/",
        "instagram": "https://www.instagram.com/manisrivenkatesh?igsh=MXZ2NHQ5dHRua3F4Yg==",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:16:49.465Z" },
      "updatedAt": { "$date": "2026-01-14T16:27:20.157Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c1b406cedad2e68d630e" },
      "name": "V DEVENDRA REDDY",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407476/members/fbh0w5ipnchvdrhx22dv.jpg",
      "imagePublicId": "members/fbh0w5ipnchvdrhx22dv",
      "social": {
        "linkedin": "https://www.linkedin.com/in/devendra-reddy-344650251/",
        "instagram": "https://www.instagram.com/dev_is_not_a_name?igsh=bXN6bTU4cGJyYnRi",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:17:56.233Z" },
      "updatedAt": { "$date": "2026-01-14T16:27:43.590Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c1e306cedad2e68d6310" },
      "name": "D.V BHUVANESH",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407524/members/rcjzxlc3ghlqwlw0ilm4.jpg",
      "imagePublicId": "members/rcjzxlc3ghlqwlw0ilm4",
      "social": {
        "linkedin": "https://linkedin.com/in/bhuvan-bhu1",
        "instagram": "https://www.instagram.com/bhuvan._.rebel/",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:18:43.266Z" },
      "updatedAt": { "$date": "2026-01-14T16:27:56.985Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c1fa06cedad2e68d6312" },
      "name": "SUSHREE SONALI PATRA",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407548/members/oqutatwjn0k9lnune3xt.jpg",
      "imagePublicId": "members/oqutatwjn0k9lnune3xt",
      "social": {
        "linkedin": "https://www.linkedin.com/in/sushree-sonali-patra-734206289",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:19:06.975Z" },
      "updatedAt": { "$date": "2026-01-14T16:28:05.276Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c21206cedad2e68d6314" },
      "name": "JANLLYN AVANTIKHA",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407571/members/h2cmgjdceokdyty2cpyo.jpg",
      "imagePublicId": "members/h2cmgjdceokdyty2cpyo",
      "social": {
        "linkedin": "https://www.linkedin.com/in/janllyn-avantikha-90268726a",
        "instagram": "https://www.instagram.com/janllynavantikha_?igsh=MXRjdDc4bGIzdzUyNw%3D%3D&utm_source=qr",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:19:30.178Z" },
      "updatedAt": { "$date": "2026-01-14T16:28:21.907Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c23f06cedad2e68d6316" },
      "name": "TANIKELLA LAKSHMI PHANI MEGHANA",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407616/members/mxvbbpo6gytd7nvwpddy.jpg",
      "imagePublicId": "members/mxvbbpo6gytd7nvwpddy",
      "social": {
        "linkedin": "https://www.linkedin.com/in/meghana-tanikella-5103482b0",
        "instagram": "https://www.instagram.com/tanikellameghana?igsh=MXcxcDIxOHp1cGZ5cw==",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:20:15.747Z" },
      "updatedAt": { "$date": "2026-01-14T16:28:36.386Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c25406cedad2e68d6318" },
      "name": "BATTINA VAISHNAVI",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407637/members/xfdbdwhigsmpakkbbwes.jpg",
      "imagePublicId": "members/xfdbdwhigsmpakkbbwes",
      "social": {
        "linkedin": "https://www.linkedin.com/in/battina-vaishnavi-5743652b9",
        "instagram": "https://www.instagram.com/vaishnavi_battina_?igsh=NWV1eDdhaWcyZzgz",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:20:36.061Z" },
      "updatedAt": { "$date": "2026-01-14T16:28:50.672Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c28906cedad2e68d631a" },
      "name": "B HARITHREENATH",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407690/members/chuxvantkpzwbbbuyp3d.jpg",
      "imagePublicId": "members/chuxvantkpzwbbbuyp3d",
      "social": {
        "linkedin": "https://www.linkedin.com/in/bellamkonda-harithreenath-906665287",
        "instagram": "https://www.instagram.com/itz_hari_13_?igsh=dTludnhiZms1bmht",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:21:29.141Z" },
      "updatedAt": { "$date": "2026-01-14T16:29:07.391Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c29e06cedad2e68d631c" },
      "name": "SAI VARUN CHANDRASHEKAR",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407711/members/wrb1hl2c6pv6ccea5jtr.jpg",
      "imagePublicId": "members/wrb1hl2c6pv6ccea5jtr",
      "social": {
        "linkedin": "https://www.linkedin.com/in/sai-varun-chandrashekar-93b8bb273",
        "instagram": "https://www.instagram.com/sai_varun04?igsh=cWtieW5hMjJjcmg5",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:21:50.602Z" },
      "updatedAt": { "$date": "2026-01-14T16:29:31.210Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c2bf06cedad2e68d631e" },
      "name": "FAHEEM MOHAMED RAFI",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407744/members/mhnpwbo8itgx8g2lpelj.jpg",
      "imagePublicId": "members/mhnpwbo8itgx8g2lpelj",
      "social": {
        "linkedin": "https://www.linkedin.com/in/faheem-mohamed-rafi-3ba4a1250",
        "instagram": "https://www.instagram.com/faheem._.18?igsh=cGwwcjVrYTl5anp1",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:22:23.362Z" },
      "updatedAt": { "$date": "2026-01-14T16:29:44.442Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c2d806cedad2e68d6320" },
      "name": "VEDHAVARSHINI V",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407768/members/vlm0nyogju1aljsd8zc7.jpg",
      "imagePublicId": "members/vlm0nyogju1aljsd8zc7",
      "social": {
        "linkedin": "https://www.linkedin.com/in/vedha-varshini-vijay-ananth-a83918242",
        "instagram": "https://www.instagram.com/vivi04_v?igsh=M2dwYW4wcWM4OXZr",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:22:48.515Z" },
      "updatedAt": { "$date": "2026-01-14T16:30:00.241Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c2f806cedad2e68d6322" },
      "name": "RAM PRASATH R",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407801/members/hdkkxybzrpavxpolrz9z.jpg",
      "imagePublicId": "members/hdkkxybzrpavxpolrz9z",
      "social": {
        "linkedin": "https://www.linkedin.com/in/ram-prasath-3309b4282",
        "instagram": "https://www.instagram.com/__._nyctophile_._?igsh=eGdlencycDI2M3Nu",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:23:20.748Z" },
      "updatedAt": { "$date": "2026-01-14T16:30:25.629Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c31d06cedad2e68d6324" },
      "name": "R NIHARIKA",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407838/members/nqxfzzg1kvgvkfglurkl.jpg",
      "imagePublicId": "members/nqxfzzg1kvgvkfglurkl",
      "social": {
        "linkedin": "https://www.linkedin.com/in/niharika-ramayanam-5353642b9",
        "instagram": "https://www.instagram.com/_niha_sri_217_?igsh=MXU0bnRicnE4bzhhaQ==",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:23:57.359Z" },
      "updatedAt": { "$date": "2026-01-14T16:30:41.977Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c33706cedad2e68d6326" },
      "name": "GALI ARAVIND KUMAR REDDY",
      "designation": "Core Team Member",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407863/members/mmg7c7pobxavnckyahao.jpg",
      "imagePublicId": "members/mmg7c7pobxavnckyahao",
      "social": {
        "linkedin": "https://www.linkedin.com/in/aravind-reddy-bb536b244",
        "instagram": "https://www.instagram.com/mr.aravind_._?igsh=MWsyeG9rMXR3MThzNw==",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:24:23.204Z" },
      "updatedAt": { "$date": "2026-01-14T16:30:57.298Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c37e06cedad2e68d6328" },
      "name": "DR.SATHYABAMA R",
      "designation": "Associate Professor",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407935/members/hbw3yjjwhmcsryanh2hw.jpg",
      "imagePublicId": "members/hbw3yjjwhmcsryanh2hw",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:25:34.887Z" },
      "updatedAt": { "$date": "2026-01-14T16:25:34.887Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c38e06cedad2e68d632a" },
      "name": "DR. ANUBHARATHI",
      "designation": "Associate Professor",
      "batch": "2024–2025",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768407951/members/kyvhnks7knybfcicugbj.jpg",
      "imagePublicId": "members/kyvhnks7knybfcicugbj",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:25:50.671Z" },
      "updatedAt": { "$date": "2026-01-14T16:25:50.671Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c51306cedad2e68d634c" },
      "name": "ANKEPALLY RITHEESH REDDY",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408341/members/a0yyeuyqn4b5y9mqcdr5.jpg",
      "imagePublicId": "members/a0yyeuyqn4b5y9mqcdr5",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:32:19.946Z" },
      "updatedAt": { "$date": "2026-01-14T16:32:19.946Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c52d06cedad2e68d634e" },
      "name": "HANSHIKA SINGH",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408366/members/gdinvktp8ivu86it9pyk.jpg",
      "imagePublicId": "members/gdinvktp8ivu86it9pyk",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:32:45.122Z" },
      "updatedAt": { "$date": "2026-01-14T16:32:45.122Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c55106cedad2e68d6350" },
      "name": "K KOSHAL",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408402/members/iyr4feqbhb2xzfjgmknd.jpg",
      "imagePublicId": "members/iyr4feqbhb2xzfjgmknd",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:33:21.644Z" },
      "updatedAt": { "$date": "2026-01-14T16:33:21.644Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c5a706cedad2e68d6352" },
      "name": "S.Monisha",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408488/members/erzlrwey8zovpauzwfsx.jpg",
      "imagePublicId": "members/erzlrwey8zovpauzwfsx",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:34:47.356Z" },
      "updatedAt": { "$date": "2026-01-14T16:34:47.356Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c5dc06cedad2e68d6354" },
      "name": "Monika g",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408541/members/epuefdv7poeroidhzcxd.jpg",
      "imagePublicId": "members/epuefdv7poeroidhzcxd",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:35:40.510Z" },
      "updatedAt": { "$date": "2026-01-14T16:35:40.510Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c5f706cedad2e68d6356" },
      "name": "Lakshaya s",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1779815946/members/ednqcilploa2sqjpv8bv.jpg",
      "imagePublicId": "members/ednqcilploa2sqjpv8bv",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:36:07.131Z" },
      "updatedAt": { "$date": "2026-01-14T16:36:07.131Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c60a06cedad2e68d6358" },
      "name": "Lakshana S",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408587/members/uivl9pqmgj0kbtpe7iar.jpg",
      "imagePublicId": "members/uivl9pqmgj0kbtpe7iar",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:36:26.275Z" },
      "updatedAt": { "$date": "2026-01-14T16:36:26.275Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c62e06cedad2e68d635c" },
      "name": "Harini.c",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1779816164/members/ksyzfeja5pmj0xlkgzuf.jpg",
      "imagePublicId": "members/ksyzfeja5pmj0xlkgzuf",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:37:02.442Z" },
      "updatedAt": { "$date": "2026-01-14T16:37:02.442Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c66006cedad2e68d635e" },
      "name": "Kirthi",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408673/members/d8sbxzctnr86gutbmoka.jpg",
      "imagePublicId": "members/d8sbxzctnr86gutbmoka",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:37:52.185Z" },
      "updatedAt": { "$date": "2026-01-14T16:37:52.185Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c67406cedad2e68d6360" },
      "name": "Vyshnavi",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408693/members/qdsey3nvkbbx5yvnnctm.jpg",
      "imagePublicId": "members/qdsey3nvkbbx5yvnnctm",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:38:12.916Z" },
      "updatedAt": { "$date": "2026-01-14T16:38:12.916Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c6a306cedad2e68d6362" },
      "name": "Monika Palanivel",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408740/members/g3x2wdooqk6a1pp5hyya.jpg",
      "imagePublicId": "members/g3x2wdooqk6a1pp5hyya",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:38:59.841Z" },
      "updatedAt": { "$date": "2026-01-14T16:38:59.841Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c6be06cedad2e68d6364" },
      "name": "Vinola J",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1769450513/members/gibxiqgw48mogkctwwwl.jpg",
      "imagePublicId": "members/gibxiqgw48mogkctwwwl",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:39:26.873Z" },
      "updatedAt": { "$date": "2026-01-26T18:01:53.984Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c6dd06cedad2e68d6366" },
      "name": "Tanuja E",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768408797/members/czhhjtz9mfit6w02tmbw.jpg",
      "imagePublicId": "members/czhhjtz9mfit6w02tmbw",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:39:57.199Z" },
      "updatedAt": { "$date": "2026-01-14T16:39:57.199Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c6dd06cedad2e68d6366" },
      "name": "K Likith Syam",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1779816520/members/dytdebylcknwezytxloq.jpg",
      "imagePublicId": "members/dytdebylcknwezytxloq",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:39:57.199Z" },
      "updatedAt": { "$date": "2026-01-14T16:39:57.199Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c6dd06cedad2e68d6366" },
      "name": "Bhuvana Rajaram",
      "designation": "Volunteer Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1779816691/members/ipqb1jnrydpozxfvznmv.jpg",
      "imagePublicId": "members/ipqb1jnrydpozxfvznmv",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:39:57.199Z" },
      "updatedAt": { "$date": "2026-01-14T16:39:57.199Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c79106cedad2e68d6368" },
      "name": "NUVVURU HARTHIK REDDY",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1779816059/members/vwdime3l4abenenz3mkh.jpg",
      "imagePublicId": "members/vwdime3l4abenenz3mkh",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:42:57.626Z" },
      "updatedAt": { "$date": "2026-01-14T16:42:57.626Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c7b606cedad2e68d636a" },
      "name": "B.G.Viswa Janani",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768409015/members/knoz1qlmhgvmje1tl3j9.jpg",
      "imagePublicId": "members/knoz1qlmhgvmje1tl3j9",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:43:34.809Z" },
      "updatedAt": { "$date": "2026-01-14T16:43:34.809Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c7d106cedad2e68d636c" },
      "name": "Mohammed Sayed",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1779815698/members/f726evfjuwwf2ghnktx4.jpg",
      "imagePublicId": "members/f726evfjuwwf2ghnktx4",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:44:01.160Z" },
      "updatedAt": { "$date": "2026-01-14T16:44:01.160Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967c7e806cedad2e68d636e" },
      "name": "Lokesh R",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768409064/members/e8fawftfnly9acevjjax.jpg",
      "imagePublicId": "members/e8fawftfnly9acevjjax",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T16:44:24.174Z" },
      "updatedAt": { "$date": "2026-01-14T16:44:24.174Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967ce7a06cedad2e68d6389" },
      "name": "Guru Rishikesh T",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768410747/members/lbqztssmd3vugcweehjc.jpg",
      "imagePublicId": "members/lbqztssmd3vugcweehjc",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:12:26.173Z" },
      "updatedAt": { "$date": "2026-01-14T17:12:26.173Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967ce9306cedad2e68d638b" },
      "name": "Nakka Purna Durga Trimurthulu",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768410772/members/role4jzaya9yg3s9orb4.jpg",
      "imagePublicId": "members/role4jzaya9yg3s9orb4",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:12:51.380Z" },
      "updatedAt": { "$date": "2026-01-14T17:12:51.380Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967ceab06cedad2e68d638d" },
      "name": "Ukenthiran A",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768410796/members/ahycq4qh8vvq5pn9o32r.jpg",
      "imagePublicId": "members/ahycq4qh8vvq5pn9o32r",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:13:15.132Z" },
      "updatedAt": { "$date": "2026-01-14T17:13:15.132Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967cec506cedad2e68d638f" },
      "name": "Dharsan L",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1779816276/members/qe5lss1744limyhffrhe.jpg",
      "imagePublicId": "members/qe5lss1744limyhffrhe",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:13:41.065Z" },
      "updatedAt": { "$date": "2026-01-14T17:13:41.065Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967ceda06cedad2e68d6391" },
      "name": "SUBIN V M",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768410843/members/hxva72jw5ldt7oeg30by.jpg",
      "imagePublicId": "members/hxva72jw5ldt7oeg30by",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:14:02.597Z" },
      "updatedAt": { "$date": "2026-01-14T17:14:02.597Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967ceea06cedad2e68d6393" },
      "name": "Jashwanth.s",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768410858/members/dp2wgqe1a5rl5u8n3mu8.jpg",
      "imagePublicId": "members/dp2wgqe1a5rl5u8n3mu8",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:14:18.066Z" },
      "updatedAt": { "$date": "2026-01-14T17:14:18.066Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967cf0206cedad2e68d6395" },
      "name": "Shahul hameed",
      "designation": "Media Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768410882/members/rscz8ged3kcpzbkjsf0k.jpg",
      "imagePublicId": "members/rscz8ged3kcpzbkjsf0k",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:14:42.030Z" },
      "updatedAt": { "$date": "2026-01-14T17:14:42.030Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967cfe606cedad2e68d6397" },
      "name": "Konduru Navya Sree",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411112/members/rzdj9en9to09ltn5q9kg.jpg",
      "imagePublicId": "members/rzdj9en9to09ltn5q9kg",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:18:30.986Z" },
      "updatedAt": { "$date": "2026-01-14T17:18:30.986Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d00806cedad2e68d6399" },
      "name": "MANDA LIKHIL MADHAV",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411145/members/tiyflunjzewuyobq5eos.jpg",
      "imagePublicId": "members/tiyflunjzewuyobq5eos",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:19:04.844Z" },
      "updatedAt": { "$date": "2026-01-14T17:19:04.844Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d01806cedad2e68d639b" },
      "name": "Aafiya Afsheen N",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411161/members/qz9huxgw9dl5ljs3pzbl.jpg",
      "imagePublicId": "members/qz9huxgw9dl5ljs3pzbl",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:19:20.851Z" },
      "updatedAt": { "$date": "2026-01-14T17:19:20.851Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d05d06cedad2e68d639f" },
      "name": "Hariharan V",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411230/members/tnjqoqexrd5oxfokcbqo.jpg",
      "imagePublicId": "members/tnjqoqexrd5oxfokcbqo",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:20:29.862Z" },
      "updatedAt": { "$date": "2026-01-14T17:20:29.862Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d07006cedad2e68d63a1" },
      "name": "Bargav Krishna Gali",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411249/members/jlila4pvnxm6ibh1d5un.jpg",
      "imagePublicId": "members/jlila4pvnxm6ibh1d5un",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:20:48.070Z" },
      "updatedAt": { "$date": "2026-01-14T17:20:48.070Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d08106cedad2e68d63a3" },
      "name": "Dumpa Dhruva Kumar",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411266/members/tbdsz3yjodb8d89ohmxe.jpg",
      "imagePublicId": "members/tbdsz3yjodb8d89ohmxe",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:21:05.882Z" },
      "updatedAt": { "$date": "2026-01-14T17:21:05.882Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d09406cedad2e68d63a5" },
      "name": "Sanjesh RG",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411285/members/z18vhvaqyyp8lsbzzawu.jpg",
      "imagePublicId": "members/z18vhvaqyyp8lsbzzawu",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:21:24.537Z" },
      "updatedAt": { "$date": "2026-01-14T17:21:24.537Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d0ae06cedad2e68d63a7" },
      "name": "Kanduri Sai Krishna Kaushik",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411311/members/wtywaiwubvefrknvuozn.jpg",
      "imagePublicId": "members/wtywaiwubvefrknvuozn",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:21:50.768Z" },
      "updatedAt": { "$date": "2026-01-14T17:21:50.768Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d0c306cedad2e68d63a9" },
      "name": "Geo Sovi",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411332/members/li8xsv0v4g5ivngpva48.jpg",
      "imagePublicId": "members/li8xsv0v4g5ivngpva48",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:22:11.025Z" },
      "updatedAt": { "$date": "2026-01-14T17:22:19.521Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d14206cedad2e68d63af" },
      "name": "Dr. SENENDURU SRINIVASALU",
      "designation": "HOD CSE AIR-AIML-DS",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1769709185/members/igjezxlxhj9gxmkynjdn.jpg",
      "imagePublicId": "members/igjezxlxhj9gxmkynjdn",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:24:18.341Z" },
      "updatedAt": { "$date": "2026-01-14T17:24:18.341Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d15c06cedad2e68d63b1" },
      "name": "DR.SATHYABAMA R",
      "designation": "Associate Professor",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411484/members/ycjmx0extjngfmaa9xmg.jpg",
      "imagePublicId": "members/ycjmx0extjngfmaa9xmg",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:24:44.113Z" },
      "updatedAt": { "$date": "2026-01-14T17:24:44.113Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d16d06cedad2e68d63b3" },
      "name": "DR. ANUBHARATHI",
      "designation": "Associate Professor",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411502/members/nrwiae7ecm9q24wtmsel.jpg",
      "imagePublicId": "members/nrwiae7ecm9q24wtmsel",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:25:01.381Z" },
      "updatedAt": { "$date": "2026-01-14T17:25:01.381Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d25d06cedad2e68d63c3" },
      "name": "Sai varun C",
      "designation": "Chairperson",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1769709978/members/koddtujayynkvdmq3tkc.jpg",
      "imagePublicId": "members/koddtujayynkvdmq3tkc",
      "social": {
        "linkedin": "https://www.linkedin.com/in/sai-varun-chandrashekar-93b8bb273",
        "instagram": "https://www.instagram.com/sai_varun04?igsh=cWtieW5hMjJjcmg5",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:29:01.715Z" },
      "updatedAt": { "$date": "2026-01-14T17:29:25.668Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d2ad06cedad2e68d63cf" },
      "name": "SANJESH R G",
      "designation": "Vice Chairperson",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768411822/members/evu6fovtzvadssqtblda.jpg",
      "imagePublicId": "members/evu6fovtzvadssqtblda",
      "social": {
        "linkedin": "https://www.linkedin.com/in/sanjesh-ramesh",
        "instagram": "https://www.instagram.com/sanjesh_unofficial?igsh=aGduamRyOXdqaTRy",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:30:21.474Z" },
      "updatedAt": { "$date": "2026-01-14T17:35:59.066Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d42106cedad2e68d63dd" },
      "name": "Rennita Sebastin",
      "designation": "Treasurer",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768412194/members/mnjvskwibhgvjme8h217.jpg",
      "imagePublicId": "members/mnjvskwibhgvjme8h217",
      "social": {
        "linkedin": "https://www.linkedin.com/in/rennita-sebastin-159746323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "instagram": "https://www.instagram.com/renn_sebx?igsh=MTkzbzYwZGk3MTQ1OA==",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:36:33.433Z" },
      "updatedAt": { "$date": "2026-01-14T17:36:51.258Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d46b06cedad2e68d63e1" },
      "name": "Moniha s",
      "designation": "Secretary",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768412268/members/rfzh9b62ytapvzidnhhr.jpg",
      "imagePublicId": "members/rfzh9b62ytapvzidnhhr",
      "social": {
        "linkedin": "https://www.linkedin.com/in/moniha-s-053933327/",
        "instagram": "https://www.instagram.com/monihasuresh?igsh=MWVscWhlZGpoaWFicw%3D%3D&utm_source=qr",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:37:47.711Z" },
      "updatedAt": { "$date": "2026-01-14T17:37:47.711Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d50906cedad2e68d63e9" },
      "name": "Annangi Mokshini Yadav",
      "designation": "Research Unit",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768412426/members/hfnqy6zo5ckvxspsvzl4.jpg",
      "imagePublicId": "members/hfnqy6zo5ckvxspsvzl4",
      "social": {
        "linkedin": "",
        "instagram": "",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:40:25.929Z" },
      "updatedAt": { "$date": "2026-01-14T17:40:25.929Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d54506cedad2e68d63ef" },
      "name": "NANDHIKA V",
      "designation": "Core Team Member",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768412486/members/ptlixrabmav8r3y3m9mh.jpg",
      "imagePublicId": "members/ptlixrabmav8r3y3m9mh",
      "social": {
        "linkedin": "https://www.linkedin.com/in/nandhika-viswanathan/",
        "instagram": "https://www.instagram.com/nandhikaviswanathan?igsh=MXA4OWN0OTdyMnhheA==",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:41:25.707Z" },
      "updatedAt": { "$date": "2026-01-14T17:41:25.707Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d56b06cedad2e68d63f1" },
      "name": "Anushri Rajkumar",
      "designation": "Core Team Member",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768412524/members/eg8fmcxskzb4qjlvz5vh.jpg",
      "imagePublicId": "members/eg8fmcxskzb4qjlvz5vh",
      "social": {
        "linkedin": "https://www.linkedin.com/in/anushri-rajkumar-66836b287",
        "instagram": "https://www.instagram.com/anushri.rajkumar/",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:42:03.952Z" },
      "updatedAt": { "$date": "2026-01-14T17:42:03.952Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d5d806cedad2e68d63f3" },
      "name": "HARSHINI S",
      "designation": "Core Team Member",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768412633/members/ndvjvvylucqw9gyjw3mc.jpg",
      "imagePublicId": "members/ndvjvvylucqw9gyjw3mc",
      "social": {
        "linkedin": "https://linkedin.com/in/harshini-s-067aab2a5",
        "instagram": "http://instagram.com/lil_miss_crazy/",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:43:52.853Z" },
      "updatedAt": { "$date": "2026-01-14T17:43:52.853Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d61b06cedad2e68d63f5" },
      "name": "YUTHISH KRISHNAN R",
      "designation": "Core Team Member",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768412700/members/y2qdopixw3vytbr5xn6z.jpg",
      "imagePublicId": "members/y2qdopixw3vytbr5xn6z",
      "social": {
        "linkedin": "https://linkedin.com/in/yuthish-krishnan-b68645213",
        "instagram": "https://instagram.com/yxthish.x/",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:44:59.671Z" },
      "updatedAt": { "$date": "2026-01-14T17:44:59.671Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d64006cedad2e68d63f7" },
      "name": "TEJA G",
      "designation": "Core Team Member",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768412737/members/em4khqi6jo3sacch4ahx.jpg",
      "imagePublicId": "members/em4khqi6jo3sacch4ahx",
      "social": {
        "linkedin": "https://www.linkedin.com/in/gorakati-teja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "instagram": "https://www.instagram.com/_.tej._royy?igsh=YjJpMWJvandrYmE1",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:45:36.937Z" },
      "updatedAt": { "$date": "2026-01-14T17:45:36.937Z" },
      "__v": 0
    },
    {
      "_id": { "$oid": "6967d66b06cedad2e68d63f9" },
      "name": "Faiha ishaq",
      "designation": "Core Team Member",
      "batch": "2025–2026",
      "imageUrl": "https://res.cloudinary.com/dxpglrdwn/image/upload/v1768413050/members/dikklslkpt9gxdmlfijj.jpg",
      "imagePublicId": "members/dikklslkpt9gxdmlfijj",
      "social": {
        "linkedin": "https://www.linkedin.com/in/faiha-ishaq-947586324",
        "instagram": "https://www.instagram.com/qwertyfaiha/",
        "facebook": ""
      },
      "createdAt": { "$date": "2026-01-14T17:46:19.189Z" },
      "updatedAt": { "$date": "2026-01-14T17:50:49.088Z" },
      "__v": 0
    }
  ];

  type SocialType = "instagram" | "linkedin" | "facebook";

  interface FrontendSocial {
    type: SocialType;
    link: string;
  }

  // Initialize members with hardcoded data
  useEffect(() => {
    setMembers(membersData);
  }, []);

  // --- YEAR SELECTION LOGIC ---
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const batchParam = searchParams.get('batch');
    if (batchParam === '2024-2025') {
      setSelectedYear('2024-2025');
    } else {
      setSelectedYear('2025-2026');
    }
  }, [location]);

  const handleDropdownChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUnit(event.target.value);
  };

  // --- HELPER FUNCTIONS ---
  const convertSocialToArray = (
    social?: Member['social']
  ): FrontendSocial[] => {
    if (!social) return [];

    return [
      social.linkedin && social.linkedin.trim() && { type: "linkedin" as const, link: social.linkedin },
      social.instagram && social.instagram.trim() && { type: "instagram" as const, link: social.instagram },
      social.facebook && social.facebook.trim() && { type: "facebook" as const, link: social.facebook },
    ].filter(Boolean) as FrontendSocial[];
  };

  const convertToFrontendMember = (member: Member): FrontendMember => {
    return {
      id: member._id.$oid,
      name: member.name,
      designation: member.designation,
      img: member.imageUrl,
      social: convertSocialToArray(member.social)
    };
  };

  const normalize = (v: string) => v.replace(/[–—]/g, "-").trim().toLowerCase();

  const filterMembers = (
    batch: string,
    designationKeywords: string[],
    sortOldest = false
  ): FrontendMember[] => {
    const normalizedBatch = normalize(batch);

    const filtered = members.filter(member =>
      normalize(member.batch) === normalizedBatch &&
      designationKeywords.some(keyword =>
        member.designation.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    let filteredConverted = filtered.map(convertToFrontendMember);

    if (sortOldest) {
      filteredConverted.sort((a, b) => {
        const aMember = members.find(m => m._id.$oid === a.id);
        const bMember = members.find(m => m._id.$oid === b.id);
        if (!aMember || !bMember) return 0;

        const aTime = parseInt(aMember._id.$oid.substring(0, 8), 16) * 1000;
        const bTime = parseInt(bMember._id.$oid.substring(0, 8), 16) * 1000;
        return aTime - bTime;
      });
    }

    return filteredConverted;
  };

  const getMembersByUnit = (unit: string): FrontendMember[] => {
    const keywords: Record<string, string[]> = {
      volunteers: ['volunteer'],
      media: ['media'],
      research: ['research'],
    };

    return filterMembers(selectedYear, keywords[unit] || ['volunteer'], true);
  };

  const getLeadershipPriority = (designation: string): number => {
    const d = designation.toLowerCase();
    if (d.includes("vice chairperson")) return 2;
    if (d.includes("chairperson")) return 1;
    if (d.includes("treasurer")) return 3;
    if (d.includes("secretary")) return 4;
    return 99;
  };

  const getLeadershipData = (): FrontendMember[] => {
    return filterMembers(selectedYear, [
      "chairperson",
      "vice chairperson",
      "treasurer",
      "secretary",
    ]).sort(
      (a, b) =>
        getLeadershipPriority(a.designation) -
        getLeadershipPriority(b.designation)
    );
  };

  const getCoreTeamData = (): FrontendMember[] => {
    return filterMembers(selectedYear, ['core team'], true);
  };

  const getFacultyData = (): FrontendMember[] => {
    return filterMembers(selectedYear, ['hod cse'], true);
  };

  const getFacultyCoordinatorsData = (): FrontendMember[] => {
    return filterMembers(
      selectedYear,
      ['associate professor'],
      true
    );
  };

  const getCardsData = (): FrontendMember[] => {
    return getMembersByUnit(selectedUnit);
  };

  // --- REUSABLE CARD COMPONENT ---
  const MemberCard = ({ member, isLarge = false }: { member: FrontendMember; isLarge?: boolean }) => {
    return (
      <m.div
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        style={{ willChange: "opacity, transform" }}
      >
        <Tilt
          id="tilt-card"
          options={{ scale: 1.05, speed: 1000, max: 15 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={`member-card ${isLarge ? "large" : ''}`}>
            <div className="card-img-wrapper">
              <img
                src={member.img}
                alt={member.name}
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/280x380?text=No+Image";
                }}
              />
            </div>

            <div className="card-content">
              <div className="text-box">
                <h3>{member.name}</h3>
                <span>{member.designation}</span>
              </div>

              <div className="social-icons">
                {member.social?.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`social-icon ${social.type}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.type === "instagram" && <FaInstagram />}
                    {social.type === "linkedin" && <FaLinkedin />}
                    {social.type === "twitter" && <FaTwitter />}
                    {social.type === "facebook" && <FaFacebook />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Tilt>
      </m.div>
    );
  };

  return (
    <>
      <style>{`
        /* --- MAIN LAYOUT & HERO --- */
        .about1 {
          display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
          text-align: center; min-height: 100vh; width: 100%; padding-top: 120px;
        }

        /* --- TITLE ENHANCEMENT 1: HERO TITLE --- */
        .about1 h1 {
          color: #fff; 
          font-size: clamp(35px, 6vw, 65px);
          font-family: "Poppins", sans-serif;
          font-weight: 800;
          margin-bottom: 30px;
          text-shadow: 0 0 20px rgba(0,0,0,0.5);
          letter-spacing: -1px;
        }

        /* Gradient Highlight Class for Title */
        .title-highlight {
          background: linear-gradient(120deg, #fff 0%, #00c3ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(0, 195, 255, 0.4));
        }

        .content1 {
          display: flex; flex-direction: column; align-items: center; max-width: 1200px;
          padding: 0 20px; color: #fff;
        }
        .content1 .img img { width: 150px; height: auto; margin-bottom: 20px; }
        .wrapper1 h3 {
          font-size: 16px; font-weight: 300; letter-spacing: 0.5px; line-height: 1.6;
          margin-bottom: 20px; text-align: justify;
        }
        .button1 a {
          color: #fff; background-color: #00c3ff; padding: 10px 30px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 1px; transition: 0.3s; display: inline-block;
          margin-top: 20px; font-weight: bold; text-decoration: none;
        }
        .button1 a:hover { background-color: #fff; color: #000; }

        /* --- MAIN CONTENT AREA --- */
        .bd { padding: 50px 0; min-height: 100vh; }

        /* --- TITLE ENHANCEMENT 2: SECTION HEADERS --- */
        .section-title {
          text-align: center; margin: 80px 0 50px;
          position: relative;
          z-index: 1;
        }
        
        .section-title h4 {
          display: inline-block;
          padding: 14px 45px;
          color: #fff;
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          
          /* Glassmorphism Badge Style */
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 195, 255, 0.3);
          border-radius: 50px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 0 20px rgba(0, 195, 255, 0.1), inset 0 0 10px rgba(0, 195, 255, 0.05);
          
          position: relative;
          transition: all 0.3s ease;
        }

        /* Hover Effect for Badge */
        .section-title h4:hover {
          border-color: #00c3ff;
          box-shadow: 0 0 30px rgba(0, 195, 255, 0.3), inset 0 0 20px rgba(0, 195, 255, 0.1);
          transform: translateY(-3px);
          color: #fff;
        }

        /* Tech Dots (Left and Right decoration) */
        .section-title h4::before,
        .section-title h4::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background-color: #00c3ff;
          border-radius: 50%;
          box-shadow: 0 0 10px #00c3ff;
        }

        .section-title h4::before { left: 20px; }
        .section-title h4::after { right: 20px; }

        .section-title span { 
          font-size: 0.8em; font-weight: bold; display: block; margin-top: 5px; opacity: 0.8; 
        }

        /* --- DROPDOWN --- */
        .dropdown-container { display: flex; justify-content: center; margin-bottom: 30px; align-items: center; gap: 10px; }
        .dropdown-container select {
          padding: 10px 20px; border: 2px solid lightblue; border-radius: 5px;
          background: rgba(0,0,0,0.5); color: #fff; cursor: pointer; outline: none;
        }
        .dropdown-container select option { background: #000; color: #fff; }

        /* --- GRID SYSTEM --- */
        .grid-container {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 40px;
          max-width: 1400px; margin: 0 auto; padding: 0 20px;
        }

        /* --- CARD STYLING --- */
        .member-card {
          width: 280px; height: 380px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px; overflow: hidden;
          position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s;
        }
        
        .member-card.large { width: 320px; height: 420px; }

        .card-img-wrapper {
          width: 100%; height: 100%;
          overflow: hidden;
        }
        .card-img-wrapper img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s;
        }
        .member-card:hover .card-img-wrapper img {
          transform: scale(1.1);
        }

        .card-content {
          position: absolute; bottom: 0; left: 0; width: 100%;
          padding: 20px; background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(5px);
          display: flex; flex-direction: column; align-items: center; 
          border-top: 1px solid rgba(255,255,255,0.2);
          transform: translateY(100%);
          transition: transform 0.4s ease-in-out; 
        }
        .member-card:hover .card-content { transform: translateY(0); }

        .text-box h3 {
          color: #ffffff;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 6px;
          font-family: "Poppins", sans-serif;
        }
        
        .text-box span {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          text-align: center;
          display: block;
        }

        .social-icons {
          display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;
          margin-top: 15px; width: 100%;
        }

        .social-icon {
          width: 45px; height: 45px; background: rgba(255, 255, 255, 0.1);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          text-decoration: none; font-size: 1.4rem; color: #e0e0e0; transition: all 0.3s ease;
        }
        .social-icon:hover { transform: translateY(-3px); }
        .social-icon.twitter:hover { color: #1DA1F2; background: rgba(29, 161, 242, 0.1); }
        .social-icon.instagram:hover { color: #E1306C; background: rgba(225, 48, 108, 0.1); }
        .social-icon.linkedin:hover { color: #0077B5; background: rgba(0, 119, 181, 0.1); }
        .social-icon.facebook:hover { color: #1877F2; background: rgba(24, 119, 242, 0.1); }

        @media (max-width: 768px) {
          .member-card, .member-card.large { width: 260px; height: 350px; }
          .grid-container { gap: 20px; }
        }
        
        #tilt-card { display: flex; justify-content: center; }

        .leadership-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px;
          max-width: 1400px; margin: 0 auto;
        }
        @media (max-width: 1200px) { .leadership-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .leadership-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className='about1' id='about'>
        {/* ENHANCED MAIN TITLE */}
        <m.h1
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          EXPLORE <span className="title-highlight">ACM SIGAI!!</span>
        </m.h1>

        <div className='content1'>

          <div className='wrapper1'>
            <h3>
              The scope of SIGAI, ACM's Special Interest Group on Artificial Intelligence, consists of the study of intelligence and its realization in computer systems. SIGAI's mission is to promote and support AI-related conferences. Members receive reduced registration rates to all affiliated conferences. Members also receive proceedings from the major SIGAI-sponsored conferences. SIGAI publishes a quarterly newsletter, AI Matters, with ideas and announcements of interest to the AI community.
            </h3>

            <h3>
              ACM SIGAI is the Association for Computing Machinery's Special Interest Group on Artificial Intelligence (AI), an interdisciplinary group of academic and industrial researchers, practitioners, software developers, end users, and students who work together to promote and support the growth and application of AI principles and techniques throughout computing. SIGAI is one of the oldest special interest groups in the ACM. SIGAI, previously called SIGART, started in 1966, publishing the SIGART Newsletter that later became the SIGART Bulletin and Intelligence Magazine.
            </h3>

            <h3>
              On January 10, 1947, at the Symposium on Large-Scale Digital Calculating Machinery at the Harvard computation Laboratory, Professor Samuel H. Caldwell of Massachusetts Institute of Technology spoke of the need for an association of those interested in computing machinery, and of the need for communication between them. After making some inquiries during May and June, we believe there is ample interest to start an informal association of many of those interested in the new machinery for computing and reasoning. Since there has to be a beginning, we are acting as a temporary committee to start such an association.
            </h3>
            <div className='button1'>
              <a
                href="https://sigai.acm.org/main/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore more
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className='bd'>

        {/* --- ENHANCED SECTION TITLE: LEADERSHIP --- */}
        <m.div
          className="section-title"
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <h4>MEET SIST SIGAI ({selectedYear})</h4>
        </m.div>

        <m.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid-container leadership-grid"
        >
          {getLeadershipData().map((member) => (
            <MemberCard key={member.id} member={member} isLarge />
          ))}
        </m.div>

        {/* --- ENHANCED SECTION TITLE: CORE TEAM --- */}
        <div className='section-title'>
          <h4>OUR CORE UNIT ({selectedYear})</h4>
        </div>
        <div className='grid-container'>
          {getCoreTeamData().map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* --- ENHANCED SECTION TITLE: FACULTY CONVENER --- */}
        <div className='section-title'>
          <h4>FACULTY CONVENER ({selectedYear})</h4>
        </div>
        <div className='grid-container'>
          {getFacultyData().map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* --- ENHANCED SECTION TITLE: FACULTY COORDINATORS --- */}
        <div className='section-title'>
          <h4>FACULTY COORDINATORS ({selectedYear})</h4>
        </div>
        <div className='grid-container'>
          {getFacultyCoordinatorsData().map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* --- ENHANCED SECTION TITLE: UNITS --- */}
        <div className='section-title'>
          <h4>OUR UNITS ({selectedYear})</h4>
        </div>

        <div className="dropdown-container">
          <label htmlFor="unit-select" style={{ fontWeight: 'bold', color: 'white' }}>Select Unit: </label>
          <select id="unit-select" onChange={handleDropdownChange1} value={selectedUnit}>
            <option value="volunteers">Volunteers Unit</option>
            <option value="media">Media Unit</option>
          </select>
        </div>

        <div className='grid-container'>
          {getCardsData().length > 0 ? (
            getCardsData().map((member) => (
              <MemberCard key={member.id} member={member} />
            ))
          ) : (
            <div style={{ color: 'white', textAlign: 'center', width: '100%' }}>
              No members found for this unit in {selectedYear}
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default About;