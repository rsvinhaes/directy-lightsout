'use client'

import { Header } from "../app/components/header"
import Image from "next/image"
import Link from "next/link"
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import { Virtual, Navigation, Pagination, EffectFade } from 'swiper/modules'
import { register } from 'swiper/element/bundle'

register()

import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import slide1 from "../../public/catedralvitorianoite.png"
import slide2 from "../../public/conventodapenhanoite.png"
import slide3 from "../../public/pedraazul.png"
import slide4 from "../../public/pontedapassagemnoite.png"
import slide5 from "../../public/terceirapontedia.png"
import slide6 from "../../public/terceirapontenoite.png"
import praia from "../../public/praiaguarapari.png"
import agro from "../../public/fotoagroturismo.png"
import eco from "../../public/fotoecoturismo.png"

export default function Home() {

  const data = [
    { id: '1', image: slide1  },
    { id: '2', image: slide2  },
    { id: '3', image: slide3  },
    { id: '4', image: slide4  },
    { id: '5', image: slide5  },
    { id: '6', image: slide6  }
  ]

  return (
    <div class="w-full h-full">
      <div class=" h-16" >
        <Header />
      </div>
      
      <div class="flex h-[calc(100vh-4rem)] mb-32" >
        <Swiper  
          modules={[Virtual, Pagination, Navigation, EffectFade]}
          spaceBetween={50} loop={true} autoplay={{
          delay: 5000,
          disableOnInteraction: false,}}
          pagination={{clickable: true, }}
          navigation={true} 
          slidesPerView={1}
          virtual={true}
          effect={'fade'}
        >
       
             {data.map((slideContent, index) => (
             <SwiperSlide key={slideContent} virtualIndex={index}>
                <Image class="w-full h-full" src={slideContent.image} alt="slider" />
             </SwiperSlide>
             ))}
        </Swiper>
      </div>

      <div id="DESTINO" class="text-center border-b-1 border-b-black pt-16 mx-16" >
        <h1>PRINCIPAIS DESTINOS</h1>
      </div>
           
      <section class="w-screen flex justify-evenly py-16 px-4" >        
          <div class="w-98 flex flex-col bg-[#FAFAFA] p-4 rounded-lg border-[#171717] " >
            
            <div>
              <div class="text-center p-4" >
                <h3 class="pt-4">PRAIAS</h3>
              </div>
              <div>
                <Image src={praia} class="w-full block" alt="foto praia" />
              </div>
            </div>
            
            <div>
              <div>
                <p class="pt-4 indent-8" >
                  O Espírito Santo possui múltiplas riquezas naturais de norte a sul de seu território. As opções variam de mar à montanha, das águas turvas dos manguezais às águas cristalinas das lagoas, de serras antigas cobertas por matas inexploradas a pontões rochosos, entre outros vários chamarizes que, em cada região do Estado, possuem características paisagísticas singulares que dão ao turista vastas possibilidades de apreciar e interagir com a natureza.
                </p>
              </div>
              <div>
                <h3 class="pt-4" >
                  Muitas opções: escolha a sua
                </h3>
              </div>
              <div>
                <p class="pt-4 indent-8" >
                  Com cerca de 410 quilômetros de extensão, o litoral do Espírito Santo tem os mais diversos tipos de praia, com dunas, desertas, semidesertas, com enseadas, com águas mornas e cristalinas e também com areia monazítica, muito utilizada para o uso medicinal.
                </p>
              </div>
              <div>
                <p class="pt-4 indent-8" >
                A região metropolitana abriga praias como Guarapari, Curva da Jurema, Camburi, da Costa, Itapoã, Coqueiral de Itaparica, Jacaraípe e Manguinhos. Já a capital do Espírito Santo, Vitória, possui 105 quilômetros de praias.
                </p>
              </div>
            </div>
          </div>

          <div class="w-98 flex flex-col bg-[#FAFAFA] p-4 rounded-lg border-[#171717] " >
            
            <div>
              <div class="text-center p-4" >
                <h3 class="pt-4" >ECOTURISMO</h3>
              </div>
              <div>
                <Image src={eco} class="w-full block" alt="foto eco" />
              </div>
            </div>
            
            <div>
              <div>
                <p class="pt-4 indent-8" >
                  O Espírito Santo possui múltiplas riquezas naturais de norte a sul de seu território. As opções variam de mar à montanha, das águas turvas dos manguezais às cristalinas das lagoas, de serras antigas cobertas por matas inexploradas a pontões rochosos, entre outros vários chamarizes que, em cada região do Estado, possuem características paisagísticas singulares que dão ao turista vastas possibilidades de apreciar a natureza.
                  No Sul do Estado, encontramos um dos grandes patrimônios naturais do Brasil: o Parque Nacional do Caparaó, que abriga o Pico da Bandeira, terceiro mais alto do país, com 2.890 metros de altitude.
                </p>
              </div>
              <div>
                <h3 class="pt-4">
                  Saíra Apunhalada
                </h3>
              </div>
              <div>
                <p class="pt-4 indent-8" >
                  Na região das montanhas capixabas está localizado o Parque Estadual de Pedra Azul, em Domingos Martins, passeio obrigatório para quem curte uma boa caminhada ecológica, contemplando a beleza do local, que ainda pode ser apreciada através da cavalgada até suas piscinas naturais.
                 </p>
              </div>
              <div>
                <p class="pt-4 indent-8" >
                  Também na região, no entorno da cidade de Vargem Alta, uma ave que se acreditava estar extinta foi encontrada. A Saíra Apunhalada tem pouco mais de dez centímetros, porém uma enorme importância para a preservação da mata da região, sendo uma das atrações de turistas praticantes de observação de aves.
                </p>
              </div>
            </div>
          </div>

        <div class="w-98 flex flex-col bg-[#FAFAFA] p-4 rounded-lg border-[#171717]" >
             
             <div>
              <div class="text-center p-4" >
                <h3 class="pt-4" >AGROTURISMO</h3>
              </div>
              <div>
                <Image src={agro} class="w-full block" alt="foto agro" />
              </div>
            </div>
             
            <div>
              <div>
                <p class="pt-4 indent-8" >
                  A Região das Montanhas Capixabas é referência nacional no desenvolvimento do agroturismo, destacando-se o município de Venda Nova do Imigrante, premiado pelo Ministério do Turismo devido seu pioneirismo no setor, em 2006, quando recebeu o título de Capital Nacional do Agroturismo.
                </p>
              </div>
              <div>
                <h3  class="pt-4" >
                  Turismo de Experiência
                </h3>
              </div>
              <div>
                <p class="pt-4 indent-8" >
                  Na região das montanhas capixabas está localizado o Parque Estadual de Pedra Azul, em Domingos Martins, passeio obrigatório para quem curte uma boa caminhada ecológica, contemplando a beleza do local, que ainda pode ser apreciada através da cavalgada até suas piscinas naturais.
                 </p>
              </div>
              <div>
                <p class="pt-4 indent-8" >
                  Também na região, no entorno da cidade de Vargem Alta, uma ave que se acreditava estar extinta foi encontrada. A Saíra Apunhalada tem pouco mais de dez centímetros, porém uma enorme importância para a preservação da mata da região, sendo uma das atrações de turistas praticantes de observação de aves.
                </p>
              </div>
            </div>
        </div>     
      </section>

      <div class="text-center border-b-1 border-b-black pt-16 mx-16" >
        <h1 id="EVENTOS" >CALENDÁRIO DE EVENTOS</h1>
      </div>

      <section class="flex justify-center py-4" >
        <div class="flex flex-col text-center w-225 p-4 rounded-lg border-[#171717] " >
          
            <div>Festa da Penha, em Vila Velha, sempre na segunda-feira após a Páscoa</div>
            <div>Festival de Jazz & Bossa de Santa Teresa, no final de maio ou começo de junho</div>
            <div>Os Passos de Anchieta, caminhada entre Vitória e a cidade de Anchieta, geralmente no feriado de Corpus Christi</div>
            <div>Festa da Polenta, em Venda Nova do Imigrante, que ocorre em dois finais de semana de outubro</div>
            <div>Festival de Forró de Itaúnas, em Conceição da Barra, que ocorre em dois finais de semana de julho</div>
            <div>Festival de Inverno de Música Erudita e Popular de Domingos Martins, que ocorre em dois finais de semana de julho</div>
            <div>Carnaval de Vitória, com desfile das escolas de Samba do Espírito Santo, sempre uma semana antes do Carnaval oficial</div>
            <div>Festival de Inverno de Sanfona e Viola de São Pedro do Itabapoana, em Mimoso do Sul, que ocorre em dois finais de semana de julho</div>
            <div>Festa de Corpus Christi de Castelo</div>
            <div>Festivais Gastronômicos de Santa Teresa, Manguinhos e Guriri, em datas diversas</div>
            <div>Festa do Imigrante Italiano de Santa Teresa, que ocorre em dois finais de semana de junho</div>
            <div>Encontro Nacional de Folia de Reis, em Muqui, em agosto ou setembro</div>
         
        </div>
      </section>

      

      
    </div>
  );
}
