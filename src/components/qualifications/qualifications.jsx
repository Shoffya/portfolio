import { GiSkills } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./qualifications.css";

import { Pagination } from "swiper";

import React from 'react'
import Tilt from 'react-vanilla-tilt'

export default function App() {
    return (
        <>
            <div className="myQualification">
                <span className="quali-text">My Qualifications</span>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Tilt>
                        <div class="card">
                            <div class="content">
                                <h2>01</h2>
                                <h3>Card Um</h3>
                                <p>Sou o card 1 que esta sendo usado para teste. Se tudo der certo,
                                    quando esse botão abaixo for clicado aparecerá um modar e assim,
                                    serei usado em novos projetos futuros!</p>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#card1">Mais Informações</a>
                            </div>
                        </div>
                    </Tilt>
                </SwiperSlide>

                <SwiperSlide>
                    <h2>Academic<br />Formation</h2>
                    <div className="content academic_formation"></div>
                    <li className='Institution'>Universidade Nove de Julho</li>
                    <li className='course_name'>Computer Science</li>
                    <li className='duration'><br />
                        <span>Started:</span> 02/02/2015<br />
                        <span>Finished:</span> 01/08 - Incomplete</li>
                </SwiperSlide>
            </Swiper>
            <script src="vanilla-tilt.js"></script>
            <script src="vanillaTilt.js"></script>
        </>
    );
}