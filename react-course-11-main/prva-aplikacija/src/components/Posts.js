import React, { useEffect, useState } from 'react'
import Post from './Post.js'
 
const Posts = (props) => {
  const [postList, setPostList] = useState(null)
  
  // const [itemClicked, click] = useState(null)
  // const [content, renderContent] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const htmlList = data.map((post, i) => <Post key={i} post={post} />)
        setPostList(htmlList)
  })
}, [])



// useEffect (() => {
//   // alert (itemClicked)
//   if(itemClicked) {

//     renderContent ('hi' + itemClicked)
//   }
//   }, [itemClicked])

return <div>
  {!postList ? <div>loading...</div> : <div>{postList}</div>}
  {/* <div>{props.post.title.forEach((element,i) => <button key= {i} 
    onClick={() => click(element)}> 
    {element}
    </button> 
    )}
    {content}
    </div> */}
</div>
}

export default Posts