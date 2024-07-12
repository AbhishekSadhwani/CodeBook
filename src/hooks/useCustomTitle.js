import { useEffect } from 'react'

// hook to create custom title for each web page
export const useCustomTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - CodeBook`
  },[title]) 
  
  return null;
}
