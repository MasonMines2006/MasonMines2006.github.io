export type Day = { date: string; contributionCount: number; color: string };

export async function fetchGitHubContributions(
  token: string,
  year: number,
  username: string
): Promise<Day[]> {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection(from: "${from}", to: "${to}") {
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
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();

  if (!data.data?.user) {
    console.error("GitHub API error:", data);
    throw new Error("User not found or contributions unavailable");
  }

  const weeks =
    data.data.user.contributionsCollection.contributionCalendar.weeks;
  return weeks.flatMap((week: any) => week.contributionDays);
}
