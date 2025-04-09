import { useState } from "react";
import { Repo } from "@/types";

const useFetchRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchRepos = async (username: string) => {
    if (username.trim() === "") {
      setError("Please enter a username");
      setRepos([]);
      setSearched(false);
      return;
    }

    setError("");
    setLoading(true);
    setSearched(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      });

      if (response.status === 404) {
        setRepos([]);
        setError("No user found with that name");
      } else if (response.status === 403) {
        setError("Rate limit exceeded or access forbidden.");
      } else {
        const data = await response.json();
        setRepos(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { repos, loading, error, searched, fetchRepos };
};

export default useFetchRepos;
