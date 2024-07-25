
import Avatar from "../assets/avatar.png"

interface BlogProp{
    blog: {title: string
    content: string
    tags: string[],
    author: {
        username: string
    },
    _id: string,
    createdAt: string
}
}

export const BlogCard = (props:BlogProp) =>{
    const dateTime = new Date(props.blog.createdAt)
    return <article key={props.blog._id} className="bg-white flex max-w-xl flex-col items-start justify-between text-left box-border p-4 shadow-sm shadow-gray-200 bg-blend-normal">
    <div className="items-center gap-x-4 text-xs my-4">
      <time className="text-gray-500 block w-full">
        {dateTime.getFullYear()} - {dateTime.getMonth()} - {dateTime.getDate()}
      </time>
      {props.blog.tags.map(tag=><a
        className=" relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:text-white hover:bg-gray-600 inline-block m-1"
      >
        {tag}
      </a>)}
    </div>
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <a href={`/blogs/${props.blog._id}`}>
          <span className="absolute inset-0" />
          {props.blog.title}
        </a>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{props.blog.content.slice(0, 129) + `${props.blog.content.length >= 129?"...": ""}`}</p>
    </div>
    <div className="relative mt-8 flex items-center gap-x-4">
      <img alt="" src={Avatar} className="h-10 w-10 rounded-full bg-gray-50" />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <a href={""}>
            <span className="absolute inset-0" />
            {props.blog.author.username}
          </a>
        </p>
      </div>
    </div>
  </article>
}