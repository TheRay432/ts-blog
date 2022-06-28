export interface User {
  _id?: string;
  username: string;
  email: string;
  password?: string;
  profilePicture: any;
  date?: string;
  __v?: number;
}

export interface Post {
  _id?: string;
  title: string;
  desc: string;
  postPhoto: string;
  username: string;
  email: string;
  date?: string;
  __v?: number;
}
export interface PostsProps {
  post: Post;
}
