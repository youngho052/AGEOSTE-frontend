import React, { useState, useEffect } from "react";

const useFetch = (api, method) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(api, {
      method,
    })
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [api, method]);

  return { data, count };
};

export default useFetch;
