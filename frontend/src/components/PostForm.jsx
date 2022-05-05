import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createPost} from '../features/posts/postSlice'


function PostForm() {

   const [title, setTitle] = useState('')
   const [text, setText] = useState('')

   const dispatch = useDispatch()

   const onSubmit = e => {
       e.preventDefault()
       dispatch(createPost({title,text}))
       setTitle('')
       setText('')
   }
    
  return (
    <section className='form'>
        <form onSubmit= {onSubmit}>

            <div className="form-group">
                <label>Title</label>
                <input type='text' name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Text</label>
                <textarea className="textarea" id="text" name="text" value={text} onChange={(e) => setText(e.target.value)} rows="4" cols="50"></textarea>
            </div>
            <div className='form-group'>
                <button className='btn btn-block' type='submit'>Post</button>
            </div>
        </form>
    </section> 
  )
}

export default PostForm  