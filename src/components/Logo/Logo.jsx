// import useState from 'react';
import "./Logo.css";
import logoImg from "../../assets/img/logo-img.png";

export default function Logo() {
  return (
    <figure className="Header-logo Logo">
      <img
        onClick={() => localStorage.clear()}
        className="Logo-img"
        src={logoImg}
        alt="Logo"
        title="Click pour réinitaliser le local storage"
      />
      <figcaption className="Logo-caption">
        <strong>On the go</strong> Note everything
      </figcaption>
    </figure>
  );
}
