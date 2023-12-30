import Image from 'next/image'
import { Avatar, Card, CardHeader, CardBody, Link } from '@nextui-org/react'
import { FileText } from 'react-feather'

const Author = ({ author }) => {
  return (
    author && (
      <>
        <Link href={`/authors/author?id=${author.id}`}>
          <Card className="bg-gray p-5 group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all">
            <div className="flex flex-wrap items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Avatar
                  alt="profile image"
                  src={author.profileImage}
                  className="w-24 h-24"
                />
              </div>
              <div>
                <h3 className="font-semibold text-custom-xl text-dark mb-1">
                  {author.firstName} {author.lastName}
                </h3>
                <p className="text-sm">{author.matricNumber}</p>
                <span className="flex items-center gap-2 text-sm mt-2.5 text-foreground-500">
                  <FileText size={15} />6 Published posts
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-custom-xl text-dark mb-1">
                {author.firstName} {author.lastName}
              </h3>
              <p className="text-sm">{author.matricNumber}</p>
              <span className="flex items-center gap-2 text-sm mt-2.5 text-foreground-500">
                <FileText size={15} />
                {author.posts_count > 0
                  ? author.posts_count + " Published posts"
                  : "No posts yet"}
              </span>
            </div>
          </div>
        </Card>

      </>
    )
  )
}
export default Author
