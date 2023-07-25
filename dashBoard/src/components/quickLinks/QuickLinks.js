import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { GiArchiveResearch } from 'react-icons/gi';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function QuickLinks() {

  const navigate = useNavigate();

  // =======================================
  // ====== Handle Active Links Start ======
  // =======================================
  const handleLinks = () => {
    let links = document.querySelectorAll('.link');
    links.forEach(link => {
      link.addEventListener('click', function () {
        links.forEach(li => li.classList.remove('active'));
        this.classList.add('active');
      });
    });
  };
  setTimeout(() => {
    handleLinks();
  }, 1000);

  // ======================================
  // =====   Navigate Between Start   =====
  // ======================================

  const navigateToHomePage = () => {
    navigate('/');
  };

  const navigateToResearch = () => {
    navigate('./research');
  };

  const navigateToLogout = () => {
    navigate('./auth');
  };

  return (
    <section className=' quick-links-wrapper fixed z-[2] top-[80px] w-[200px] sm:hidden lg:block  h-[calc(100vh-80px)] bg-white shadow-shadow3'>
      <ul className=' mt-[1px]'>
        <li className=' active link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToHomePage}>
          <FaMoneyBill className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Bids</span>
        </li>
        <li className='link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToResearch}>
          <GiArchiveResearch className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Research</span>
        </li>
        <li className='link flex items-center relative p-6 pl-5 cursor-pointer' onClick={navigateToLogout}>
          <RiLogoutBoxFill className=' link-icon box-content text-2xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3'>Logout</span>
        </li>

        

       
      </ul>
    </section>
  );
}

export default QuickLinks;
