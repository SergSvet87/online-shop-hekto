import styles from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={styles['profile-wrapper']}>
      <div className={styles.profile}>
        <div>
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  )
}
