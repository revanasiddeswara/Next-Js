'use client';

import AlbumList from './AlbumList';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Albums</h1> */}
      <AlbumList />
    </div>
  );
}
