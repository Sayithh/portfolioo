'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const tools = [
  { name: 'MySQL/MariaDB', icon: '/assets/icons/mysql.svg' },
  { name: 'MongoDB', icon: '/assets/icons/mongodb.svg' },
  { name: 'Win\'Design', icon: '/assets/icons/windesign.svg' },
  { name: 'Linux Debian', icon: '/assets/icons/debian.svg' },
  { name: 'Docker', icon: '/assets/icons/docker.svg' },
  { name: 'Apache', icon: '/assets/icons/apache.svg' },
  { name: 'WSL2', icon: '/assets/icons/wsl.svg' },
  { name: 'Tailwind', icon: '/assets/icons/tailwind.svg' },
  { name: 'Bootstrap', icon: '/assets/icons/bootstrap.svg' },
  { name: 'WordPress', icon: '/assets/icons/wordpress.svg' },
  { name: 'Elementor PRO', icon: '/assets/icons/elementor.svg' },
  { name: 'VueJS', icon: '/assets/icons/vue.svg' },
  { name: 'HTMX', icon: '/assets/icons/htmx.svg' },
  { name: 'Visual Studio', icon: '/assets/icons/visualstudio.svg' },
  { name: 'Trello', icon: '/assets/icons/trello.svg' },
  { name: 'GitLab', icon: '/assets/icons/gitlab.svg' },
  { name: 'GitHub', icon: '/assets/icons/github.svg' },
];

export default function ToolsSlider() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-8 text-center">Logiciels et Outils</h3>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="tools-slider"
        >
          {tools.map((tool) => (
            <SwiperSlide key={tool.name}>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="relative w-12 h-12 mb-3">
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-center">{tool.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 