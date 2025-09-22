import React from 'react';
import BellIcon from '../svgs/BellIcon';
import SuperUserIcon from '../svgs/SuperUserIcon';
import { useAppDispatch } from '../../../redux/hook';
import { showSidebar } from '../../../redux/slices/toggleSidebar';

export default function AdminHeader() {
  const dispatch = useAppDispatch()
  const barRef = React.useRef<HTMLDivElement | null>(null);
  const handleResponsive = () => {
    if (window.matchMedia("(min-width: 1000px)").matches) {
      if (barRef.current) {
        barRef.current.style.display = "none";
      }
    } else {
      if (barRef.current) {
        barRef.current.style.display = "block";
      }
    }
  };

  React.useLayoutEffect(() => {
    handleResponsive();
    window.addEventListener('resize', handleResponsive);
    return () => {
      window.removeEventListener('resize', handleResponsive);
    };
  }, []); 

  return (
    <div className='flex items-center justify-between px-[24px] py-[12px] bg-white' style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <div onClick={() => dispatch(showSidebar())} ref={barRef} className='mr-4'>
        <i className="fa fa-bars gradient-text font-bold cursor-pointer" style={{ fontSize: "30px" }}></i>
      </div>
      <h1 className='font-[700] text-[16px] text-center leading-[24px] inter-font gradient-text'>Welcome to Koko Admin Dashboard!</h1>
      <div className='flex items-center justify-center gap-2 admin-panel'>
        <BellIcon />
        <SuperUserIcon />
        <h1 className='font-[500] text-[11.9px] leading-[20px] inter-font'>Super Admin</h1>
      </div>
    </div>
  );
}
