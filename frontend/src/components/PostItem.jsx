function PostItem({post}) {
   return (
     <div className="post">
         <h2>{post.title}</h2>
         <div>{post.text}</div>
     </div>
   )
 }
 
 export default PostItem