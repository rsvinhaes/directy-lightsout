import Link from "next/link"
import styles from "./header.module.css"
import Image from "next/image"

import logo from '../../../../public/logoclaro.png'
import { ModeToggle } from "../Ui/ModeToggle"

export function Header() {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.container}>
          <div className={styles.containerImage}>
            <Image src={logo} alt="logo" width={192} height={64} />
          </div>
          
          <nav className={styles.containerNav}>
              <ul className={styles.containerUl}>
                <li className={styles.containerLi}>
                  <Link href='#HOME' >
                    HOME
                  </Link>
                </li>
                <li className={styles.containerLi}>
                  <Link href='#DESTINO' >
                    PRINCIPAIS DESTINOS
                  </Link>
                </li>
                <li className={styles.containerLi}>
                  <Link href='#EVENTOS'>
                    CALENDÁRIO DE EVENTOS
                  </Link>
                </li>
              </ul>
          </nav>

          <div>
            <ModeToggle />
          </div>

      </div>
    </header>
  )
}