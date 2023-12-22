import BlogPost from '@/components/cards/BlogPost'
import Image from 'next/image'

const page = () => {
  return (
    <div className="flex flex-col items-center  my-10">
      <div className="flex w-32 h-32 items-center justify-center rounded-full border">
        {' '}
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            alt="profile image"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold my-2">Adrio Devid</h1>
      <p className=" text-sm text-center mt-2 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        harum accusamus, veritatis accusantium fuga quisquam quos sint delectus
        ullam quidem deleniti reprehenderit earum saepe vel, dolor eius eligendi
        consectetur odit?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(true)
          .map((each, index) => (
            <BlogPost key={index} />
          ))}
      </div>
    </div>
  )
}

export default page
