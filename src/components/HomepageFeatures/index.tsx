import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

export default function HomepageFeatures(): ReactNode
{
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col')}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Work in Progress</Heading>
              <p>Hi, sorry I have no idea how web dev works, but you're probably here for the Warudo Exporter so..</p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/warudo-exporter">
                  Check it out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
