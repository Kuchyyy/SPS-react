import CardNav from './ui/CardNav'

const Navbar = () => {
  const items = [
    {
      label: "Oferta",
      bgColor: "#00629C",   // jasny błękit
      textColor: "#fff",
      links: [
        { label: "Zapytaj o oferte", href: "/oferta/strony-www", ariaLabel: "Oferta Strony WWW" },
      ]
    },
    {
      label: "Realizacje",
      bgColor: "#00629C",   // jasny błękit
      textColor: "#fff",
      links: [
        { label: "Portfolio", href: "/realizacje/portfolio", ariaLabel: "Realizacje Portfolio" },
      ]
    },
    {
      label: "Kontakt",
      bgColor: "#00629C",   // jasny błękit
      textColor: "#fff",
      links: [
        { label: "Telefon", href: "/kontakt/formularz", ariaLabel: "Kontakt Formularz" },
        { label: "Email", href: "mailto:kontakt@firma.com", ariaLabel: "Kontakt Email" },
        { label: "Linkedin", href: "tel:+48123456789", ariaLabel: "Kontakt Telefon" }
      ]
    }
  ];

  
  return (
    <div
    className='fixed flex justify-center items-center w-full z-50 '>

      <CardNav
        logo="/photos/logosps.png"
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#00629C"       
        buttonBgColor="#00629C"   
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </div>
  );
}

export default Navbar
