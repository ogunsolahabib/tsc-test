import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useProgress() {
    const {storedValue: progress, setValue: setProgress}=useLocalStorage('progress', 0);
  

  return {progress, setProgress};
}

export default useProgress;