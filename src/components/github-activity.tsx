import { cn, formatRelativeTime } from "@/lib/utils";
import { RepositoryNode } from "@/types/all";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GITHUB_USERNAME = "falahh6";
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const GitHubActivity = () => {
  const { theme } = useTheme();

  const [loading, setLoading] = useState(true);
  const [recentCommits, setRecentCommits] = useState<
    { message: string; date: string; repo: string; url: string }[]
  >([]);

  useEffect(() => {
    fetchRecentCommits();
  }, []);

  const fetchRecentCommits = async () => {
    const query = `
      {
        user(login: "${GITHUB_USERNAME}") {
          repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
              name
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 5) {
                      edges {
                        node {
                          message
                          committedDate
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    const repositories: RepositoryNode[] =
      data?.data?.user?.repositories?.nodes || [];

    const commits = repositories.flatMap(
      (repo) =>
        repo.defaultBranchRef?.target?.history?.edges?.map((commit) => ({
          message: commit.node.message,
          date: commit.node.committedDate,
          repo: repo.name,
          url: commit.node.url,
        })) || []
    );

    setLoading(false);
    setRecentCommits(commits);
  };

  return (
    <div className="p-4 mx-auto flex flex-col gap-4 justify-start items-start w-full max-w-4xl">
      <p className="text-sm sm:text-xs text-left pb-2 w-full">
        This is the activity on my GitHub profile. It shows the recent commits
        and the contribution graph. You can see what I&apos;m currently{" "}
        <span className="font-semibold">working on</span>.
      </p>

      <div
        className={cn(
          "w-full p-4 max-sm:p-2 rounded-lg overflow-x-auto",
          loading && "hidden"
        )}
      >
        <div className="block md:hidden overflow-x-auto">
          <GitHubCalendar
            username="falahh6"
            colorScheme={theme === "dark" ? "dark" : "light"}
            blockSize={4}
            blockMargin={2}
            blockRadius={1}
            fontSize={6}
          />
        </div>
        <div className="hidden md:block overflow-x-auto">
          <GitHubCalendar
            username="falahh6"
            colorScheme={theme === "dark" ? "dark" : "light"}
            blockSize={11}
            fontSize={10}
            blockMargin={4}
          />
        </div>
      </div>
      <div
        className={cn(
          "w-full h-40 bg-accent animate-pulse rounded-lg hidden",
          loading && "block"
        )}
      />

      <h2 className="text-xs font-semibold my-3">Recent Commits</h2>

      <ul className="w-full flex flex-row max-sm:flex-col  flex-wrap gap-4">
        {loading && (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <li
                key={index}
                className="border h-24 bg-accent rounded-md w-fit flex-1 min-w-[250px] max-sm:w-full p-3 text-left flex flex-col gap-1 animate-pulse"
              />
            ))}
          </>
        )}
        {!loading &&
          recentCommits.slice(0, 6).map((commit, index) => (
            <li
              key={index}
              className="border rounded-md w-fit flex-1 min-w-[250px] max-sm:w-full p-3 text-left flex flex-col gap-1"
            >
              <p className="text-xs font-semibold">{commit.repo}</p>
              <div className="flex flex-row items-baseline gap-2">
                <p className="text-xs">{commit.message}</p>
                <p className="text-xs text-foreground/50 min-w-fit">
                  {formatRelativeTime(commit.date)}
                </p>
              </div>
              <Link
                href={commit.url}
                target="_blank"
                className="text-xs mt-auto font-semibold text-blue-500 w-fit flex flex-row items-center gap-1 group"
              >
                <span>See changes</span>{" "}
                <ArrowRight className="h-3 w-3 hidden group-hover:block transition-[display]" />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GitHubActivity;
