import { useQuery } from "@apollo/client";
import { GET_ALBUMS, GET_USERS } from "../queries/albums";
import { useCallback, useEffect, useState } from "react";
import Layout from "../component/layout";
import { Input } from "../ui/input";
import Pagination from "../component/pagination";
import { debounce } from "../component/debounce";
import "./style.css";

export default function Albums() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [userId, setUserId] = useState('');

  const debouncedSetSearch = useCallback(
    debounce((value) => setDebouncedSearch(value), 300),
    []
  );

  useEffect(() => {
    debouncedSetSearch(search);
  }, [search, debouncedSetSearch]);

  const { loading: albumsLoading, error: albumsError, data: albumsData } = useQuery(GET_ALBUMS, {
    variables: {
      options: {
        paginate: {
          page,
          limit: 10,
        },
        search: {
          q: debouncedSearch,
        },
      },
    },
    onError: (error) => {
      console.error('Error fetching albums:', error);
    },
  });

  const { loading: usersLoading, error: usersError, data: usersData } = useQuery(GET_USERS, {
    onError: (error) => {
      console.error('Error fetching users:', error);
    },
  });

  if (albumsLoading || usersLoading) return <p>Loading...</p>;
  if (albumsError) return <p>Error: {albumsError.message}</p>;
  if (usersError) return <p>Error: {usersError.message}</p>;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleUserChange = (value) => {
    setUserId(value);
  };

  return (
    <Layout>
      <div className="flex mb-4 space-x-4 items-center">
        <Input
          type="text"
          className="p-2 border rounded"
          placeholder="Search albums..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albumsData.albums.data.map((album) => (
          <div key={album.id} className="card">
            <h2 className="font-bold mb-2">{album.title}</h2>
            <p className="text-gray-300">{album.user.name}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalCount={albumsData.albums.meta.totalCount}
        pageSize={10}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
}
