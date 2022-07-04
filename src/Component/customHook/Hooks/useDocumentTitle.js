import {useEffect} from 'react'

function useDocumentTitle(count) {

    useEffect(() => {
      document.title=`Count ${count}`
    
      return () => {
        
      }
    }, [count])


  return (
    <div>UseDocumentTitle</div>
  )
}

export default useDocumentTitle