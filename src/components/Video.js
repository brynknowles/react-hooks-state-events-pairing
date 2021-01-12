import React, { useState } from "react";

function Video({ key, title, url, views, created, upvotes, downvotes }) {

    // console.log("Props in Video:", props)
    
    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);

    function handleUpVoteClick() {
        console.log(likes)
        setLikes(likes => likes +1)
    }

    function handledownVoteClick() {
        console.log(dislikes)
        setDislikes(dislikes => dislikes +1)
    }

    return (
        <>
        <div className="App">
            <iframe
                width="919"
                height="525"
                src={url}
                frameborder="0"
                allowfullscreen
                title={title}
            />
        </div>
            <h1>{title}</h1>
            <div>
                <span>{views} Views </span>
                    |
                <span> Uploaded {created}</span>
            </div>
            <div>
                <span>
                    <button onClick={handleUpVoteClick}> {likes} 👍</button> 
                    <button onClick={handledownVoteClick}> {dislikes} 👎</button> 
                </span>
            </div>
        </>
    )
}

export default Video