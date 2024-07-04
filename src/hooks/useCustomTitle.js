import { useEffect } from 'react'

export const useCustomTitle = (title) => {
  
  useEffect(() => {
    document.title = `${title} - CodeBook`
  },[title]) 
  
  return null;
}
