export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface NewPost {
  userId: number;
  title: string;
  body: string;
}

export interface PostUpdates {
  title: string;
  body: string;
}
