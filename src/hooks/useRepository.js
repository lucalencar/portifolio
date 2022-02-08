import { useState, useEffect } from "react";

export default function useRepository() {

    const [repoList, setRepoList] = useState([]);

    useEffect(() => {
      init();
    }, []);
  
  
    async function init() {
      const response = await fetch("https://api.github.com/users/lucalencar/repos");
      const data = await response.json();
  
      setRepoList(data.slice(0).reverse());
    }
  
    const repoAno = (e) => {
      const newData = e.substring(0, 4);
      return newData;
    }

    return {
        repoList, init, repoAno
    };

}
