export type Day = {
  date: string;
  contributionCount: number;
  color: string;
};

const query = `
query {
  user(login: "MasonMines2006") {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            date
            contributionCount
            color
          }
        }
      }
    }
  }
}`;

export const fetchGitHubContributions = async (token: string): Promise<Day[]> => {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();

  if (!data.data) {
    throw new Error("Failed to fetch contributions");
  }

  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  return weeks.flatMap((week: any) => week.contributionDays);
};
