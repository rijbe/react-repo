import { useEffect } from "react";
import { useState } from "react"
import Pot from "./Pot";

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return(
        <div className="">
            <h1>Post: {posts.length} </h1>
           {
            posts.map(pot => <Pot pot ={pot}></Pot>)
           }
        </div>
    )
}