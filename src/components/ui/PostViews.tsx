import React, { useEffect, useState } from 'react'

const PostViews = () => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const url = window.location.href;
    const urlArray = url.split("/");
    let slug = urlArray.pop();

    if (!slug?.length) slug = urlArray.pop();

    (async () => {
      try {
        const res = await fetch("https://api.blackkalu.com/api/v1/blog/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            slug,
          })
        })

        if (res.status === 200) {
          const data = await res.json();
          setViews(data.views);
        }
      } catch (err) {
        setViews(0);
      }
    })()
  }, []);

  return (
    <div className='hidden bg-gray-50 rounded-xl'>
      <span>Views: {views}</span>
    </div>
  )
}

export default PostViews;
