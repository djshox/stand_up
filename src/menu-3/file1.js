import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function File2() {
  const h = useHistory();

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => h.push("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => h.push("/menu3")}>Back</Breadcrumb.Item>
        <Breadcrumb.Item active>&nbsp;&nbsp;</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Характеристики iPhone 11 </h2>
      <img className="equipment2__img" src="/iPhone11.png" alt="" />
      <div className="equipment2__text mt-3 mb-10">
        <ul>
          <li>
            SoC Apple A13 Bionic (6 ядер: 2 высокопроизводительных + 4
            энергоэффективных) + система Neural Engine третьего поколения
          </li>
          <li>
            Сопроцессор движения Apple M13, включающий барометр, акселерометр,
            гироскоп и компас
          </li>
          <li>
            Сенсорный дисплей 6,1″, IPS, 1792×828, 326 ppi, емкостной,
            мультитач, с функцией обратной связи Taptic Engine
          </li>
          <li>RAM 3,75 ГБ</li>
          <li>Флэш-память 64/128/256 ГБ</li>
          <li>Поддержка карт памяти отсутствует</li>
          <li>
            Сотовая связь: UMTS/HSPA/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900,
            2100 МГц); GSM/EDGE (850, 900, 1800, 1900 МГц), LTE Bands 1, 2, 3,
            4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 38, 39,
            40, 41, поддержка Gigabit LTE
          </li>
          <li>Wi-Fi 802.11b/g/n/ac/ac (2,4 и 5 ГГц; поддержка MIMO)</li>
          <li>Bluetooth 5.0, A2DP, LE</li>
          <li>NFC (только для Apple Pay)</li>
          <li>GPS c A-GPS, Глонасс, Galileo и QZSS</li>
          <li>Универсальный разъем Lightning</li>
          <li>
            Камеры: фронтальная (12 Мп, видео 4К 30 к/с, 720р 240 к/с) и тыльная
            с двумя объективами (широкоугольный и сверхширокоугольный; оба — 12
            Мп, съемка видео 4К 60 к/с)
          </li>
          <li>Распознавание лица с помощью камеры TrueDepth</li>
          <li>Литий-полимерный аккумулятор 3110 мА·ч, несъемный</li>
          <li>Поддержка беспроводной зарядки стандарта Qi</li>
          <li>Габариты 151×76×8,3 мм</li>
          <li>Масса 194 г</li>
          <li>Защита IP68</li>
          <li>Операционная система iOS 13</li>
        </ul>
      </div>
    </>
  );
}
