import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import './quizmain.css';
import firebaseConfig from "../config";
import nineq from "./componentquiz/nineq";

const Quiz =()=>{
    return(
        <div>
            <div className="header">
                <div className="header-container">
                    <div className="header-con">
                        <div className="logo-container">
                            <a href="#"><Link to="/">Lets We Help</Link></a>
                        </div>
                        <ul className="menu">
                            <li className="menu-link">
                                <a href="#"><Link to="/">HOME</Link></a>
                            </li>
                            <li className="menu-link">
                                <a href="#"><Link to="/quiz">QUIZ</Link></a>
                            </li>
                            <li className="menu-link">
                                <butt><Link to="/login">LOGIN</Link></butt>
                            </li>
                            <li className="menu-link">
                                <Link to="/signup">SIGNUP</Link>
                            </li>
                            <li className="menu-link">
                                <button onClick={()=>firebaseConfig.auth().signOut()}>SignOut</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="banner-bg">
                <div className="banner-container">
                    <div className="banner-con">
                        <div className="banner-text">
                            <h1>คำแนะนำสำหรับการทำแบบทดสอบ</h1>
                            <p>
                               การทำแบบทดสอบนี้จะมีแบบทดสอบโดยจะแบ่งการทดสอบอยู่ 2 แบบ 
                            </p>
                            <a href="nineq" className="banner-btn">
                                การประเมินสภาพจิตด้วย 9Q
                            </a>
                            <a href="eight" className="banner-btn">
                                การประเมินสภาพจิตด้วย 8Q
                            </a>
                            <p>
                                ก่อนที่จะเริ่มทำแบบทดสอบ เราจะอธิบายเกณฑ์การให้คะแนนดังด้านล้างเลย
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="content-container">
                
            <section className="content-con">
            <div className="content-l">
                    <img src="https://images.unsplash.com/photo-1634938971687-1082b4cb018c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div>
                <div className="content-r">
                    <h2>การประเมินสภาพจิตด้วย 9Q คืออะไร? </h2>
                    <h3>การประเมินสภาพจิตด้วย 9Q คือแบบประเมินสภาพจิตเพื่อวัดระดับความรุนแรงของโรคซึ้มเศร้า</h3>
                    <h4>โดยจะแบ่งระดับจากคะแนนที่ได้ทั้งหมด 4 ช่วงดังนี้</h4>
                    <p>
                        <b>• ระดับคะแนนต่ำกว่า 7 คะแนน</b> : ไม่มีอาการของโรคซึมเศร้าหรือมีอาการของโรคซึมเศร้าระดับน้อยมาก 
                    </p>
                    <p>
                        <b>• ระดับคะแนนอยู่ระหว่าง 7 ถึง 12 คะแนน</b> : มีอาการของโรคซึมเศร้า ระดับน้อย
                    </p>
                    <p> 
                        <b>• ระดับคะแนนอยู่ระหว่าง 13 ถึง 18 คะแนน</b> : มีอาการของโรคซึมเศร้า ระดับปานกลาง
                    </p>
                    <p>
                        <b>• ระดับคะแนนเท่ากับหรือมากกว่า 19 คะแนน</b> : มีอาการของโรคซึมเศร้า ระดับรุนแรง
                    </p>
                    <h3>คำแนะนำหลังจากทำแบบทดสอบ</h3>
                    <p>
                        • หากอยู่ในระดับ "ไม่มีอาการของโรคซึมเศร้าหรือมีอาการของโรคซึมเศร้าระดับน้อยมาก" ท่านควรที่จะพักผ่อนและหากิจกรรมที่ทำให้สบายใจ
                    </p>
                    <p>
                        • หากอยู่ในระดับ "มีอาการของโรคซึมเศร้า ระดับน้อย" ท่านควรไปพบแพทย์ เพื่อทำการปรึกษาและรักษาอาการโรคซึมเศร้าเบื้องต้น
                    </p>
                    <p>
                        • หากอยู่ในระดับ "มีอาการของโรคซึมเศร้า ระดับปานกลาง" ท่านควรไปพบแพทย์ เพื่อทำการปรึกษาและรักษาอาการโรคซึมเศร้าอย่างจริงจัง
                    </p>
                    <p>
                        • หากอยู่ในระดับ "มีอาการของโรคซึมเศร้า ระดับรุนแรง" ท่านควรไปพบแพทย์ เพื่อทำการปรึกษาและรักษาอาการโรคซึมเศร้าโดยด่วน และควรมีญาติหรือคนรู้จักอยู่ด้วยตลอดเวลา
                    </p>
                </div>
            </section>    
            <section className="content-con">
                <div className="content-r"> 
                <h2>การประเมินสภาพจิตด้วย 8Q คืออะไร? </h2>
                    <h3>การประเมินสภาพจิตด้วย 8Q คือแบบประเมินแนวโน้มที่อาจเกิดการฆ่าตัวตาย</h3>
                    <h4>โดยจะแบ่งระดับจากคะแนนที่ได้ทั้งหมด 3 ช่วงดังนี้</h4>
                    <p>
                        <b>• ระดับคะแนนต่ำกว่าหรือเท่ากับ 8 คะแนน</b> : มีแนวโน้มที่จะฆ่าตัวตายอยู่ในระดับต่ำ
                    </p>
                    <p>
                        <b>• ระดับคะแนนอยู่ระหว่าง 9 ถึง 16 คะแนน</b> : มีแนวโน้มที่จะฆ่าตัวตายอยู่ในระดับปานกลาง
                    </p>
                    <p>
                        <b>• ระดับคะแนนเท่ากับหรือมากกว่า 17 คะแนน</b> : มีแนวโน้มที่จะฆ่าตัวตายอยู่ในระดับสูง
                    </p>
                    <h3>คำแนะนำหลังจากทำแบบทดสอบ</h3>
                    <p>
                        หากอยู่ในระดับ "มีแนวโน้มที่จะฆ่าตัวตายอยู่ในระดับต่ำ" ควรปรึกษากับผู้ทำงานด้านสุขภาพจิตเพื่อประเมินเหตุผลและทำการเยี่ยวยาวจิตใจ
                    </p>
                    <p>
                        หากอยู่ในระดับ "มีแนวโน้มที่จะฆ่าตัวตายอยู่ในระดับปานกลาง" ควรให้ญาติอยู่ดูแลอย่างใกล้ชิด และให้ทำการประเมินโรคจิตเวช กับทางโรงพยาบาล
                    </p>
                    <p>
                        หากอยู่ในระดับ "มีแนวโน้มที่จะฆ่าตัวตายอยู่ในระดับสูง" ควรรักษาในโรงพยาบาลและเผ้าระวังอย่างใกล้ชิด เพื่อทำการรักษาหากเป็นโรคโรคซึมเศร้า
                    </p>
                    </div>
                    <div className="content-l">
                    <img src="https://images.unsplash.com/photo-1634850181723-c87027cb8be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div>
            </section> 
            
            </div>

            
            <div className="banner-bg2">
                <div className="banner-container">
                    <div className="banner-con">
                        <div className="banner-text">
                            <h1>อ่านข้อมูลและคำแนะนำแล้วใช้มั้ย</h1>
                            <p>
                            มาเริ่มทำแบบทดสอบ เพื่อที่เราจะได้ช่วยเหลือคุณกันเถอะ 
                            </p>
                            <a href="nineq" className="banner-btn">
                                การประเมินสภาพจิตด้วย 9Q
                            </a>
                            <a href="eight" className="banner-btn">
                                การประเมินสภาพจิตด้วย 8Q
                            </a>
                        
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <p>จัดทำเมื่อ 2021. เพื่อการทำโปรเจคมหาวิทยาลัย</p>
            </div>

            
        </div>
    )

    
}
export default Quiz;