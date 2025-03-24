import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Traverse Anything',
    Svg: require('@site/static/img/undraw_space-exploration_dhu.svg').default,
    description: (
      <>
        Access deeply nested data without fear. DTO lets you chain through arrays with fluent,
        safe, and intuitive syntax, no more undefined key errors or bulky checks.
      </>
    ),
  },
  {
    title: 'Transform Everything',
    Svg: require('@site/static/img/undraw_to-the-moon_w1wa.svg').default,
    description: (
      <>
        From string slugs to file sizes, currencies, dates, and even HTML elements. DTO comes
        packed with built-in transformers that handle your data elegantly, all in one place.
      </>
    ),
  },
  {
    title: 'Safe. Smart. Optional Immutability.',
    Svg: require('@site/static/img/undraw_location-search_nesh.svg').default,
    description: (
      <>
        Protect original data with optional immutability, enjoy automatic fallbacks, and
        leverage multibyte-safe polyfills for full compatibility across PHP environments.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
