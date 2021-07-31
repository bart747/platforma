import styles from './footer.module.scss'

function Footer () {
  return (
   <footer className={ styles.footer }>
     <p>
       ©2016-2021 Bartosz Wieczorek.<br />
       Some rights reserved — <a
         href="https://creativecommons.org/licenses/by/4.0/">
       CC BY 4.0
       </a> — please attribute and link back.
     </p>
   </footer>
  )
}

export default Footer
