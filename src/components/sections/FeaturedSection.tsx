import { Center, Grid } from "@mantine/core";
import classes from "../css/Sections.module.css";

interface ContentItem {
  company: string;
  tagline: string;
  tech: string;
  highlights: string[];
  giphy?: string;
}

const content: ContentItem[] = [
  {
    company: "Meta",
    tagline: "Accounts Center - Ad Preferences Settings",
    tech: "React, PHP/Hack, GraphQL, Apollo, Node",
    highlights: [
      "Created user experience for the Ad Preferences page for both desktop and mobile devices",
    ],
    giphy: "https://media.giphy.com/media/cUEcbpkkMF3dFOpOas/giphy.gif",
  },
  {
    company: "Venmo",
    tagline: "Web Checkout Flow",
    tech: "React, GraphQL, Apollo, Node, MySQL",
    highlights: [
      "Refactored Venmo web checkout feature to a more modular and scalable architecture",
    ],
  },
  {
    company: "PayPal",
    tagline: "Web Checkout Flow + Migration",
    tech: "React, GraphQL, Apollo, Node, MySQL",
    highlights: [
      "Rebuilt the checkout flow using modern technology, which increased checkout conversion by 3-5%",
      "Led migration efforts, analyzed checkout trends, and initiated product solutions to optimize checkout flow,",
    ],
    giphy: "https://media.giphy.com/media/BsnFJ6hRpqgyhh9JmC/giphy.gif",
  },
  {
    company: "Preferred Hotels",
    tagline: "Hotel Detail Page",
    tech: "React, GraphQL, Next.js, Drupal, SASS",
    highlights: [
      "Improved initial page load speed by 60% for complex data pages using GraphQL",
      "Prioritized accessibility and mobile-responsiveness across all browsers",
    ],
    giphy: "https://media.giphy.com/media/CYi1Roe9TO9WQkcoh8/giphy.gif",
  },
  {
    company: "Clicktool",
    tagline: "Affiliate Marketing Dashboard",
    tech: "React, Redux, Express, Node, MySQL",
    highlights: [
      "Created library of reusable UI components, speeding up development time by 50% for team members",
      "Collaborated with UX designer to determine feasible designs",
      "Completed the implementation of the entire application UX",
    ],
    giphy: "https://media.giphy.com/media/QVHDsxxZ2MboUm7NaR/giphy.gif",
  },
];

export default function FeatureSection() {
  return (
    <div className={classes.sections}>
      <p>Featured Work</p>
      <Grid gutter="md">
        <Grid.Col className={classes.featured} span={{ base: 12, md: 6 }}>
          <Center className={classes.featuredSection}>
            <div>
              <p>Meta</p>
              <p>Accounts Center - Ad Preferences Settings</p>
            </div>
          </Center>
        </Grid.Col>
        <Grid.Col className={classes.featured} span={{ base: 12, md: 6 }}>
          two half
        </Grid.Col>

        {content.map((row) => {
          return (
            <>
              <Grid.Col className={classes.featured} span={{ base: 12, md: 6 }}>
                <Center className={classes.featuredSection}>
                  <div>
                    <p>{row.company}</p>
                    <p>{row.tagline}</p>
                    <p>{row.tech}</p>
                    <p>Highlights:</p>
                    <ul>
                      {row?.highlights.map((highlight) => {
                        return <li>{highlight}</li>;
                      })}
                    </ul>
                  </div>
                </Center>
              </Grid.Col>
              <Grid.Col className={classes.featured} span={{ base: 12, md: 6 }}>
                <Center className={classes.featuredSection}>
                  <img src={row.giphy} />
                </Center>
              </Grid.Col>
            </>
          );
        })}
      </Grid>
    </div>
  );
}
