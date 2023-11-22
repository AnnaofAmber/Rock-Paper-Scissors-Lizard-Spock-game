import { useEffect, useState } from 'react';
import scss from './ModalRules.module.scss';

export const ModalRules = () => {
  const [isModal, setIsModal] = useState(false);
  useEffect(()=>{
    if (isModal) {
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'scroll';
    }
    window.addEventListener('keydown', handleCloseClick);

    return () => {
      window.removeEventListener('keydown', handleCloseClick);
    };
  },[isModal])

  const handleModalClick = () => {
    setIsModal(true);

  };
  const handleCloseClick = e => {
    
    if (e.target.nodeName === 'DIV' || e.code === 'Escape' || e.target.nodeName === 'BUTTON') {
      setIsModal(false)}
  }


  return (
    <div className={scss.container}>
      <button onClick={handleModalClick} className={scss['btn-open']}>Rules</button>
      {isModal && (
        <div className={scss.overlay} onClick={handleCloseClick}>
          <div className={scss.modal}>
            <div className={scss['modal-container']}>
              {' '}
              <h2 className={scss.title}>rules</h2>
              <div className={scss.rules}></div>
              <button onClick={handleCloseClick} className={scss['btn-close']}></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
