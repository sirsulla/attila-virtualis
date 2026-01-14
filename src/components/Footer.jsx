import './Footer.css';
import Logo from './MNMKK_MNM_horizontalis-04.png'

export default function Footer() {
  return (
    <footer className="footerBase">
      <div className="contributorsBoxParent">

        <div className="contributorsBox">
          <p id="contributorsText">Közreműködők</p>
          <p id="contributorsNames">
                Projektvezető: Varga Benedek
                <br/>
                <span class = 'contributorsNamesLastRow'>
                Kurátorok: Marczel Krisztina, Serfőző Szabolcs, Szenthe Gergő, Sóti Lajos, Szerdahelyi Orsolya
                </span>
                <br/>
                Projektmenedzser: Novák Orsolya
                <br/>
                 Grafikai arculat: Balás Benedek
                <br/>
                <span class = 'contributorsNamesLastRow'>
                 Virtuális kiállítás: Ábel Adrienne, dr. Ballók Zsuzsa, Derzsy Dorottya, Horváth Dániel, Kinde Anna, Kovács Rita, Krekk Zsanett, Rozbroy Viktor, Vidovenyecz Erika
                 </span>
            </p>
            </div>
            
            <div class = 'imageBox'>
                <img src={Logo} class='logo' alt="logo" /> 
            </div>

        </div>

   </footer>

    )

}