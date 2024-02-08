
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/Home.tsx';
import EndlPage from './components/End';
import Form from './components/Form.tsx'
import Order from './components/Order.tsx'
import Status from './components/Status.tsx'




localStorage.setItem('remainingTime', "12");           // Обнуляем таймер в Ордере 


const App = () => {
  return (
    <Router>
      <Header /> 
      {/* Выбор проекта */}
      <Routes>
        <Route path="/" element= {<HomePage data_first='Сбербанк Инвестиции' 
      data_second='Тинькофф Инвестиции'
      data_third = 'Газпром Инвестиции'
      data_fourth =  'Binance Инвестиции'
      photo_first = 'https://habrastorage.org/getpro/moikrug/uploads/company/100/006/341/2/logo/big_32156f1572916e1f7fb432e67e1defc2.png'
      photo_second =  'https://www.gateline.net/wp-content/uploads/%D0%9B%D0%BE%D0%B3%D0%BE-%D0%A2%D0%B8%D0%BD%D1%8C%D0%BA%D0%BE%D1%84%D1%84_2.png'
      photo_third =  'https://vectorseek.com/wp-content/uploads/2023/09/Gazprom-Icon-Logo-Vector.svg-.png' 
      link={true}
      photo_fourth = 'https://vsyapravda.net/storage/app/resources/resize/190_0_0_0_crop/img_39ffac94e53888550274aa2d7da9a0e1.png' 
      text_start='Выберите проект' 

      />}  />
      </Routes>
      
      
      {/* Проекты-форма */}
      <Routes>
        <Route path="/payment-sberbank" element= {<Form data='Сбербанк' photo='https://habrastorage.org/getpro/moikrug/uploads/company/100/006/341/2/logo/big_32156f1572916e1f7fb432e67e1defc2.png' background='background-color: grey;'/>}/>
      </Routes>
      <Routes>
        <Route path="/payment-tinkoff" element= {<Form data='Тинькофф' photo='https://www.gateline.net/wp-content/uploads/%D0%9B%D0%BE%D0%B3%D0%BE-%D0%A2%D0%B8%D0%BD%D1%8C%D0%BA%D0%BE%D1%84%D1%84_2.png' background='background-color: red;'/>}/>
      </Routes>
      <Routes>
        <Route path='/payment-gazprom' element= {<Form 
        data='Газпром' 
        photo='https://vectorseek.com/wp-content/uploads/2023/09/Gazprom-Icon-Logo-Vector.svg-.png' 
        background='background-color: blue;'/>}/>
      </Routes>
      <Routes>
        <Route path='/payment-flk' element= {<Form 
        data='FLK PRO' 
        photo='https://vsyapravda.net/storage/app/resources/resize/190_0_0_0_crop/img_39ffac94e53888550274aa2d7da9a0e1.png' 
        background='background-color: white;'/>}/>
      </Routes>
      

      {/* Выбор банков */}
      <Routes>
        <Route path='/payment/bank' element={<HomePage data_first='Cбербанк'
      data_second='Тинькофф'
      data_third = 'Райффайзен'
      data_fourth =  'Другой банк'
      photo_first = 'https://habrastorage.org/getpro/moikrug/uploads/company/100/006/341/2/logo/big_32156f1572916e1f7fb432e67e1defc2.png'
      photo_second =  'https://www.gateline.net/wp-content/uploads/%D0%9B%D0%BE%D0%B3%D0%BE-%D0%A2%D0%B8%D0%BD%D1%8C%D0%BA%D0%BE%D1%84%D1%84_2.png'
      link={false}
      text_style= {{fontWeight:'bold', fontFamily:  'Open Sans', fontSize: '24px',}}
      photo_third =  'https://habrastorage.org/getpro/moikrug/uploads/company/795/606/461/logo/big_d23a4d30d9fe49e79ebb105c36334f5a.jpg' 
      photo_fourth = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/CBRF.png/800px-CBRF.png'
      text_start='Выберите банк для оплаты' 
      />}/>
      </Routes>
      

      {/* Окно заявки */}
      <Routes>
        <Route path='payment/bank/order' element={<Order
        client_number={284278}/>}/>
      </Routes>


      {/* Статус заявки */}
      <Routes>
        <Route path='payment/bank/order-status' element={<Status
      order= '60895'
      order_info= 'Ожидайте подтверждения это занимает порядка 5-10 минут.'
      order_status= 'Заявка обрабатывается'
      confirm_circle= 'confirm-logo-wait'
      confirm_mark= 'confirm-logo-mark-wait'
      confirm_clock= {false}/> } />
      </Routes>


      <Routes>
          <Route path='payment/bank/order-status-confirmed' element={<Status
      order= '60895'
      order_info= 'Проверьте зачисление средств на ваш счёт'
      order_status= 'Оплата успешна'
      confirm_circle= 'confirm-logo-green'
      confirm_mark= 'confirm-logo-mark-green'
      confirm_clock={true}/>}/>
      </Routes>    
      

      <Routes>
        <Route path='payment/bank/order-status-failed' element={<Status
      order= '60895'
      order_info= 'Обратитесь в поддержку или повторите попытку позже.'
      order_status= 'Оплата не прошла'
      confirm_circle= 'confirm-logo-red'
      confirm_mark= 'confirm-logo-mark-red'
      confirm_clock={true}/>}/>
      </Routes>
      
      
      <EndlPage /> 
      
      
    </Router>
    
    
  );
};

export default App;