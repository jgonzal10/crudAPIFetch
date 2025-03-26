import { NextFunction, Request, Response } from "express";
export const getPosts= async (request:Request, response:Response, next: NextFunction)=>{

    try {
        const fetchPost = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
        if(!fetchPost.ok){
            throw new Error("It was not possible to fetch posts")

        }
        const posts = await fetchPost.json()
        response.status(200).json(posts)   
    } catch (error) {
        response.status(500).json(error)
    }

}


export const createPost= async (request:Request, response:Response, next: NextFunction)=>{
    try {
        const result =await fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(request.body),
          })
          const newPost = await result.json();
          response.status(201).json(newPost)
    } catch (error) {
        response.status(500).json(error)
    }

}


export const updatePost= async (request:Request, response:Response, next: NextFunction)=>{
    const postId = request.params.id;
    console.log(postId)

    try {
        const result =await fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(request.body),
          })
          const updatedPost = await result.json();
          response.status(201).json(updatedPost)
    } catch (error) {
        response.status(500).json(error)
    }

}

export const deletePost= async (request:Request, response:Response, next: NextFunction)=>{
    const postId = request.params.id;
    console.log(postId)

    try {
        const result =await fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(request.body),
          })
          await result.json();
          response.status(204).json({message:"Post delete"})
    } catch (error) {
        response.status(500).json(error)
    }

}