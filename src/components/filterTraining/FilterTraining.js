import { useParams } from "react-router-dom";

const FilterTraining = ()=>{

    const {by, key} = useParams();

    return(
        <h2>Filter Training by {by}: {key}</h2>
    )
}

export default FilterTraining;