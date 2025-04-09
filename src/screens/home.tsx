import { useState } from "react";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "next-themes";
import RepoList from "@/components/repoList/repoList";
import GitLight from '@/assets/GitHub_Light.svg';
import GitDark from '@/assets/GitHub_Black.svg';
import { NoUserAlert } from "@/components/noUserFoundAlert/noUser";
import { LoadingAlert as Load } from "@/components/loadingAlert/loadingAlert";
import { LiveClock } from "@/components/liveClock/liveClick";
import { ThemeToggle as TTBtn } from "@/components/themeToggleButton/themeToggleButton";
import useFetchRepos from "@/components/customHooks/useFetchRepos";
import * as HomeStyles from './homeStyles';

function Home() {
  const [username, setUsername] = useState("");
  const { repos, loading, error, fetchRepos, searched } = useFetchRepos();
  const { theme } = useTheme();

  const logoSrc = theme === "dark" ? GitDark : GitLight;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={HomeStyles.layoutWrapper}>
        <div className={HomeStyles.leftPanel}>
          <div className={HomeStyles.headerRow}>
            <TTBtn />
            <LiveClock />
          </div>

          <div>
            <img src={logoSrc} alt="GitHub Logo" className={HomeStyles.logoImage} />
            <h1 className={HomeStyles.heading}>GitHub Profile Analyzer</h1>
          </div>

          <div className={HomeStyles.inputGroup}>
            <Input
              placeholder="Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={HomeStyles.inputField}
            />
            <Button
              onClick={() => fetchRepos(username)}
              className={HomeStyles.fetchButton}
            >
              Fetch
            </Button>
          </div>

          {error && <NoUserAlert />}
          {loading && <Load />}
        </div>

        <div className={HomeStyles.rightPanel}>
          <RepoList repos={repos} searched={searched} username={username} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
