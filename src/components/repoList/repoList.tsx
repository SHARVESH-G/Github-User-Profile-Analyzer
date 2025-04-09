import { Repo } from "../../types";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { SearchAlert } from "../searchAlert/searchAlert";
import { NoResposFound } from "../noRepos/noRepos";
import * as RepoStyle from './repoListStyles';
import { Badge } from "../ui/badge";
import GitLogo from '@/assets/GTT.svg'
import GitUserLogo from '@/assets/githubUserLogo.svg';



interface Props {
  repos: Repo[];
  searched: boolean;
  username : string;
}


const RepoList = ({ repos, searched ,username}: Props) => {
  if (!searched) return <SearchAlert />;
  if (!Array.isArray(repos) || repos.length === 0) return <NoResposFound />;

  return (
    <ScrollArea className={RepoStyle.scrollView}>
      <div className="flex justify-center m-5">
        <a href={`https://github.com/${username}`} target="_blank">
          <Badge className={RepoStyle.Badge}>{username}
            <img src={GitUserLogo} className={RepoStyle.GitLogoUser}></img>
          </Badge>
          
        </a>
      </div>
      <div className={RepoStyle.repoGrid}>
        {repos.map((repo) => (
          <Card key={repo.id} className={RepoStyle.card}>
            <div>
              <h1 className={RepoStyle.repoName}>{repo.name}</h1>
              {repo.description
                ? <p className={RepoStyle.repoDesc}>{repo.description}</p>
                : <p className={RepoStyle.NoDec}>No description</p>}

            </div>
            <Button asChild className={RepoStyle.viewButton}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <img src={GitLogo} className={RepoStyle.GitLogo}></img>
                View on GitHub
              </a>
            </Button>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};

export default RepoList;
