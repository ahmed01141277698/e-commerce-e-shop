import { FaAmbulance, FaMoneyBill } from "react-icons/fa";
import { MdDiscount, MdSecurity, MdSupportAgent } from "react-icons/md";
import "../components/Infosection.css";
const InfoSection = () => {
  const infosection = [
    {
      icon: <FaAmbulance />,
      title: " Free Shipping",
      description: "Free shipping on all US order or order above $200",
    },
    {
      icon: <MdSupportAgent />,
      title: "Support 24/7",
      description: "Contact us 24 hours live support, 7 days in a week",
    },
    {
      icon: <FaMoneyBill />,
      title: "100% Money Back",
      description: "Simply return it within 30 days for an exchange",
    },
    {
      icon: <MdSecurity />,
      title: "Payment Secure",
      description: "Contact us 24 hours live support, 7 days in a week",
    },
    {
      icon: <MdDiscount />,
      title: "Discount",
      description: "Contact us 24 hours live support, 7 days in a week",
    },
  ];
  return (
    <div className="info-section">
      {infosection.map((info, index) => (
        <div className="info-item" key={index}>
          <i className="icon-info">{info.icon}</i>
          <h1 className="title-h1">{info.title}</h1>
          <p className="paragraph-p">{info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
