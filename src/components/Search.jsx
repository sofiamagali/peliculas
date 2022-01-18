import styles from "./Search.module.css";
import {FaSearch} from "react-icons/fa";
import {useState} from "react";
import {useHistory} from "react-router";

export function Search() {
    const [SearchText, setSearchText] = useState("");
   const history = useHistory();
    const handleSumbit= (e) => {
        e.preventDefault();
        history.push("/?search=" + SearchText);
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSumbit}>
            <div className={styles.searchbox}>
                <input className={styles.searchInput} 
                    type="text" 
                    value={SearchText} 
                    onChange={ (e) => setSearchText(e.target.value)} />
                <button className={styles.searchButton} type="sumbit"> <FaSearch size={20}/> </button>
            </div>
        </form>
    )
}
