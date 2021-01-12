import CommentItem from "./CommentItem";

function CommentList( { comments }) {
    console.log("Props in CommentList: ", comments)

    const commentItems = comments.map((comment) => {
        return <CommentItem key={comment.id} user={comment.user} comment={comment.comment}/>
    })

    return (
        <>
            <h3>Number of Comments</h3>
            <ul>{commentItems}</ul>
        </>
    )
}

export default CommentList;