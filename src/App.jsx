import React from "react";
import UserForm from "./pages/UserForm";
import CartContainer from "./components/cart/CartContainer";
import { useDispatch, useSelector } from "react-redux";

import User from "./components/User";
import { useCreatePostMutation, useDeletePostMutation } from "./redux/baseApi";

function App() {
  const value = useSelector((store) => {
    return store.counter;
  });
  const dispatch = useDispatch();
  console.log(dispatch({ type: "increment" }));
  console.log(value);

  const [createPost, { isloading }] = useCreatePostMutation();
  const {  deletePost} = useDeletePostMutation();

  const handleCreatePost = async () => {
    const newPost = {
      title: "My New Post",
      body: "This is the content",
      userId: 1,
    };
    console.log("created post")

    try {
      const result = await createPost(newPost).unwrap();
      console.log(result, " result");

      alert(result)

    } catch (error) {
      console.log(error , " error ");
    }
  };

  const handleDeletePost = async()=>{

    try {

      const result = await deletePost(1);
      console.log(result);
      
    } catch (error) {
      console.log(error)
      
    }

  }

  return (
    <div>
      <CartContainer />

      <div className="flex justify-center border mt-20">
        <button className="btn btn-secondary" onClick={handleCreatePost}>
          Create post
        </button>
        <button onClick={handleDeletePost} className="btn btn-secondary">Delete post</button>
        {isloading && <p>post is creating</p>}
      </div>
      <User />
    </div>
  );
}

export default App;
