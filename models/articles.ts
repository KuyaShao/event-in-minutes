export type Article = {
  id: number;
  title: string;
  content?: string;
  published: boolean;
  img: String;
  author: User;
  authorId: number;
  date: Date;
  isFeatured: boolean;
  category: Category;
  categoryId: number;
};

export type User = {
  id?: number;
  name: string;
  email: string;
  role: string;
};

export type Category = {
  id: number;
  title: string;
};
