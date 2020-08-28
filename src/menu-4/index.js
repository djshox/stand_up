import React from 'react';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import TopPage from 'components/topPage'


function Menu4() {
    return (
        <div className="bg-light">
            <TopPage />
            <div className="mx-4" style={{ height: "calc(100vh - 70px) " }}>
                <table class="table table-bordered  mt-4 ">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center"> №</th>
                            <th scope="col" className="text-center">Buyruq nomi</th>
                            <th scope="col" className="text-center">Buyqur nomeri</th>
                            <th scope="col" className="text-center">Tasdiqlangan sana</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <Link to="/menu4/info1">Aholini ijtimoiy qo‘llab-quvvatlashga qaratilgan qo‘shimcha chora-tadbirlar to‘g‘risida
                                </Link>
                            </td>
                            <td>PQ-4815-son</td>
                            <td> 26.09.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td> <Link to="/menu4/info2">
                                Ўзбекистон Республикаси Вазирлар Маҳкамасининг
қарори</Link></td>
                            <td>№ 511</td>
                            <td>25.08.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td> <Link to="/info">
                                2020-2022 йилларда Қашқадарё вилоятининг Қарши туманини ижтимоий-иқтисодий ривожлантириш ва камбағалликни қисқартириш чора-тадбирлари тўғрисида
                                </Link>
                            </td>
                            <td>№ 519</td>
                            <td> 27.08.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td> <Link to="/info">
                                Sug‘urtalovchining, sug‘urta brokerining hamda ular alohida bo‘linmalarining rahbariga va bosh buxgalteriga qo‘yiladigan malaka talablari to‘g‘risidagi nizomga o‘zgartirishlar kiritish haqida
                                </Link>
                            </td>
                            <td>№ 2462-1</td>
                            <td>25.08.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td> <Link to="/info">
                                Қишлоқ хўжалиги экинларини оқилона жойлаштириш тартиби тўғрисидаги низомни тасдиқлаш ҳақида</Link>
                            </td>
                            <td>№ 505</td>
                            <td> 24.08.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td> <Link to="/info">
                                Андижон иқтисодиёт ва қурилиш институтини ташкил этиш тўғрисида
                                </Link>
                            </td>
                            <td>№ 516</td>
                            <td>26.08.2020</td>
                        </tr>

                        <tr>
                            <th scope="row">7</th>
                            <td>
                                <Link to="/info">Aholini ijtimoiy qo‘llab-quvvatlashga qaratilgan qo‘shimcha chora-tadbirlar to‘g‘risida
                                </Link>
                            </td>
                            <td>PQ-4815-son</td>
                            <td> 26.09.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td> <Link to="/info">
                                Andijon viloyatida axborot texnologiyalariga ixtisoslashgan texnologik parkni tashkil etish chora-tadbirlari to‘g‘risida </Link>
                            </td>
                            <td>№ 511</td>
                            <td>25.08.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td> <Link to="/info">
                                2020-2022 йилларда Қашқадарё вилоятининг Қарши туманини ижтимоий-иқтисодий ривожлантириш ва камбағалликни қисқартириш чора-тадбирлари тўғрисида
                                </Link>
                            </td>
                            <td>№ 519</td>
                            <td> 27.08.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td> <Link to="/info">
                                Sug‘urtalovchining, sug‘urta brokerining hamda ular alohida bo‘linmalarining rahbariga va bosh buxgalteriga qo‘yiladigan malaka talablari to‘g‘risidagi nizomga o‘zgartirishlar kiritish haqida
                                </Link>
                            </td>
                            <td>№ 2462-1</td>
                            <td>25.08.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                            <td> <Link to="/info">
                                Қишлоқ хўжалиги экинларини оқилона жойлаштириш тартиби тўғрисидаги низомни тасдиқлаш ҳақида</Link>
                            </td>
                            <td>№ 505</td>
                            <td> 24.08.2020</td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td> <Link to="/info">
                                Андижон иқтисодиёт ва қурилиш институтини ташкил этиш тўғрисида
                                </Link>
                            </td>
                            <td>№ 516</td>
                            <td>26.08.2020</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Menu4;