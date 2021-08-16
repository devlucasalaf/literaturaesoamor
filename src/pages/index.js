import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Literatura é só Amor!</title>              
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.box}>
              <img className={styles.logo} src='images/logotipo.png' alt='Logotipo'/>              
              <h3 className={styles.title}>Seja bem vind@!<br/> Ficamos felizes por você amar e querer compartilhar literatura assim como nós. ❤️</h3>
              <img className={styles.divisor} src='images/divisor.png' alt='Divisor'/>
              <h4 className={styles.apoio}>Temos produtos literários, <br/>todos pensados e produzidos com muito amor,<br/> buscando trazer uma experiência poética para você.</h4>              
              <div className={styles.produtosBoxWrapper}>
                <div className={styles.produtosBox}>
                    <p className={styles.produtosBoxText}>Canecas</p>
                    <img className={styles.produtosBoxImage} src='images/caneca.png' alt='Caneca'/>
                </div>
                <div className={styles.produtosBox}>
                    <p className={styles.produtosBoxText}>Camisas</p>
                    <img className={styles.produtosBoxImageCamisa} src='images/camisa.png' alt='Camisa'/>
                </div>
              </div>
              <a target='_blank' href='https://shopee.com.br/literaturaesoamor?categoryId=22133&itemId=9722689020' className={styles.compreAquiWrapper}>
                <span className={styles.compreAqui}> COMPRE AQUI</span>
                <div className={styles.btnBackground}/>
              </a>              

              <a target='_blank' href='https://www.instagram.com/literaturaesoamor/' className={styles.instaWrapper}>
                <span className={styles.sigaNos}>Siga-nos no Instagram</span> 
                <img className={styles.instagramLogo} src='images/instagram.png' alt='Instagram logotipo'/>
              </a>
          </div>
        </div>        
      </main>
    </div>
  )
}
