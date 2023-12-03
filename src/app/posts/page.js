import React from 'react';

const Posts = async () => {
    const res = await fetch('http://localhost:5000/posts', {
        cache: 'force-cache'
    })
    const posts = await res.json();
    
    return (
        <div className='w-[85%] mx-auto'>
            Total posts: {posts.length}
            <div className='grid grid-cols-3 gap-4 mt-10 '> 
            {
                posts.map(post => <div key={post.id} className="card bg-gray-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <p>Likes:{post.likesCount}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Posts;