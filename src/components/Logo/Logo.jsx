// import useState from 'react';
import './Logo.css';
import logoImg from "../../assets/img/logo-img.png"

export default function Logo() {
  return (
    <figure className="Header-logo Logo">
          <img className="Logo-img" src={logoImg} alt="Logo" />
          <figcaption className="Logo-caption"><strong>On the go</strong> Note everything</figcaption>
    </figure>
  );
}