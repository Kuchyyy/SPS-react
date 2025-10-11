import CardNav from './ui/CardNav'

const Navbar = () => {
  const items = [
    {
      label: "Oferta",
      bgColor: "#00629C",   // jasny błękit
      textColor: "#fff",
      links: [
      ]
    },
    {
      label: "Realizacje",
      bgColor: "#00629C",   // jasny błękit
      textColor: "#fff",
      links: [
      ]
    },
    {
      label: "Kontakt",
      bgColor: "#00629C",   // jasny błękit
      textColor: "#fff",
      links: [
        { label: "Telefon", href: "tel:+48 666 011 919", ariaLabel: "Kontakt Formularz" },
        { label: "Email", href: "mailto:kontakt@firma.com", ariaLabel: "Kontakt Email" },
        { label: "Linkedin", href:"https://www.linkedin.com/company/sps-elektro-sp-z-o-o/?originalSubdomain=pl", ariaLabel: "LinkedIn" }
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
