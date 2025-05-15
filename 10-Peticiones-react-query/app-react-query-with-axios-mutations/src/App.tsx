import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

type Props = {};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function App({}: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (post: Post) =>
      axios
        .post<Post>("https://jsonplaceholder.typicode.com/posts", post)
        .then((response) => response.data),
    onSuccess: (savedPost, newPost) => {
      queryClient.setQueryData<Post[]>(["posts"], (post = []) => [
        savedPost,
        ...post,
      ]);

      // queryClient.invalidateQueies({
      //	 queryKey: ["post"]
      // })

      if (titleRef.current?.value && bodyRef.current?.value) {
        titleRef.current.value = "";
        bodyRef.current.value = "";
      }
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data),
  });

  return (
    <>
      <h2>Post</h2>
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
      <ul>{data?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </>
  );
}

export default App;
