import React from "react";
import {  FaReact, FaNodeJs, } from "react-icons/fa";
import { SiCss3, SiHtml5, SiTailwindcss } from "react-icons/si";
import javaIcon from "./java.png";  // Import d'une icône locale
import flutterIcon from "./flutter.png"; 
import hadoopIcon from "./hadoop.png"; 
import dockerIcon from "./docker.png";
import sparkIcon from "./spark.png";
import springIcon from "./spring(2).png";
import mongoIcon from "./mongodb.png";
import sqlIcon from "./sql.png";
import pyIcon from "./python.png";
import aIcon from "./aws.png";
import jscon from "./js.png";
import hcon from "./h.png";
import ccon from "./c.png";
import rcon from "./re.png";
import nocon from "./no.png";
import kacon from "./kafka.png";
import hfcon from "./hf.jpg";
import djcon from "./dj.png";
import jwtcon from "./jwt.png";
import fcon from "./f.png";
import cccon from "./cc.png";
import ancon from "./an.png";
import pocon from "./po.png";
import angcon from "./ang.png";
import apicon from "./api.png";
import gcon from "./g.png";

const experiences = [
  { name: "AWS", icon: <img src={aIcon} className="h-10 w-8 object-contain"  /> },
  { name: "CSS3", icon: <img src={ccon} className="h-10 w-8 object-contain"  /> },
  { name: "React.js", icon: <img src={rcon} className="h-10 w-8 object-contain"  /> },
  { name: "HTML", icon: <img src={hcon} className="h-10 w-8 object-contain"   /> },
  { name: "JavaScript", icon: <img src={jscon} className="h-10 w-8 object-contain" /> },
  { name: "Node.js", icon: <img src={nocon} className="h-10 w-10 object-contain"   /> },
  { name: "Python", icon: <img src = {pyIcon} className="h-10 w-8 object-contain" /> },
  { name: "C", icon: <img src = {cccon} className="h-10 w-10 object-contain" /> },
  { name: "Docker", icon: <img src={dockerIcon} className="h-10 w-8 object-contain" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} className="text-teal-400"  /> },
  { name: "Java", icon: <img src={javaIcon} className="h-10 w-20 object-contain" /> },
  { name: "Flutter", icon: <img src={flutterIcon} className="h-10 w-10 object-contain  "/> },
  { name: "Po", icon: <img src = {pocon} className="h-12 w-20 object-contain" /> },
  { name: "Hadoop", icon: <img src={hadoopIcon}  className="h-10 w-20 object-contain" /> },
  { name: "Kafka", icon: <img src={kacon} className="h-12 w-12 object-contain" /> },
  { name: "Druid", icon: <img src={djcon} className="h-14 w-16 object-contain" /> },
  { name: "HDFS", icon: <img src={hfcon}  className="h-12 w-14 object-contain" /> },
  { name: "Spark", icon:   <img src={sparkIcon} className="h-11 w-10 object-contain  bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500  p-1 rounded-md"  /> },
  { name: "Python", icon: <img src = {angcon} className="h-12 w-18 object-contain" /> },
  // New technologies: Spring Boot and MongoDB
  { name: "Python", icon: <img src = {gcon} className="h-10 w-12s object-contain" /> },
  { name: "Python", icon: <img src = {apicon} className="h-12 w-16 object-contain" /> },
  { name: "Spring Boot", icon: <img src= {springIcon} className="h-10 w-16 object-contain" /> },
  { name: "MongoDB", icon: <img src={ mongoIcon} className="h-10 w-20 object-contain  " /> },
  { name: "sql", icon: <img src={ sqlIcon} className="h-10 w-10 object-contain  " /> },
  { name: "jwt", icon: <img src={ jwtcon} className="h-10 w-10 object-contain  " /> },
  { name: "f", icon: <img src={ fcon} className="h-10 w-13 object-contain  " /> },
  { name: "an", icon: <img src = {ancon} className="h-10 w-13 object-contain" /> },
];

const Experiences = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-9"
    >
      <h2 className="text-5xl font-extrabold text-gradient bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text  px-4 py-9">
        Experience</h2>
      <div className="grid grid-cols-6 gap-8 justify-items-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110 hover:bg-gray-800 hover:shadow-lg"
          >
            <div className="mb-4">{exp.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
