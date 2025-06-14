import styles from "./Search.module.scss"
import { CiSearch } from "react-icons/ci";

const Search = ({searchValue, setSearchValue}) => {
  return (
    <div className={styles.root}>
      <CiSearch className={styles.icon}/>
      <input value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)} type="text" placeholder='Search' className={styles.input}/>
    </div>
  )
}

export default Search
