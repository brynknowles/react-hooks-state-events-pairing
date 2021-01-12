
function CommentItem({ user, comment }) {
    // console.log("props in CommentItem: ", props)
    // const { user, comment } = comments;
    // console.log(props)

    return (
        <>
            <h4>{user}</h4>
            <p>{comment}</p>
        </>
    )
}

export default CommentItem;