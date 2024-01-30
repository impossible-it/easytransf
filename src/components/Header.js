// src/components/Header.js
import React from 'react';
import './style_header.css'

const Header = () => {
  return (
    <div className="header">
      
      <div className="header__left">
          <img className="logo" src="https://static.vecteezy.com/system/resources/previews/020/329/376/non_2x/cat-head-kitten-symbol-gaming-cat-logo-elegant-element-for-brand-abstract-icon-symbols-vector.jpg"/>
          <h2>KOT Payment Service</h2>
      </div>

      
      <div className="header__center">
          <ul className='header__lists'>
            <li><a href='/'>Главная</a></li>
            <li><a href='#'>Сервис</a></li>
           
            <li><a href='#'>Информация</a></li>
            <div className='header__centerMenu'>
              <button className="arrow">Проекты</button>
             <div className='dropDown__header'>
              <a href="#">Сбербанк</a>
              <a href="#">Тинькофф</a>
              <a href="#">Газпром</a>

              </div>
            </div>
          </ul>
      </div>
      <div className="header__right">
        
      </div>
    </div>
    
  );
};

export default Header;
