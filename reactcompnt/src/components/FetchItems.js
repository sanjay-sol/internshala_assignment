import React, {useEffect ,  useState} from 'react';
import axios from "axios";
import '../App.css';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const FetchItems = () => {
    const [data, setdata] = useState([]);
    // Fetching items using axios and setting fetched data to data

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then(res => setdata(res.data));
      }, []);
    return (
    <div>
        <h1>Fetching List Of Items from an API ("https://jsonplaceholder.typicode.com/posts") </h1>
   
    {/* Rendering data of API using map function.. */}
     
     {data.map(item =>(
        <>
        <ul >
       <li key={item.id} ><span >userId :</span> {item.userId}</li>
             
       <li key={item.title}> <span>Title:</span> {item.title}</li>
       <li key={item.body}><span>Body :</span>  {item.body}</li>
       </ul>
       ----------------------------------------------------------------
        
        </>
     ))}

    </div>
    );
}

FetchItems.propTypes = propTypes;
FetchItems.defaultProps = defaultProps;
// #endregion

export default FetchItems;