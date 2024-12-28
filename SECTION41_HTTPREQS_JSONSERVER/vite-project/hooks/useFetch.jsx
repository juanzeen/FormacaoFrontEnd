import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(nul);
  const [method, setMethod] = useState(nul);
  const [fetch, setFetch] = useState(nul);

  const httpConfig = (data, method) => {
    if (method == "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
		}

		setMethod(method)
  };

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const json = await res.json();

			setData(json);
		};
		fetchData();
  }, [url]);

		useEffect(() => {
			const httpRequest = async () => {
				let json

			if (method == "POST") {
				let fetchOptions = [url, config]

				const res = await fetch(...fetchOptions)

				json = await res.json()
			}

				setFetch(json)

			}

			httpRequest()
		}, [config, method, url])


  return { data, httpConfig };
};
