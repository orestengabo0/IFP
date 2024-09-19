import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdOutlinePhone } from 'react-icons/md'
import CardInfoBadge from './CardInfoBadge'
import styles from './MyProfile.module.css'

const ProfileCard = () => {
  return (
    <div className={`${styles.profileCard} m-3 p-3 rounded-4`}>
        <h4 className="text-white text-center">NGABO Oreste</h4>
        <div className="cardInfo d-flex justify-content-evenly">
          <CardInfoBadge heading="Profession" role="middleman" />
          <CardInfoBadge heading="Location" role="Kigali" />
          <CardInfoBadge heading="Experience" role="5yrs" />
        </div>
        <div className="location mt-3">
          <div className="mt-2">
            <span>
              <HiOutlineLocationMarker
                size={30}
                color="white"
                className="mx-3"
              />
            </span>
            <span className="fs-5 text-white mt-1">Kigali Rwanda</span>
          </div>
          <div className="mt-2">
            <span>
              <MdOutlinePhone size={30} color="white" className="mx-3" />
            </span>
            <span className="fs-5 text-white mt-1">0738049975</span>
          </div>
        </div>
      </div>
  )
}

export default ProfileCard