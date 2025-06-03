import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import type { Post } from "./types";
import useCreatePost from "./hooks/useCreatePost";
import useDeletePost from "./hooks/useDeletePost";

function App() {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data),
  });

  const { mutate: deleteMutation } = useDeletePost();
  const { mutate, isPending, error } = useCreatePost(() => {
    if (titleRef.current?.value && bodyRef.current?.value) {
      titleRef.current.value = "";
      bodyRef.current.value = "";
    }
  });

  return (
    <>
      <h2>Post Manuel Parra</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (titleRef.current?.value && bodyRef.current?.value) {
            mutate({
              id: 0,
              body: bodyRef.current.value,
              title: titleRef.current.value,
              userId: 1,
            });
          }
        }}
      >
        <div>
          <input ref={titleRef} name="title" type="text" placeholder="Título" />
        </div>
        <div>
          <input ref={bodyRef} name="body" type="text" placeholder="Cuerpo" />
        </div>
        <div>
          <button disabled={isPending}>
            {isPending ? "Creando..." : "Enviar"}
          </button>
          <br />
          {error && <span>{error.message}</span>}
        </div>
      </form>
      {isLoading && <p>Cargando...</p>}
      <ul>
        {data?.map((post) => (
          <li onClick={() => deleteMutation(post)} key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
