import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CustomSnackBar = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
