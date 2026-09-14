import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home({ features, posts }) {
  return (
    <>
      <Head>
        <title>KaamWala — Hire daily Workers in Noida</title>
        <meta
          name="description"
          content="Hyperlocal hire of daily Workers in Noida. Find nearby LIVE mistris, plumbers, electricians, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Features features={features} />
        <section className="posts" aria-labelledby="posts-heading">
          <div className="container">
            <p className="eyebrow">From the yard</p>
            <h2 id="posts-heading">Latest posts</h2>
            <ul className="posts-list">
              {posts.map((post) => (
                <li key={post.id}>
                  <article className="post-item">
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      features: [
        {
          id: 'nearby-live',
          title: 'Nearby LIVE Workers',
          description:
            'See who is available today within about 10 km — mistris, plumbers, electricians, and more.',
          tag: 'Search',
        },
        {
          id: 'same-day',
          title: 'Same-day hire',
          description:
            'A User pays a small Booking Fee, then gets enough identity to coordinate the job that day.',
          tag: 'Booking',
        },
        {
          id: 'id-verified',
          title: 'ID Verified at the chowk',
          description:
            'Field Agents register Workers at labour stands so the first hire starts from a known face, not a random listing.',
          tag: 'Trust',
        },
        {
          id: 'missed-call',
          title: 'Go LIVE with a missed call',
          description:
            'A Worker dials the KaamWala number and hangs up. No data pack required on a basic phone.',
          tag: 'Availability',
        },
      ],
      posts: [
        {
          id: 'hire-plumber',
          title: 'How to hire a plumber in Noida before noon',
          summary:
            'Pick the Skill, filter LIVE Workers nearby, pay the Booking Fee, and call — the whole loop on a weekday morning.',
          date: '2026-09-08',
        },
        {
          id: 'booking-fee',
          title: 'What the Booking Fee actually buys',
          summary:
            'It is not a cut of the daily wage. It is the platform fee that unlocks the Worker so you can coordinate off-app.',
          date: '2026-09-02',
        },
        {
          id: 'morning-live',
          title: 'The missed-call morning ritual',
          summary:
            'Workers mark themselves LIVE at dawn. Midnight resets the board so yesterday’s availability never lingers.',
          date: '2026-08-26',
        },
      ],
    },
  };
}
