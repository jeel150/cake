import Navbar from './Navbar';
import Footer from './Footer';
import './styles/course.css';
import images from './images.js';
import { useNavigate } from 'react-router-dom';
const { colorcake,dora, goldencake, pinkcake, pink, redvelvet, tricolorcake, truffle, wippedcake, biscoffImg } = images;

const Course = () => {
  const navigate = useNavigate();
  const courseImages = [
  biscoffImg,
  colorcake,
  dora,
  goldencake,
  pinkcake,
  pink,
  redvelvet,
  tricolorcake,
  truffle,
  wippedcake
  ];
  const courses = [
    {
      title: 'CREATE DESIGNS WITH BUTTERCREAM ICING',
      desc: 'You will be learning how to color Buttercream and ways to mix colors. Recipe for Buttercream will...',
      btn: 'View Course ➜',
      img: courseImages[0],
      label: 'Course 1',
      days: '2 Days',
    },
    {
      title: 'DESIGN MINI CAKES & CUPCAKES',
      desc: 'Learn the art of decorating mini cakes and cupcakes with buttercream, fondant, and other tools.',
      btn: 'View Course ➜',
      img: courseImages[1],
      label: 'Course 2',
      days: '2 Days',
    },
    {
      title: 'CAKE DECORATING WITH FONDANT',
      desc: 'Master fondant techniques including covering cakes, figures, and sugar flowers from scratch.',
      btn: 'View Course ➜',
      img: courseImages[2],
      label: 'Course 3',
      days: '2 Days',
    },
    {
      title: 'DECORATING WITH EDIBLE FLOWERS',
      desc: 'Discover how to use edible flowers to elevate the look and flavor of your cakes and cupcakes.',
      days: '2 Days',
      label: 'Course 4',
      btn: 'View Course ➜',
      img: courseImages[3],
    },
    {
      title: 'ADVANCED CAKE STACKING TECHNIQUES',
      desc: 'Learn how to professionally stack cakes and use structural supports for multi-tiered designs.',
      days: '2 Days',
      label: 'Course 5',
      btn: 'View Course ➜',
      img: courseImages[4],
    },
    {
      title: 'CHOCOLATE DECORATION MASTERCLASS',
      desc: 'A complete guide to chocolate curls, shards, and sculpted pieces for cake decoration.',
      days: '1 Day',
      label: 'Course 6',
      btn: 'View Course ➜',
      img: courseImages[5],
    },
    {
      title: 'FESTIVE CAKE DESIGN WORKSHOP',
      desc: 'Get creative with holiday-themed cakes using fondant, icing, and candy elements.',
      days: '2 Days',
      label: 'Course 7',
      btn: 'View Course ➜',
      img: courseImages[6],
    },
    {
      title: 'HAND-PAINTED CAKES FOR BEGINNERS',
      desc: 'Learn to hand-paint cakes using edible colors and brushes in fun floral and abstract patterns.',
      days: '2 Days',
      label: 'Course 8',
      btn: 'View Course ➜',
      img: courseImages[7],
    },
    {
      title: 'THE ART OF SUGARCRAFT',
      desc: 'Create detailed sugar flowers, bows, and figures with professional sugarcraft tools.',
      days: '3 Days',
      label: 'Course 9',
      btn: 'View Course ➜',
      img: courseImages[8],
    },
    {
      title: 'WEDDING CAKE DESIGN BOOTCAMP',
      desc: 'Intensive wedding cake workshop covering tiering, floral arrangement, and elegance.',
      days: '5 Days',
      label: 'Course 10',
      btn: 'View Course ➜',
      img: courseImages[9],
    },
    {
      title: 'CUSTOMISED BIRTHDAY CAKES',
      desc: 'Learn to make trendy birthday cakes for kids, teens, and adults with creative themes.',
      days: '2 Days',
      label: 'Course 11',
      btn: 'View Course ➜',
      img: courseImages[10],
    },
    {
      title: 'FONDANT FIGURE MODELING',
      desc: 'Craft professional fondant characters and figures for animation and kid-themed cakes.',
      days: '3 Days',
      label: 'Course 12',
      btn: 'View Course ➜',
      img: courseImages[11],
    },
  ];

  return (
    <>
      <div className="course-page">
        <Navbar />
        <div className="rb-breadcrumb">
          <span className="rb-breadcrumb-home" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
          <span className="rb-breadcrumb-separator">&#8250;</span>
          <span className="rb-breadcrumb-link">Baking Classes</span>
        </div>
        <hr className="custom-hr-1" />
        <div className="rb-header-section">
          <h1 className="rb-heading">WANT TO BAKE ON YOUR OWN?</h1>
          <p className="rb-desc">
            Ribbons & Balloons provides 10 baking & decorating courses in Dubai. Whether it’s baking or decorating,
            our experienced chefs are ready for all levels. See if there is a baking course that’s perfect for your
            hobby or your career below. You can buy the course for yourself or gift the course to your loved ones!
          </p>
        </div>
        <hr className="custom-hr-2" />
        <span className="rb-course-count">12 workshop & courses</span>
        <div className="rb-courses-section">
          <aside className="rb-sidebar">
            <h2>Workshops & Courses</h2>
            <ul>
              <li><hr className="rb-sidebar-hr" /><span>BASIC</span></li>
              <li><hr className="rb-sidebar-hr" /><span>INTERMEDIATE</span></li>
              <li><hr className="rb-sidebar-hr" /><span>ADVANCED</span></li>
              <li><hr className="rb-sidebar-hr" /><span>WORKSHOPS</span></li>
              <li><hr className="rb-sidebar-hr" /><span>KIDS WORKSHOPS</span><hr className="rb-sidebar-hr" /></li>
            </ul>
          </aside>
          <main className="rb-courses-grid">
            {courses.slice(0, 9).map((course, i) => (
              <div key={i} className="rb-course-card">
                <div className="rb-course-badge">
                  <span>{course.label}</span>
                  <span>{course.days}</span>
                </div>
                <img src={course.img} alt={course.title} className="rb-course-img" />
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <button className="rb-btn-view" onClick={() => navigate('/viewcourse')}>{course.btn}</button>
              </div>
            ))}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Course;
