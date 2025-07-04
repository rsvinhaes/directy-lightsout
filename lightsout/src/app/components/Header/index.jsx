import Link from "next/link"
import Image from "next/image"

import logo from '../../../../public/logoclaro.png'
import { ModeToggle } from "../Ui/ModeToggle"

export function Header() {
  return (
    <header class="fixed top-0 right-0 left-0 z-10 w-full bg-[var(--background)]" >
      <div class="flex justify-between items-center px-4 rem">
          
          <div class="flex pl-16">
            <Image src={logo} alt="logo" className="w-32 h-16" />
          </div>
          
          <div class="w-1/2">
              <div class="flex justify-end items-center font-medium ">
                <div className="pl-8">
                  <Link href='#HOME' >
                    HOME
                  </Link>
                </div>
                <div className="pl-8">
                  <Link href='#DESTINO' >
                    PRINCIPAIS DESTINOS
                  </Link>
                </div>
                <div className="pl-8">
                  <Link href='#EVENTOS'>
                    CALENDÁRIO DE EVENTOS
                  </Link>
                </div>              
                <div className="pl-8">
                  <ModeToggle />
                </div>
              </div>
          </div>

      </div>
    </header>
  )
}