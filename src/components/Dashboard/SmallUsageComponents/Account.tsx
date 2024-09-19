import { BsPlus } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import styles from '../../MyProfile/MyProfile.module.css'

const Account = () => {
  return (
    <div>
        <div className="d-flex mb-3">
            <div
              className={`bg-success-subtle rounded-5  d-flex justify-content-center ${styles.addAccount}`}
            >
              <BsPlus color="green" size={40} className="mt-1" />
            </div>
            <span className="fs-5 fw-semibold mt-1 mx-3">
              Add another account
            </span>
          </div>
          <div className="d-flex">
            <div
              className={`d-flex justify-content-center ${styles.addAccount}`}
            >
              <MdLogout color="red" size={35} className="mt-1" />
            </div>
            <span className="text-danger fs-5 fw-semibold mt-1 mx-3">
              Logout
            </span>
          </div>
    </div>
  )
}

export default Account