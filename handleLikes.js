import { dislikePost, likePost } from "./api.js";
import { getToken, posts, renderApp, setPosts } from "./index.js";

export function handleLikes() {
  const likeButtons = document.querySelectorAll(".like-button");
  console.log(likeButtons);
  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", () => {
      const isLiked = likeButton.dataset.liked;
      if (isLiked === "true") {
        dislikePost(likeButton.dataset.postId, getToken()).then((data) => {
          console.log(data);
          const newPosts = posts.map((p) => {
            if (p.id === likeButton.dataset.postId) {
              return data.post
            } else {
              return p
            }
          });
          setPosts(newPosts)
          renderApp()
        });
      } else {
        
        likePost(likeButton.dataset.postId, getToken()).then((data) => {
          console.log(data);
          const newPosts = posts.map((p) => {
            if (p.id === likeButton.dataset.postId) {
              return data.post
            } else {
              return p
            }
          });
          setPosts(newPosts)
          renderApp()
        });
      }
    });
  }
}

