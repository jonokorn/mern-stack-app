import {useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import PostForm from '../components/PostForm'
import Spinner from '../components/Spinner'
import { getPosts, reset } from "../features/posts/postSlice"
import PostItem from "../components/PostItem"

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {posts,isLoading,isError,message} = useSelector((state) => state.posts)

  useEffect(() => {
    if(isError) {
      //sconsole.log(message)
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getPosts())

    return () => {
      dispatch(reset() )
    } 
  }, [user, navigate, isError, message, dispatch]) 

  if(isLoading) {
    <Spinner />
  }


  function sortPostArray(posts) {
    const newArray = []
    posts.forEach(element => {
      newArray.push(element)
    });
    return newArray.reverse()
  }

  return (
    <>
      <section className="heading">
      <h1>Welcome {user && user.username}</h1>
      <p>Posts</p>
      </section>
      <PostForm />

      <section className='content'>
        {posts.length > 0 ? (
          <div className='posts'>
            {sortPostArray(posts).map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <h3>no posts were found :(</h3>
        )}
      </section>
     </>
  )
}  

export default Dashboard  