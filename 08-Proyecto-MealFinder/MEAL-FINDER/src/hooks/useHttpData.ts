import { useEffect, useState } from "react";
import axios from "axios";

export default function useHttpData<T, U>(url: string) {
	const [data, setData] = useState<T[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let ignore = false;
		const controller = new AbortController();
		const { signal } = controller;

		setLoading(true);

		axios
			.get<U>(url, { signal })
			.then(({ data }) => {
				if (!ignore) {
					setData(data.meals);
				}
			})
			.finally(() => {
				if (!ignore) {
					setLoading(false);
				}
			});

		return () => {
			ignore = true;
			controller.abort();
		};
	}, [url]);

	return { loading, data };
}
