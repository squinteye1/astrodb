import { db, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Comment).values([
    {
      author: "Neil McKay",
      content: "Please subscribe!!!",
    },
    {
      author: "Shibhon",
      content: "Please subscribe to newsletter",
    },
  ]);
}
