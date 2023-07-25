import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Doctors from '../components/doctors';
import docAli from '../assets/ed/IMG_1286.jpg';
import docAbr from '../assets/ed/IMG_1294.jpg';
import docHab from '../assets/ed/IMG_1297.jpg';
import docZer from '../assets/ed/IMG_1301.jpg';
import docMah from '../assets/ed/IMG_1303.jpg';
import docHas from '../assets/ed/IMG_1310.jpg';
import docAbd from '../assets/ed/IMG_1258.jpg';
import docYar from '../assets/ed/IMG_1254.jpg';
function Portfolio()
{
    useEffect(() =>
    {
        document.title = 'PORTFOLIO';
    });
    return (
        <>
            <Header />
            <section className="portfolio">
                <div className="container-sm">
                    <h3 className="py-3 ward-title">Medical Ward</h3>
                    <div className="row docs-container py-2 align-items-center justify-content-evenly mx-auto gap-3 text-center">
                        <Doctors
                            doc_name="Dr. Ali Nour Adam"
                            title="MD, MPH, MTM, INTERNIST"
                            desc="Dr Ali Nour is a well-respected medical doctor, public health expert, and internist, currently serving as a faculty member at Jigjiga University's Shekh Hassen Yabare Comprehensive Specialized Hospital in Ethiopia. Dr. Adam holds a Master's in Public Health (MPH) and a Master's in Tropical Medicine (MTM) in addition to his medical degree. He has spent much of his career working in underserved areas and has a particular interest in infectious diseases and tropical medicine. Dr. Adam is also a dedicated teacher and mentor, committed to educating the next generation of medical professionals. He has published research on a range of health topics and is a sought-after speaker at conferences and seminars. Dr. Ali Nour Adam's passion for improving health outcomes and providing quality medical care has made him a valued member of the healthcare community in Ethiopia and beyond."
                            img={docAli}
                            email='aliadam@jjushycsh.com'
                        />
                        <Doctors
                            doc_name="Dr. Abraham Agidu"
                            title="Medical Doctor, Internist"
                            desc="is a highly skilled medical doctor and internist currently serving at the Shekh Hassen Yabare Comprehensive Specialized Hospital in Jigjiga University, Ethiopia. He received his medical degree from a leading medical school and has many years of experience in the field of internal medicine. Dr. Agidu is known for his compassionate approach to patient care, providing comprehensive evaluations and personalized treatment plans for each of his patients. He has a particular interest in the management of chronic diseases such as diabetes, hypertension, and heart disease. In addition to his clinical work, Dr. Agidu is also involved in teaching and training medical students and residents. He is committed to advancing medical education and research in his field and has published several papers on various topics related to internal medicine. Dr. Abraham Agidu's expertise, dedication, and patient-centered approach have earned him a well-deserved reputation as a trusted and respected physician in his community."
                            img={docAbr}
                            email='Abrahamagidu@jjushycsh.com'
                        />
                        <Doctors
                            doc_name="Dr. Habtamu Amtachew"
                            title="MD, Internist, Nephrologist"
                            desc="is a distinguished medical doctor, internist, and nephrologist currently serving as a faculty member at Jigjiga University's Shekh Hassen Yabare Comprehensive Specialized Hospital in Ethiopia. He received his medical degree from a prestigious institution and completed specialized training in internal medicine and nephrology. Dr. Amtacew has a keen interest in kidney disease, and he is known for his exceptional expertise in the management of renal disorders, including kidney failure, glomerular diseases, and electrolyte imbalances. He is committed to providing his patients with the highest level of care, and he employs the latest technologies and treatments to achieve optimal health outcomes. Dr. Amtacew is also an accomplished researcher and educator, having published several papers on nephrology and participated in numerous medical conferences and symposia. His contributions to the field of nephrology have been recognized with several awards and accolades. Dr. Habtamu Amtacew's dedication to patient care and advancement in the field of nephrology have made him a valued member of the healthcare community in Ethiopia and beyond."
                            img={docHab}
                            email='Habtamuamtacew@jjushycsh.com'
                        />
                        <Doctors
                            doc_name="Dr. Zerihun Abera"
                            title="Medical Doctor, INTERNIST"
                            desc="is a dedicated medical doctor and internist at Jigjiga University Shekh Hassen Yabare Comprehensive Specialized Hospital. With years of experience in the medical field, he has become an expert in diagnosing and treating a wide range of medical conditions. Dr. Abera is committed to providing the highest level of care to his patients and ensuring their overall well-being. He is known for his compassionate and empathetic approach to patient care, which has earned him the respect and admiration of both his colleagues and patients alike. In addition to his work as a medical doctor, Dr. Abera is also a passionate advocate for healthcare access and equity in underserved communities. Through his dedication to his patients and his community, Dr. Zerihun Abera has become a valued member of the medical profession."
                            img={docZer}
                            email='Zerihunabera@jjushycsh.com'
                        />
                        <Doctors
                            doc_name="Dr. Mahlet Tadesse"
                            title="Medical Doctor, INTERNIST"
                            desc="is a highly skilled medical doctor and internist who currently serves at Jigjiga University Shekh Hassen Yabare Comprehensive Specialized Hospital. With a wealth of experience and knowledge in the medical field, Dr. Tadesse is known for her exceptional diagnostic abilities and her compassionate approach to patient care. She is dedicated to helping her patients achieve optimal health outcomes and is committed to providing the highest level of medical care possible. Dr. Tadesse is a strong advocate for preventive medicine and believes in the importance of patient education in maintaining long-term health. In addition to her work as a medical doctor, Dr. Tadesse is actively involved in medical research and has published several papers on a variety of medical topics. Through her dedication and commitment to her patients and the medical profession, Dr. Mahlet Tadesse has become a respected and valued member of the medical community."
                            img={docMah}
                            email='Mahlettadesse@jjushycsh.com'
                        />
                    </div>
                </div>
                <div className="container-sm">
                    <h3 className="py-3 ward-title">OBSTRECTIC AND GYNICOLOGY WARD</h3>
                    <div class="row docs-container py-2 align-items-start justify-content-center mx-auto gap-4 text-center">
                        <Doctors
                            doc_name="Dr. Hassen Mohammed"
                            title="Medical Doctor, Gynecologist"
                            desc="is a highly skilled medical doctor and gynecologist who practices at Jigjiga University Shekh Hassen Yabare Comprehensive Specialized Hospital. With a wealth of experience in women's health, Dr. Mohammed is known for his exceptional clinical skills and compassionate approach to patient care. He is dedicated to helping women achieve optimal health outcomes and is committed to providing the highest level of medical care possible. Dr. Mohammed is a strong advocate for women's health and believes in the importance of patient education in maintaining long-term health. He is highly regarded by his colleagues and patients alike for his expertise and dedication to his profession. In addition to his work as a medical doctor, Dr. Mohammed is actively involved in medical research and has published several papers on a variety of gynecological topics. Through his dedication and commitment to his patients and the medical profession, Dr. Hassen Mohammed has become a respected and valued member of the medical community."
                            img={docHas}
                            email='Hassenmohammed@jjushycsh.com'
                        />
                        <Doctors
                            doc_name="Dr. Abdusalam Usman"
                            title="Medical Doctor, Assistant professor of Obstetric and Gynecologist"
                            desc="is a highly respected medical doctor and assistant professor of Obstetrics and Gynecology at Jigjiga University's Shekh Hassen Yabare Comprehensive Specialized Hospital. With a wealth of knowledge and experience in his field, Dr. Absiye has earned a reputation as a dedicated healthcare provider and a compassionate caregiver. He is committed to improving the lives of his patients and has devoted his career to providing high-quality obstetric and gynecological care. Dr. Absiye is also a valued member of the medical community, with numerous publications and research projects to his name. His contributions to the field have been widely recognized, and he is admired for his dedication to advancing medical knowledge and improving patient outcomes."
                            img={docAbd}
                            email='abdusalamabsiye@jjushycsh.com'
                        />
                        <Doctors
                            doc_name="Dr. Yared Kifle"
                            title="Medical Doctor, Assistant professor of Obstetric and Gynecologist"
                            desc="is a highly skilled medical doctor and assistant professor of Obstetrics and Gynecology at Jigjiga University's Shekh Hassen Yabare Comprehensive Specialized Hospital. Dr. Berhanu is a dedicated healthcare provider who is passionate about helping women achieve their health goals. With many years of experience in the field of obstetrics and gynecology, Dr. Berhanu has earned a reputation as a skilled and compassionate physician. He is committed to providing the highest quality care to his patients and is known for his ability to make patients feel comfortable and cared for. Dr. Berhanu is also a respected member of the medical community, with a long list of publications and research projects to his credit. His contributions to the field have been widely recognized, and he is admired for his commitment to advancing medical knowledge and improving patient outcomes."
                            img={docYar}
                            email='Yaredberhanu@jjushycsh.com'
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Portfolio;