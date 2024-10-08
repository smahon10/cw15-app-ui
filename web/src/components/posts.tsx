import { PostType } from "./data/types";
import { useState } from "react";
import db from "./data/db.json"


const Posts = () => {
    const [posts, setPosts] = useState<PostType[]>(db.posts);

    return (
        <div className="flex flex-col space-y-2">
            {
                posts
                    .sort((post1, post2) => post1.date > post2.date ? -1 : 1 )
                    .map(
                        post =>
                            <div
                                key={post.id}
                                className="border-b-4 border-stone-400 p-4"
                            >
                                {post.content}
                            </div>
                    )
            }
        </div>
    );
}

export default Posts;